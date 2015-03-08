// Compiled by ClojureScript 0.0-2511
goog.provide('chessjure.core');
goog.require('cljs.core');
goog.require('chess_engine.engine');
goog.require('sablono.core');
goog.require('chess_engine.board');
goog.require('quiescent');
goog.require('figwheel.client');
goog.require('chess_engine.states');
goog.require('quiescent.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
chessjure.core.my_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),chess_engine.states.init_app_state,new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null], null)], null));
chessjure.core.unicode_pieces = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bN","bN",2032140491),new cljs.core.Keyword(null,"wK","wK",1853343405),new cljs.core.Keyword(null,"bQ","bQ",1336480112),new cljs.core.Keyword(null,"wN","wN",-1555035597),new cljs.core.Keyword(null,"bK","bK",-1569223115),new cljs.core.Keyword(null,"bp","bp",-1849376392),new cljs.core.Keyword(null,"wQ","wQ",-791800168),new cljs.core.Keyword(null,"ee","ee",643317400),new cljs.core.Keyword(null,"wB","wB",1477164057),new cljs.core.Keyword(null,"wR","wR",-1533729703),new cljs.core.Keyword(null,"wp","wp",1938798778),new cljs.core.Keyword(null,"bB","bB",-1254751654),new cljs.core.Keyword(null,"bR","bR",-762355681)],["\u265E","\u2654","\u265B","\u2658","\u265A","\u265F","\u2655"," ","\u2657","\u2656","\u2659","\u265D","\u265C"]);
chessjure.core.make_pos_from_view = (function make_pos_from_view(col,row){
return chess_engine.board.make_keyword.call(null,clojure.string.lower_case.call(null,col),row);
});
chessjure.core.convert_view_pos = (function convert_view_pos(pos){
return chess_engine.board.make_keyword.call(null,clojure.string.lower_case.call(null,cljs.core.first.call(null,pos)),cljs.core.second.call(null,pos));
});
chessjure.core.get_curr_pos = (function get_curr_pos(my_data){
var cpos = new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293).cljs$core$IFn$_invoke$arity$1(my_data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cpos),null)){
return null;
} else {
cljs.core.print.call(null,"CPOS Is : ",cpos);

return chess_engine.board.make_keyword.call(null,clojure.string.lower_case.call(null,cljs.core.first.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cpos)))),cljs.core.second.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cpos))));
}
});
chessjure.core.get_curr_piece = (function get_curr_piece(my_data){
return new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293).cljs$core$IFn$_invoke$arity$1(my_data));
});
chessjure.core.get_board = (function get_board(my_data){
cljs.core.print.call(null,"Here's the data in get-board ",cljs.core.deref.call(null,my_data));

return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_data))));
});
chessjure.core.get_app_state = (function get_app_state(my_data){
return new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_data));
});
chessjure.core.clickfn = (function clickfn(row_num,col){
var pos = chessjure.core.make_pos_from_view.call(null,col,row_num);
var piece = chess_engine.board.get_piece_on_pos.call(null,pos,chessjure.core.get_board.call(null,chessjure.core.my_data));
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,chessjure.core.get_app_state.call(null,chessjure.core.my_data)));
var same_side_piece_on_pos = ((cljs.core._EQ_.call(null,chess_engine.board.get_side.call(null,piece),turn))?true:false);
if(cljs.core._EQ_.call(null,chessjure.core.get_curr_pos.call(null,cljs.core.deref.call(null,chessjure.core.my_data)),null)){
cljs.core.print.call(null,"Pos is : ",pos);

cljs.core.print.call(null,"piece is : ",piece);

cljs.core.print.call(null,"Board is : ",chessjure.core.get_board.call(null,chessjure.core.my_data));

cljs.core.print.call(null,chessjure.core.get_curr_pos.call(null,cljs.core.deref.call(null,chessjure.core.my_data)));

cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece], null));

return cljs.core.print.call(null," :curr-selected is ",new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293).cljs$core$IFn$_invoke$arity$1(chessjure.core.mydata));
} else {
var new_app_state = chess_engine.engine.move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),chessjure.core.get_curr_pos.call(null,cljs.core.deref.call(null,chessjure.core.my_data)),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chessjure.core.my_data))),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),chessjure.core.make_pos_from_view.call(null,col,row_num)], null),chessjure.core.get_app_state.call(null,chessjure.core.my_data));
if(cljs.core._EQ_.call(null,new_app_state,null)){
if(same_side_piece_on_pos){
cljs.core.print.call(null,"Selecting a new current");

return cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece], null));
} else {
cljs.core.print.call(null,"click fn move not legal");

return cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"piece","piece",1396691784),null], null));
}
} else {
cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new_app_state);

return cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"curr-selected","curr-selected",205645293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"piece","piece",1396691784),null], null));
}
}
});
/**
* Component representing a chess board position
*/
chessjure.core.position = quiescent.component.call(null,(function (piece,row_num,col,app_state){
console.log("In position ",piece,row_num,col);

return React.DOM.span({"className": "piece", "onClick": (function (){
return cljs.core.apply.call(null,chessjure.core.clickfn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col], null));
}), "id": [cljs.core.str(col),cljs.core.str(row_num)].join('')},sablono.interpreter.interpret.call(null,chessjure.core.unicode_pieces.call(null,piece)));
}));
chessjure.core.undo = (function undo(app_state){

cljs.core.print.call(null,"In undo",cljs.core.rest.call(null,app_state)," app-state ",app_state);

var new_app_state = cljs.core.rest.call(null,app_state);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,app_state),(1))){
return cljs.core.print.call(null,"nothing to undo");
} else {
return cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new_app_state);
}
});
/**
* Component responsible for undoing moves
*/
chessjure.core.undo_button = quiescent.component.call(null,(function (app_state){
cljs.core.print.call(null,"App state in undo-button ",app_state);

return React.DOM.div(null,React.DOM.button({"onClick": (function (){
return chessjure.core.undo.call(null,app_state);
})},"undo"));
}));
/**
* Component responsible for reading in chess notation
*/
chessjure.core.notation_box = quiescent.component.call(null,(function (app_state){
return React.DOM.div(null,sablono.interpreter.input.call(null,{"id": "notation-box", "type": chessjure.core.text}),React.DOM.button({"onClick": (function (){
cljs.core.print.call(null,"In notation box");

return cljs.core.swap_BANG_.call(null,chessjure.core.my_data,cljs.core.assoc,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),chess_engine.engine.move.call(null,chess_engine.engine.chess_notation_to_move.call(null,(document.getElementById("notation-box")["value"]),app_state),app_state));
})},"submit"));
}));
/**
* 
*/
chessjure.core.board = quiescent.component.call(null,(function (data){
return React.DOM.div({"className": "chessboard", "id": "chessboard"},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (row,row_num){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chess-row"], null),cljs.core.map.call(null,(function (p1__15029_SHARP_,p2__15030_SHARP_){
return chessjure.core.position.call(null,p1__15029_SHARP_,row_num,p2__15030_SHARP_,data);
}),row,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H"], null))], null);
}),data,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(7),(6),(5),(4),(3),(2),(1)], null))));
}));
chessjure.core.render = (function render(my_data){
cljs.core.print.call(null,"init app-state is ",chess_engine.states.init_app_state);

cljs.core.print.call(null,"App state is : ",my_data);

cljs.core.print.call(null,"Rendering the board ",new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(my_data))));

quiescent.render.call(null,chessjure.core.board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(my_data)))),document.getElementById("board-area"));

quiescent.render.call(null,chessjure.core.undo_button.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(my_data)),document.getElementById("console"));

return quiescent.render.call(null,chessjure.core.notation_box.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(my_data)),document.getElementById("notation"));
});
cljs.core.add_watch.call(null,chessjure.core.my_data,new cljs.core.Keyword("chessjure.core","render","chessjure.core/render",-1403393695),(function (_,___$1,___$2,data){
return chessjure.core.render.call(null,data);
}));
if(typeof chessjure.core._STAR_whatever !== 'undefined'){
} else {
chessjure.core._STAR_whatever = chessjure.core.render.call(null,cljs.core.deref.call(null,chessjure.core.my_data));
}

//# sourceMappingURL=core.js.map