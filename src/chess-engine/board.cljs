(ns chess-engine.board)

(enable-console-print!)
;; The board representation, and associated functions

;; The board is represented by a 2D vector of keywords, here is an example
;; board.

;;              [[:br :bn :bb :bq :bk :bb :bn :br]
;;               [:bp :bp :bp :bp :bp :bp :bp :bp]
;;               [:ee :ee :ee :ee :ee :ee :ee :ee]
;;               [:ee :ee :ee :ee :ee :ee :ee :ee]
;;               [:ee :ee :ee :ee :ee :ee :ee :ee]
;;               [:ee :ee :ee :ee :ee :ee :ee :ee]
;;               [:wp :wp :wp :wp :wp :wp :wp :wp]
;;               [:wr :wn :wb :wq :wk :wb :wn :wr]]

;; Basic board manipulation functions are stored here.

;; Piece and position functions are stored here as well
;; Pieces are represented as :[side][type], so :bk is 
;; black king

;; positions are represented by :[col][row], so :e4
;; is e4.

;; Define the set of valid pieces
(def valid-pieces #{\K \Q \N \R \B})

;; Define the set of valid columns
(def valid-cols #{\a \b \c \d \e \f \g \h})
            
;; Define the set of valid rows
(def valid-rows (set (range 1 9)))

;; Function for retriving an column in an integer representation, 
;; needed for doing move calculations, values range from 1-8, so 
;; be careful if using this as an index for the board.
 (defn column-index [letter]
 "Takes a letter representing a column, returns an index"
   (get {\a 1, \b 2, \c 3, \d 4, \e 5, \f 6, \g 7, \h 8} letter))

;; Function for getting a column from an index, needed for converting
;; back from an integer representation. 
 (defn index-column [index]
   "Takes an index, returns a letter representing a column"
  (get {1 "a", 2 "b", 3 "c", 4 "d", 5 "e", 6 "f", 7 "g", 8 "h"} index))

;; Function for creating a keyword
 (defn make-keyword [col row]
   (if (nil? row)
     nil
     (if (nil? col)
       nil
       (keyword (str col row)))))

;; Function for making a position. A position is a keyword consisting
;; of a valid column character followed by a valid row integer. (ex: e3)
 (def make-pos make-keyword)

;; Function for making a piece. A piece is a keyword consisting of a 
;; valid side character #(\w \b) followed by a valid piece character
 (def make-piece make-keyword)

;; (make-pos \e nil)

;; Function for extracting the first character of a keyword.
 (defn first-keyword-char [piece]
       (first (name piece)))

;; Function for getting a column from a position keyword
 (def get-col first-keyword-char)

;; Function for getting a side from a piece keyword
(def get-side first-keyword-char)

;; Function for testing the validity of a given column
(defn is-valid-col? [col]
  (contains? valid-cols col))

;; Function for testing the validity of a given row
 (defn is-valid-row [row]
   (contains? valid-rows row))

;; Function for extracting the second character of a keyword
(defn second-keyword-char [pos]
  (if (nil? pos)
    nil
    (second (name pos))))

;; Function for changing the side of a piece
(defn toggle-piece-side [piece]
  (if (= (first (name piece)) \w)
    (make-piece \b (second (name piece)))
    (make-piece \w (second (name piece)))))

(defn other-side
  [side]
  (if (= side \w) \b \w))

;; Function for extracting the row from a position
(def get-row second-keyword-char)

;; Function for extracting the piece from a piece
(def get-piece second-keyword-char)

;; Function for incrementing the row of a position
 (defn inc-row [pos]
         (make-pos 
          (valid-cols (get-col pos))
          (valid-rows (inc (js/parseInt (str (get-row pos)))))))

;; Functin for decrementing the row of a position
 (defn dec-row[pos]
         (make-pos 
          (valid-cols (get-col pos))
          (valid-rows (dec (js/parseInt (str (get-row pos)))))))

;; Function for incrementing the column of a position
 (defn inc-col [pos]
   (make-pos 
    (valid-cols (index-column (inc (column-index (get-col pos)))))
    (valid-rows (js/parseInt (str (get-row pos))))))

;; Function for decrementing the column of a position
 (defn dec-col [pos]
   (make-pos 
    (valid-cols (index-column (dec (column-index (get-col pos)))))
    (valid-rows (js/parseInt (str (get-row pos))))))

;; Function for retrieving the piece on a board from a given 
;; position
 (defn get-piece-on-pos [pos board]
 "Takes a square name (ex: a3) and returns the piece on it"
  (let [col (column-index (get-col pos))
       row (js/parseInt (str (get-row pos)))]
    (get (get board (- 8 row)) (dec col) :ee)))

;; Function for determining whether a given position is free
 (defn is-free? [app-state pos]
       (= (get-piece-on-pos pos (:board (peek app-state))) :ee))

;; Function that determines whether a position contains an enemy piece/pawn.
(defn is-enemy? [app-state my-side pos]
      (if (nil? pos) false
          (= (get-side (get-piece-on-pos pos (:board (peek app-state)))) 
             (if (= my-side \w) \b \w))))

(defn is-piece-in-pos-set
  [board piece pos-set]
  (print "In piece in pos set, looking for a " piece " in " pos-set)
  (let [pieces-on-positions (into #{} (map #(get-piece-on-pos % board) pos-set))
        _ (print "Pieces on positions : " pieces-on-positions)]
    (contains? pieces-on-positions piece)))

(defn get-pos-from-indexes
  [y x]
  (let [col (index-column (+ x 1))
        row (- 8 y)]
   (make-pos col row)))

(defn find-pos-given-piece
  [piece board]
  (for [[i row] (map-indexed list board)
        [j cell] (map-indexed list row)
        :when (= piece cell)]
    (get-pos-from-indexes i j)))

(print "Find pos given piece : " (find-pos-given-piece :bp
                                                       [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                                                        [:bp :bp :bp :bp :bp :bp :bp :bp]
                                                        [:ee :ee :ee :ee :ee :ee :ee :ee]
                                                        [:ee :ee :ee :ee :ee :ee :ee :ee]
                                                        [:ee :ee :ee :ee :ee :ee :ee :ee]
                                                        [:ee :ee :ee :ee :ee :ee :ee :ee]
                                                        [:wp :wp :wp :wp :wp :wp :wp :wp]
                                                        [:wR :wN :wB :wQ :wK :wB :wN :wR]]))
