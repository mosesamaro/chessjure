(ns chess-engine.notation
    (:require [chess-engine.board :as cb]
              [chess-engine.engine :as ce]))

;; Used to lex notation
(defn notation-token 
  "This function takes a token from a chess notation string, and classifies
it as a piece, column, row or takes"
  [tok]
  (cond (contains? cb/valid-pieces tok) {:token tok :type :piece}
        (contains? cb/valid-cols tok) {:token tok :type :col}
        (= \x tok) {:token tok :type :takes}
        (integer? (js/parseInt tok)) {:token tok :type :row}
        :else (str "Error : Couldn't figure out what notation token is " tok)))

(defn lex-notation 
  "This function converts all the parts of a chess notation string into lexems where lexems contain a token and type"
  [notation]
  (map notation-token notation))

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

;; Function responsible for inferring start positions, used in instances where
;; the start position is not obvious
;; For simplicity, piece-pos processes taking pieces, using the side switch trick to
;; figure out where possible locations for the start piece are. piece-takes-pos is basically
;; just a wrapper for this function
(defn find-piece-candidates [notation tokens res app-state]
      (let [
            [piece-type end-pos] (map #(:token %) tokens)
            piece (cb/make-piece (:turn (peek app-state)) piece-type)
            maybe-start-pos
            (into [] (ce/piece-moves app-state
                                  {:piece (cb/toggle-piece-side piece) :pos end-pos}))
            matching-start-pos 
            (into [] (filter #(= (cb/get-piece-on-pos %
                                                    (:board (peek app-state)))
                                 piece) maybe-start-pos))]
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

;; Finds candidate start positions, ensures that there's no ambiguity
;; returns nil if the position was ambiguous
(defn piece-pos [notation tokens res app-state]
  (let [[piece-type end-pos] (map #(:token %) tokens)
        candidate-positions (find-piece-candidates notation tokens res app-state)]
    (if (not (= (count candidate-positions) 1))
      nil 
      (assoc res :end-pos end-pos :start-pos (first candidate-positions)))))

(defn piece-takes-pos [notation tokens res app-state]
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
         (= type-tokens '(:piece :takes :pos))      piece-takes-pos
         (= type-tokens '(:piece :pos))             piece-pos
         (= type-tokens '(:piece :pos :pos))        piece-pos-pos
         (= type-tokens '(:piece :pos :takes :pos)) piece-pos-takes-pos
         (= type-tokens '(:piece :col :pos))        piece-col-pos
         (= type-tokens '(:piece :row :pos))        piece-row-pos
         :else          nil)]
    (if (not (= notation-function nil))
      (notation-function notation tokens {:piece piece} app-state)
      nil)))

;; Notation processing function for simple pawn starts
;; We recieved a simple pawn start, like :e4
;; A pawn must have existed one or two columns behind
;; the destination
;; Here we get the desired location for a pawn. We know its simple because
;; of the structure of the command (ex :e4). We're not taking anything. 
;; We get the desired locatoin and backtrack to see if we can get 
(defn process-simple-pawn-start [tokens res app-state]
  (let [_ (print "In process simple pawn start")
        pos (cb/make-pos (first tokens) (second tokens))
        board (:board (peek app-state))
        turn (:turn (peek app-state))
        [up down left right] (ce/get-position-functions turn app-state)
        one-step-back (-> pos down)
        piece-one-step-back (cb/get-piece-on-pos one-step-back (:board (peek app-state)))
        two-steps-back (-> pos down down)]
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
  (let [_ (print "In process-complex-pawn-start")
        board (:board (peek app-state))
        turn (:turn (peek app-state))
        [up down left right] (ce/get-position-functions turn app-state)
        col (first tokens)
        [start-col _ end-col end-row] tokens
        end-pos (cb/make-pos end-col end-row)
        ;; Is the start position to the left or right of the end position
        left-or-right (if (> (cb/column-index end-col) (cb/column-index start-col))
                        left right)
        maybe-start-pos (-> end-pos down left-or-right)
        should-be-my-pawn (cb/get-piece-on-pos maybe-start-pos
                                               (:board (peek app-state)))
        is-my-pawn (= should-be-my-pawn (cb/make-piece turn \p))]
    (if is-my-pawn
      (assoc res :end-pos end-pos :start-pos maybe-start-pos) 
      nil)))

;; Notation processing function for any kind of pawn start
(defn process-pawn-start [tokens res app-state]
  "Processes a chess notation section that relates to the movement of a pawn"
  (print "In process-pawn-start" tokens)
  (if (some #(= \x %) tokens)
    (process-complex-pawn-start tokens res app-state)
    (process-simple-pawn-start tokens res app-state)))

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
              first-tok (first tokens)]
          (cond (= (:type first-tok) :piece)
                (process-piece-start notation {:start-pos ""
                                               :piece first-tok
                                               :end-pos ""} app-state)
                (or (= (:type first-tok) :pos) (= (:type first-tok) :col))
                (process-pawn-start 
                 notation
                 {:start-pos "", :piece \p, :end-pos ""}
                 app-state)
                :else nil))))


;; Top level function for processing chess notation
(defn chess-notation-to-move [notation app-state]
  "Takes a string containing chess notation, and converts it into a move"
  (let [move-description (parse-notation notation app-state)
        turn (:turn (peek app-state))]
    (assoc move-description :piece (cb/make-piece turn (:piece move-description)))))
