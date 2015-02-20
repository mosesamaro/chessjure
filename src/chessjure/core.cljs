(ns chessjure.core
  (:require
    [figwheel.client :as fw]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true] 
    [quiescent.dom :as d]
    [chess-engine.states :as states]
    [chess-engine.board :as cb]
    [chess-engine.engine :as ce]
    [clojure.string :as string]
    ))

(enable-console-print!)

;; Here is our data, everything needed by the 
;; chess app is stored here. It is an atom referencing
;; a map containing a list of application states.
;; and the piece that is currently selected
(def my-data (atom {
                    :app-state states/init-app-state,
                    :curr-selected {:piece nil :pos nil}
                    }))

;; Here are our pieces, using unicode characters for pieces
(def unicode-pieces 
  { 
   :ee, \u0020
   :wK, \u2654
   :wQ, \u2655
   :wR, \u2656
   :wB, \u2657
   :wN, \u2658
   :wp, \u2659
   :bK, \u265A
   :bQ, \u265B
   :bR, \u265C
   :bB, \u265D
   :bN, \u265E
   :bp, \u265F})

(defn make-pos-from-view
  [col row]
  (cb/make-keyword (string/lower-case col) row))

(defn convert-view-pos
  [pos]
  (cb/make-keyword (string/lower-case (first pos)) (second pos)))

(defn get-curr-pos
  [my-data]
  (let 
      [cpos (:curr-selected my-data)]
    (if (= (:pos cpos) nil) 
      nil 
      (do (print "CPOS Is : " cpos)
          (cb/make-keyword (string/lower-case (first (name (:pos cpos)))) (second (name (:pos cpos))))))))

(defn get-curr-piece 
  [my-data]
  (:piece (:curr-selected my-data)))

(defn get-board 
  [my-data]
  (do 
    (print "Here's the data in get-board " @my-data)
    (:board (first (:app-state @my-data)))))

(defn get-app-state
  [my-data]
  (:app-state @my-data))

(defn clickfn [row-num col]
  (let 
      [pos (make-pos-from-view col row-num)]
    (do 
      (if (= (get-curr-pos @my-data) nil)
        ;; Here we process what happens when we don't have a position yet
        (let [piece (cb/get-piece-on-pos pos (get-board my-data))]
              (do 
                (print "Pos is : " pos)
                (print "piece is : " piece)
                (print "Board is : " (get-board my-data))
                (print (get-curr-pos @my-data))
                (swap! my-data assoc :curr-selected {:pos pos :piece piece })
                (print " :curr-selected is " (:curr-selected mydata))))
               
        

        ;; Here we process what happens when we do have a position
        (do
          (let 
              [new-app-state (ce/move {:start-pos (get-curr-pos @my-data),
                                                    :piece (:piece (:curr-selected @my-data)),
                                                    :end-pos (make-pos-from-view col row-num)}
                                                   (get-app-state my-data))]
          (do 
            (if (= new-app-state nil)
              (do
                (print "move not legal")
                (swap! my-data assoc :curr-selected {:pos nil :piece nil}))
              (do
                (swap! my-data assoc :app-state new-app-state)
                (swap! my-data assoc :curr-selected {:pos nil :piece nil}))))))))))
;;                (print "Here's the whole damn thing : \n test" @my-data))))))))))


 (q/defcomponent position 
   "Component representing a chess board position"
   [piece row-num col app-state]
   (do 
     (.log js/console "In position " piece row-num col)
   (html
    [:span
     {:class "piece" 
      :on-click #(apply clickfn [row-num col])
      :id (str col row-num)
      }
      ;; :on-click
      (unicode-pieces piece)
     ]
   )))

(defn undo [app-state]
  "Function responsible for performing undo"
  (do (print "In undo" (rest app-state) " app-state " app-state)
  (let [new-app-state (rest app-state)]
    (if (= (count app-state) 1)
      (print "nothing to undo")
      (swap! my-data assoc :app-state new-app-state)))))



;;(rest '( {:foo "bar"} {:baz "qux"}))

(q/defcomponent undo-button
  "Component responsible for undoing moves"
  [app-state]
  (do 
    (print "App state in undo-button " app-state)
    (html
     [:div
      [:button
       {:on-click #(undo app-state)} "undo"]])))

;; Chess positions need to know what they are:
(q/defcomponent board
  [data]
  (html
   [:div
    {:id "chessboard"
     :class "chessboard"}
    (map (fn [row row-num] [:div
                    {:class "chess-row"}
                  (map #(position %1 row-num %2 data) row ["A" "B" "C" "D" "E" "F" "G" "H"])
                  ]) data [8 7 6 5 4 3 2 1])
    ]))

       

(defn render [my-data]
  (do 
    (print "init app-state is " states/init-app-state)
    (print "App state is : " my-data)
    (print "Rendering the board " (:board (first (:app-state my-data))))
    (q/render (board (:board (first (:app-state my-data))))
              (.getElementById js/document "board-area"))
    (q/render (undo-button (:app-state my-data))
              (.getElementById js/document "console"))))


                 
(add-watch my-data ::render
           (fn [_ _ _ data] (render data)))

(defonce *whatever (render @my-data));; initial render
