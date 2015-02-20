(ns chess-engine.states)


;; States, these were previously primarily used for tests that existed
;; with the project. When the project moved from Clojure to 
;; Clojurescript, the tests did not cross over. I do intend
;; to put the tests back in at some point though =\

;; Init app state is still used in the cljs version. Its the 
;; initial board state.

;; Init app state is used to start the app off, it is the
;; state of the app before any moves have been played.
(def init-app-state '({
          :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                  [:bp :bp :bp :bp :bp :bp :bp :bp]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:wp :wp :wp :wp :wp :wp :wp :wp]
                  [:wR :wN :wB :wQ :wK :wB :wN :wR]],
          :white-king-moved false,
          :black-king-moved false,
          :turn \w
;;          :prev-move nil
          }))

;; The following are test states, which are useful in 
;; testing various facets of the application
(def app-state '(
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :ee :bp :ee :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :bp :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :bp :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \w
                 :prev-move :c5
                 :move nil
                 },
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :bp :bp :ee :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :bp :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \b
                 :prev-move :d5
                 :move nil
                 }
                ))

(def init-tests-state '({
          :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                  [:bp :bp :bp :bp :bp :bp :bp :bp]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:wp :wp :wp :wp :wp :wp :wp :wp]
                  [:wR :wN :wB :wQ :wK :wB :wN :wR]],
          :white-king-moved false,
          :black-king-moved false,
          :turn \w
          :prev-move nil
          }))

(def basic-tests-state '(
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :ee :bp :ee :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :bp :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :bp :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \w
                 :prev-move :c5
                 :move nil
                 },
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :bp :bp :ee :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :bp :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \b
                 :prev-move :d5
                 :move nil
                 }
                ))


(def bishop-state '({
               :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                       [:ee :bp :ee :bp :ee :bp :bp :bp]
                       [:bp :ee :ee :ee :ee :ee :ee :ee]
                       [:ee :ee :bp :wp :ee :ee :ee :ee]
                       [:ee :ee :ee :ee :ee :wB :ee :ee]
                       [:ee :ee :ee :ee :ee :ee :ee :ee]
                       [:wp :wp :wp :ee :wp :wp :wp :wp]
                       [:wR :wN :ee :wQ :wK :wB :wN :wR]],
               :white-king-moved false,
               :black-king-moved false,
               :turn \w
               :prev-move :c5
               :move nil
               }))

(def ambi-knight-state '({
               :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                       [:ee :bp :ee :bp :ee :bp :bp :bp]
                       [:bp :ee :ee :ee :ee :ee :ee :ee]
                       [:ee :ee :bp :wp :ee :ee :ee :ee]
                       [:ee :ee :ee :ee :wN :wB :ee :ee]
                       [:ee :wN :ee :ee :ee :ee :ee :ee]
                       [:wp :wp :wp :ee :wp :wp :wp :wp]
                       [:wR :ee :ee :wQ :wK :wB :ee :wR]],
               :white-king-moved false,
               :black-king-moved false,
               :turn \w
               :prev-move :c5
               :move nil
               }))


(def rook-state '({
               :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                       [:ee :bp :ee :bp :ee :bp :bp :bp]
                       [:bp :ee :ee :ee :ee :ee :ee :ee]
                       [:ee :ee :bp :wp :ee :ee :ee :ee]
                       [:ee :ee :ee :ee :ee :wR :ee :ee]
                       [:ee :ee :ee :ee :ee :ee :ee :ee]
                       [:wp :wp :wp :ee :wp :wp :wp :ee]
                       [:wR :wN :ee :wQ :wK :wB :wN :ee]],
               :white-king-moved false,
               :black-king-moved false,
               :turn \w
               :prev-move :c5
               :move nil
               }))

;; ambiguous 
(def ambi-rook-state '({
               :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                       [:ee :bp :ee :bp :ee :bp :bp :bp]
                       [:bp :ee :ee :ee :ee :ee :ee :ee]
                       [:ee :ee :bp :wp :ee :ee :ee :wR]
                       [:ee :ee :ee :ee :ee :wR :ee :ee]
                       [:ee :ee :ee :ee :ee :ee :ee :ee]
                       [:wp :wp :wp :ee :wp :wp :wp :ee]
                       [:wR :wN :ee :wQ :wK :wB :wN :ee]],
               :white-king-moved false,
               :black-king-moved false,
               :turn \w
               :prev-move :c5
               :move nil
               }))


(def queen-state '({
               :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                       [:ee :bp :ee :bp :ee :bp :bp :bp]
                       [:bp :ee :ee :ee :ee :ee :ee :ee]
                       [:ee :ee :bp :wp :ee :ee :ee :ee]
                       [:ee :ee :ee :ee :ee :wQ :ee :ee]
                       [:ee :ee :ee :ee :ee :ee :ee :ee]
                       [:wp :wp :wp :ee :wp :wp :wp :ee]
                       [:wR :wN :ee :ee :wK :wB :wN :ee]],
               :white-king-moved false,
               :black-king-moved false,
               :turn \w
               :prev-move :c5
               :move nil
               }))



(def app-state-left-en-passant '(
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :ee :bp :bp :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :bp :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \w
                 :prev-move :c5
                 :move nil
                 },
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :bp :bp :bp :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \b
                 :prev-move :d5
                 :move nil
                 }
                ))


(def app-state-right-en-passant '(
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :ee :bp :ee :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :wp :bp :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \w
                 :prev-move :e5
                 :move nil
                 },
                {
                 :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                         [:ee :bp :bp :bp :bp :bp :bp :bp]
                         [:bp :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :wp :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:ee :ee :ee :ee :ee :ee :ee :ee]
                         [:wp :wp :wp :ee :wp :wp :wp :wp]
                         [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                 :white-king-moved false,
                 :black-king-moved false,
                 :turn \b
                 :prev-move :d5
                 :move nil
                 }
                ))

;; test for capturing to the right
(def take-to-right-state '({
          :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                  [:bp :bp :bp :bp :ee :bp :bp :bp]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :bp :ee :ee :ee]
                  [:ee :ee :ee :wp :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:wp :wp :wp :ee :wp :wp :wp :wp]
                  [:wR :wN :wB :wQ :wK :wB :wN :wR]],
          :white-king-moved false,
          :black-king-moved false,
          :turn \w
          :prev-move nil
          }))

;; test for capturing to the right
(def take-to-left-state '({
          :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                  [:bp :bp :ee :bp :bp :bp :bp :bp]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:ee :ee :bp :ee :ee :ee :ee :ee]
                  [:ee :ee :ee :wp :ee :ee :ee :ee]
                  [:ee :ee :ee :ee :ee :ee :ee :ee]
                  [:wp :wp :wp :ee :wp :wp :wp :wp]
                  [:wR :wN :wB :wQ :wK :wB :wN :wR]],
          :white-king-moved false,
          :black-king-moved false,
          :turn \w
          :prev-move nil
          }))

;; State for testing double jumps
(def pawn-test-state
'({
                       :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                               [:bp :bp :bp :ee :bp :bp :bp :bp]
                               [:ee :ee :ee :ee :ee :ee :ee :ee]
                               [:ee :ee :ee :ee :ee :ee :ee :ee]
                               [:ee :ee :ee :bp :ee :ee :ee :ee]
                               [:ee :ee :ee :ee :wp :ee :ee :ee]
                               [:wp :wp :wp :wp :ee :wp :wp :wp]
                               [:wR :wN :wB :wQ :wK :wB :wN :wR]],
                       :white-king-moved false,
                       :black-king-moved false,
                       :turn \w
                       :prev-move :c5
                       :move nil
                       }))

;; State for testing double jumps
(def piece-test-state
'({
                       :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
                               [:bp :bp :bp :ee :bp :bp :bp :bp]
                               [:ee :ee :ee :ee :ee :ee :ee :ee]
                               [:ee :ee :ee :ee :ee :ee :ee :ee]
                               [:ee :ee :ee :bp :ee :ee :ee :ee]
                               [:ee :wp :ee :ee :wp :ee :ee :ee]
                               [:wp :wB :wp :wp :ee :wp :wp :wp]
                               [:wR :wN :ee :wQ :wK :wB :wN :wR]],
                       :white-king-moved false,
                       :black-king-moved false,
                       :turn \w
                       :prev-move :c5
                       :move nil
                       }))

(def king-test-state
  '({
     :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
             [:bp :bp :bp :ee :bp :bp :bp :bp]
             [:ee :ee :ee :ee :ee :ee :ee :ee]
             [:ee :ee :ee :ee :ee :ee :ee :ee]
             [:ee :ee :ee :wK :ee :ee :ee :ee]
             [:ee :wp :ee :ee :ee :ee :ee :ee]
             [:ee :ee :ee :wp :ee :wp :wp :wp]
             [:wR :wN :ee :wQ :ee :wB :wN :wR]],
     :white-king-moved false,
     :black-king-moved false,
     :turn \w
     :prev-move :c5
     :move nil
     }))

(def pawn-takes-piece
  '({
     :board [[:bR :bN :bB :bQ :bK :bB :bN :bR]
             [:bp :bp :ee :ee :bp :bp :bp :bp]
             [:ee :ee :ee :ee :ee :ee :ee :ee]
             [:ee :ee :bp :ee :ee :ee :ee :ee]
             [:ee :ee :ee :wQ :ee :ee :ee :ee]
             [:ee :wp :ee :ee :ee :ee :ee :ee]
             [:ee :ee :ee :ee :ee :wp :wp :wp]
             [:wR :wN :ee :ee :wK :wB :wN :wR]],
     :white-king-moved false,
     :black-king-moved false,
     :turn \b
     :prev-move :c5
     :move nil
     }))


