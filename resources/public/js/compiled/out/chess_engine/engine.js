// Compiled by ClojureScript 0.0-2511
goog.provide('chess_engine.engine');
goog.require('cljs.core');
goog.require('chess_engine.board');
goog.require('chess_engine.states');
cljs.core.enable_console_print_BANG_.call(null);
/**
* This function takes a token from a chess notation string, and classifies
* it as a piece, column, row or takes
*/
chess_engine.engine.notation_token = (function notation_token(tok){
if(cljs.core.contains_QMARK_.call(null,chess_engine.board.valid_pieces,tok)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"piece","piece",1396691784)], null);
} else {
if(cljs.core.contains_QMARK_.call(null,chess_engine.board.valid_cols,tok)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"col","col",-1959363084)], null);
} else {
if(cljs.core._EQ_.call(null,"x",tok)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"takes","takes",-1342283563)], null);
} else {
if(cljs.core.integer_QMARK_.call(null,parseInt(tok))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"row","row",-570139521)], null);
} else {
return [cljs.core.str("Error : Couldn't figure out what notation token is "),cljs.core.str(tok)].join('');

}
}
}
}
});
/**
* This function converts all the parts of a chess notation string into lexems where lexems contain a token and type
*/
chess_engine.engine.lex_notation = (function lex_notation(notation){
return cljs.core.map.call(null,chess_engine.engine.notation_token,notation);
});
chess_engine.engine.analyze_notation = (function analyze_notation(notation){
var notation_tokens = chess_engine.engine.lex_notation.call(null,notation);
var tokens = cljs.core.reduce.call(null,((function (notation_tokens){
return (function (acc,item){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,acc)),new cljs.core.Keyword(null,"col","col",-1959363084))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"row","row",-570139521)))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,acc),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"token","token",-1211463215),chess_engine.board.make_pos.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,acc)),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(item))], null));
} else {
return cljs.core.conj.call(null,acc,item);
}
});})(notation_tokens))
,cljs.core.PersistentVector.EMPTY,notation_tokens);
return tokens;
});
chess_engine.engine.is_free_or_enemy_QMARK_ = (function is_free_or_enemy_QMARK_(app_state,my_side,pos){
if((pos == null)){
return false;
} else {
return (chess_engine.board.is_free_QMARK_.call(null,app_state,pos)) || (chess_engine.board.is_enemy_QMARK_.call(null,app_state,my_side,pos));
}
});
chess_engine.engine.step = (function step(step_forward,step_backward){

return (function (side,app_state,pos){
if((pos == null)){
return null;
} else {
var piece = chess_engine.board.get_piece_on_pos.call(null,pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)));
var side__$1 = ((cljs.core._EQ_.call(null,side,null))?chess_engine.board.get_side.call(null,piece):side);
if(cljs.core._EQ_.call(null,side__$1,"w")){
return step_forward.call(null,pos);
} else {
return step_backward.call(null,pos);
}
}
});
});
chess_engine.engine.up = chess_engine.engine.step.call(null,chess_engine.board.inc_row,chess_engine.board.dec_row);
chess_engine.engine.down = chess_engine.engine.step.call(null,chess_engine.board.dec_row,chess_engine.board.inc_row);
chess_engine.engine.left = chess_engine.engine.step.call(null,chess_engine.board.dec_col,chess_engine.board.inc_col);
chess_engine.engine.right = chess_engine.engine.step.call(null,chess_engine.board.inc_col,chess_engine.board.dec_col);
chess_engine.engine.path = (function path(pos,step){
return cljs.core.take.call(null,(7),cljs.core.rest.call(null,cljs.core.iterate.call(null,step,pos)));
});
chess_engine.engine.passing_pawn_row_QMARK_ = (function passing_pawn_row_QMARK_(side){

if(cljs.core._EQ_.call(null,side,"w")){
return (5);
} else {
return (4);
}
});
chess_engine.engine.get_position_functions = (function get_position_functions(my_side,app_state){
return cljs.core.map.call(null,(function (p1__14933_SHARP_){
return cljs.core.partial.call(null,p1__14933_SHARP_,my_side,app_state);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess_engine.engine.up,chess_engine.engine.down,chess_engine.engine.left,chess_engine.engine.right], null));
});
chess_engine.engine.is_en_passant_QMARK_ = (function is_en_passant_QMARK_(app_state,my_side,pos,new_pos){
cljs.core.print.call(null,"in is-en-passant ",my_side,pos,new_pos);

var pawn_on_correct_rank = cljs.core._EQ_.call(null,parseInt(chess_engine.board.get_row.call(null,pos)),chess_engine.engine.passing_pawn_row_QMARK_.call(null,my_side));
if((!(pawn_on_correct_rank)) || (cljs.core._EQ_.call(null,new_pos,null))){
return false;
} else {
var vec__14935 = chess_engine.engine.get_position_functions.call(null,my_side,app_state);
var up = cljs.core.nth.call(null,vec__14935,(0),null);
var down = cljs.core.nth.call(null,vec__14935,(1),null);
var left = cljs.core.nth.call(null,vec__14935,(2),null);
var right = cljs.core.nth.call(null,vec__14935,(3),null);
var left_or_right = (((!(cljs.core._EQ_.call(null,left.call(null,pos),null))) && (cljs.core._EQ_.call(null,chess_engine.board.get_col.call(null,left.call(null,pos)),chess_engine.board.get_col.call(null,new_pos))))?left:right);
var enemy_side = ((cljs.core._EQ_.call(null,my_side,"w"))?"b":"w");
var enemy_starting_row = ((cljs.core._EQ_.call(null,my_side,"w"))?"7":"2");
var prev_move_had_pawn_at_home = cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,left_or_right.call(null,pos)),enemy_starting_row),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,cljs.core.rest.call(null,app_state)))),chess_engine.board.make_piece.call(null,enemy_side,"p"));
var home_pawn_is_now_gone = cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,left_or_right.call(null,pos)),enemy_starting_row),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state))),new cljs.core.Keyword(null,"ee","ee",643317400));
var prev_move_had_empty_adjacent = cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,left_or_right.call(null,pos)),chess_engine.board.get_row.call(null,pos)),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,cljs.core.rest.call(null,app_state)))),new cljs.core.Keyword(null,"ee","ee",643317400));
var adjacent_now_has_enemy_pawn = cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,left_or_right.call(null,pos)),chess_engine.board.get_row.call(null,pos)),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state))),chess_engine.board.make_piece.call(null,enemy_side,"p"));
return (prev_move_had_pawn_at_home) && (home_pawn_is_now_gone) && (prev_move_had_empty_adjacent) && (adjacent_now_has_enemy_pawn);
}
});
chess_engine.engine.is_castling = (function is_castling(app_state,side,pos,new_pos){
return null;
});
chess_engine.engine.is_free_or_enemy2 = (function is_free_or_enemy2(app_state,side,positions){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var is_free_QMARK_ = cljs.core.partial.call(null,chess_engine.board.is_free_QMARK_,app_state);
var is_enemy_QMARK_ = cljs.core.partial.call(null,chess_engine.board.is_enemy_QMARK_,app_state,side);
return cljs.core.reduce.call(null,((function (is_free_QMARK_,is_enemy_QMARK_){
return (function (acc,curr){
if((curr == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocked","blocked",181326681),true,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(acc)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(acc))){
return acc;
} else {
if(cljs.core.truth_(is_free_QMARK_.call(null,curr))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocked","blocked",181326681),new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.conj.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(acc),curr)], null);
} else {
if(cljs.core.truth_(is_enemy_QMARK_.call(null,curr))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocked","blocked",181326681),true,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.conj.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(acc),curr)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocked","blocked",181326681),true,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(acc)], null);

}
}
}
}
});})(is_free_QMARK_,is_enemy_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocked","blocked",181326681),false,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.PersistentVector.EMPTY], null),positions);
})());
});
chess_engine.engine.bishop_moves = (function bishop_moves(app_state,unit){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(unit);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit);
var side = chess_engine.board.get_side.call(null,piece);
var vec__14937 = chess_engine.engine.get_position_functions.call(null,side,app_state);
var up = cljs.core.nth.call(null,vec__14937,(0),null);
var down = cljs.core.nth.call(null,vec__14937,(1),null);
var left = cljs.core.nth.call(null,vec__14937,(2),null);
var right = cljs.core.nth.call(null,vec__14937,(3),null);
return cljs.core.concat.call(null,chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,left))),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,right))),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,down,left))),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,down,right))));
});
chess_engine.engine.rook_moves = (function rook_moves(app_state,unit){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(unit);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit);
var side = chess_engine.board.get_side.call(null,piece);
var vec__14939 = chess_engine.engine.get_position_functions.call(null,side,app_state);
var up = cljs.core.nth.call(null,vec__14939,(0),null);
var down = cljs.core.nth.call(null,vec__14939,(1),null);
var left = cljs.core.nth.call(null,vec__14939,(2),null);
var right = cljs.core.nth.call(null,vec__14939,(3),null);
return cljs.core.concat.call(null,chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,up)),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,right)),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,left)),chess_engine.engine.is_free_or_enemy2.call(null,app_state,side,chess_engine.engine.path.call(null,pos,down)));
});
chess_engine.engine.queen_moves = (function queen_moves(app_state,unit){
return cljs.core.concat.call(null,chess_engine.engine.rook_moves.call(null,app_state,unit),chess_engine.engine.bishop_moves.call(null,app_state,unit));
});
chess_engine.engine.knight_moves = (function knight_moves(app_state,unit){

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(unit);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit);
var side = chess_engine.board.get_side.call(null,piece);
var vec__14941 = chess_engine.engine.get_position_functions.call(null,side,app_state);
var up = cljs.core.nth.call(null,vec__14941,(0),null);
var down = cljs.core.nth.call(null,vec__14941,(1),null);
var left = cljs.core.nth.call(null,vec__14941,(2),null);
var right = cljs.core.nth.call(null,vec__14941,(3),null);
var is_free_or_enemy2 = cljs.core.partial.call(null,chess_engine.engine.is_free_or_enemy2,app_state,side);
var first_knight_path_elm = ((function (pos,piece,side,vec__14941,up,down,left,right,is_free_or_enemy2){
return (function (dir1,dir2,dir3){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,dir1,dir2,dir3))));
});})(pos,piece,side,vec__14941,up,down,left,right,is_free_or_enemy2))
;
return cljs.core.concat.call(null,is_free_or_enemy2.call(null,first_knight_path_elm.call(null,up,up,left)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,up,up,right)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,up,right,right)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,up,left,left)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,down,down,right)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,down,down,left)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,down,right,right)),is_free_or_enemy2.call(null,first_knight_path_elm.call(null,down,left,left)));
});
chess_engine.engine.king_moves = (function king_moves(app_state,unit){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(unit);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit);
var side = chess_engine.board.get_side.call(null,piece);
var vec__14943 = chess_engine.engine.get_position_functions.call(null,side,app_state);
var up = cljs.core.nth.call(null,vec__14943,(0),null);
var down = cljs.core.nth.call(null,vec__14943,(1),null);
var left = cljs.core.nth.call(null,vec__14943,(2),null);
var right = cljs.core.nth.call(null,vec__14943,(3),null);
var is_free_or_enemy2 = cljs.core.partial.call(null,chess_engine.engine.is_free_or_enemy2,app_state,side);
return cljs.core.concat.call(null,is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,up)))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,down)))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,left)))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,right)))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,right))))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,down,right))))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,down,left))))),is_free_or_enemy2.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,left))))));
});
chess_engine.engine.pawn_moves = (function pawn_moves(app_state,unit){

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(unit);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit);
var side = chess_engine.board.get_side.call(null,piece);
var starting_square = cljs.core._EQ_.call(null,chess_engine.board.get_row.call(null,pos),((cljs.core._EQ_.call(null,side,"w"))?"2":"7"));
var vec__14946 = chess_engine.engine.get_position_functions.call(null,side,app_state);
var up = cljs.core.nth.call(null,vec__14946,(0),null);
var down = cljs.core.nth.call(null,vec__14946,(1),null);
var left = cljs.core.nth.call(null,vec__14946,(2),null);
var right = cljs.core.nth.call(null,vec__14946,(3),null);
var is_free_QMARK_ = cljs.core.partial.call(null,chess_engine.board.is_free_QMARK_,app_state);
var is_enemy_QMARK_ = cljs.core.partial.call(null,chess_engine.board.is_enemy_QMARK_,app_state,side);
var partial_is_en_passant_QMARK_ = cljs.core.partial.call(null,chess_engine.engine.is_en_passant_QMARK_,app_state,side,pos);
var can_move_diagnal = (function (){
cljs.core.print.call(null,"about to can-move-diagnal",app_state,side,pos);

return ((function (pos,piece,side,starting_square,vec__14946,up,down,left,right,is_free_QMARK_,is_enemy_QMARK_,partial_is_en_passant_QMARK_){
return (function (p1__14944_SHARP_){
var or__8030__auto__ = is_enemy_QMARK_.call(null,p1__14944_SHARP_);
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return partial_is_en_passant_QMARK_.call(null,p1__14944_SHARP_);
}
});
;})(pos,piece,side,starting_square,vec__14946,up,down,left,right,is_free_QMARK_,is_enemy_QMARK_,partial_is_en_passant_QMARK_))
})()
;
var center_moves = ((starting_square)?cljs.core.take.call(null,(2),cljs.core.take_while.call(null,is_free_QMARK_,chess_engine.engine.path.call(null,pos,up))):cljs.core.take.call(null,(1),cljs.core.take_while.call(null,is_free_QMARK_,chess_engine.engine.path.call(null,pos,up))));
var left_diag_move = cljs.core.take.call(null,(1),cljs.core.take_while.call(null,can_move_diagnal,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,left))));
var right_diag_move = cljs.core.take.call(null,(1),cljs.core.take_while.call(null,can_move_diagnal,chess_engine.engine.path.call(null,pos,cljs.core.comp.call(null,up,right))));
return cljs.core.concat.call(null,center_moves,left_diag_move,right_diag_move);
});
chess_engine.engine.process_simple_pawn_start = (function process_simple_pawn_start(tokens,res,app_state){
var pos = chess_engine.board.make_pos.call(null,cljs.core.first.call(null,tokens),cljs.core.second.call(null,tokens));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
var vec__14948 = chess_engine.engine.get_position_functions.call(null,turn,app_state);
var up = cljs.core.nth.call(null,vec__14948,(0),null);
var down = cljs.core.nth.call(null,vec__14948,(1),null);
var left = cljs.core.nth.call(null,vec__14948,(2),null);
var right = cljs.core.nth.call(null,vec__14948,(3),null);
var one_step_back = down.call(null,pos);
var piece_one_step_back = chess_engine.board.get_piece_on_pos.call(null,one_step_back,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)));
var two_steps_back = down.call(null,down.call(null,pos));
if(cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,one_step_back,board),chess_engine.board.make_piece.call(null,turn,"p"))){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),one_step_back,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),pos);
} else {
if((cljs.core._EQ_.call(null,piece_one_step_back,new cljs.core.Keyword(null,"ee","ee",643317400))) && (cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,two_steps_back,board),chess_engine.board.make_piece.call(null,turn,"p")))){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),two_steps_back,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),pos);
} else {
return null;

}
}
});
chess_engine.engine.process_complex_pawn_start = (function process_complex_pawn_start(tokens,res,app_state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
var vec__14951 = chess_engine.engine.get_position_functions.call(null,turn,app_state);
var up = cljs.core.nth.call(null,vec__14951,(0),null);
var down = cljs.core.nth.call(null,vec__14951,(1),null);
var left = cljs.core.nth.call(null,vec__14951,(2),null);
var right = cljs.core.nth.call(null,vec__14951,(3),null);
var col = cljs.core.first.call(null,tokens);
var vec__14952 = tokens;
var start_col = cljs.core.nth.call(null,vec__14952,(0),null);
var _ = cljs.core.nth.call(null,vec__14952,(1),null);
var end_col = cljs.core.nth.call(null,vec__14952,(2),null);
var end_row = cljs.core.nth.call(null,vec__14952,(3),null);
var end_pos = chess_engine.board.make_pos.call(null,end_col,end_row);
var left_or_right = (((chess_engine.board.column_index.call(null,end_col) > chess_engine.board.column_index.call(null,start_col)))?left:right);
var maybe_start_pos = left_or_right.call(null,down.call(null,end_pos));
var should_be_my_pawn = chess_engine.board.get_piece_on_pos.call(null,maybe_start_pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)));
var is_my_pawn = cljs.core._EQ_.call(null,should_be_my_pawn,chess_engine.board.make_piece.call(null,turn,"p"));
if(is_my_pawn){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),maybe_start_pos);
} else {
return null;
}
});
chess_engine.engine.process_pawn_start = (function process_pawn_start(tokens,res,app_state){

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14953_SHARP_){
return cljs.core._EQ_.call(null,"x",p1__14953_SHARP_);
}),tokens))){
return chess_engine.engine.process_complex_pawn_start.call(null,tokens,res,app_state);
} else {
return chess_engine.engine.process_simple_pawn_start.call(null,tokens,res,app_state);
}
});
chess_engine.engine.piece_moves = (function piece_moves(app_state,unit){
cljs.core.print.call(null,"In piece moves",unit);

var piece = cljs.core.second.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(unit)));
cljs.core.print.call(null,"piece ",piece);

if(cljs.core._EQ_.call(null,piece,"R")){
return chess_engine.engine.rook_moves.call(null,app_state,unit);
} else {
if(cljs.core._EQ_.call(null,piece,"B")){
return chess_engine.engine.bishop_moves.call(null,app_state,unit);
} else {
if(cljs.core._EQ_.call(null,piece,"N")){
return chess_engine.engine.knight_moves.call(null,app_state,unit);
} else {
if(cljs.core._EQ_.call(null,piece,"Q")){
return chess_engine.engine.queen_moves.call(null,app_state,unit);
} else {
if(cljs.core._EQ_.call(null,piece,"p")){
return chess_engine.engine.pawn_moves.call(null,app_state,unit);
} else {
if(cljs.core._EQ_.call(null,piece,"K")){
return chess_engine.engine.king_moves.call(null,app_state,unit);
} else {
return null;
}
}
}
}
}
}
});
chess_engine.engine.piece_pos_pos = (function piece_pos_pos(notation,tokens,res,app_state){
var vec__14956 = cljs.core.map.call(null,(function (p1__14954_SHARP_){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__14954_SHARP_);
}),tokens);
var piece = cljs.core.nth.call(null,vec__14956,(0),null);
var start_pos = cljs.core.nth.call(null,vec__14956,(1),null);
var end_pos = cljs.core.nth.call(null,vec__14956,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),start_pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos], null);
});
chess_engine.engine.piece_pos_takes_pos = (function piece_pos_takes_pos(notation,tokens,res,app_state){
var vec__14959 = cljs.core.map.call(null,(function (p1__14957_SHARP_){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__14957_SHARP_);
}),chess_engine.engine.analyze_notation.call(null,notation));
var piece = cljs.core.nth.call(null,vec__14959,(0),null);
var start_pos = cljs.core.nth.call(null,vec__14959,(1),null);
var takes = cljs.core.nth.call(null,vec__14959,(2),null);
var end_pos = cljs.core.nth.call(null,vec__14959,(3),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),start_pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos], null);
});
chess_engine.engine.find_piece_candidates = (function find_piece_candidates(notation,tokens,res,app_state){
var vec__14963 = cljs.core.map.call(null,(function (p1__14960_SHARP_){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__14960_SHARP_);
}),tokens);
var piece_type = cljs.core.nth.call(null,vec__14963,(0),null);
var end_pos = cljs.core.nth.call(null,vec__14963,(1),null);
var foo = cljs.core.print.call(null,"Piece type : ",piece_type," End pos ",end_pos);
var piece = chess_engine.board.make_piece.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)),piece_type);
var maybe_start_pos = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,chess_engine.engine.piece_moves.call(null,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),chess_engine.board.toggle_piece_side.call(null,piece),new cljs.core.Keyword(null,"pos","pos",-864607220),end_pos], null)));
var matching_start_pos = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (vec__14963,piece_type,end_pos,foo,piece,maybe_start_pos){
return (function (p1__14961_SHARP_){
return cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,p1__14961_SHARP_,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state))),piece);
});})(vec__14963,piece_type,end_pos,foo,piece,maybe_start_pos))
,maybe_start_pos));
return matching_start_pos;
});
chess_engine.engine.piece_col_or_row_pos = (function piece_col_or_row_pos(col_or_row_keyword){
return (function (notation,tokens,res,app_state){
var get_col_or_row = ((cljs.core._EQ_.call(null,col_or_row_keyword,new cljs.core.Keyword(null,"col","col",-1959363084)))?chess_engine.board.get_col:chess_engine.board.get_row);
var vec__14968 = cljs.core.map.call(null,((function (get_col_or_row){
return (function (p1__14964_SHARP_){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__14964_SHARP_);
});})(get_col_or_row))
,tokens);
var piece_type = cljs.core.nth.call(null,vec__14968,(0),null);
var start_col_or_row = cljs.core.nth.call(null,vec__14968,(1),null);
var end_pos = cljs.core.nth.call(null,vec__14968,(2),null);
var candidate_positions = chess_engine.engine.find_piece_candidates.call(null,notation,cljs.core.filter.call(null,((function (get_col_or_row,vec__14968,piece_type,start_col_or_row,end_pos){
return (function (p1__14965_SHARP_){
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14965_SHARP_),col_or_row_keyword));
});})(get_col_or_row,vec__14968,piece_type,start_col_or_row,end_pos))
,tokens),res,app_state);
var candidate_positions_on_col_or_row = cljs.core.filter.call(null,((function (get_col_or_row,vec__14968,piece_type,start_col_or_row,end_pos,candidate_positions){
return (function (p1__14966_SHARP_){
return cljs.core._EQ_.call(null,get_col_or_row.call(null,p1__14966_SHARP_),start_col_or_row);
});})(get_col_or_row,vec__14968,piece_type,start_col_or_row,end_pos,candidate_positions))
,candidate_positions);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,candidate_positions_on_col_or_row),(1))){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),cljs.core.first.call(null,candidate_positions_on_col_or_row));
} else {
return null;
}
});
});
chess_engine.engine.piece_col_pos = chess_engine.engine.piece_col_or_row_pos.call(null,new cljs.core.Keyword(null,"col","col",-1959363084));
chess_engine.engine.piece_row_pos = chess_engine.engine.piece_col_or_row_pos.call(null,new cljs.core.Keyword(null,"row","row",-570139521));
chess_engine.engine.piece_pos = (function piece_pos(notation,tokens,res,app_state){
var vec__14971 = cljs.core.map.call(null,(function (p1__14969_SHARP_){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__14969_SHARP_);
}),tokens);
var piece_type = cljs.core.nth.call(null,vec__14971,(0),null);
var end_pos = cljs.core.nth.call(null,vec__14971,(1),null);
var candidate_positions = chess_engine.engine.find_piece_candidates.call(null,notation,tokens,res,app_state);
if(!(cljs.core._EQ_.call(null,cljs.core.count.call(null,candidate_positions),(1)))){
return null;
} else {
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),cljs.core.first.call(null,candidate_positions));
}
});
chess_engine.engine.piece_takes_pos = (function piece_takes_pos(notation,tokens,res,app_state){
return chess_engine.engine.piece_pos.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__14972_SHARP_){
return !(cljs.core._EQ_.call(null,"x",p1__14972_SHARP_));
}),notation)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__14973_SHARP_){
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14973_SHARP_),new cljs.core.Keyword(null,"takes","takes",-1342283563)));
}),tokens)),res,app_state);
});
chess_engine.engine.process_piece_start = (function process_piece_start(notation,res,app_state){
var tokens = chess_engine.engine.analyze_notation.call(null,notation);
var type_tokens = cljs.core.map.call(null,((function (tokens){
return (function (p1__14974_SHARP_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14974_SHARP_);
});})(tokens))
,tokens);
var piece = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,tokens));
var notation_function = ((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"takes","takes",-1342283563),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_takes_pos:((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_pos:((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_pos_pos:((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"takes","takes",-1342283563),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_pos_takes_pos:((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_col_pos:((cljs.core._EQ_.call(null,type_tokens,cljs.core.list(new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"pos","pos",-864607220))))?chess_engine.engine.piece_row_pos:null
))))));
if(!(cljs.core._EQ_.call(null,notation_function,null))){
return notation_function.call(null,notation,tokens,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece","piece",1396691784),piece], null),app_state);
} else {
return null;
}
});
chess_engine.engine.parse_notation = (function parse_notation(notation,app_state){

if(cljs.core._EQ_.call(null,"O-O",notation)){
return new cljs.core.Keyword(null,"castle","castle",300824063);
} else {
if(cljs.core._EQ_.call(null,"O-O-O",notation)){
return new cljs.core.Keyword(null,"castle-queenside","castle-queenside",251881998);
} else {
var tokens = chess_engine.engine.analyze_notation.call(null,notation);
var first_tok = cljs.core.first.call(null,tokens);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_tok),new cljs.core.Keyword(null,"piece","piece",1396691784))){
return chess_engine.engine.process_piece_start.call(null,notation,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),"",new cljs.core.Keyword(null,"piece","piece",1396691784),first_tok,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),""], null),app_state);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_tok),new cljs.core.Keyword(null,"pos","pos",-864607220))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_tok),new cljs.core.Keyword(null,"col","col",-1959363084)))){
return chess_engine.engine.process_pawn_start.call(null,notation,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),"",new cljs.core.Keyword(null,"piece","piece",1396691784),"p",new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),""], null),app_state);
} else {
return null;

}
}

}
}
});
chess_engine.engine.chess_notation_to_move = (function chess_notation_to_move(notation,app_state){

var move_description = chess_engine.engine.parse_notation.call(null,notation,app_state);
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
return cljs.core.assoc.call(null,move_description,new cljs.core.Keyword(null,"piece","piece",1396691784),chess_engine.board.make_piece.call(null,turn,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(move_description)));
});
chess_engine.engine.is_in_check = (function is_in_check(notation,app_state){
return "Takes a notation and an app-state and deciedes whether you're in check";
});
chess_engine.engine.set_square = (function set_square(pos,board,piece){
cljs.core.print.call(null,"In set-square");

var row_index = ((8) - parseInt(chess_engine.board.get_row.call(null,pos)));
var col_index = (parseInt(chess_engine.board.column_index.call(null,chess_engine.board.get_col.call(null,pos))) - (1));
var row = (function (){
cljs.core.print.call(null,"row index in set square is :",row_index);

return cljs.core.nth.call(null,board,row_index);
})()
;
var new_row = (function (){
cljs.core.print.call(null,board,row,col_index,row_index);

return cljs.core.assoc.call(null,row,col_index,piece);
})()
;
var new_board = (function (){
cljs.core.print.call(null,"new row should be : ",new_row);

return cljs.core.assoc.call(null,board,row_index,new_row);
})()
;
cljs.core.print.call(null,"Col index in set-square ",col_index);

return new_board;
});
chess_engine.engine.remove_pawn_en_passant = (function remove_pawn_en_passant(app_state,a_move){
var pos = new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(a_move);
var new_pos = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(a_move);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(a_move);
var side = chess_engine.board.get_side.call(null,piece);
if(!(cljs.core._EQ_.call(null,chess_engine.board.get_piece.call(null,piece),"p"))){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
} else {
cljs.core.print.call(null,"In remove-pawn-en-passant");

if(chess_engine.engine.is_en_passant_QMARK_.call(null,app_state,side,pos,new_pos)){
cljs.core.print.call(null,"printing remove pawn ",chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,new_pos),chess_engine.board.get_row.call(null,pos)));

return chess_engine.engine.set_square.call(null,chess_engine.board.make_pos.call(null,chess_engine.board.get_col.call(null,new_pos),chess_engine.board.get_row.call(null,pos)),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)),new cljs.core.Keyword(null,"ee","ee",643317400));
} else {
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
}
}
});
chess_engine.engine.has_king_moved = (function has_king_moved(app_state,a_move){
if(cljs.core._EQ_.call(null,chess_engine.board.get_piece.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(a_move),"k"))){
return true;
} else {
return false;
}
});
chess_engine.engine.make_app_state = (function make_app_state(new_board,app_state){
if(cljs.core._EQ_.call(null,new_board,null)){
return cljs.core.print.call(null,"Move not legal in make-app-state");
} else {
return cljs.core.conj.call(null,app_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"white-king-moved","white-king-moved",-1378050283),false,new cljs.core.Keyword(null,"black-king-moved","black-king-moved",-1561041851),false,new cljs.core.Keyword(null,"turn","turn",75759344),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)),"w"))?"b":"w")], null));
}
});
chess_engine.engine.move = (function() {
var move = null;
var move__1 = (function (a_move){
cljs.core.print.call(null,"In Move");

return move.call(null,a_move,chess_engine.states.init_app_state);
});
var move__2 = (function (a_move,app_state){
var legal_moves = cljs.core.set.call(null,chess_engine.engine.piece_moves.call(null,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(a_move),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(a_move)], null)));
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state));
cljs.core.print.call(null,"In Move");

if(!(cljs.core._EQ_.call(null,turn,chess_engine.board.get_side.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(a_move))))){
return cljs.core.print.call(null,"Wrong turn");
} else {
if(cljs.core.contains_QMARK_.call(null,legal_moves,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(a_move))){
var en_passant = chess_engine.engine.remove_pawn_en_passant.call(null,app_state,a_move);
var empty_start_square = (function (){
cljs.core.print.call(null,"empty start square calc ");

return chess_engine.engine.set_square.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(a_move),en_passant,new cljs.core.Keyword(null,"ee","ee",643317400));
})()
;
var moved_piece = (function (){
cljs.core.print.call(null,"empty start square ",empty_start_square);

return chess_engine.engine.set_square.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(a_move),empty_start_square,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(a_move));
})()
;
return chess_engine.engine.make_app_state.call(null,moved_piece,app_state);
} else {
return cljs.core.print.call(null,"Move not legal",new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(a_move));
}
}
});
move = function(a_move,app_state){
switch(arguments.length){
case 1:
return move__1.call(this,a_move);
case 2:
return move__2.call(this,a_move,app_state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
move.cljs$core$IFn$_invoke$arity$1 = move__1;
move.cljs$core$IFn$_invoke$arity$2 = move__2;
return move;
})()
;
chess_engine.engine.notation_move = (function notation_move(notation,app_state){
var a_move = chess_engine.engine.parse_notation.call(null,notation,app_state);
if(cljs.core._EQ_.call(null,a_move,null)){
return chess_engine.engine.move.call(null,a_move,app_state);
} else {
return null;
}
});

//# sourceMappingURL=engine.js.map