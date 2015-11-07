// Compiled by ClojureScript 0.0-2511
goog.provide('chess_engine.board');
goog.require('cljs.core');
chess_engine.board.valid_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["B",null,"K",null,"N",null,"Q",null,"R",null], null), null);
chess_engine.board.valid_cols = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["a",null,"b",null,"c",null,"d",null,"e",null,"f",null,"g",null,"h",null], null), null);
chess_engine.board.valid_rows = cljs.core.set.call(null,cljs.core.range.call(null,(1),(9)));
chess_engine.board.column_index = (function column_index(letter){

return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 8, ["a",(1),"b",(2),"c",(3),"d",(4),"e",(5),"f",(6),"g",(7),"h",(8)], null),letter);
});
chess_engine.board.index_column = (function index_column(index){

return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 8, [(1),"a",(2),"b",(3),"c",(4),"d",(5),"e",(6),"f",(7),"g",(8),"h"], null),index);
});
chess_engine.board.make_keyword = (function make_keyword(col,row){
if((row == null)){
return null;
} else {
if((col == null)){
return null;
} else {
return cljs.core.keyword.call(null,[cljs.core.str(col),cljs.core.str(row)].join(''));
}
}
});
chess_engine.board.make_pos = chess_engine.board.make_keyword;
chess_engine.board.make_piece = chess_engine.board.make_keyword;
chess_engine.board.first_keyword_char = (function first_keyword_char(piece){
return cljs.core.first.call(null,cljs.core.name.call(null,piece));
});
chess_engine.board.get_col = chess_engine.board.first_keyword_char;
chess_engine.board.get_side = chess_engine.board.first_keyword_char;
chess_engine.board.is_valid_col_QMARK_ = (function is_valid_col_QMARK_(col){
return cljs.core.contains_QMARK_.call(null,chess_engine.board.valid_cols,col);
});
chess_engine.board.is_valid_row = (function is_valid_row(row){
return cljs.core.contains_QMARK_.call(null,chess_engine.board.valid_rows,row);
});
chess_engine.board.second_keyword_char = (function second_keyword_char(pos){
if((pos == null)){
return null;
} else {
return cljs.core.second.call(null,cljs.core.name.call(null,pos));
}
});
chess_engine.board.toggle_piece_side = (function toggle_piece_side(piece){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,piece)),"w")){
return chess_engine.board.make_piece.call(null,"b",cljs.core.second.call(null,cljs.core.name.call(null,piece)));
} else {
return chess_engine.board.make_piece.call(null,"w",cljs.core.second.call(null,cljs.core.name.call(null,piece)));
}
});
chess_engine.board.get_row = chess_engine.board.second_keyword_char;
chess_engine.board.get_piece = chess_engine.board.second_keyword_char;
chess_engine.board.inc_row = (function inc_row(pos){
return chess_engine.board.make_pos.call(null,chess_engine.board.valid_cols.call(null,chess_engine.board.get_col.call(null,pos)),chess_engine.board.valid_rows.call(null,(parseInt([cljs.core.str(chess_engine.board.get_row.call(null,pos))].join('')) + (1))));
});
chess_engine.board.dec_row = (function dec_row(pos){
return chess_engine.board.make_pos.call(null,chess_engine.board.valid_cols.call(null,chess_engine.board.get_col.call(null,pos)),chess_engine.board.valid_rows.call(null,(parseInt([cljs.core.str(chess_engine.board.get_row.call(null,pos))].join('')) - (1))));
});
chess_engine.board.inc_col = (function inc_col(pos){
return chess_engine.board.make_pos.call(null,chess_engine.board.valid_cols.call(null,chess_engine.board.index_column.call(null,(chess_engine.board.column_index.call(null,chess_engine.board.get_col.call(null,pos)) + (1)))),chess_engine.board.valid_rows.call(null,parseInt([cljs.core.str(chess_engine.board.get_row.call(null,pos))].join(''))));
});
chess_engine.board.dec_col = (function dec_col(pos){
return chess_engine.board.make_pos.call(null,chess_engine.board.valid_cols.call(null,chess_engine.board.index_column.call(null,(chess_engine.board.column_index.call(null,chess_engine.board.get_col.call(null,pos)) - (1)))),chess_engine.board.valid_rows.call(null,parseInt([cljs.core.str(chess_engine.board.get_row.call(null,pos))].join(''))));
});
chess_engine.board.get_piece_on_pos = (function get_piece_on_pos(pos,board){

var col = chess_engine.board.column_index.call(null,chess_engine.board.get_col.call(null,pos));
var row = parseInt([cljs.core.str(chess_engine.board.get_row.call(null,pos))].join(''));
return cljs.core.get.call(null,cljs.core.get.call(null,board,((8) - row)),(col - (1)),new cljs.core.Keyword(null,"ee","ee",643317400));
});
chess_engine.board.is_free_QMARK_ = (function is_free_QMARK_(app_state,pos){
return cljs.core._EQ_.call(null,chess_engine.board.get_piece_on_pos.call(null,pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state))),new cljs.core.Keyword(null,"ee","ee",643317400));
});
chess_engine.board.is_enemy_QMARK_ = (function is_enemy_QMARK_(app_state,my_side,pos){
if((pos == null)){
return false;
} else {
return cljs.core._EQ_.call(null,chess_engine.board.get_side.call(null,chess_engine.board.get_piece_on_pos.call(null,pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,app_state)))),((cljs.core._EQ_.call(null,my_side,"w"))?"b":"w"));
}
});

//# sourceMappingURL=board.js.map