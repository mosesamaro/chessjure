(ns chess-engine.search
  (:require [chess-engine.engine :as ce]
            [chess-engine.board :as cb]
            [chess-engine.evaluation :as fit]))

(defn enemy-move
  [app-state]
  (print "In enemy-move"))

(defn select-first-app-state-not-in-check
  "Returns the first app-state that is not in check, if no app-state exists that is not
in check... its checkmate"
  [app-states]
  (print "In select first app-state not in check")
  (loop [app-state (first app-states)
         app-states (rest app-states)]
    (print "Checking an app-state")
    (if (not (nil? app-state))
      (if (ce/is-in-check app-state)
        (recur (first app-states)  (rest app-states))
        app-state)
      nil)))

(defn get-all-moves-for-active-side
  "This function returns all possible legal moves for a given side"
  [app-state]
  (let [turn               (:turn (:app-state))
        piece-pos-pairs    (cb/find-in-board #(= (get-side %) turn) board)
        ;; Here we create partial moves (no end position), these can be used with
        ;; functions that determine what moves are possible.
        partial-moves      (map #(ce/make-move (second %) (first %) nil) black-pieces)

        all-moves      (map #(let [moves (ce/piece-moves app-state %)]
                               {:piece (:piece %)
                                :pos   (:start-pos %)
                                :moves moves})
                            partial-moves)
        ])
  )

(defn watch-for-blacks-turn
  "This is the function responsible for the enemy moving"
  [my-data]
  (add-watch my-data :moved-watch
             (fn [key ref old data]
               (print "Free mode is : " (:free-mode data))
               (if  (=  (:free-mode data) false)
                 (let [app-state      (:app-state data)
                       board          (:board (peek app-state))
                       turn           (:turn (peek app-state))]
                   (when (= turn \b)
                     (let [_              (print "Board " board " turn " turn)
                           black-pieces   (cb/find-all-pieces-of-side  board turn)
                           _              (print "Should have calculated black pieces")
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
                           _              (print "watch: piece-moves" (flatten useable-moves))
                           app-states     (map #(let [new-app-state (ce/move % app-state)]
                                                  new-app-state) (flatten useable-moves))
                           _              (print "After calculating app-states" (remove nil? app-states))
                           evaluations    (sort-by first > (map #(vector (fit/evaluate %) %) (remove nil? app-states)))
                           _              (print "After calculating evaluations")
                           sorted-app-states (map second evaluations)
                           not-in-check  (select-first-app-state-not-in-check sorted-app-states)
                           ]
                       (swap! my-data assoc :app-state not-in-check)
                       (print "Should only fire on black's turn"))))))))
