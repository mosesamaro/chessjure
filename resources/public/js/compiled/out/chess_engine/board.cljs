(ns chess-engine.board)

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

;; This section used to define a print function for the board when the engine
;; was in clojure (rather than clojurescript. At some point I'll probably
;; want to extract all this stuff and make it compatible with both, then 
;; I'll probably want the following code, so I'm leaving it here, commented
;; out. I know its considered a bad practice, but its also a fairly easy 
;; way to keep code around that might be useful without digging through a
;; VCS.

;; (def unicode-pieces 
;;   { 
;;    :ee, \u3000
;;    :wK, \u2654
;;    :wQ, \u2655
;;    :wR, \u2656
;;    :wB, \u2657
;;    :wN, \u2658
;;    :wp, \u2659
;;    :bK, \u265A
;;    :bQ, \u265B
;;    :bR, \u265C
;;    :bB, \u265D
;;    :bN, \u265E
;;    :bp, \u265F})

;; (def base [\A \B \C \D \E \F \G \H])

;; The old print board function
;; (defn pb [board]
;;   (let [pretty-board 
;;                      (concat (interleave                                  
;;                       [8 7 6 5 4 3 2 1]
;;                       (map 
;;                        (fn [row] (apply str (map #(unicode-pieces %) row)))
;;                        board)
;;                       (repeat 8 \newline)
;;                                  ) 
;;                              (map #(str \space %) base))]
;;     (print (apply str pretty-board))))


;;(print (apply str box))

;; The slightly newer, but still old print board function
;; (defn pb [board]
;;   (let [n 8
;;         unicode-board (map (fn [row] (map #(unicode-pieces %) row)) board)
;;         top-left-corner     \u250f ;; ┏ symbol
;;         top-right-corner    \u2513 ;; ┓ symbol
;;         top-cross           \u2533 ;; ┳ symbol
;;         horizontal-bar      \u2501 ;; ━ symbol
;;         bottom-cross        \u253b ;; ┻ symbol
;;         bottom-left-corner  \u2517 ;; ┗ symbol
;;         bottom-right-corner \u251b ;; ┛ symbol
;;         vertical-bar        \u2503 ;; ┃ symbol
;;         left-cross          \u2523 ;; ┣ symbol
;;         right-cross         \u252b ;; ┫ symbol
;;         center-cross        \u254b ;; ╋ symbol
;;         top-center (interpose top-cross (repeat n horizontal-bar))
;;         top-row (flatten [\space top-left-corner, top-center, top-right-corner, \newline])
;;         bottom-center (flatten [(interpose bottom-cross (repeat n horizontal-bar))])
;;         bottom-row (flatten [\space bottom-left-corner, bottom-center, bottom-right-corner \newline])
;;         center-rows (map 
;;                      (fn [row num] 
;;                        (flatten 
;;                         [num vertical-bar, 
;;                          (interpose vertical-bar row),
;;                         vertical-bar, \newline]))
;;                      unicode-board [8 7 6 5 4 3 2 1])
;;         center-stuff (flatten 
;;                       [\space left-cross 
;;                        (interpose center-cross (repeat n horizontal-bar))
;;                        right-cross \newline])
;;         finished-center-rows (flatten (interpose center-stuff center-rows))
;;         column-labels (flatten [\space \space (map #(vector \space \space % \space) [\A \B \C \D \E \F \G \H])])
;;         boxified-vector (flatten [top-row finished-center-rows bottom-row column-labels])
;;         ]
;;     (apply str \newline (map #(str %) boxified-vector))))




