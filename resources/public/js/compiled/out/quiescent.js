// Compiled by ClojureScript 0.0-2511
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){
if(cljs.core.map_QMARK_.call(null,obj)){
var o = (function (){var obj23033 = {};
return obj23033;
})();
var seq__23034_23040 = cljs.core.seq.call(null,obj);
var chunk__23035_23041 = null;
var count__23036_23042 = (0);
var i__23037_23043 = (0);
while(true){
if((i__23037_23043 < count__23036_23042)){
var vec__23038_23044 = cljs.core._nth.call(null,chunk__23035_23041,i__23037_23043);
var k_23045 = cljs.core.nth.call(null,vec__23038_23044,(0),null);
var v_23046 = cljs.core.nth.call(null,vec__23038_23044,(1),null);
(o[cljs.core.name.call(null,k_23045)] = js_props.call(null,v_23046));

var G__23047 = seq__23034_23040;
var G__23048 = chunk__23035_23041;
var G__23049 = count__23036_23042;
var G__23050 = (i__23037_23043 + (1));
seq__23034_23040 = G__23047;
chunk__23035_23041 = G__23048;
count__23036_23042 = G__23049;
i__23037_23043 = G__23050;
continue;
} else {
var temp__4126__auto___23051 = cljs.core.seq.call(null,seq__23034_23040);
if(temp__4126__auto___23051){
var seq__23034_23052__$1 = temp__4126__auto___23051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23034_23052__$1)){
var c__8817__auto___23053 = cljs.core.chunk_first.call(null,seq__23034_23052__$1);
var G__23054 = cljs.core.chunk_rest.call(null,seq__23034_23052__$1);
var G__23055 = c__8817__auto___23053;
var G__23056 = cljs.core.count.call(null,c__8817__auto___23053);
var G__23057 = (0);
seq__23034_23040 = G__23054;
chunk__23035_23041 = G__23055;
count__23036_23042 = G__23056;
i__23037_23043 = G__23057;
continue;
} else {
var vec__23039_23058 = cljs.core.first.call(null,seq__23034_23052__$1);
var k_23059 = cljs.core.nth.call(null,vec__23039_23058,(0),null);
var v_23060 = cljs.core.nth.call(null,vec__23039_23058,(1),null);
(o[cljs.core.name.call(null,k_23059)] = js_props.call(null,v_23060));

var G__23061 = cljs.core.next.call(null,seq__23034_23052__$1);
var G__23062 = null;
var G__23063 = (0);
var G__23064 = (0);
seq__23034_23040 = G__23061;
chunk__23035_23041 = G__23062;
count__23036_23042 = G__23063;
i__23037_23043 = G__23064;
continue;
}
} else {
}
}
break;
}

return o;
} else {
return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){
var react_component = React.createClass({"render": (function (){
var this$ = this;
var _STAR_component_STAR_23066 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23066;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__23067__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__23067 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__23067__delegate.call(this,value,static_args);};
G__23067.cljs$lang$maxFixedArity = 1;
G__23067.cljs$lang$applyTo = (function (arglist__23068){
var value = cljs.core.first(arglist__23068);
var static_args = cljs.core.rest(arglist__23068);
return G__23067__delegate(value,static_args);
});
G__23067.cljs$core$IFn$_invoke$arity$variadic = G__23067__delegate;
return G__23067;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23073 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23073;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23072 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23072;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23071 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23071;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23070 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23070;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23069 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23069;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){
var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),child,kvs));
var temp__4126__auto___23074 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___23074)){
var key_23075 = temp__4126__auto___23074;
(props["key"] = key_23075);
} else {
}

return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__23076){
var child = cljs.core.first(arglist__23076);
var kvs = cljs.core.rest(arglist__23076);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",-16104606),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});

//# sourceMappingURL=quiescent.js.map