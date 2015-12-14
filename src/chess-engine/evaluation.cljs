(ns chess-engine.evaluation
  (:require [chess-engine.engine :as ce]
            [chess-engine.board :as cb]))

(def force-map
  {
   \K 100.0
   \Q 9.0
   \R 5.0
   \B 3.0
   \N 2.5
   \p 1.0})

(defn sum
  [numbers]
  (reduce #(+ % %2) numbers))

(defn force-count
  [app-state]
  (print "In force-count" app-state)
  (let [turn          (:turn (peek app-state))
        _             (print "About to print all-pieces")
        board         (:board (peek app-state))
        _             (print "Board is : " board)
        all-pieces    (cb/find-in-board #(not (= % :ee)) board)
        _ (print "all-pieces" all-pieces)
        black-force (map #(force-map (cb/get-piece (first %)))
                          (filter #(= (cb/get-side (first %)) \b) all-pieces))
        white-force (map #(force-map (cb/get-piece (first %)))
                          (filter #(= (cb/get-side (first %)) \w) all-pieces))
        _ (print white-force black-force (sum white-force))
        force-count (- (sum black-force) (sum white-force))
        _ (print "Force count : " force-count)]
    force-count))

(defn space-count
  [app-state]
  (let [turn (:turn (peek app-state))
        
        ]))

(defn evaluate
  [app-state]
  (print "In evaluate")
  (let [force-count (force-count app-state)]
    force-count))


