(ns chess-engine.engine
  (:require [chess-engine.states :as states]
            [chess-engine.board :as cb]))

(enable-console-print!)

;; Introduction
;; ================
;; This chess engine application is intended to determine validity of
;; moves, chess notation parsing and board tracking. It does not currently
;; include a chess AI component


;; Used to lex notation
(defn notation-token [tok]
  "This function takes a token from a chess notation string, and classifies
it as a piece, column, row or takes"
  (cond (contains? cb/valid-pieces tok) {:token tok :type :piece}
        (contains? cb/valid-cols tok) {:token tok :type :col}
        (= \x tok) {:token tok :type :takes}
        (integer? (js/parseInt tok)) {:token tok :type :row}
        :else (str "Error : Couldn't figure out what notation token is " tok)))

(defn lex-notation [notation]
  "This function converts all the parts of a chess notation string into lexems where lexems contain a token and type"
  (map notation-token notation))
 
;;(prn (lex-notation "exd6"))

;; Combines col and row elements that are next to one another
;; such that they become position elements, which are easier to 
;; work with
(defn analyze-notation [notation]
  (let [notation-tokens (lex-notation notation)
        ;; add position and remove col-row if they're part of a position
        tokens (reduce (fn [acc item] 
                            (if (and (= (:type (peek acc)) :col)
                                 (= (:type item) :row))
                          (conj (pop acc) {:type :pos 
                                           :token (cb/make-pos (:token (peek acc)) (:token item))})
                          (conj acc item)
                         )) [] notation-tokens)] tokens))

;;(analyze-notation "Be4xc6")

;;(cb/is-enemy? states/app-state \w :b8)

;; Is the given position free, or is it an enemy
;; Function is used to determine whether a piece
;; can legally move into a given square.
(defn is-free-or-enemy? [app-state my-side pos]
      (if (nil? pos) false
          (or (cb/is-free? app-state pos) 
              (cb/is-enemy? app-state my-side pos))))

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

;; Create the position modification functions
(def up (step cb/inc-row cb/dec-row))
(def down (step cb/dec-row cb/inc-row))
(def left (step cb/dec-col cb/inc-col))
(def right (step cb/inc-col cb/dec-col))

;; Function which moves in a given direction, by repeatedly 
;; executing some function, as long as the squares around it 
;; are empty and on the board. Returns all squares which are
;; empty or contain a piece of the opposite faction
;; (defn path
;;   ([pos app-state step]
;;   (path pos app-state step []))
;;   ([pos app-state step res]
;;   (let [steps (take 7 (rest (iterate step pos)))]
;;     steps)))

;; This function retrieves all possible positions, up to 7
;; for a given step, where a step is a position modification
;; function. It does this by repeatedly applying the step function
;; to position
(defn path [pos step]
 (take 7 (rest (iterate step pos))))

;; Function determines whether a pawn is on a passing pawn row
(defn passing-pawn-row? [side]
"passing-paw-rows are rows you need to be on to perform en-passant according to your side"
(if (= side \w) 5 4))

;; Returns up down left and right functions for a given side. 
(defn get-position-functions [my-side app-state]
      (map #(partial % my-side app-state) [up down left right]))

;; Determines if a pawn can move to a square due to the en-passant rule.
;; returns true if it can and false if it can't
(defn is-en-passant? [app-state my-side pos new-pos]
  (do (print "in is-en-passant " my-side pos new-pos)
  (let [pawn-on-correct-rank (= (js/parseInt (cb/get-row pos)) (passing-pawn-row? my-side))]
    (if (or (not pawn-on-correct-rank) (= new-pos nil))
      false 
      (let [
            [up down left right] (get-position-functions my-side app-state)

            left-or-right (if (and (not (= (-> pos left) nil))
                                   (= (cb/get-col (-> pos left)) 
                                      (cb/get-col new-pos)))
                            left
                            right)

            enemy-side (if (= my-side \w) \b \w)
            enemy-starting-row (if (= my-side \w) \7 \2)

            ;; Ensure that the previous move had a pawn on the 
            ;; square it would be jumping form.
            prev-move-had-pawn-at-home  (= (cb/get-piece-on-pos (cb/make-pos 
                                                                 (cb/get-col (-> pos left-or-right))
                                                                 enemy-starting-row)
                                                                (:board (peek (rest app-state))))
                                           (cb/make-piece enemy-side \p))

            home-pawn-is-now-gone  (= (cb/get-piece-on-pos (cb/make-pos 
                                                            (cb/get-col
                                                             (-> pos left-or-right)) 
                                                            enemy-starting-row) 
                                                           (:board (peek app-state))) 
                                      :ee)

            prev-move-had-empty-adjacent  (= (cb/get-piece-on-pos (cb/make-pos 
                                                                   (cb/get-col (-> pos left-or-right))
                                                                   (cb/get-row pos))
                                                                  (:board (peek (rest app-state))))
                                             :ee)

            adjacent-now-has-enemy-pawn  (= (cb/get-piece-on-pos (cb/make-pos
                                                                  (cb/get-col (-> pos left-or-right))
                                                                  (cb/get-row pos))
                                                                 (:board (peek app-state)))
                                            (cb/make-piece enemy-side \p))]
        (and
         prev-move-had-pawn-at-home
         home-pawn-is-now-gone
         prev-move-had-empty-adjacent
         adjacent-now-has-enemy-pawn))))))

(defn is-castling [app-state side pos new-pos]
)


;; Path processing function for determining whether
;; a piece can move along a given path. Takes an 
;; app-state, side and set of positions. If the piece
;; is free or enemy, you can move there. If you've
;; seen an enemy square, you're blocked and all positions
;; after that square are not added to the final positions
;; list. Returns a list of positions in the positions
;; set that are valid, if any are.
(defn is-free-or-enemy2 [app-state side positions]
      (:pos
      (let [is-free? (partial cb/is-free? app-state)
            is-enemy? (partial cb/is-enemy? app-state side)]
        (reduce (fn [acc curr]
                  (cond 

                   (nil? curr) { :blocked true, :pos (:pos acc) }

                   (:blocked acc) acc

                   (is-free? curr) { :blocked (:blocked acc), :pos (conj (:pos acc) curr) }

                   (is-enemy? curr) { :blocked true, :pos (conj (:pos acc) curr) }

                   :else            { :blocked true, :pos (:pos acc) }))

                { :blocked  false, :pos  [] } positions))))

;; Define legal set of bishop moves
(defn bishop-moves [app-state unit]
  (let [pos (:pos unit)
        piece (:piece unit)
        side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)
;;        is-free-or-enemy? (partial is-free-or-enemy? app-state side)
        ]
    (concat 
     (is-free-or-enemy2 app-state side (path pos (comp up left)))
     (is-free-or-enemy2 app-state side (path pos (comp up right)))
     (is-free-or-enemy2 app-state side (path pos (comp down left)))
     (is-free-or-enemy2 app-state side (path pos (comp down right))))))

;; Define legal set of rook moves
(defn rook-moves [app-state unit]
  (let [pos (:pos unit)
        piece (:piece unit)
        side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)
;;        is-free-or-enemy? (partial is-free-or-enemy? app-state side)
        ]
    (concat 
     (is-free-or-enemy2 app-state side (path pos up))
     (is-free-or-enemy2 app-state side (path pos right))
     (is-free-or-enemy2 app-state side (path pos left))
     (is-free-or-enemy2 app-state side (path pos down)))))

;; Define legal set of queen moves
(defn queen-moves [app-state unit]
  (concat (rook-moves app-state unit)
          (bishop-moves app-state unit)))

(defn knight-moves [app-state unit]
"Not a Bob Seger song, but the allowed moves of a knight
excluding check. This function takes an application state
and a unit"
  (let [pos (:pos unit)
        piece (:piece unit)
        side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)
        is-free-or-enemy2 (partial is-free-or-enemy2 app-state side)
        first-knight-path-elm (fn [dir1 dir2 dir3]
                                (list (first (path pos (comp dir1 dir2 dir3)))))
        ]
    (concat 
     (is-free-or-enemy2 (first-knight-path-elm up up left))
     (is-free-or-enemy2 (first-knight-path-elm up up right))
     (is-free-or-enemy2 (first-knight-path-elm up right right))
     (is-free-or-enemy2 (first-knight-path-elm up left left))
     (is-free-or-enemy2 (first-knight-path-elm down down right))
     (is-free-or-enemy2 (first-knight-path-elm down down left))
     (is-free-or-enemy2 (first-knight-path-elm down right right))
     (is-free-or-enemy2 (first-knight-path-elm down left left)))))

(defn king-moves [app-state unit]
  (let [pos (:pos unit)
        piece (:piece unit)
        side (cb/get-side piece)
        [up down left right] (get-position-functions side app-state)
        is-free-or-enemy2 (partial is-free-or-enemy2 app-state side)]
    (concat
     (is-free-or-enemy2 (list (first (path pos up))))
     (is-free-or-enemy2 (list (first (path pos down))))
     (is-free-or-enemy2 (list (first (path pos left))))
     (is-free-or-enemy2 (list (first (path pos right))))
     (is-free-or-enemy2 (list (first (path pos (comp up right)))))
     (is-free-or-enemy2 (list (first (path pos (comp down right)))))
     (is-free-or-enemy2 (list (first (path pos (comp down left)))))
     (is-free-or-enemy2 (list (first (path pos (comp up left))))))))

;; (king-moves states/king-test-state {:pos :d4 :piece :wK})





        
;; Pawns can move forward 1 or 2 squares if they are on their starting square
;; They can move 1 square forward if nothing is blocking them
;; They can attack diagnolly-forward one square
(defn pawn-moves [app-state unit]
"This function takes a board and a unit (where a unit is a pawn
 or piece and its position) and returns a sequence containing all
 squares the unit can move to"
(let [pos (:pos unit)
      piece (:piece unit)
      side (cb/get-side piece)
      starting-square (= (cb/get-row pos) (if (= side \w) \2 \7))
      [up down left right] (get-position-functions side app-state)
      is-free? (partial cb/is-free? app-state)
      is-enemy? (partial cb/is-enemy? app-state side)
;;      is-en-passant? (partial is-en-passant? app-state side pos)
      foo (print "side is : " side piece)
      partial-is-en-passant? (partial is-en-passant? app-state side pos)
      can-move-diagnal ;;is-enemy-or-en-passant 
       (do 
                         (print "about to can-move-diagnal" app-state side pos)
                         #(or (is-enemy? %) (partial-is-en-passant? %)))
;;                         #(is-enemy? %)
      center-moves (if starting-square
                     (take 2 (take-while is-free? (path pos up)))
                     (take 1 (take-while is-free? (path pos up))))
      left-diag-move (take 1 (take-while can-move-diagnal (path pos (comp up left))))
      right-diag-move (take 1 (take-while can-move-diagnal (path pos (comp up right))))
      ]
  (do
  (concat center-moves left-diag-move right-diag-move))))
      
;; Notation processing function for simple pawn starts
;; We recieved a simple pawn start, like :e4
;; A pawn must have existed one or two columns behind
;; the destination
;; Here we get the desired location for a pawn. We know its simple because
;; of the structure of the command (ex :e4). We're not taking anything. 
;; We get the desired locatoin and backtrack to see if we can get 
(defn process-simple-pawn-start [tokens res app-state]
  (let [
        pos (cb/make-pos (first tokens) (second tokens))
        board (:board (peek app-state))
        turn (:turn (peek app-state))
        [up down left right] (get-position-functions turn app-state)
        one-step-back (-> pos down)
        piece-one-step-back (cb/get-piece-on-pos one-step-back (:board (peek app-state)))
        two-steps-back (-> pos down down)
        ]
    (cond (= (cb/get-piece-on-pos one-step-back board) 
             (cb/make-piece turn \p))
          (assoc res :start-pos one-step-back :end-pos pos)
          (and 
           (= piece-one-step-back :ee)
           (= (cb/get-piece-on-pos two-steps-back board)
              (cb/make-piece turn \p)))
          (assoc res :start-pos two-steps-back :end-pos pos)
          :else nil)))

;; Notation processing function for complex pawn starts
(defn process-complex-pawn-start [tokens res app-state]
      (do 
;;        (print (<< "In complex pawn start tokens: ~{tokens} res ~{res}"))
        (let [
            board (:board (peek app-state))
            turn (:turn (peek app-state))
            [up down left right] (get-position-functions turn app-state)
            col (first tokens)
            [start-col _ end-col end-row] tokens
            end-pos (cb/make-pos end-col end-row)
            ;; Is the start position to the left or right of the end position
            left-or-right (if (> (cb/column-index end-col) (cb/column-index start-col)) left right)
            maybe-start-pos (-> end-pos down left-or-right)
            should-be-my-pawn (cb/get-piece-on-pos maybe-start-pos (:board (peek app-state)))
            is-my-pawn (= should-be-my-pawn (cb/make-piece turn \p))
              
;;            moves into '() (pawn-moves app-state {:pos end-pos
;;            moves (into '() (pawn-moves app-state {:pos end-pos :piece piece}))
            ]
        (do 
;;          (prn (<< "turn ~{turn} col ~{col} pos ~{end-pos} start-col ~{start-col} end-col ~{end-col} ~{end-row} maybe-start-pos ~{maybe-start-pos} should-be-my-pawn ~{should-be-my-pawn} ~{tokens}"))
          (if is-my-pawn (assoc res :end-pos end-pos :start-pos maybe-start-pos) 
              nil)))))

;; Notation processing function for any kind of pawn start
(defn process-pawn-start [tokens res app-state]
  "Processes a chess notation section that relates to the movement of a pawn"
  (do 
    (if (some #(= \x %) tokens)
      (process-complex-pawn-start tokens res app-state)
      (process-simple-pawn-start tokens res app-state))))

;; Function for handling any kind of move, piece or pawn. Uses piece information
;; in unit to figure out what moves are legal.
(defn piece-moves [app-state unit]
  (do (print "In piece moves" unit))
  (let [piece (second (name (:piece unit)))]
    (do (print "piece " piece))
        (cond (= piece \R) (rook-moves app-state unit)
              (= piece \B) (bishop-moves app-state unit)
              (= piece \N) (knight-moves app-state unit)
              (= piece \Q) (queen-moves app-state unit)
              (= piece \p) (pawn-moves app-state unit)
              (= piece \K) (king-moves app-state unit))))
 
;; Function for parsing notation when you're given notation in the form
;; [piece][pos][pos] Ex: Ba2b3
(defn piece-pos-pos [notation tokens res app-state]
  (let [[piece start-pos end-pos] (map #(:token %) tokens)]
    {:start-pos start-pos, :piece piece, :end-pos end-pos}))

;; Function for parsing notation when you're given it in the form 
;; [piece][pos]x[pos]  Ex: Qa2xa3
(defn piece-pos-takes-pos [notation tokens res app-state]
  (let [[piece start-pos takes end-pos] (map #(:token %) (analyze-notation notation))]
    { :start-pos start-pos, :piece piece, :end-pos end-pos}))

;; Function responsible for inferring start positions, used in instances where
;; the start position is not obvious
;; For simplicity, piece-pos processes taking pieces, using the side switch trick to
;; figure out where possible locations for the start piece are. piece-takes-pos is basically
;; just a wrapper for this function
(defn find-piece-candidates [notation tokens res app-state]
      (let [
            [piece-type end-pos] (map #(:token %) tokens)
            piece (cb/make-piece (:turn (peek app-state)) piece-type)
            maybe-start-pos (into [] (piece-moves app-state
                                                   {:piece (cb/toggle-piece-side piece) :pos end-pos}))
            matching-start-pos 
            (into [] (filter #(= (cb/get-piece-on-pos %
                                                    (:board (peek app-state)))
                                 piece) maybe-start-pos))
            ]
          matching-start-pos))

;; Function that parses notation that contains a column or row, 
;; for the start position, but not a complete position
;; Ex: BaxB2
;; This function takes a col or row keyword and returns a 
;; variant that handles columns or rows.
(defn piece-col-or-row-pos [col-or-row-keyword]
  (fn [notation tokens res app-state]
    (let [get-col-or-row (if (= col-or-row-keyword :col) cb/get-col cb/get-row)
          [piece-type start-col-or-row end-pos] (map #(:token %) tokens)
          candidate-positions 
          (find-piece-candidates notation (filter #(not (= (:type %) col-or-row-keyword)) tokens) res app-state)
          candidate-positions-on-col-or-row (filter #(= (get-col-or-row %) start-col-or-row) candidate-positions)]
      (if (= (count candidate-positions-on-col-or-row) 1)
        (assoc res :end-pos end-pos :start-pos (first candidate-positions-on-col-or-row))
        nil))))

;; Here we create the actual functions for handling 
;; notation where we are given a col or row but not
;; the entire position
(def piece-col-pos (piece-col-or-row-pos :col))
(def piece-row-pos (piece-col-or-row-pos :row))

;; Finds candidate start positions, ensures that there's no ambiguity
;; returns nil if the position was ambiguous
(defn piece-pos [notation tokens res app-state]
  (let [[piece-type end-pos] (map #(:token %) tokens)
        candidate-positions (find-piece-candidates notation tokens res app-state)]
    (do 
;;      (print (<< "piece-type ~{piece-type} end-pos ~{end-pos}"))
    (if (not (= (count candidate-positions) 1))
      nil 
      (assoc res :end-pos end-pos :start-pos (first candidate-positions))))))

(defn piece-takes-pos [notation tokens res app-state]
;;  (do (print (<< "piece-takes-pos : notation ~{notation} tokens ~{tokens} res ~{res}"))
      (piece-pos 
       (into '[] (filter #(not (= \x %)) notation)) 
       (into '[] (filter #(not (= (:type %) :takes)) tokens))
       res app-state))

;; If no piece is specified, its a pawn
;; Syntax Variants:
;; pos (ex: e3) - pawn move, should be a pawn on the column specified by pos
;; piece pos (ex: nc3) - Indicates that a knight should be moved to c3
;; piece col pos - Indicates that a piece on the column should be moved to c3
;; piece pos pos - Indicates that a piece on the pos should be moved to the new pos
;; col x pos - pawn capture, pawn on column takes position
;; piece col x pos - piece capture
;; piece pos x pos - piece capture
;; piece x pos
;; O-O indicates castling
;; O-O-O indicates queenside castling

(defn process-piece-start [notation res app-state]
  (let [tokens (analyze-notation notation)
        type-tokens (map #(:type %) tokens)
        piece (:token (first tokens))
        notation-function     
        (cond
         (= type-tokens '(:piece :takes :pos)) piece-takes-pos
         (= type-tokens '(:piece :pos)) piece-pos
         (= type-tokens  '(:piece :pos :pos)) piece-pos-pos
         (= type-tokens '(:piece :pos :takes :pos)) piece-pos-takes-pos
         (= type-tokens '(:piece :col :pos)) piece-col-pos
         (= type-tokens '(:piece :row :pos)) piece-row-pos
         :else nil)
        ]
    (if (not (= notation-function nil))
      (notation-function notation tokens {:piece piece} app-state)
      nil)))

;; Rules
;; If no piece is specified, its a pawn
;; Syntax Variants:
;; pos (ex: e3) - pawn move, should be a pawn on the column specified by pos
;; piece pos (ex: nc3) - Indicates that a knight should be moved to c3
;; piece col pos - Indicates that a piece on the column should be moved to c3
;; piece pos pos - Indicates that a piece on the pos should be moved to the new pos
;; col x pos - pawn capture, pawn on column takes position
;; piece col x pos - piece capture
;; piece pos x pos - piece capture
;; O-O indicates castling
;; O-O-O indicates queenside castling
(defn parse-notation [notation app-state]
  "Parse a notation string into a hash representing a move for easier future processing"
  (cond (= "O-O" notation) :castle
        (= "O-O-O" notation) :castle-queenside
        :else 
        (let [tokens (analyze-notation notation)
              first-tok (first tokens)
              ]
          (do 
            ;;(print "tokens " (str tokens) "first-tok " first-tok)
          (cond (= (:type first-tok) :piece)
                (process-piece-start notation {:start-pos ""
                                                    :piece first-tok
                                                    :end-pos ""} app-state)
                (or (= (:type first-tok) :pos)(= (:type first-tok) :col))
                (do
                  ;;(print (<< (vector (rest (rest tokens))) (apply cb/make-pos (map #(:token %) (take 2 tokens)))))
                  (process-pawn-start ;;tokens
                   notation
                   ;;(apply board/make-pos (map #(:token %) (take 2 tokens)))
                                      {:start-pos "", :piece \p, :end-pos ""}
                                      app-state))
                :else nil)))))


;; (parse-notation "e3" init-app-state) ;; Simple 
;; (parse-notation "exd4" pawn-test-state) ;; Complex pawn start
;; (parse-notation "Bxd2" bishop-state)
;; (parse-notation "Rxf7" rook-state)

;;(process-pawn-start "exd4" nil        {:start-pos "", :piece \p, :end-pos ""} pawn-test-state)

;; Respon
(defn chess-notation-to-move [notation app-state]
  "Takes a string containing chess notation, and converts it into a move"
  (let [move-description (parse-notation notation app-state)]
    ;;(print (<< move-discription))))
    move-description))

;;(chess-notation-to-move "e4" init-app-state)

(defn is-in-check [notation app-state]
  "Takes a notation and an app-state and deciedes whether you're in check"
)

;; Takes a position and a board and returns the board with the given square empty
(defn set-square
  [pos board piece]
  ;; -8 because values are stored so that they're readable if you print out the board
  ;; in the right order. 0 is the back row, 7 is the front row. 8 - row you want transforms
  ;; your row-index into what you want.
  (do (print "In set-square")
  (let [row-index (- 8 (js/parseInt (cb/get-row pos)))  ;; -8 because 
        ;; -1 because values from positions are 1-8 not 0-7
        col-index (- (js/parseInt (cb/column-index (cb/get-col pos))) 1)
        row (do (print "row index in set square is :"  row-index) (nth board row-index))
        new-row (do (print board row col-index row-index) (assoc row col-index piece))
        new-board (do (print "new row should be : "new-row )(assoc board row-index new-row))]
    (do 
      (print "Col index in set-square " col-index)
      new-board))))

;; Function responsible for removing a pawn from the board
;; that was taken via en-passant. Returns a board.
(defn remove-pawn-en-passant [app-state a-move]
  (let [pos (:start-pos a-move)
        new-pos (:end-pos a-move)
        piece (:piece a-move)
        side  (cb/get-side piece)
        ]
    (if (not (= (cb/get-piece piece) \p))
      (:board (peek app-state))
      (do (print "In remove-pawn-en-passant")
      (if (is-en-passant? app-state side pos new-pos)
        (do (print "printing remove pawn " (cb/make-pos (cb/get-col new-pos) (cb/get-row pos)))
            (set-square
             (cb/make-pos (cb/get-col new-pos) (cb/get-row pos))
             (:board (peek app-state))
             :ee))
        (:board (peek app-state)))))))

;; This maintains the :white-king-moved
;; and :black-king-moved flags. Necessary for
;; castling
(defn has-king-moved [app-state a-move]
  (if (= (cb/get-piece (:piece a-move) \k))
    (do (print "its a king") 
    (print "its not a king"))))
  
;; Move, top level interface to the chess engine
;; takes a move in chess notation format, and an app state. 
;; if no app-state is provided, it is assumed that we're
;; dealing with a new game.
(defn move 
  ([a-move]
     (do 
       (move a-move states/init-app-state)))
  ([a-move app-state]
     ;; Actually perform the move.
         (let [legal-moves (set (piece-moves app-state {:pos (:start-pos a-move)
                                                        :piece (:piece a-move) }))
               turn (:turn (peek app-state))
               ]
           (if (not (= turn (cb/get-side (:piece a-move))))
             (print "Wrong turn")
             (do 
               (if (contains? legal-moves (:end-pos a-move))
                 (let
                     [
                      ;; If its an en-passant, remove the pawn being taken
                      en-passant (remove-pawn-en-passant app-state a-move)
                      
                      ;; Empty the square the piece is moving from
                      empty-start-square (do (print "empty start square calc ")
                                             (set-square 
                                              (:start-pos a-move) 
                                              en-passant
                                              :ee))

                      ;; Overwrite the square we're moving to with the new piece
                      moved-piece (do (print "empty start square " empty-start-square)
                                      (set-square 
                                       (:end-pos a-move) 
                                       empty-start-square 
                                       (:piece a-move)))

                      ]
                   (conj app-state {
                                    :board moved-piece,
                                    :white-king-moved false,
                                    :black-king-moved false,
                                    :turn (if (= (:turn (peek app-state)) \w) \b \w)
                                    }))
                 (print "Move not legal" (:end-pos a-move))))))))



(defn notation-move [notation app-state]
  (let [a-move (parse-notation notation app-state)]
    (do 
      (if (= a-move nil)
        (move a-move app-state)))))
