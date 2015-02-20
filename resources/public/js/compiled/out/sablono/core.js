// Compiled by ClojureScript 0.0-2511
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__16162__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__16161 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__16161,(0),null);
var body = cljs.core.nthnext.call(null,vec__16161,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__16162 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16162__delegate.call(this,args);};
G__16162.cljs$lang$maxFixedArity = 0;
G__16162.cljs$lang$applyTo = (function (arglist__16163){
var args = cljs.core.seq(arglist__16163);
return G__16162__delegate(args);
});
G__16162.cljs$core$IFn$_invoke$arity$variadic = G__16162__delegate;
return G__16162;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__8786__auto__ = (function iter__16168(s__16169){
return (new cljs.core.LazySeq(null,(function (){
var s__16169__$1 = s__16169;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16169__$1);
if(temp__4126__auto__){
var s__16169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16169__$2)){
var c__8784__auto__ = cljs.core.chunk_first.call(null,s__16169__$2);
var size__8785__auto__ = cljs.core.count.call(null,c__8784__auto__);
var b__16171 = cljs.core.chunk_buffer.call(null,size__8785__auto__);
if((function (){var i__16170 = (0);
while(true){
if((i__16170 < size__8785__auto__)){
var args = cljs.core._nth.call(null,c__8784__auto__,i__16170);
cljs.core.chunk_append.call(null,b__16171,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16172 = (i__16170 + (1));
i__16170 = G__16172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16171),iter__16168.call(null,cljs.core.chunk_rest.call(null,s__16169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16171),null);
}
} else {
var args = cljs.core.first.call(null,s__16169__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__16168.call(null,cljs.core.rest.call(null,s__16169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8786__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__8786__auto__ = (function iter__16177(s__16178){
return (new cljs.core.LazySeq(null,(function (){
var s__16178__$1 = s__16178;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16178__$1);
if(temp__4126__auto__){
var s__16178__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16178__$2)){
var c__8784__auto__ = cljs.core.chunk_first.call(null,s__16178__$2);
var size__8785__auto__ = cljs.core.count.call(null,c__8784__auto__);
var b__16180 = cljs.core.chunk_buffer.call(null,size__8785__auto__);
if((function (){var i__16179 = (0);
while(true){
if((i__16179 < size__8785__auto__)){
var style = cljs.core._nth.call(null,c__8784__auto__,i__16179);
cljs.core.chunk_append.call(null,b__16180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16181 = (i__16179 + (1));
i__16179 = G__16181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16180),iter__16177.call(null,cljs.core.chunk_rest.call(null,s__16178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16180),null);
}
} else {
var style = cljs.core.first.call(null,s__16178__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__16177.call(null,cljs.core.rest.call(null,s__16178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8786__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16182){
var styles = cljs.core.seq(arglist__16182);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16183 = (function() { 
var link_to16183__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16183 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to16183__delegate.call(this,url,content);};
link_to16183.cljs$lang$maxFixedArity = 1;
link_to16183.cljs$lang$applyTo = (function (arglist__16184){
var url = cljs.core.first(arglist__16184);
var content = cljs.core.rest(arglist__16184);
return link_to16183__delegate(url,content);
});
link_to16183.cljs$core$IFn$_invoke$arity$variadic = link_to16183__delegate;
return link_to16183;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16183);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16185 = (function() { 
var mail_to16185__delegate = function (e_mail,p__16186){
var vec__16188 = p__16186;
var content = cljs.core.nth.call(null,vec__16188,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__8030__auto__ = content;
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to16185 = function (e_mail,var_args){
var p__16186 = null;
if (arguments.length > 1) {
  p__16186 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to16185__delegate.call(this,e_mail,p__16186);};
mail_to16185.cljs$lang$maxFixedArity = 1;
mail_to16185.cljs$lang$applyTo = (function (arglist__16189){
var e_mail = cljs.core.first(arglist__16189);
var p__16186 = cljs.core.rest(arglist__16189);
return mail_to16185__delegate(e_mail,p__16186);
});
mail_to16185.cljs$core$IFn$_invoke$arity$variadic = mail_to16185__delegate;
return mail_to16185;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16185);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16190 = (function unordered_list16190(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__8786__auto__ = (function iter__16195(s__16196){
return (new cljs.core.LazySeq(null,(function (){
var s__16196__$1 = s__16196;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16196__$1);
if(temp__4126__auto__){
var s__16196__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16196__$2)){
var c__8784__auto__ = cljs.core.chunk_first.call(null,s__16196__$2);
var size__8785__auto__ = cljs.core.count.call(null,c__8784__auto__);
var b__16198 = cljs.core.chunk_buffer.call(null,size__8785__auto__);
if((function (){var i__16197 = (0);
while(true){
if((i__16197 < size__8785__auto__)){
var x = cljs.core._nth.call(null,c__8784__auto__,i__16197);
cljs.core.chunk_append.call(null,b__16198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16199 = (i__16197 + (1));
i__16197 = G__16199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16198),iter__16195.call(null,cljs.core.chunk_rest.call(null,s__16196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16198),null);
}
} else {
var x = cljs.core.first.call(null,s__16196__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__16195.call(null,cljs.core.rest.call(null,s__16196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8786__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16190);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16200 = (function ordered_list16200(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__8786__auto__ = (function iter__16205(s__16206){
return (new cljs.core.LazySeq(null,(function (){
var s__16206__$1 = s__16206;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16206__$1);
if(temp__4126__auto__){
var s__16206__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16206__$2)){
var c__8784__auto__ = cljs.core.chunk_first.call(null,s__16206__$2);
var size__8785__auto__ = cljs.core.count.call(null,c__8784__auto__);
var b__16208 = cljs.core.chunk_buffer.call(null,size__8785__auto__);
if((function (){var i__16207 = (0);
while(true){
if((i__16207 < size__8785__auto__)){
var x = cljs.core._nth.call(null,c__8784__auto__,i__16207);
cljs.core.chunk_append.call(null,b__16208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16209 = (i__16207 + (1));
i__16207 = G__16209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16208),iter__16205.call(null,cljs.core.chunk_rest.call(null,s__16206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16208),null);
}
} else {
var x = cljs.core.first.call(null,s__16206__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__16205.call(null,cljs.core.rest.call(null,s__16206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8786__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16200);
/**
* Create an image element.
*/
sablono.core.image16210 = (function() {
var image16210 = null;
var image16210__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image16210__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image16210 = function(src,alt){
switch(arguments.length){
case 1:
return image16210__1.call(this,src);
case 2:
return image16210__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16210.cljs$core$IFn$_invoke$arity$1 = image16210__1;
image16210.cljs$core$IFn$_invoke$arity$2 = image16210__2;
return image16210;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16210);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__16211_SHARP_,p2__16212_SHARP_){
return [cljs.core.str(p1__16211_SHARP_),cljs.core.str("["),cljs.core.str(p2__16212_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__16213_SHARP_,p2__16214_SHARP_){
return [cljs.core.str(p1__16213_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16214_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field16215 = (function() {
var color_field16215 = null;
var color_field16215__1 = (function (name__10107__auto__){
return color_field16215.call(null,name__10107__auto__,null);
});
var color_field16215__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10107__auto__,value__10108__auto__);
});
color_field16215 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return color_field16215__1.call(this,name__10107__auto__);
case 2:
return color_field16215__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field16215.cljs$core$IFn$_invoke$arity$1 = color_field16215__1;
color_field16215.cljs$core$IFn$_invoke$arity$2 = color_field16215__2;
return color_field16215;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16215);

/**
* Creates a date input field.
*/
sablono.core.date_field16216 = (function() {
var date_field16216 = null;
var date_field16216__1 = (function (name__10107__auto__){
return date_field16216.call(null,name__10107__auto__,null);
});
var date_field16216__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10107__auto__,value__10108__auto__);
});
date_field16216 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return date_field16216__1.call(this,name__10107__auto__);
case 2:
return date_field16216__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field16216.cljs$core$IFn$_invoke$arity$1 = date_field16216__1;
date_field16216.cljs$core$IFn$_invoke$arity$2 = date_field16216__2;
return date_field16216;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16216);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field16217 = (function() {
var datetime_field16217 = null;
var datetime_field16217__1 = (function (name__10107__auto__){
return datetime_field16217.call(null,name__10107__auto__,null);
});
var datetime_field16217__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10107__auto__,value__10108__auto__);
});
datetime_field16217 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return datetime_field16217__1.call(this,name__10107__auto__);
case 2:
return datetime_field16217__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field16217.cljs$core$IFn$_invoke$arity$1 = datetime_field16217__1;
datetime_field16217.cljs$core$IFn$_invoke$arity$2 = datetime_field16217__2;
return datetime_field16217;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16217);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field16218 = (function() {
var datetime_local_field16218 = null;
var datetime_local_field16218__1 = (function (name__10107__auto__){
return datetime_local_field16218.call(null,name__10107__auto__,null);
});
var datetime_local_field16218__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10107__auto__,value__10108__auto__);
});
datetime_local_field16218 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return datetime_local_field16218__1.call(this,name__10107__auto__);
case 2:
return datetime_local_field16218__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field16218.cljs$core$IFn$_invoke$arity$1 = datetime_local_field16218__1;
datetime_local_field16218.cljs$core$IFn$_invoke$arity$2 = datetime_local_field16218__2;
return datetime_local_field16218;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16218);

/**
* Creates a email input field.
*/
sablono.core.email_field16219 = (function() {
var email_field16219 = null;
var email_field16219__1 = (function (name__10107__auto__){
return email_field16219.call(null,name__10107__auto__,null);
});
var email_field16219__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10107__auto__,value__10108__auto__);
});
email_field16219 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return email_field16219__1.call(this,name__10107__auto__);
case 2:
return email_field16219__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16219.cljs$core$IFn$_invoke$arity$1 = email_field16219__1;
email_field16219.cljs$core$IFn$_invoke$arity$2 = email_field16219__2;
return email_field16219;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16219);

/**
* Creates a file input field.
*/
sablono.core.file_field16220 = (function() {
var file_field16220 = null;
var file_field16220__1 = (function (name__10107__auto__){
return file_field16220.call(null,name__10107__auto__,null);
});
var file_field16220__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10107__auto__,value__10108__auto__);
});
file_field16220 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return file_field16220__1.call(this,name__10107__auto__);
case 2:
return file_field16220__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field16220.cljs$core$IFn$_invoke$arity$1 = file_field16220__1;
file_field16220.cljs$core$IFn$_invoke$arity$2 = file_field16220__2;
return file_field16220;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16220);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16221 = (function() {
var hidden_field16221 = null;
var hidden_field16221__1 = (function (name__10107__auto__){
return hidden_field16221.call(null,name__10107__auto__,null);
});
var hidden_field16221__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10107__auto__,value__10108__auto__);
});
hidden_field16221 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return hidden_field16221__1.call(this,name__10107__auto__);
case 2:
return hidden_field16221__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16221.cljs$core$IFn$_invoke$arity$1 = hidden_field16221__1;
hidden_field16221.cljs$core$IFn$_invoke$arity$2 = hidden_field16221__2;
return hidden_field16221;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16221);

/**
* Creates a month input field.
*/
sablono.core.month_field16222 = (function() {
var month_field16222 = null;
var month_field16222__1 = (function (name__10107__auto__){
return month_field16222.call(null,name__10107__auto__,null);
});
var month_field16222__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10107__auto__,value__10108__auto__);
});
month_field16222 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return month_field16222__1.call(this,name__10107__auto__);
case 2:
return month_field16222__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field16222.cljs$core$IFn$_invoke$arity$1 = month_field16222__1;
month_field16222.cljs$core$IFn$_invoke$arity$2 = month_field16222__2;
return month_field16222;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16222);

/**
* Creates a number input field.
*/
sablono.core.number_field16223 = (function() {
var number_field16223 = null;
var number_field16223__1 = (function (name__10107__auto__){
return number_field16223.call(null,name__10107__auto__,null);
});
var number_field16223__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10107__auto__,value__10108__auto__);
});
number_field16223 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return number_field16223__1.call(this,name__10107__auto__);
case 2:
return number_field16223__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field16223.cljs$core$IFn$_invoke$arity$1 = number_field16223__1;
number_field16223.cljs$core$IFn$_invoke$arity$2 = number_field16223__2;
return number_field16223;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16223);

/**
* Creates a password input field.
*/
sablono.core.password_field16224 = (function() {
var password_field16224 = null;
var password_field16224__1 = (function (name__10107__auto__){
return password_field16224.call(null,name__10107__auto__,null);
});
var password_field16224__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10107__auto__,value__10108__auto__);
});
password_field16224 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return password_field16224__1.call(this,name__10107__auto__);
case 2:
return password_field16224__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16224.cljs$core$IFn$_invoke$arity$1 = password_field16224__1;
password_field16224.cljs$core$IFn$_invoke$arity$2 = password_field16224__2;
return password_field16224;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16224);

/**
* Creates a range input field.
*/
sablono.core.range_field16225 = (function() {
var range_field16225 = null;
var range_field16225__1 = (function (name__10107__auto__){
return range_field16225.call(null,name__10107__auto__,null);
});
var range_field16225__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10107__auto__,value__10108__auto__);
});
range_field16225 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return range_field16225__1.call(this,name__10107__auto__);
case 2:
return range_field16225__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field16225.cljs$core$IFn$_invoke$arity$1 = range_field16225__1;
range_field16225.cljs$core$IFn$_invoke$arity$2 = range_field16225__2;
return range_field16225;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16225);

/**
* Creates a search input field.
*/
sablono.core.search_field16226 = (function() {
var search_field16226 = null;
var search_field16226__1 = (function (name__10107__auto__){
return search_field16226.call(null,name__10107__auto__,null);
});
var search_field16226__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10107__auto__,value__10108__auto__);
});
search_field16226 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return search_field16226__1.call(this,name__10107__auto__);
case 2:
return search_field16226__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field16226.cljs$core$IFn$_invoke$arity$1 = search_field16226__1;
search_field16226.cljs$core$IFn$_invoke$arity$2 = search_field16226__2;
return search_field16226;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16226);

/**
* Creates a tel input field.
*/
sablono.core.tel_field16227 = (function() {
var tel_field16227 = null;
var tel_field16227__1 = (function (name__10107__auto__){
return tel_field16227.call(null,name__10107__auto__,null);
});
var tel_field16227__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10107__auto__,value__10108__auto__);
});
tel_field16227 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return tel_field16227__1.call(this,name__10107__auto__);
case 2:
return tel_field16227__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field16227.cljs$core$IFn$_invoke$arity$1 = tel_field16227__1;
tel_field16227.cljs$core$IFn$_invoke$arity$2 = tel_field16227__2;
return tel_field16227;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16227);

/**
* Creates a text input field.
*/
sablono.core.text_field16228 = (function() {
var text_field16228 = null;
var text_field16228__1 = (function (name__10107__auto__){
return text_field16228.call(null,name__10107__auto__,null);
});
var text_field16228__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10107__auto__,value__10108__auto__);
});
text_field16228 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return text_field16228__1.call(this,name__10107__auto__);
case 2:
return text_field16228__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16228.cljs$core$IFn$_invoke$arity$1 = text_field16228__1;
text_field16228.cljs$core$IFn$_invoke$arity$2 = text_field16228__2;
return text_field16228;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16228);

/**
* Creates a time input field.
*/
sablono.core.time_field16229 = (function() {
var time_field16229 = null;
var time_field16229__1 = (function (name__10107__auto__){
return time_field16229.call(null,name__10107__auto__,null);
});
var time_field16229__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10107__auto__,value__10108__auto__);
});
time_field16229 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return time_field16229__1.call(this,name__10107__auto__);
case 2:
return time_field16229__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field16229.cljs$core$IFn$_invoke$arity$1 = time_field16229__1;
time_field16229.cljs$core$IFn$_invoke$arity$2 = time_field16229__2;
return time_field16229;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16229);

/**
* Creates a url input field.
*/
sablono.core.url_field16230 = (function() {
var url_field16230 = null;
var url_field16230__1 = (function (name__10107__auto__){
return url_field16230.call(null,name__10107__auto__,null);
});
var url_field16230__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10107__auto__,value__10108__auto__);
});
url_field16230 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return url_field16230__1.call(this,name__10107__auto__);
case 2:
return url_field16230__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field16230.cljs$core$IFn$_invoke$arity$1 = url_field16230__1;
url_field16230.cljs$core$IFn$_invoke$arity$2 = url_field16230__2;
return url_field16230;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16230);

/**
* Creates a week input field.
*/
sablono.core.week_field16231 = (function() {
var week_field16231 = null;
var week_field16231__1 = (function (name__10107__auto__){
return week_field16231.call(null,name__10107__auto__,null);
});
var week_field16231__2 = (function (name__10107__auto__,value__10108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10107__auto__,value__10108__auto__);
});
week_field16231 = function(name__10107__auto__,value__10108__auto__){
switch(arguments.length){
case 1:
return week_field16231__1.call(this,name__10107__auto__);
case 2:
return week_field16231__2.call(this,name__10107__auto__,value__10108__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field16231.cljs$core$IFn$_invoke$arity$1 = week_field16231__1;
week_field16231.cljs$core$IFn$_invoke$arity$2 = week_field16231__2;
return week_field16231;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16231);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box16232 = (function() {
var check_box16232 = null;
var check_box16232__1 = (function (name){
return check_box16232.call(null,name,null);
});
var check_box16232__2 = (function (name,checked_QMARK_){
return check_box16232.call(null,name,checked_QMARK_,"true");
});
var check_box16232__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box16232 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16232__1.call(this,name);
case 2:
return check_box16232__2.call(this,name,checked_QMARK_);
case 3:
return check_box16232__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16232.cljs$core$IFn$_invoke$arity$1 = check_box16232__1;
check_box16232.cljs$core$IFn$_invoke$arity$2 = check_box16232__2;
check_box16232.cljs$core$IFn$_invoke$arity$3 = check_box16232__3;
return check_box16232;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16232);
/**
* Creates a radio button.
*/
sablono.core.radio_button16233 = (function() {
var radio_button16233 = null;
var radio_button16233__1 = (function (group){
return radio_button16233.call(null,group,null);
});
var radio_button16233__2 = (function (group,checked_QMARK_){
return radio_button16233.call(null,group,checked_QMARK_,"true");
});
var radio_button16233__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button16233 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16233__1.call(this,group);
case 2:
return radio_button16233__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16233__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16233.cljs$core$IFn$_invoke$arity$1 = radio_button16233__1;
radio_button16233.cljs$core$IFn$_invoke$arity$2 = radio_button16233__2;
radio_button16233.cljs$core$IFn$_invoke$arity$3 = radio_button16233__3;
return radio_button16233;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16233);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16234 = (function() {
var select_options16234 = null;
var select_options16234__1 = (function (coll){
return select_options16234.call(null,coll,null);
});
var select_options16234__2 = (function (coll,selected){
var iter__8786__auto__ = (function iter__16243(s__16244){
return (new cljs.core.LazySeq(null,(function (){
var s__16244__$1 = s__16244;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16244__$1);
if(temp__4126__auto__){
var s__16244__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16244__$2)){
var c__8784__auto__ = cljs.core.chunk_first.call(null,s__16244__$2);
var size__8785__auto__ = cljs.core.count.call(null,c__8784__auto__);
var b__16246 = cljs.core.chunk_buffer.call(null,size__8785__auto__);
if((function (){var i__16245 = (0);
while(true){
if((i__16245 < size__8785__auto__)){
var x = cljs.core._nth.call(null,c__8784__auto__,i__16245);
cljs.core.chunk_append.call(null,b__16246,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16249 = x;
var text = cljs.core.nth.call(null,vec__16249,(0),null);
var val = cljs.core.nth.call(null,vec__16249,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16249,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options16234.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__16251 = (i__16245 + (1));
i__16245 = G__16251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16246),iter__16243.call(null,cljs.core.chunk_rest.call(null,s__16244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16246),null);
}
} else {
var x = cljs.core.first.call(null,s__16244__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16250 = x;
var text = cljs.core.nth.call(null,vec__16250,(0),null);
var val = cljs.core.nth.call(null,vec__16250,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16250,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options16234.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16243.call(null,cljs.core.rest.call(null,s__16244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8786__auto__.call(null,coll);
});
select_options16234 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16234__1.call(this,coll);
case 2:
return select_options16234__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16234.cljs$core$IFn$_invoke$arity$1 = select_options16234__1;
select_options16234.cljs$core$IFn$_invoke$arity$2 = select_options16234__2;
return select_options16234;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16234);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16252 = (function() {
var drop_down16252 = null;
var drop_down16252__2 = (function (name,options){
return drop_down16252.call(null,name,options,null);
});
var drop_down16252__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16252 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16252__2.call(this,name,options);
case 3:
return drop_down16252__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16252.cljs$core$IFn$_invoke$arity$2 = drop_down16252__2;
drop_down16252.cljs$core$IFn$_invoke$arity$3 = drop_down16252__3;
return drop_down16252;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16252);
/**
* Creates a text area element.
*/
sablono.core.text_area16253 = (function() {
var text_area16253 = null;
var text_area16253__1 = (function (name){
return text_area16253.call(null,name,null);
});
var text_area16253__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area16253 = function(name,value){
switch(arguments.length){
case 1:
return text_area16253__1.call(this,name);
case 2:
return text_area16253__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16253.cljs$core$IFn$_invoke$arity$1 = text_area16253__1;
text_area16253.cljs$core$IFn$_invoke$arity$2 = text_area16253__2;
return text_area16253;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16253);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16254 = (function label16254(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16254);
/**
* Creates a submit button.
*/
sablono.core.submit_button16255 = (function submit_button16255(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16255);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16256 = (function reset_button16256(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16256);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16257 = (function() { 
var form_to16257__delegate = function (p__16258,body){
var vec__16260 = p__16258;
var method = cljs.core.nth.call(null,vec__16260,(0),null);
var action = cljs.core.nth.call(null,vec__16260,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16257 = function (p__16258,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to16257__delegate.call(this,p__16258,body);};
form_to16257.cljs$lang$maxFixedArity = 1;
form_to16257.cljs$lang$applyTo = (function (arglist__16261){
var p__16258 = cljs.core.first(arglist__16261);
var body = cljs.core.rest(arglist__16261);
return form_to16257__delegate(p__16258,body);
});
form_to16257.cljs$core$IFn$_invoke$arity$variadic = form_to16257__delegate;
return form_to16257;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16257);

//# sourceMappingURL=core.js.map