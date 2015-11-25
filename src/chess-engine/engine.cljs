(ns chess-engine.engine
  (:require [chess-engine.states :as states]
            [chess-engine.board :as cb]))

(enable-console-print!)

;; Introduction
;; ============
;; This chess engine component is intended to determine validity of
;; moves. Its essentially a validation component

(defn step [step-forward step-backward]
  "Takes two functions that modify the current pos. Returns a function
   that applies these function to the position depending on which side
   is moving. The first function is applied if its white's turn, the second
   function is applied if its black's turn"
  (fn [side app-state pos]
  (if (nil? pos)
    nil
    (let [piece (cb/get-piece-on-pos pos (:board (peek app-state)))
          side (if (= side nil) 
                 (cb/get-side piece)
                 side)]
      (if (= side \w)
        (step-forward pos)
        (step-backward pos))))))

;; Create the position modification functions, these each take two functions
;; for what to do when white and black.
(def up (step cb/inc-row cb/dec-row))
(def down (step cb/dec-row cb/inc-row))
(def left (step cb/dec-col cb/inc-col))
(def right (step cb/inc-col cb/dec-col))

;; This function retrieves all possible positions, up to 7
;; for a given step, where a step is a position modification
;; function. It does this by repeatedly applying the step function
;; to position
(defn path [pos step]
 (take 7 (rest (iterate step pos))))

;; Function determines whether a pawn is on a passing pawn row
(defn passing-pawn-row? [side]
"passing-paw-rows are rows you need to be on to perform
 en-passant according to your side"
(if (= side \w) 5 4))

;; Returns up down left and right functions for a given side. 
(defn get-position-functions [my-side app-state]
      (map #(partial % my-side app-state) [up down left right]))

;; Determines if a pawn can move to a square due to the en-passant rule.
;; returns true if it can and false if it can't
(defn is-en-passant? 
  [app-state {:keys [start-pos end-pos piece]} candidate-pos]
  (let [my-side              (cb/get-side piece)
        current-row          (cb/get-row start-pos)
        pawn-on-correct-rank (= (js/parseInt current-row)
                                (passing-pawn-row? my-side))]
    ;; Sanity check, if we're not on the correct rank for en-passant to occur,
    ;; just return false immediately
    (if (or (not pawn-on-correct-rank) (= candidate-pos nil))
      false 
      (let [[up down left right]          (get-position-functions my-side app-state)
            left-or-right                 (if (and (not (= (-> start-pos left) nil))
                                                   (= (cb/get-col (-> start-pos left)) 
                                                      (cb/get-col candidate-pos)))
                                            left
                                            right)
            enemy-side                    (if (= my-side \w) \b \w)
            enemy-starting-row            (if (= my-side \w) \7 \2)
            enemy-pawn                    (cb/make-piece enemy-side \p)
            column-we-are-moving-to       (cb/get-col (-> start-pos left-or-right))
            enemy-home-pos                (cb/make-pos column-we-are-moving-to
                                                       enemy-starting-row)
            adjacent-pos                  (cb/make-pos column-we-are-moving-to
                                                       current-row)
            board                         (:board (peek app-state))
            prev-board                    (:board (peek (rest app-state)))
            ;; To ensure that en-passant is possible, you have to check 4 conditions
            ;; That on the previous move there was a pawn at home, that the home
            ;; pawn is no longer there (confirming that it was the pawn that moved)
            ;; That the previous move had an empty adjacent square, and that there
            ;; is now an enemy pawn on that adjacent square.
            prev-move-had-pawn-at-home    (= (cb/get-piece-on-pos enemy-home-pos
                                                                  prev-board)
                                             enemy-pawn)
            home-pawn-is-now-gone         (= (cb/get-piece-on-pos enemy-home-pos
                                                                  board) 
                                             :ee)
            prev-move-had-empty-adjacent  (= (cb/get-piece-on-pos  adjacent-pos
                                                                  prev-board)
                                            :ee)
            adjacent-now-has-enemy-pawn   (= (cb/get-piece-on-pos adjacent-pos board)
                                            enemy-pawn)]
        (and
         prev-move-had-pawn-at-home
         home-pawn-is-now-gone
         prev-move-had-empty-adjacent
         adjacent-now-has-enemy-pawn)))))

(defn is-castling-valid? 
  "Rules for castling:
  1. King has not moved.
  2. All spaces between the king and the rook are empty. 
  3. The rook is there.
  Other rules, like not moving through check, are handled elsewhere."
  [app-state {:keys [start-pos end-pos piece] :as a-move} candidate-pos] ; move-candidate is a pos
  (print  "In is-castling-valid?" a-move "hmm...")
  (if (= (cb/get-piece piece) \K)
    (let [side                         (cb/get-side piece)
          king-side-castling           (= (cb/get-col candidate-pos) \g)
          king-has-moved               (if (= side \w)
                                         (:white-king-moved (peek app-state))
                                         (:black-king-moved (peek app-state)))
          row                          (if (= side \w) \1 \8)
          board                        (:board (peek app-state))
          castling-columns             (if king-side-castling [\f \g] [\b \c \d])
          _                            (print "Midway through is-castling-valid")
          empty-path                   (every? #(= :ee %)
                                               (map
                                                #(cb/get-piece-on-pos
                                                  (cb/make-pos % row) board)
                                                castling-columns))
          rook-col                     (if king-side-castling \h \a)
          rook-pos                     (cb/make-pos rook-col row)
          rook-on-home-square          (= (cb/get-piece
                                           (cb/get-piece-on-pos rook-pos board))
                                          \R)
          _                            (print "nearly through is-castling-valid" start-pos board)
          ]
      (and (not king-has-moved)
           empty-path
           rook-on-home-square
           (= piece (cb/get-piece-on-pos start-pos board))))
    false))

;; Path processing function for determining whether
;; a piece can move along a given path. Takes an 
;; app-state, side and set of positions. If the piece
;; is free or enemy, you can move there. If you've
;; seen an enemy square, you're blocked and all positions
;; after that square are not added to the final positions
;; list. Returns a list of positions in the positions
;; set that are valid, if any are.
(defn is-free-or-enemy [app-state side positions]
  (:pos
   (let [is-free?  (partial cb/is-free? app-state)
         is-enemy? (partial cb/is-enemy? app-state side)]
     (reduce (fn [acc curr]
               (cond 
                (nil? curr)      { :blocked true, :pos (:pos acc) }
                (:blocked acc)   acc
                (is-free? curr)  { :blocked (:blocked acc), :pos (conj (:pos acc) curr) }
                (is-enemy? curr) { :blocked true, :pos (conj (:pos acc) curr) }
                :else            { :blocked true, :pos (:pos acc) }))
             { :blocked  false, :pos  [] } positions))))

;; Define legal set of bishop moves
(defn bishop-moves 
  [app-state {:keys [start-pos end-pos piece]}]
  (let [side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)]
    (concat 
     (is-free-or-enemy app-state side (path start-pos (comp up left)))
     (is-free-or-enemy app-state side (path start-pos (comp up right)))
     (is-free-or-enemy app-state side (path start-pos (comp down left)))
     (is-free-or-enemy app-state side (path start-pos (comp down right))))))

;; Define legal set of rook moves
(defn rook-moves
  [app-state {:keys [start-pos end-pos piece]}]
  (let [side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)]
    (concat 
     (is-free-or-enemy app-state side (path start-pos up))
     (is-free-or-enemy app-state side (path start-pos right))
     (is-free-or-enemy app-state side (path start-pos left))
     (is-free-or-enemy app-state side (path start-pos down)))))

;; Define legal set of queen moves
(defn queen-moves [app-state unit]
  (concat (rook-moves app-state unit)
          (bishop-moves app-state unit)))

(defn knight-moves [app-state {:keys [start-pos end-pos piece]}]
"Not a Bob Seger song, but the allowed moves of a knight
excluding check. This function takes an application state
and a unit"
  (let [side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)
        is-free-or-enemy (partial is-free-or-enemy app-state side)
        first-knight-path-elm (fn [dir1 dir2 dir3]
                                (list (first (path start-pos (comp dir1 dir2 dir3)))))
        ]
    (concat 
     (is-free-or-enemy (first-knight-path-elm up up left))
     (is-free-or-enemy (first-knight-path-elm up up right))
     (is-free-or-enemy (first-knight-path-elm up right right))
     (is-free-or-enemy (first-knight-path-elm up left left))
     (is-free-or-enemy (first-knight-path-elm down down right))
     (is-free-or-enemy (first-knight-path-elm down down left))
     (is-free-or-enemy (first-knight-path-elm down right right))
     (is-free-or-enemy (first-knight-path-elm down left left)))))

(defn king-moves
  [app-state {:keys [start-pos end-pos piece] :as a-move}]
  (let [side                     (cb/get-side piece)
        castling-positions       (if (= side \w) [:c1 :g1] [:c8 :g8])
        [up down left right]     (get-position-functions side app-state)
        is-free-or-enemy         (partial is-free-or-enemy app-state side)
        is-castling-valid?       (partial is-castling-valid? app-state a-move)
        valid-castling-positions (filter #(is-castling-valid? %) castling-positions)
        (print "Valid castling positions : " valid-castling-positions)]
    (concat
     valid-castling-positions
     (is-free-or-enemy (list (first (path start-pos up))))
     (is-free-or-enemy (list (first (path start-pos down))))
     (is-free-or-enemy (list (first (path start-pos left))))
     (is-free-or-enemy (list (first (path start-pos right))))
     (is-free-or-enemy (list (first (path start-pos (comp up right)))))
     (is-free-or-enemy (list (first (path start-pos (comp down right)))))
     (is-free-or-enemy (list (first (path start-pos (comp down left)))))
     (is-free-or-enemy (list (first (path start-pos (comp up left))))))))

;; Pawns can move forward 1 or 2 squares if they are on their starting square
;; They can move 1 square forward if nothing is blocking them
;; They can attack diagnolly-forward one square
(defn pawn-moves
  "This function takes a board and a unit (where a unit is a pawn
  or piece and its position) and returns a sequence containing all
  squares the unit can move to"
  [app-state {:keys [start-pos end-pos piece] :as a-move}]
  (print "In pawn-moves")
  (let [side                    (cb/get-side piece)
        starting-square         (= (cb/get-row start-pos) (if (= side \w) \2 \7))
        [up down left right]    (get-position-functions side app-state)
        is-free?                (partial cb/is-free? app-state)
        is-enemy?               (partial cb/is-enemy? app-state side)
        partial-is-en-passant?  (partial is-en-passant? app-state a-move)
        can-move-diagnal        #(or (is-enemy? %) (partial-is-en-passant? %))
        _                       (print "Halfway through" start-pos end-pos piece)
        center-moves            (if starting-square
                                  (take 2 (take-while is-free? (path start-pos up)))
                                  (take 1 (take-while is-free? (path start-pos up))))
        left-diag-move          (take 1 (take-while can-move-diagnal
                                                    (path start-pos (comp up left))))
        right-diag-move         (take 1 (take-while can-move-diagnal
                                                    (path start-pos (comp up right))))
        _                       (print "About done" center-moves left-diag-move right-diag-move)]
    (concat center-moves left-diag-move right-diag-move)))
      
;; Function for handling any kind of move, piece or pawn. Uses piece information
;; in unit to figure out what moves are legal.
(defn piece-moves [app-state a-move]
  (print "In piece-moves" app-state a-move)
  (let [piece (cb/get-piece (:piece a-move))]
    (cond (= piece \R) (rook-moves app-state a-move)
          (= piece \B) (bishop-moves app-state a-move)
          (= piece \N) (knight-moves app-state a-move)
          (= piece \Q) (queen-moves app-state a-move)
          (= piece \p) (pawn-moves app-state a-move)
          (= piece \K) (king-moves app-state a-move)
          :else (print "Illegal move" piece))))

(defn is-in-check 
  "Takes a notation and an app-state and deciedes whether you're in check"
  [app-state board side]
  (print "In is-in-check")
  (let [king     (cb/make-piece side \K)
        king-pos (cb/find-pos-given-piece king board)
        ;; For each piece type, I need to pretend that the king is that type,
        ;; and then examine all possible locations I can attack for that
        ;; type of piece.
        ;; If I can't find any such pieces, then I'm not in check.
        moves    (into [] (piece-moves app-state
                                       {:piece (cb/toggle-piece-side king)
                                        :start-pos (first king-pos)
                                        :end-pos nil}))]
    (print "King pos is : " king-pos " side is : " side " king is : " king "Moves is : " moves)
    false))

;; Takes a position and a board and returns the board with the given square
;; containing piece
(defn set-square
  [pos board piece]
  ;; -8 because values are stored so that they're readable if you print out the board
  ;; in the right order. 0 is the back row, 7 is the front row. 8 - row
  ;; transforms your row-index into what you want.
  (let [row-index (- 8 (js/parseInt (cb/get-row pos)))  ;; -8 because 
        ;; -1 because values from positions are 1-8 not 0-7
        col-index (- (js/parseInt (cb/column-index (cb/get-col pos))) 1)
        row       (nth board row-index)
        new-row   (assoc row col-index piece)
        new-board (assoc board row-index new-row)]
    new-board))

(defn move-piece
  "This function handles the usual condition where you want to place a piece on 
a new square and also remove it from its old square. Takes a move and a board, returns
a new board"
  [a-move board]
  (let [start-pos                    (:start-pos a-move)
        end-pos                      (:end-pos   a-move)
        piece                        (:piece     a-move)
        board-with-piece-at-end-pos  (set-square end-pos board piece)
        board-with-prev-square-empty (set-square start-pos
                                                 board-with-piece-at-end-pos :ee)]
    board-with-prev-square-empty))

;; Function responsible for removing a pawn from the board
;; that was taken via en-passant. Returns a board.
(defn remove-pawn-en-passant [app-state a-move]
  (let [pos (:start-pos a-move)
        new-pos (:end-pos a-move)
        piece (:piece a-move)
        side  (cb/get-side piece)]
    (if (not (= (cb/get-piece piece) \p))
      (:board (peek app-state))
      (if (is-en-passant? app-state a-move new-pos)
        (set-square
         (cb/make-pos (cb/get-col new-pos) (cb/get-row pos))
         (:board (peek app-state))
         :ee)
        (:board (peek app-state))))))

;; This maintains the :white-king-moved
;; and :black-king-moved flags. Necessary for
;; castling
(defn has-king-moved [a-move side]
  (and  (= (cb/get-piece (:piece a-move)) \K)
        (= (cb/get-side (:piece a-move)) side)))
      
;; Create a new app-state
(defn make-app-state [a-move new-board app-state is-promotion]
  (print "New move in make-app-state" a-move)
  (if (= new-board nil)
    (print "Move not legal in make-app-state")
    (let [turn          (:turn (peek app-state))
          _ (print "In make-app-state" is-promotion)
          _ (print "rest app-state " (rest app-state))
          _ (print "Turn is : " turn)
          new-app-state
          {:board new-board,
           :white-king-moved (or  (:white-king-moved (peek app-state))
                                  (has-king-moved a-move \w))
           :black-king-moved (or  (:black-king-moved (peek app-state))
                                  (has-king-moved a-move \b)),
           ;; Turn code is somewhat complicated, because promotions are
           ;; modeled as turns (its your turn to pick your new piece)
           :turn (if is-promotion
                   :promotion
                   (if (= turn :promotion)
                     (do (print "About to do the peek thing")
                         (if (= (:turn (peek (rest app-state))) \w) \b \w))
                     (if (= turn \w) \b \w)))
           
           :promotion-pos (:end-pos a-move)}]
      (print "After the let in make-app-state")
      (print "New app-state is " new-app-state)
      (conj app-state new-app-state))))

(defn simple-move
  "Simple move, handles moves were a piece moves into a square. Basically it 
just removes the piece from its original square and places it on the new end 
square. Most moves are like this"
  [app-state {:keys [start-pos end-pos piece] :as a-move}]
  (print "In simple move")
  (let [legal-moves         (set (piece-moves app-state a-move))
        _                   (print "calculated legal moves")
        turn                (:turn (peek app-state))
        board               (:board (peek app-state))
        ;; Note that set-square returns a board
        empty-start-square  (set-square start-pos board :ee)
        moved-piece         (set-square end-pos empty-start-square piece)]
    (print "In simple-move")
    (if (is-in-check app-state moved-piece turn)
      (print "Can't move because of check")
      (make-app-state a-move moved-piece app-state false))))

(defn castling-move
  "A castling move, where both kings and rooks exchange places, and land on 
squares dictated by the rules of chess"
[app-state {:keys [start-pos end-pos piece] :as a-move}]
  (let [board                (:board (peek app-state))
        king-side-castling?  (= (cb/get-col end-pos) \g)
        side                 (:turn (peek app-state))
        row                  (if (= side \w) \1 \8)
        rook-start-col       (if king-side-castling? \h \a)
        rook-end-col         (if king-side-castling? \f \d)
        rook-start-pos       (cb/make-pos rook-start-col row)
        rook-end-pos         (cb/make-pos rook-end-col row)
        king-moved           (move-piece a-move board)
        rook-moved           (move-piece {:start-pos rook-start-pos
                                          :piece     (cb/make-piece side \R)
                                          :end-pos   rook-end-pos}   king-moved)]
    (if (is-in-check app-state rook-moved side)
      (print "Can't move because of check")
      (make-app-state a-move rook-moved app-state false))))

(defn en-passant-move
  "An en-passant move is special in that it takes a piece, even though nothing 
moves into its square"
  [app-state {:keys [start-pos end-pos piece] :as a-move}]
  (let [board               (:board (peek app-state))
        pawn-taken          (remove-pawn-en-passant app-state a-move)
        side                (:turn (peek app-state))
        pawn-moved (move-piece a-move pawn-taken)]
    (if (is-in-check app-state pawn-moved side)
      (print "Can't move because of check")
      (make-app-state a-move pawn-moved app-state false))))

(defn is-promotion?
  "If its a pawn, and its reached the last rank for its side,
then it is due for promotion"
  [app-state {:keys [start-pos end-pos piece]} candidate-move]
  (let [board         (:board (peek app-state))
        piece         (cb/get-piece-on-pos start-pos board)
        is-pawn       (= (cb/get-piece piece) \p)
        side          (cb/get-side piece)
        final-row     (if (=  side \w) \8 \1)
        is-final-row  (= final-row (cb/get-row candidate-move))]
    (print "In is-promotion pos " start-pos " piece " piece " final row? " final-row
           " row from piece " (cb/get-row end-pos) " is final row " is-final-row
           " side " side
           " get-piece-from pos " (cb/get-piece-on-pos start-pos board))
    (and is-final-row is-pawn)))


(defn promotion-move
  "A promotion move involves allowing a player to select a piece for promotion"
  [app-state {:keys [start-pos end-pos piece] :as a-move}]
  (print "Its a promotion")
  (let [board (:board (peek app-state))
        new-board (move-piece a-move board)]
    ;; Set turn to promotion, let the promotion widget take care of the rest
    (print "In promotion-move")
    (make-app-state a-move new-board app-state true)))

(defn move
  ([a-move]
     (move a-move states/init-app-state))
  ([a-move app-state]
   (print "In move" a-move "should have just printed the move")
     (let [turn        (:turn (peek app-state))
           side        (cb/get-side (:piece a-move))
           start-pos   (:start-pos a-move)
           end-pos     (:end-pos   a-move)
           legal-moves (set (piece-moves app-state a-move))
           _ (print "Turn " turn "side " side)
           ]
       (if (not (= turn side))
         (print "Wrong turn")
         ;; Determine what type of move it is
         (cond (is-castling-valid? app-state a-move (:end-pos a-move))
               (do (print "Its a castling move")
                   (castling-move app-state a-move))

               (is-en-passant?  app-state a-move (:end-pos a-move))
               (do (print "Its an en-passant move")
                   (en-passant-move  app-state a-move))

               (is-promotion? app-state a-move (:end-pos a-move))
               (do (print "Its a promotion move")
                   (promotion-move app-state a-move))

               (contains? legal-moves (:end-pos a-move))
               (do (print "Its a simple move")
                   (simple-move app-state a-move))

               :else (print "Move not legal"))))))
