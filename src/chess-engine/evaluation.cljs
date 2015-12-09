(ns chess-engine.evaluation
  (:require [chess-engine.engine :as ce]
            [chess-engine.board :as cb]))

(def force-map
  {
   \K 0.0
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
  (let [turn          (:turn (peek app-state))
        all-pieces    (cb/find-in-board (:board (peek app-state))
                                  #(not (= % :ee)))

        _ (print "all-pieces" all-pieces)
        black-force (map #(force-map (cb/get-piece (first %)))
                          (filter #(= (cb/get-side (first %)) \b) all-pieces))
        white-force (map #(force-map (cb/get-piece (first %)))
                          (filter #(= (cb/get-side (first %)) \w) all-pieces))
        _ (print white-force black-force (sum white-force))
        force-count (- (sum black-force) (sum white-force))
        _ (print "Force count : " force-count)]
    force-count))

(defn evaluate
  [app-state]
  (let [force-count (force-count app-state)]
    force-count))


