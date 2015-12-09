(ns chess-engine.search
  (:require [chess-engine.engine :as ce]
            [chess-engine.board :as cb]
            [chess-engine.evaluation :as fit]))

(defn get-all-pieces
  "Foo"
  [] (print "Stub"))

(defn get-all-possible-moves
  "Bar"
  [app-state]
  (let [] (print "Stub")))

(defn get-scores-for-all-possible-moves
  [] (print "Stub"))


(defn enemy-move
  [app-state]
  (print "In enemy-move"))

(defn watch-for-blacks-turn
  "This is the function responsible for the enemy moving"
  [my-data]
;;  (print "Data is : " data)
  (add-watch my-data :moved-watch
             (fn [key ref old data]
               (let [app-state      (:app-state data)
                     board          (:board (peek app-state))
                     turn           (:turn (peek app-state))]
                 (when (= turn \b)
                   (let [_              (print "Board " board " turn " turn)
                         black-pieces   (cb/find-all-pieces-of-side board turn)
                         _              (print "Should have calculated black pieces")
                         [piece pos]    (first black-pieces)
                         partial-moves  (map #(ce/make-move (second %) (first %) nil) black-pieces)
                         _              (print "Moves is : " partial-moves)
                         all-moves      (map #(let [moves (ce/piece-moves app-state %)]
                                                {:piece (:piece %)
                                                 :pos   (:start-pos %)
                                                 :moves moves})
                                             partial-moves)
                         _              (print "Calculating all moves" all-moves)
                         useable-moves  (flatten (map
                                                  (fn [move]
                                                    (map
                                                     #(ce/make-move (:pos move) (:piece move) %)
                                                     (:moves move))) all-moves))
                         _              (print "piece-moves" all-moves (flatten useable-moves))
                         app-states     (map #(let [new-app-state (ce/move % app-state)]
                                                new-app-state) (flatten useable-moves))
                         evaluations    (sort-by first > (map #(vector (fit/evaluate %) %) app-states))
                         
                         _              (print app-states)
                         _              (print "Evaluations : " evaluations)]
                     (swap! my-data assoc :app-state (second  (first evaluations)))
                     (print "Should only fire on black's turn")))))))

