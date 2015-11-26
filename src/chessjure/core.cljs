(ns chessjure.core
  (:require
    [figwheel.client :as fw]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true] 
    [quiescent.dom :as d]
    [chess-engine.states :as states]
    [chess-engine.board :as cb]
    [chess-engine.engine :as ce]
    [chess-engine.notation :as notation]
    [clojure.string :as string]))

(enable-console-print!)

;; Here is our data, everything needed by the 
;; chess app is stored here. It is an atom referencing
;; a map containing a list of application states.
;; and the piece that is currently selected
(def my-data (atom {:app-state states/init-app-state,
                    :curr-selected {:piece nil :pos nil}}))

(print "Start of core")

;; Here are our pieces, using unicode characters for pieces
(def unicode-pieces 
  {:ee, \u0020
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
      [c-sel (:curr-selected my-data)]
    (if (= (:pos c-sel) nil) 
      nil 
      (cb/make-keyword (string/lower-case (first (name (:pos c-sel)))) (second (name (:pos c-sel)))))))

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

(print "Before board click")


;; Lets finally think through it.

;; When a user selects a square, if the square contains a piece on his side,
;; the square becomes selected

;; If he then selects a square that he can go to (app-state is not null)
;; Then the square becomes dropped. 
(defn board-click [row-num col]
  (print "In board-click row-num col " row-num col)
  (let 
      [current-pos (make-pos-from-view col row-num)
       stored-pos (get-curr-pos @my-data)
       turn (:turn (peek (get-app-state my-data)))
       side-of-selected-piece (cb/get-side (cb/get-piece-on-pos current-pos (get-board my-data)))]
    (if (= side-of-selected-piece turn)
      (swap! my-data assoc :curr-selected {:pos current-pos
                                           :piece (cb/get-piece-on-pos current-pos
                                                                       (get-board my-data))})
      (let 
          [piece (:piece (:curr-selected @my-data))
           new-app-state (ce/move {:start-pos stored-pos,
                                   :piece (:piece (:curr-selected @my-data)),
                                   :end-pos current-pos}
                                  (get-app-state my-data))
           same-side-piece-on-pos (if (= (cb/get-side piece) turn) true false)]
        (if (= new-app-state nil)
          (swap! my-data assoc :curr-selected
                 {:pos current-pos
                  :piece (cb/get-piece-on-pos current-pos (get-board my-data))})
          (swap! my-data assoc :app-state new-app-state :curr-selected
                 {:pos current-pos
                  :piece (cb/get-piece-on-pos current-pos (get-board my-data))}))))))

(print "After board-click")

(q/defcomponent position 
  "Component representing a chess board position"
  [piece row-num col app-state]
  (html
   [:span
    {:class "piece" 
     :on-click #(apply board-click [row-num col])
     :id (str col row-num)}
    ;; :on-click
    (unicode-pieces piece)]))

(defn undo [app-state]
  "Function responsible for performing undo"
  (let [new-app-state (rest app-state)]
    (if (= (count app-state) 1)
      (print "nothing to undo")
      (swap! my-data assoc :app-state new-app-state))))

(q/defcomponent undo-button
  "Component responsible for undoing moves"
  [app-state]
  (do 
    (print "App state in undo-button " app-state)
    (html
     [:div
      [:button
       {:on-click #(undo app-state)} "undo"]])))

(q/defcomponent turn
  "Component responsible for displaying whose turn it is"
  [app-state]
  (html
   [:div (str "Turn is " (get  {"w" "white" "b" "black"} (:turn (first app-state))))]))

(defn say-whether-moved
  [has-moved]
  (if has-moved
    "has moved"
    "has not moved"))

(q/defcomponent king-moved
  "Component responsible for displaying whether or not the king has moved"
  [app-state]
  (html
   [:div (str "White King " (say-whether-moved
                             (:white-king-moved (first app-state)))
              " "
              "Black King " (say-whether-moved
                             (:black-king-moved (first app-state))))]))

(defn promote-piece
  [app-state piece]
  (let [turn (:turn (peek app-state))
        is-promotion (= turn :promotion)
        promotion-pos (:promotion-pos (peek app-state))]
    (if is-promotion
      (let [board (:board (peek app-state))
            new-board (ce/set-square promotion-pos board piece)
            new-app-state (ce/make-app-state {:start-pos promotion-pos
                                              :piece     piece
                                              :end-pos   promotion-pos}
                                             new-board
                                             app-state
                                             false)]
        (swap! my-data assoc :app-state     new-app-state
                             :curr-selected {:pos nil :piece nil})))))

(q/defcomponent make-piece
  [app-state piece]
  (html [:span {:class "piece "
                :on-click #(promote-piece app-state piece)} (unicode-pieces piece)]))

(q/defcomponent promotion-box
  "Component responsible for displaying promotion selection choices"
  [app-state]
  (let [turn (:turn (peek app-state))
        pieces (if (= turn :promotion)
                 (if (= (:turn (peek (rest app-state))) \w) [:wQ :wR :wB :wN] [:bQ :bR :bB :bN])
                 nil)
        piece-elements (map #(make-piece app-state %) pieces)
        _ (print "In promotion" piece-elements)]
    
    (html
     [:div (str "Promotion: " ) piece-elements])))

(q/defcomponent notation-box
  "Component responsible for reading in chess notation"
  [app-state]
    (html
     [:div
      [:input {:id "notation-box" :type "text"} ]
      [:button
       {:on-click #(swap! my-data assoc :app-state 
                          (ce/move (notation/chess-notation-to-move
                                    (aget 
                                     (.getElementById js/document "notation-box") 
                                     "value") app-state)
                                   app-state))} "submit"]]))

;; Chess positions need to know what they are:
(q/defcomponent board
  [data]
  (html
   [:div
    {:id "chessboard"
     :class "chessboard"}
    (map (fn [row row-num] [:div
                    {:class "chess-row"}
                  (map #(position %1 row-num %2 data)
                       row
                       ["A" "B" "C" "D" "E" "F" "G" "H"])
                  ]) data [8 7 6 5 4 3 2 1])]))

(defn render [my-data]
  (do 
    (print "init app-state is " states/init-app-state)
    (print "App state is : " my-data)
    (print "Rendering the board " (:board (first (:app-state my-data))))
    (q/render (board (:board (first (:app-state my-data))))
              (.getElementById js/document "board-area"))
    (q/render (undo-button (:app-state my-data))
              (.getElementById js/document "console"))
    (q/render (notation-box (:app-state my-data))
              (.getElementById js/document "notation"))
    (q/render (turn (:app-state my-data))
              (.getElementById js/document "turn"))
    (q/render (king-moved (:app-state my-data))
              (.getElementById js/document "king-moved"))
    (q/render (promotion-box (:app-state my-data))
              (.getElementById js/document "promotion"))))

(print "About to render")
                 
(add-watch my-data ::render
           (fn [_ _ _ data] (render data)))

(defonce *whatever (render @my-data));; initial render
