// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t16702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16702 = (function (f,fn_handler,meta16703){
this.f = f;
this.fn_handler = fn_handler;
this.meta16703 = meta16703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16704){
var self__ = this;
var _16704__$1 = this;
return self__.meta16703;
});

cljs.core.async.t16702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16704,meta16703__$1){
var self__ = this;
var _16704__$1 = this;
return (new cljs.core.async.t16702(self__.f,self__.fn_handler,meta16703__$1));
});

cljs.core.async.t16702.cljs$lang$type = true;

cljs.core.async.t16702.cljs$lang$ctorStr = "cljs.core.async/t16702";

cljs.core.async.t16702.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16702");
});

cljs.core.async.__GT_t16702 = (function __GT_t16702(f__$1,fn_handler__$1,meta16703){
return (new cljs.core.async.t16702(f__$1,fn_handler__$1,meta16703));
});

}

return (new cljs.core.async.t16702(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__16706 = buff;
if(G__16706){
var bit__8711__auto__ = null;
if(cljs.core.truth_((function (){var or__8030__auto__ = bit__8711__auto__;
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return G__16706.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16706.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16706);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16707 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16707);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16707,ret){
return (function (){
return fn1.call(null,val_16707);
});})(val_16707,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__8917__auto___16708 = n;
var x_16709 = (0);
while(true){
if((x_16709 < n__8917__auto___16708)){
(a[x_16709] = (0));

var G__16710 = (x_16709 + (1));
x_16709 = G__16710;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16711 = (i + (1));
i = G__16711;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16715 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16715 = (function (flag,alt_flag,meta16716){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16716 = meta16716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16715.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16717){
var self__ = this;
var _16717__$1 = this;
return self__.meta16716;
});})(flag))
;

cljs.core.async.t16715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16717,meta16716__$1){
var self__ = this;
var _16717__$1 = this;
return (new cljs.core.async.t16715(self__.flag,self__.alt_flag,meta16716__$1));
});})(flag))
;

cljs.core.async.t16715.cljs$lang$type = true;

cljs.core.async.t16715.cljs$lang$ctorStr = "cljs.core.async/t16715";

cljs.core.async.t16715.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16715");
});})(flag))
;

cljs.core.async.__GT_t16715 = ((function (flag){
return (function __GT_t16715(flag__$1,alt_flag__$1,meta16716){
return (new cljs.core.async.t16715(flag__$1,alt_flag__$1,meta16716));
});})(flag))
;

}

return (new cljs.core.async.t16715(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16721 = (function (cb,flag,alt_handler,meta16722){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16722 = meta16722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16723){
var self__ = this;
var _16723__$1 = this;
return self__.meta16722;
});

cljs.core.async.t16721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16723,meta16722__$1){
var self__ = this;
var _16723__$1 = this;
return (new cljs.core.async.t16721(self__.cb,self__.flag,self__.alt_handler,meta16722__$1));
});

cljs.core.async.t16721.cljs$lang$type = true;

cljs.core.async.t16721.cljs$lang$ctorStr = "cljs.core.async/t16721";

cljs.core.async.t16721.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16721");
});

cljs.core.async.__GT_t16721 = (function __GT_t16721(cb__$1,flag__$1,alt_handler__$1,meta16722){
return (new cljs.core.async.t16721(cb__$1,flag__$1,alt_handler__$1,meta16722));
});

}

return (new cljs.core.async.t16721(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16724_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16725_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8030__auto__ = wport;
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16726 = (i + (1));
i = G__16726;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8030__auto__ = ret;
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__8018__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8018__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8018__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16727){
var map__16729 = p__16727;
var map__16729__$1 = ((cljs.core.seq_QMARK_.call(null,map__16729))?cljs.core.apply.call(null,cljs.core.hash_map,map__16729):map__16729);
var opts = map__16729__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__16727 = null;
if (arguments.length > 1) {
  p__16727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__16727);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16730){
var ports = cljs.core.first(arglist__16730);
var p__16727 = cljs.core.rest(arglist__16730);
return alts_BANG___delegate(ports,p__16727);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t16738 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16738 = (function (ch,f,map_LT_,meta16739){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16739 = meta16739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16741 = (function (fn1,_,meta16739,map_LT_,f,ch,meta16742){
this.fn1 = fn1;
this._ = _;
this.meta16739 = meta16739;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16742 = meta16742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16731_SHARP_){
return f1.call(null,(((p1__16731_SHARP_ == null))?null:self__.f.call(null,p1__16731_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16743){
var self__ = this;
var _16743__$1 = this;
return self__.meta16742;
});})(___$1))
;

cljs.core.async.t16741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16743,meta16742__$1){
var self__ = this;
var _16743__$1 = this;
return (new cljs.core.async.t16741(self__.fn1,self__._,self__.meta16739,self__.map_LT_,self__.f,self__.ch,meta16742__$1));
});})(___$1))
;

cljs.core.async.t16741.cljs$lang$type = true;

cljs.core.async.t16741.cljs$lang$ctorStr = "cljs.core.async/t16741";

cljs.core.async.t16741.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16741");
});})(___$1))
;

cljs.core.async.__GT_t16741 = ((function (___$1){
return (function __GT_t16741(fn1__$1,___$2,meta16739__$1,map_LT___$1,f__$1,ch__$1,meta16742){
return (new cljs.core.async.t16741(fn1__$1,___$2,meta16739__$1,map_LT___$1,f__$1,ch__$1,meta16742));
});})(___$1))
;

}

return (new cljs.core.async.t16741(fn1,___$1,self__.meta16739,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__8018__auto__ = ret;
if(cljs.core.truth_(and__8018__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8018__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16740){
var self__ = this;
var _16740__$1 = this;
return self__.meta16739;
});

cljs.core.async.t16738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16740,meta16739__$1){
var self__ = this;
var _16740__$1 = this;
return (new cljs.core.async.t16738(self__.ch,self__.f,self__.map_LT_,meta16739__$1));
});

cljs.core.async.t16738.cljs$lang$type = true;

cljs.core.async.t16738.cljs$lang$ctorStr = "cljs.core.async/t16738";

cljs.core.async.t16738.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16738");
});

cljs.core.async.__GT_t16738 = (function __GT_t16738(ch__$1,f__$1,map_LT___$1,meta16739){
return (new cljs.core.async.t16738(ch__$1,f__$1,map_LT___$1,meta16739));
});

}

return (new cljs.core.async.t16738(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16747 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16747 = (function (ch,f,map_GT_,meta16748){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16748 = meta16748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16749){
var self__ = this;
var _16749__$1 = this;
return self__.meta16748;
});

cljs.core.async.t16747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16749,meta16748__$1){
var self__ = this;
var _16749__$1 = this;
return (new cljs.core.async.t16747(self__.ch,self__.f,self__.map_GT_,meta16748__$1));
});

cljs.core.async.t16747.cljs$lang$type = true;

cljs.core.async.t16747.cljs$lang$ctorStr = "cljs.core.async/t16747";

cljs.core.async.t16747.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16747");
});

cljs.core.async.__GT_t16747 = (function __GT_t16747(ch__$1,f__$1,map_GT___$1,meta16748){
return (new cljs.core.async.t16747(ch__$1,f__$1,map_GT___$1,meta16748));
});

}

return (new cljs.core.async.t16747(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16753 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16753 = (function (ch,p,filter_GT_,meta16754){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16754 = meta16754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16753.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16755){
var self__ = this;
var _16755__$1 = this;
return self__.meta16754;
});

cljs.core.async.t16753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16755,meta16754__$1){
var self__ = this;
var _16755__$1 = this;
return (new cljs.core.async.t16753(self__.ch,self__.p,self__.filter_GT_,meta16754__$1));
});

cljs.core.async.t16753.cljs$lang$type = true;

cljs.core.async.t16753.cljs$lang$ctorStr = "cljs.core.async/t16753";

cljs.core.async.t16753.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t16753");
});

cljs.core.async.__GT_t16753 = (function __GT_t16753(ch__$1,p__$1,filter_GT___$1,meta16754){
return (new cljs.core.async.t16753(ch__$1,p__$1,filter_GT___$1,meta16754));
});

}

return (new cljs.core.async.t16753(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___16838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___16838,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___16838,out){
return (function (state_16817){
var state_val_16818 = (state_16817[(1)]);
if((state_val_16818 === (7))){
var inst_16813 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16819_16839 = state_16817__$1;
(statearr_16819_16839[(2)] = inst_16813);

(statearr_16819_16839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (1))){
var state_16817__$1 = state_16817;
var statearr_16820_16840 = state_16817__$1;
(statearr_16820_16840[(2)] = null);

(statearr_16820_16840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (4))){
var inst_16799 = (state_16817[(7)]);
var inst_16799__$1 = (state_16817[(2)]);
var inst_16800 = (inst_16799__$1 == null);
var state_16817__$1 = (function (){var statearr_16821 = state_16817;
(statearr_16821[(7)] = inst_16799__$1);

return statearr_16821;
})();
if(cljs.core.truth_(inst_16800)){
var statearr_16822_16841 = state_16817__$1;
(statearr_16822_16841[(1)] = (5));

} else {
var statearr_16823_16842 = state_16817__$1;
(statearr_16823_16842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (6))){
var inst_16799 = (state_16817[(7)]);
var inst_16804 = p.call(null,inst_16799);
var state_16817__$1 = state_16817;
if(cljs.core.truth_(inst_16804)){
var statearr_16824_16843 = state_16817__$1;
(statearr_16824_16843[(1)] = (8));

} else {
var statearr_16825_16844 = state_16817__$1;
(statearr_16825_16844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (3))){
var inst_16815 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16817__$1,inst_16815);
} else {
if((state_val_16818 === (2))){
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16817__$1,(4),ch);
} else {
if((state_val_16818 === (11))){
var inst_16807 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16826_16845 = state_16817__$1;
(statearr_16826_16845[(2)] = inst_16807);

(statearr_16826_16845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (9))){
var state_16817__$1 = state_16817;
var statearr_16827_16846 = state_16817__$1;
(statearr_16827_16846[(2)] = null);

(statearr_16827_16846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (5))){
var inst_16802 = cljs.core.async.close_BANG_.call(null,out);
var state_16817__$1 = state_16817;
var statearr_16828_16847 = state_16817__$1;
(statearr_16828_16847[(2)] = inst_16802);

(statearr_16828_16847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (10))){
var inst_16810 = (state_16817[(2)]);
var state_16817__$1 = (function (){var statearr_16829 = state_16817;
(statearr_16829[(8)] = inst_16810);

return statearr_16829;
})();
var statearr_16830_16848 = state_16817__$1;
(statearr_16830_16848[(2)] = null);

(statearr_16830_16848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (8))){
var inst_16799 = (state_16817[(7)]);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16817__$1,(11),out,inst_16799);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___16838,out))
;
return ((function (switch__11250__auto__,c__11315__auto___16838,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_16834 = [null,null,null,null,null,null,null,null,null];
(statearr_16834[(0)] = state_machine__11251__auto__);

(statearr_16834[(1)] = (1));

return statearr_16834;
});
var state_machine__11251__auto____1 = (function (state_16817){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_16817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e16835){if((e16835 instanceof Object)){
var ex__11254__auto__ = e16835;
var statearr_16836_16849 = state_16817;
(statearr_16836_16849[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16850 = state_16817;
state_16817 = G__16850;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___16838,out))
})();
var state__11317__auto__ = (function (){var statearr_16837 = f__11316__auto__.call(null);
(statearr_16837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___16838);

return statearr_16837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___16838,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__){
return (function (state_17016){
var state_val_17017 = (state_17016[(1)]);
if((state_val_17017 === (7))){
var inst_17012 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17018_17059 = state_17016__$1;
(statearr_17018_17059[(2)] = inst_17012);

(statearr_17018_17059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (20))){
var inst_16982 = (state_17016[(7)]);
var inst_16993 = (state_17016[(2)]);
var inst_16994 = cljs.core.next.call(null,inst_16982);
var inst_16968 = inst_16994;
var inst_16969 = null;
var inst_16970 = (0);
var inst_16971 = (0);
var state_17016__$1 = (function (){var statearr_17019 = state_17016;
(statearr_17019[(8)] = inst_16969);

(statearr_17019[(9)] = inst_16993);

(statearr_17019[(10)] = inst_16970);

(statearr_17019[(11)] = inst_16971);

(statearr_17019[(12)] = inst_16968);

return statearr_17019;
})();
var statearr_17020_17060 = state_17016__$1;
(statearr_17020_17060[(2)] = null);

(statearr_17020_17060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (1))){
var state_17016__$1 = state_17016;
var statearr_17021_17061 = state_17016__$1;
(statearr_17021_17061[(2)] = null);

(statearr_17021_17061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (4))){
var inst_16957 = (state_17016[(13)]);
var inst_16957__$1 = (state_17016[(2)]);
var inst_16958 = (inst_16957__$1 == null);
var state_17016__$1 = (function (){var statearr_17022 = state_17016;
(statearr_17022[(13)] = inst_16957__$1);

return statearr_17022;
})();
if(cljs.core.truth_(inst_16958)){
var statearr_17023_17062 = state_17016__$1;
(statearr_17023_17062[(1)] = (5));

} else {
var statearr_17024_17063 = state_17016__$1;
(statearr_17024_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (15))){
var state_17016__$1 = state_17016;
var statearr_17028_17064 = state_17016__$1;
(statearr_17028_17064[(2)] = null);

(statearr_17028_17064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (21))){
var state_17016__$1 = state_17016;
var statearr_17029_17065 = state_17016__$1;
(statearr_17029_17065[(2)] = null);

(statearr_17029_17065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (13))){
var inst_16969 = (state_17016[(8)]);
var inst_16970 = (state_17016[(10)]);
var inst_16971 = (state_17016[(11)]);
var inst_16968 = (state_17016[(12)]);
var inst_16978 = (state_17016[(2)]);
var inst_16979 = (inst_16971 + (1));
var tmp17025 = inst_16969;
var tmp17026 = inst_16970;
var tmp17027 = inst_16968;
var inst_16968__$1 = tmp17027;
var inst_16969__$1 = tmp17025;
var inst_16970__$1 = tmp17026;
var inst_16971__$1 = inst_16979;
var state_17016__$1 = (function (){var statearr_17030 = state_17016;
(statearr_17030[(8)] = inst_16969__$1);

(statearr_17030[(14)] = inst_16978);

(statearr_17030[(10)] = inst_16970__$1);

(statearr_17030[(11)] = inst_16971__$1);

(statearr_17030[(12)] = inst_16968__$1);

return statearr_17030;
})();
var statearr_17031_17066 = state_17016__$1;
(statearr_17031_17066[(2)] = null);

(statearr_17031_17066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (22))){
var state_17016__$1 = state_17016;
var statearr_17032_17067 = state_17016__$1;
(statearr_17032_17067[(2)] = null);

(statearr_17032_17067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (6))){
var inst_16957 = (state_17016[(13)]);
var inst_16966 = f.call(null,inst_16957);
var inst_16967 = cljs.core.seq.call(null,inst_16966);
var inst_16968 = inst_16967;
var inst_16969 = null;
var inst_16970 = (0);
var inst_16971 = (0);
var state_17016__$1 = (function (){var statearr_17033 = state_17016;
(statearr_17033[(8)] = inst_16969);

(statearr_17033[(10)] = inst_16970);

(statearr_17033[(11)] = inst_16971);

(statearr_17033[(12)] = inst_16968);

return statearr_17033;
})();
var statearr_17034_17068 = state_17016__$1;
(statearr_17034_17068[(2)] = null);

(statearr_17034_17068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (17))){
var inst_16982 = (state_17016[(7)]);
var inst_16986 = cljs.core.chunk_first.call(null,inst_16982);
var inst_16987 = cljs.core.chunk_rest.call(null,inst_16982);
var inst_16988 = cljs.core.count.call(null,inst_16986);
var inst_16968 = inst_16987;
var inst_16969 = inst_16986;
var inst_16970 = inst_16988;
var inst_16971 = (0);
var state_17016__$1 = (function (){var statearr_17035 = state_17016;
(statearr_17035[(8)] = inst_16969);

(statearr_17035[(10)] = inst_16970);

(statearr_17035[(11)] = inst_16971);

(statearr_17035[(12)] = inst_16968);

return statearr_17035;
})();
var statearr_17036_17069 = state_17016__$1;
(statearr_17036_17069[(2)] = null);

(statearr_17036_17069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (3))){
var inst_17014 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17016__$1,inst_17014);
} else {
if((state_val_17017 === (12))){
var inst_17002 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17037_17070 = state_17016__$1;
(statearr_17037_17070[(2)] = inst_17002);

(statearr_17037_17070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (2))){
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17016__$1,(4),in$);
} else {
if((state_val_17017 === (23))){
var inst_17010 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17038_17071 = state_17016__$1;
(statearr_17038_17071[(2)] = inst_17010);

(statearr_17038_17071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (19))){
var inst_16997 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17039_17072 = state_17016__$1;
(statearr_17039_17072[(2)] = inst_16997);

(statearr_17039_17072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (11))){
var inst_16982 = (state_17016[(7)]);
var inst_16968 = (state_17016[(12)]);
var inst_16982__$1 = cljs.core.seq.call(null,inst_16968);
var state_17016__$1 = (function (){var statearr_17040 = state_17016;
(statearr_17040[(7)] = inst_16982__$1);

return statearr_17040;
})();
if(inst_16982__$1){
var statearr_17041_17073 = state_17016__$1;
(statearr_17041_17073[(1)] = (14));

} else {
var statearr_17042_17074 = state_17016__$1;
(statearr_17042_17074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (9))){
var inst_17004 = (state_17016[(2)]);
var inst_17005 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17016__$1 = (function (){var statearr_17043 = state_17016;
(statearr_17043[(15)] = inst_17004);

return statearr_17043;
})();
if(cljs.core.truth_(inst_17005)){
var statearr_17044_17075 = state_17016__$1;
(statearr_17044_17075[(1)] = (21));

} else {
var statearr_17045_17076 = state_17016__$1;
(statearr_17045_17076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (5))){
var inst_16960 = cljs.core.async.close_BANG_.call(null,out);
var state_17016__$1 = state_17016;
var statearr_17046_17077 = state_17016__$1;
(statearr_17046_17077[(2)] = inst_16960);

(statearr_17046_17077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (14))){
var inst_16982 = (state_17016[(7)]);
var inst_16984 = cljs.core.chunked_seq_QMARK_.call(null,inst_16982);
var state_17016__$1 = state_17016;
if(inst_16984){
var statearr_17047_17078 = state_17016__$1;
(statearr_17047_17078[(1)] = (17));

} else {
var statearr_17048_17079 = state_17016__$1;
(statearr_17048_17079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (16))){
var inst_17000 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17049_17080 = state_17016__$1;
(statearr_17049_17080[(2)] = inst_17000);

(statearr_17049_17080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17017 === (10))){
var inst_16969 = (state_17016[(8)]);
var inst_16971 = (state_17016[(11)]);
var inst_16976 = cljs.core._nth.call(null,inst_16969,inst_16971);
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17016__$1,(13),out,inst_16976);
} else {
if((state_val_17017 === (18))){
var inst_16982 = (state_17016[(7)]);
var inst_16991 = cljs.core.first.call(null,inst_16982);
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17016__$1,(20),out,inst_16991);
} else {
if((state_val_17017 === (8))){
var inst_16970 = (state_17016[(10)]);
var inst_16971 = (state_17016[(11)]);
var inst_16973 = (inst_16971 < inst_16970);
var inst_16974 = inst_16973;
var state_17016__$1 = state_17016;
if(cljs.core.truth_(inst_16974)){
var statearr_17050_17081 = state_17016__$1;
(statearr_17050_17081[(1)] = (10));

} else {
var statearr_17051_17082 = state_17016__$1;
(statearr_17051_17082[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto__))
;
return ((function (switch__11250__auto__,c__11315__auto__){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17055[(0)] = state_machine__11251__auto__);

(statearr_17055[(1)] = (1));

return statearr_17055;
});
var state_machine__11251__auto____1 = (function (state_17016){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object)){
var ex__11254__auto__ = e17056;
var statearr_17057_17083 = state_17016;
(statearr_17057_17083[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17084 = state_17016;
state_17016 = G__17084;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17016){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__))
})();
var state__11317__auto__ = (function (){var statearr_17058 = f__11316__auto__.call(null);
(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__))
);

return c__11315__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11315__auto___17179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___17179){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___17179){
return (function (state_17155){
var state_val_17156 = (state_17155[(1)]);
if((state_val_17156 === (7))){
var inst_17151 = (state_17155[(2)]);
var state_17155__$1 = state_17155;
var statearr_17157_17180 = state_17155__$1;
(statearr_17157_17180[(2)] = inst_17151);

(statearr_17157_17180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (1))){
var state_17155__$1 = state_17155;
var statearr_17158_17181 = state_17155__$1;
(statearr_17158_17181[(2)] = null);

(statearr_17158_17181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (4))){
var inst_17134 = (state_17155[(7)]);
var inst_17134__$1 = (state_17155[(2)]);
var inst_17135 = (inst_17134__$1 == null);
var state_17155__$1 = (function (){var statearr_17159 = state_17155;
(statearr_17159[(7)] = inst_17134__$1);

return statearr_17159;
})();
if(cljs.core.truth_(inst_17135)){
var statearr_17160_17182 = state_17155__$1;
(statearr_17160_17182[(1)] = (5));

} else {
var statearr_17161_17183 = state_17155__$1;
(statearr_17161_17183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (13))){
var state_17155__$1 = state_17155;
var statearr_17162_17184 = state_17155__$1;
(statearr_17162_17184[(2)] = null);

(statearr_17162_17184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (6))){
var inst_17134 = (state_17155[(7)]);
var state_17155__$1 = state_17155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17155__$1,(11),to,inst_17134);
} else {
if((state_val_17156 === (3))){
var inst_17153 = (state_17155[(2)]);
var state_17155__$1 = state_17155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17155__$1,inst_17153);
} else {
if((state_val_17156 === (12))){
var state_17155__$1 = state_17155;
var statearr_17163_17185 = state_17155__$1;
(statearr_17163_17185[(2)] = null);

(statearr_17163_17185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (2))){
var state_17155__$1 = state_17155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17155__$1,(4),from);
} else {
if((state_val_17156 === (11))){
var inst_17144 = (state_17155[(2)]);
var state_17155__$1 = state_17155;
if(cljs.core.truth_(inst_17144)){
var statearr_17164_17186 = state_17155__$1;
(statearr_17164_17186[(1)] = (12));

} else {
var statearr_17165_17187 = state_17155__$1;
(statearr_17165_17187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (9))){
var state_17155__$1 = state_17155;
var statearr_17166_17188 = state_17155__$1;
(statearr_17166_17188[(2)] = null);

(statearr_17166_17188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (5))){
var state_17155__$1 = state_17155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17167_17189 = state_17155__$1;
(statearr_17167_17189[(1)] = (8));

} else {
var statearr_17168_17190 = state_17155__$1;
(statearr_17168_17190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (14))){
var inst_17149 = (state_17155[(2)]);
var state_17155__$1 = state_17155;
var statearr_17169_17191 = state_17155__$1;
(statearr_17169_17191[(2)] = inst_17149);

(statearr_17169_17191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (10))){
var inst_17141 = (state_17155[(2)]);
var state_17155__$1 = state_17155;
var statearr_17170_17192 = state_17155__$1;
(statearr_17170_17192[(2)] = inst_17141);

(statearr_17170_17192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17156 === (8))){
var inst_17138 = cljs.core.async.close_BANG_.call(null,to);
var state_17155__$1 = state_17155;
var statearr_17171_17193 = state_17155__$1;
(statearr_17171_17193[(2)] = inst_17138);

(statearr_17171_17193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___17179))
;
return ((function (switch__11250__auto__,c__11315__auto___17179){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17175 = [null,null,null,null,null,null,null,null];
(statearr_17175[(0)] = state_machine__11251__auto__);

(statearr_17175[(1)] = (1));

return statearr_17175;
});
var state_machine__11251__auto____1 = (function (state_17155){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17176){if((e17176 instanceof Object)){
var ex__11254__auto__ = e17176;
var statearr_17177_17194 = state_17155;
(statearr_17177_17194[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17195 = state_17155;
state_17155 = G__17195;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17155){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___17179))
})();
var state__11317__auto__ = (function (){var statearr_17178 = f__11316__auto__.call(null);
(statearr_17178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___17179);

return statearr_17178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___17179))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11315__auto___17296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___17296,tc,fc){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___17296,tc,fc){
return (function (state_17271){
var state_val_17272 = (state_17271[(1)]);
if((state_val_17272 === (7))){
var inst_17267 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17273_17297 = state_17271__$1;
(statearr_17273_17297[(2)] = inst_17267);

(statearr_17273_17297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (1))){
var state_17271__$1 = state_17271;
var statearr_17274_17298 = state_17271__$1;
(statearr_17274_17298[(2)] = null);

(statearr_17274_17298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (4))){
var inst_17248 = (state_17271[(7)]);
var inst_17248__$1 = (state_17271[(2)]);
var inst_17249 = (inst_17248__$1 == null);
var state_17271__$1 = (function (){var statearr_17275 = state_17271;
(statearr_17275[(7)] = inst_17248__$1);

return statearr_17275;
})();
if(cljs.core.truth_(inst_17249)){
var statearr_17276_17299 = state_17271__$1;
(statearr_17276_17299[(1)] = (5));

} else {
var statearr_17277_17300 = state_17271__$1;
(statearr_17277_17300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (13))){
var state_17271__$1 = state_17271;
var statearr_17278_17301 = state_17271__$1;
(statearr_17278_17301[(2)] = null);

(statearr_17278_17301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (6))){
var inst_17248 = (state_17271[(7)]);
var inst_17254 = p.call(null,inst_17248);
var state_17271__$1 = state_17271;
if(cljs.core.truth_(inst_17254)){
var statearr_17279_17302 = state_17271__$1;
(statearr_17279_17302[(1)] = (9));

} else {
var statearr_17280_17303 = state_17271__$1;
(statearr_17280_17303[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (3))){
var inst_17269 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17271__$1,inst_17269);
} else {
if((state_val_17272 === (12))){
var state_17271__$1 = state_17271;
var statearr_17281_17304 = state_17271__$1;
(statearr_17281_17304[(2)] = null);

(statearr_17281_17304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (2))){
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17271__$1,(4),ch);
} else {
if((state_val_17272 === (11))){
var inst_17248 = (state_17271[(7)]);
var inst_17258 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17271__$1,(8),inst_17258,inst_17248);
} else {
if((state_val_17272 === (9))){
var state_17271__$1 = state_17271;
var statearr_17282_17305 = state_17271__$1;
(statearr_17282_17305[(2)] = tc);

(statearr_17282_17305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (5))){
var inst_17251 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17252 = cljs.core.async.close_BANG_.call(null,fc);
var state_17271__$1 = (function (){var statearr_17283 = state_17271;
(statearr_17283[(8)] = inst_17251);

return statearr_17283;
})();
var statearr_17284_17306 = state_17271__$1;
(statearr_17284_17306[(2)] = inst_17252);

(statearr_17284_17306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (14))){
var inst_17265 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17285_17307 = state_17271__$1;
(statearr_17285_17307[(2)] = inst_17265);

(statearr_17285_17307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (10))){
var state_17271__$1 = state_17271;
var statearr_17286_17308 = state_17271__$1;
(statearr_17286_17308[(2)] = fc);

(statearr_17286_17308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (8))){
var inst_17260 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
if(cljs.core.truth_(inst_17260)){
var statearr_17287_17309 = state_17271__$1;
(statearr_17287_17309[(1)] = (12));

} else {
var statearr_17288_17310 = state_17271__$1;
(statearr_17288_17310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___17296,tc,fc))
;
return ((function (switch__11250__auto__,c__11315__auto___17296,tc,fc){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17292 = [null,null,null,null,null,null,null,null,null];
(statearr_17292[(0)] = state_machine__11251__auto__);

(statearr_17292[(1)] = (1));

return statearr_17292;
});
var state_machine__11251__auto____1 = (function (state_17271){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17293){if((e17293 instanceof Object)){
var ex__11254__auto__ = e17293;
var statearr_17294_17311 = state_17271;
(statearr_17294_17311[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17312 = state_17271;
state_17271 = G__17312;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17271){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___17296,tc,fc))
})();
var state__11317__auto__ = (function (){var statearr_17295 = f__11316__auto__.call(null);
(statearr_17295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___17296);

return statearr_17295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___17296,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__){
return (function (state_17359){
var state_val_17360 = (state_17359[(1)]);
if((state_val_17360 === (7))){
var inst_17355 = (state_17359[(2)]);
var state_17359__$1 = state_17359;
var statearr_17361_17377 = state_17359__$1;
(statearr_17361_17377[(2)] = inst_17355);

(statearr_17361_17377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17360 === (6))){
var inst_17348 = (state_17359[(7)]);
var inst_17345 = (state_17359[(8)]);
var inst_17352 = f.call(null,inst_17345,inst_17348);
var inst_17345__$1 = inst_17352;
var state_17359__$1 = (function (){var statearr_17362 = state_17359;
(statearr_17362[(8)] = inst_17345__$1);

return statearr_17362;
})();
var statearr_17363_17378 = state_17359__$1;
(statearr_17363_17378[(2)] = null);

(statearr_17363_17378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17360 === (5))){
var inst_17345 = (state_17359[(8)]);
var state_17359__$1 = state_17359;
var statearr_17364_17379 = state_17359__$1;
(statearr_17364_17379[(2)] = inst_17345);

(statearr_17364_17379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17360 === (4))){
var inst_17348 = (state_17359[(7)]);
var inst_17348__$1 = (state_17359[(2)]);
var inst_17349 = (inst_17348__$1 == null);
var state_17359__$1 = (function (){var statearr_17365 = state_17359;
(statearr_17365[(7)] = inst_17348__$1);

return statearr_17365;
})();
if(cljs.core.truth_(inst_17349)){
var statearr_17366_17380 = state_17359__$1;
(statearr_17366_17380[(1)] = (5));

} else {
var statearr_17367_17381 = state_17359__$1;
(statearr_17367_17381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17360 === (3))){
var inst_17357 = (state_17359[(2)]);
var state_17359__$1 = state_17359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17359__$1,inst_17357);
} else {
if((state_val_17360 === (2))){
var state_17359__$1 = state_17359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17359__$1,(4),ch);
} else {
if((state_val_17360 === (1))){
var inst_17345 = init;
var state_17359__$1 = (function (){var statearr_17368 = state_17359;
(statearr_17368[(8)] = inst_17345);

return statearr_17368;
})();
var statearr_17369_17382 = state_17359__$1;
(statearr_17369_17382[(2)] = null);

(statearr_17369_17382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__11315__auto__))
;
return ((function (switch__11250__auto__,c__11315__auto__){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = state_machine__11251__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var state_machine__11251__auto____1 = (function (state_17359){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__11254__auto__ = e17374;
var statearr_17375_17383 = state_17359;
(statearr_17375_17383[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_17359;
state_17359 = G__17384;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17359){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__))
})();
var state__11317__auto__ = (function (){var statearr_17376 = f__11316__auto__.call(null);
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__))
);

return c__11315__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__){
return (function (state_17458){
var state_val_17459 = (state_17458[(1)]);
if((state_val_17459 === (7))){
var inst_17440 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17460_17483 = state_17458__$1;
(statearr_17460_17483[(2)] = inst_17440);

(statearr_17460_17483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (1))){
var inst_17434 = cljs.core.seq.call(null,coll);
var inst_17435 = inst_17434;
var state_17458__$1 = (function (){var statearr_17461 = state_17458;
(statearr_17461[(7)] = inst_17435);

return statearr_17461;
})();
var statearr_17462_17484 = state_17458__$1;
(statearr_17462_17484[(2)] = null);

(statearr_17462_17484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (4))){
var inst_17435 = (state_17458[(7)]);
var inst_17438 = cljs.core.first.call(null,inst_17435);
var state_17458__$1 = state_17458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17458__$1,(7),ch,inst_17438);
} else {
if((state_val_17459 === (13))){
var inst_17452 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17463_17485 = state_17458__$1;
(statearr_17463_17485[(2)] = inst_17452);

(statearr_17463_17485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (6))){
var inst_17443 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
if(cljs.core.truth_(inst_17443)){
var statearr_17464_17486 = state_17458__$1;
(statearr_17464_17486[(1)] = (8));

} else {
var statearr_17465_17487 = state_17458__$1;
(statearr_17465_17487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (3))){
var inst_17456 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17458__$1,inst_17456);
} else {
if((state_val_17459 === (12))){
var state_17458__$1 = state_17458;
var statearr_17466_17488 = state_17458__$1;
(statearr_17466_17488[(2)] = null);

(statearr_17466_17488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (2))){
var inst_17435 = (state_17458[(7)]);
var state_17458__$1 = state_17458;
if(cljs.core.truth_(inst_17435)){
var statearr_17467_17489 = state_17458__$1;
(statearr_17467_17489[(1)] = (4));

} else {
var statearr_17468_17490 = state_17458__$1;
(statearr_17468_17490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (11))){
var inst_17449 = cljs.core.async.close_BANG_.call(null,ch);
var state_17458__$1 = state_17458;
var statearr_17469_17491 = state_17458__$1;
(statearr_17469_17491[(2)] = inst_17449);

(statearr_17469_17491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (9))){
var state_17458__$1 = state_17458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17470_17492 = state_17458__$1;
(statearr_17470_17492[(1)] = (11));

} else {
var statearr_17471_17493 = state_17458__$1;
(statearr_17471_17493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (5))){
var inst_17435 = (state_17458[(7)]);
var state_17458__$1 = state_17458;
var statearr_17472_17494 = state_17458__$1;
(statearr_17472_17494[(2)] = inst_17435);

(statearr_17472_17494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (10))){
var inst_17454 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17473_17495 = state_17458__$1;
(statearr_17473_17495[(2)] = inst_17454);

(statearr_17473_17495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (8))){
var inst_17435 = (state_17458[(7)]);
var inst_17445 = cljs.core.next.call(null,inst_17435);
var inst_17435__$1 = inst_17445;
var state_17458__$1 = (function (){var statearr_17474 = state_17458;
(statearr_17474[(7)] = inst_17435__$1);

return statearr_17474;
})();
var statearr_17475_17496 = state_17458__$1;
(statearr_17475_17496[(2)] = null);

(statearr_17475_17496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto__))
;
return ((function (switch__11250__auto__,c__11315__auto__){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17479 = [null,null,null,null,null,null,null,null];
(statearr_17479[(0)] = state_machine__11251__auto__);

(statearr_17479[(1)] = (1));

return statearr_17479;
});
var state_machine__11251__auto____1 = (function (state_17458){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17480){if((e17480 instanceof Object)){
var ex__11254__auto__ = e17480;
var statearr_17481_17497 = state_17458;
(statearr_17481_17497[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17498 = state_17458;
state_17458 = G__17498;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17458){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__))
})();
var state__11317__auto__ = (function (){var statearr_17482 = f__11316__auto__.call(null);
(statearr_17482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_17482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__))
);

return c__11315__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj17500 = {};
return obj17500;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__8018__auto__ = _;
if(and__8018__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__8018__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8674__auto__ = (((_ == null))?null:_);
return (function (){var or__8030__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17502 = {};
return obj17502;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t17724 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17724 = (function (cs,ch,mult,meta17725){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17725 = meta17725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17724.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17724.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17724.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17724.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17724.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17726){
var self__ = this;
var _17726__$1 = this;
return self__.meta17725;
});})(cs))
;

cljs.core.async.t17724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17726,meta17725__$1){
var self__ = this;
var _17726__$1 = this;
return (new cljs.core.async.t17724(self__.cs,self__.ch,self__.mult,meta17725__$1));
});})(cs))
;

cljs.core.async.t17724.cljs$lang$type = true;

cljs.core.async.t17724.cljs$lang$ctorStr = "cljs.core.async/t17724";

cljs.core.async.t17724.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t17724");
});})(cs))
;

cljs.core.async.__GT_t17724 = ((function (cs){
return (function __GT_t17724(cs__$1,ch__$1,mult__$1,meta17725){
return (new cljs.core.async.t17724(cs__$1,ch__$1,mult__$1,meta17725));
});})(cs))
;

}

return (new cljs.core.async.t17724(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11315__auto___17945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___17945,cs,m,dchan,dctr,done){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___17945,cs,m,dchan,dctr,done){
return (function (state_17857){
var state_val_17858 = (state_17857[(1)]);
if((state_val_17858 === (7))){
var inst_17853 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17859_17946 = state_17857__$1;
(statearr_17859_17946[(2)] = inst_17853);

(statearr_17859_17946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (20))){
var inst_17758 = (state_17857[(7)]);
var inst_17768 = cljs.core.first.call(null,inst_17758);
var inst_17769 = cljs.core.nth.call(null,inst_17768,(0),null);
var inst_17770 = cljs.core.nth.call(null,inst_17768,(1),null);
var state_17857__$1 = (function (){var statearr_17860 = state_17857;
(statearr_17860[(8)] = inst_17769);

return statearr_17860;
})();
if(cljs.core.truth_(inst_17770)){
var statearr_17861_17947 = state_17857__$1;
(statearr_17861_17947[(1)] = (22));

} else {
var statearr_17862_17948 = state_17857__$1;
(statearr_17862_17948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (27))){
var inst_17800 = (state_17857[(9)]);
var inst_17798 = (state_17857[(10)]);
var inst_17729 = (state_17857[(11)]);
var inst_17805 = (state_17857[(12)]);
var inst_17805__$1 = cljs.core._nth.call(null,inst_17798,inst_17800);
var inst_17806 = cljs.core.async.put_BANG_.call(null,inst_17805__$1,inst_17729,done);
var state_17857__$1 = (function (){var statearr_17863 = state_17857;
(statearr_17863[(12)] = inst_17805__$1);

return statearr_17863;
})();
if(cljs.core.truth_(inst_17806)){
var statearr_17864_17949 = state_17857__$1;
(statearr_17864_17949[(1)] = (30));

} else {
var statearr_17865_17950 = state_17857__$1;
(statearr_17865_17950[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (1))){
var state_17857__$1 = state_17857;
var statearr_17866_17951 = state_17857__$1;
(statearr_17866_17951[(2)] = null);

(statearr_17866_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (24))){
var inst_17758 = (state_17857[(7)]);
var inst_17775 = (state_17857[(2)]);
var inst_17776 = cljs.core.next.call(null,inst_17758);
var inst_17738 = inst_17776;
var inst_17739 = null;
var inst_17740 = (0);
var inst_17741 = (0);
var state_17857__$1 = (function (){var statearr_17867 = state_17857;
(statearr_17867[(13)] = inst_17739);

(statearr_17867[(14)] = inst_17775);

(statearr_17867[(15)] = inst_17738);

(statearr_17867[(16)] = inst_17740);

(statearr_17867[(17)] = inst_17741);

return statearr_17867;
})();
var statearr_17868_17952 = state_17857__$1;
(statearr_17868_17952[(2)] = null);

(statearr_17868_17952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (39))){
var state_17857__$1 = state_17857;
var statearr_17872_17953 = state_17857__$1;
(statearr_17872_17953[(2)] = null);

(statearr_17872_17953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (4))){
var inst_17729 = (state_17857[(11)]);
var inst_17729__$1 = (state_17857[(2)]);
var inst_17730 = (inst_17729__$1 == null);
var state_17857__$1 = (function (){var statearr_17873 = state_17857;
(statearr_17873[(11)] = inst_17729__$1);

return statearr_17873;
})();
if(cljs.core.truth_(inst_17730)){
var statearr_17874_17954 = state_17857__$1;
(statearr_17874_17954[(1)] = (5));

} else {
var statearr_17875_17955 = state_17857__$1;
(statearr_17875_17955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (15))){
var inst_17739 = (state_17857[(13)]);
var inst_17738 = (state_17857[(15)]);
var inst_17740 = (state_17857[(16)]);
var inst_17741 = (state_17857[(17)]);
var inst_17754 = (state_17857[(2)]);
var inst_17755 = (inst_17741 + (1));
var tmp17869 = inst_17739;
var tmp17870 = inst_17738;
var tmp17871 = inst_17740;
var inst_17738__$1 = tmp17870;
var inst_17739__$1 = tmp17869;
var inst_17740__$1 = tmp17871;
var inst_17741__$1 = inst_17755;
var state_17857__$1 = (function (){var statearr_17876 = state_17857;
(statearr_17876[(13)] = inst_17739__$1);

(statearr_17876[(15)] = inst_17738__$1);

(statearr_17876[(16)] = inst_17740__$1);

(statearr_17876[(17)] = inst_17741__$1);

(statearr_17876[(18)] = inst_17754);

return statearr_17876;
})();
var statearr_17877_17956 = state_17857__$1;
(statearr_17877_17956[(2)] = null);

(statearr_17877_17956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (21))){
var inst_17779 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17881_17957 = state_17857__$1;
(statearr_17881_17957[(2)] = inst_17779);

(statearr_17881_17957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (31))){
var inst_17805 = (state_17857[(12)]);
var inst_17809 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17810 = cljs.core.async.untap_STAR_.call(null,m,inst_17805);
var state_17857__$1 = (function (){var statearr_17882 = state_17857;
(statearr_17882[(19)] = inst_17809);

return statearr_17882;
})();
var statearr_17883_17958 = state_17857__$1;
(statearr_17883_17958[(2)] = inst_17810);

(statearr_17883_17958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (32))){
var inst_17799 = (state_17857[(20)]);
var inst_17800 = (state_17857[(9)]);
var inst_17798 = (state_17857[(10)]);
var inst_17797 = (state_17857[(21)]);
var inst_17812 = (state_17857[(2)]);
var inst_17813 = (inst_17800 + (1));
var tmp17878 = inst_17799;
var tmp17879 = inst_17798;
var tmp17880 = inst_17797;
var inst_17797__$1 = tmp17880;
var inst_17798__$1 = tmp17879;
var inst_17799__$1 = tmp17878;
var inst_17800__$1 = inst_17813;
var state_17857__$1 = (function (){var statearr_17884 = state_17857;
(statearr_17884[(20)] = inst_17799__$1);

(statearr_17884[(22)] = inst_17812);

(statearr_17884[(9)] = inst_17800__$1);

(statearr_17884[(10)] = inst_17798__$1);

(statearr_17884[(21)] = inst_17797__$1);

return statearr_17884;
})();
var statearr_17885_17959 = state_17857__$1;
(statearr_17885_17959[(2)] = null);

(statearr_17885_17959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (40))){
var inst_17825 = (state_17857[(23)]);
var inst_17829 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17830 = cljs.core.async.untap_STAR_.call(null,m,inst_17825);
var state_17857__$1 = (function (){var statearr_17886 = state_17857;
(statearr_17886[(24)] = inst_17829);

return statearr_17886;
})();
var statearr_17887_17960 = state_17857__$1;
(statearr_17887_17960[(2)] = inst_17830);

(statearr_17887_17960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (33))){
var inst_17816 = (state_17857[(25)]);
var inst_17818 = cljs.core.chunked_seq_QMARK_.call(null,inst_17816);
var state_17857__$1 = state_17857;
if(inst_17818){
var statearr_17888_17961 = state_17857__$1;
(statearr_17888_17961[(1)] = (36));

} else {
var statearr_17889_17962 = state_17857__$1;
(statearr_17889_17962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (13))){
var inst_17748 = (state_17857[(26)]);
var inst_17751 = cljs.core.async.close_BANG_.call(null,inst_17748);
var state_17857__$1 = state_17857;
var statearr_17890_17963 = state_17857__$1;
(statearr_17890_17963[(2)] = inst_17751);

(statearr_17890_17963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (22))){
var inst_17769 = (state_17857[(8)]);
var inst_17772 = cljs.core.async.close_BANG_.call(null,inst_17769);
var state_17857__$1 = state_17857;
var statearr_17891_17964 = state_17857__$1;
(statearr_17891_17964[(2)] = inst_17772);

(statearr_17891_17964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (36))){
var inst_17816 = (state_17857[(25)]);
var inst_17820 = cljs.core.chunk_first.call(null,inst_17816);
var inst_17821 = cljs.core.chunk_rest.call(null,inst_17816);
var inst_17822 = cljs.core.count.call(null,inst_17820);
var inst_17797 = inst_17821;
var inst_17798 = inst_17820;
var inst_17799 = inst_17822;
var inst_17800 = (0);
var state_17857__$1 = (function (){var statearr_17892 = state_17857;
(statearr_17892[(20)] = inst_17799);

(statearr_17892[(9)] = inst_17800);

(statearr_17892[(10)] = inst_17798);

(statearr_17892[(21)] = inst_17797);

return statearr_17892;
})();
var statearr_17893_17965 = state_17857__$1;
(statearr_17893_17965[(2)] = null);

(statearr_17893_17965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (41))){
var inst_17816 = (state_17857[(25)]);
var inst_17832 = (state_17857[(2)]);
var inst_17833 = cljs.core.next.call(null,inst_17816);
var inst_17797 = inst_17833;
var inst_17798 = null;
var inst_17799 = (0);
var inst_17800 = (0);
var state_17857__$1 = (function (){var statearr_17894 = state_17857;
(statearr_17894[(20)] = inst_17799);

(statearr_17894[(9)] = inst_17800);

(statearr_17894[(10)] = inst_17798);

(statearr_17894[(21)] = inst_17797);

(statearr_17894[(27)] = inst_17832);

return statearr_17894;
})();
var statearr_17895_17966 = state_17857__$1;
(statearr_17895_17966[(2)] = null);

(statearr_17895_17966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (43))){
var state_17857__$1 = state_17857;
var statearr_17896_17967 = state_17857__$1;
(statearr_17896_17967[(2)] = null);

(statearr_17896_17967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (29))){
var inst_17841 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17897_17968 = state_17857__$1;
(statearr_17897_17968[(2)] = inst_17841);

(statearr_17897_17968[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (44))){
var inst_17850 = (state_17857[(2)]);
var state_17857__$1 = (function (){var statearr_17898 = state_17857;
(statearr_17898[(28)] = inst_17850);

return statearr_17898;
})();
var statearr_17899_17969 = state_17857__$1;
(statearr_17899_17969[(2)] = null);

(statearr_17899_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (6))){
var inst_17789 = (state_17857[(29)]);
var inst_17788 = cljs.core.deref.call(null,cs);
var inst_17789__$1 = cljs.core.keys.call(null,inst_17788);
var inst_17790 = cljs.core.count.call(null,inst_17789__$1);
var inst_17791 = cljs.core.reset_BANG_.call(null,dctr,inst_17790);
var inst_17796 = cljs.core.seq.call(null,inst_17789__$1);
var inst_17797 = inst_17796;
var inst_17798 = null;
var inst_17799 = (0);
var inst_17800 = (0);
var state_17857__$1 = (function (){var statearr_17900 = state_17857;
(statearr_17900[(20)] = inst_17799);

(statearr_17900[(9)] = inst_17800);

(statearr_17900[(10)] = inst_17798);

(statearr_17900[(29)] = inst_17789__$1);

(statearr_17900[(30)] = inst_17791);

(statearr_17900[(21)] = inst_17797);

return statearr_17900;
})();
var statearr_17901_17970 = state_17857__$1;
(statearr_17901_17970[(2)] = null);

(statearr_17901_17970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (28))){
var inst_17797 = (state_17857[(21)]);
var inst_17816 = (state_17857[(25)]);
var inst_17816__$1 = cljs.core.seq.call(null,inst_17797);
var state_17857__$1 = (function (){var statearr_17902 = state_17857;
(statearr_17902[(25)] = inst_17816__$1);

return statearr_17902;
})();
if(inst_17816__$1){
var statearr_17903_17971 = state_17857__$1;
(statearr_17903_17971[(1)] = (33));

} else {
var statearr_17904_17972 = state_17857__$1;
(statearr_17904_17972[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (25))){
var inst_17799 = (state_17857[(20)]);
var inst_17800 = (state_17857[(9)]);
var inst_17802 = (inst_17800 < inst_17799);
var inst_17803 = inst_17802;
var state_17857__$1 = state_17857;
if(cljs.core.truth_(inst_17803)){
var statearr_17905_17973 = state_17857__$1;
(statearr_17905_17973[(1)] = (27));

} else {
var statearr_17906_17974 = state_17857__$1;
(statearr_17906_17974[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (34))){
var state_17857__$1 = state_17857;
var statearr_17907_17975 = state_17857__$1;
(statearr_17907_17975[(2)] = null);

(statearr_17907_17975[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (17))){
var state_17857__$1 = state_17857;
var statearr_17908_17976 = state_17857__$1;
(statearr_17908_17976[(2)] = null);

(statearr_17908_17976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (3))){
var inst_17855 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17857__$1,inst_17855);
} else {
if((state_val_17858 === (12))){
var inst_17784 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17909_17977 = state_17857__$1;
(statearr_17909_17977[(2)] = inst_17784);

(statearr_17909_17977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (2))){
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17857__$1,(4),ch);
} else {
if((state_val_17858 === (23))){
var state_17857__$1 = state_17857;
var statearr_17910_17978 = state_17857__$1;
(statearr_17910_17978[(2)] = null);

(statearr_17910_17978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (35))){
var inst_17839 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17911_17979 = state_17857__$1;
(statearr_17911_17979[(2)] = inst_17839);

(statearr_17911_17979[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (19))){
var inst_17758 = (state_17857[(7)]);
var inst_17762 = cljs.core.chunk_first.call(null,inst_17758);
var inst_17763 = cljs.core.chunk_rest.call(null,inst_17758);
var inst_17764 = cljs.core.count.call(null,inst_17762);
var inst_17738 = inst_17763;
var inst_17739 = inst_17762;
var inst_17740 = inst_17764;
var inst_17741 = (0);
var state_17857__$1 = (function (){var statearr_17912 = state_17857;
(statearr_17912[(13)] = inst_17739);

(statearr_17912[(15)] = inst_17738);

(statearr_17912[(16)] = inst_17740);

(statearr_17912[(17)] = inst_17741);

return statearr_17912;
})();
var statearr_17913_17980 = state_17857__$1;
(statearr_17913_17980[(2)] = null);

(statearr_17913_17980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (11))){
var inst_17758 = (state_17857[(7)]);
var inst_17738 = (state_17857[(15)]);
var inst_17758__$1 = cljs.core.seq.call(null,inst_17738);
var state_17857__$1 = (function (){var statearr_17914 = state_17857;
(statearr_17914[(7)] = inst_17758__$1);

return statearr_17914;
})();
if(inst_17758__$1){
var statearr_17915_17981 = state_17857__$1;
(statearr_17915_17981[(1)] = (16));

} else {
var statearr_17916_17982 = state_17857__$1;
(statearr_17916_17982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (9))){
var inst_17786 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17917_17983 = state_17857__$1;
(statearr_17917_17983[(2)] = inst_17786);

(statearr_17917_17983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (5))){
var inst_17736 = cljs.core.deref.call(null,cs);
var inst_17737 = cljs.core.seq.call(null,inst_17736);
var inst_17738 = inst_17737;
var inst_17739 = null;
var inst_17740 = (0);
var inst_17741 = (0);
var state_17857__$1 = (function (){var statearr_17918 = state_17857;
(statearr_17918[(13)] = inst_17739);

(statearr_17918[(15)] = inst_17738);

(statearr_17918[(16)] = inst_17740);

(statearr_17918[(17)] = inst_17741);

return statearr_17918;
})();
var statearr_17919_17984 = state_17857__$1;
(statearr_17919_17984[(2)] = null);

(statearr_17919_17984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (14))){
var state_17857__$1 = state_17857;
var statearr_17920_17985 = state_17857__$1;
(statearr_17920_17985[(2)] = null);

(statearr_17920_17985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (45))){
var inst_17847 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17921_17986 = state_17857__$1;
(statearr_17921_17986[(2)] = inst_17847);

(statearr_17921_17986[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (26))){
var inst_17789 = (state_17857[(29)]);
var inst_17843 = (state_17857[(2)]);
var inst_17844 = cljs.core.seq.call(null,inst_17789);
var state_17857__$1 = (function (){var statearr_17922 = state_17857;
(statearr_17922[(31)] = inst_17843);

return statearr_17922;
})();
if(inst_17844){
var statearr_17923_17987 = state_17857__$1;
(statearr_17923_17987[(1)] = (42));

} else {
var statearr_17924_17988 = state_17857__$1;
(statearr_17924_17988[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (16))){
var inst_17758 = (state_17857[(7)]);
var inst_17760 = cljs.core.chunked_seq_QMARK_.call(null,inst_17758);
var state_17857__$1 = state_17857;
if(inst_17760){
var statearr_17925_17989 = state_17857__$1;
(statearr_17925_17989[(1)] = (19));

} else {
var statearr_17926_17990 = state_17857__$1;
(statearr_17926_17990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (38))){
var inst_17836 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17927_17991 = state_17857__$1;
(statearr_17927_17991[(2)] = inst_17836);

(statearr_17927_17991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (30))){
var state_17857__$1 = state_17857;
var statearr_17928_17992 = state_17857__$1;
(statearr_17928_17992[(2)] = null);

(statearr_17928_17992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (10))){
var inst_17739 = (state_17857[(13)]);
var inst_17741 = (state_17857[(17)]);
var inst_17747 = cljs.core._nth.call(null,inst_17739,inst_17741);
var inst_17748 = cljs.core.nth.call(null,inst_17747,(0),null);
var inst_17749 = cljs.core.nth.call(null,inst_17747,(1),null);
var state_17857__$1 = (function (){var statearr_17929 = state_17857;
(statearr_17929[(26)] = inst_17748);

return statearr_17929;
})();
if(cljs.core.truth_(inst_17749)){
var statearr_17930_17993 = state_17857__$1;
(statearr_17930_17993[(1)] = (13));

} else {
var statearr_17931_17994 = state_17857__$1;
(statearr_17931_17994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (18))){
var inst_17782 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17932_17995 = state_17857__$1;
(statearr_17932_17995[(2)] = inst_17782);

(statearr_17932_17995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (42))){
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17857__$1,(45),dchan);
} else {
if((state_val_17858 === (37))){
var inst_17729 = (state_17857[(11)]);
var inst_17825 = (state_17857[(23)]);
var inst_17816 = (state_17857[(25)]);
var inst_17825__$1 = cljs.core.first.call(null,inst_17816);
var inst_17826 = cljs.core.async.put_BANG_.call(null,inst_17825__$1,inst_17729,done);
var state_17857__$1 = (function (){var statearr_17933 = state_17857;
(statearr_17933[(23)] = inst_17825__$1);

return statearr_17933;
})();
if(cljs.core.truth_(inst_17826)){
var statearr_17934_17996 = state_17857__$1;
(statearr_17934_17996[(1)] = (39));

} else {
var statearr_17935_17997 = state_17857__$1;
(statearr_17935_17997[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17858 === (8))){
var inst_17740 = (state_17857[(16)]);
var inst_17741 = (state_17857[(17)]);
var inst_17743 = (inst_17741 < inst_17740);
var inst_17744 = inst_17743;
var state_17857__$1 = state_17857;
if(cljs.core.truth_(inst_17744)){
var statearr_17936_17998 = state_17857__$1;
(statearr_17936_17998[(1)] = (10));

} else {
var statearr_17937_17999 = state_17857__$1;
(statearr_17937_17999[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___17945,cs,m,dchan,dctr,done))
;
return ((function (switch__11250__auto__,c__11315__auto___17945,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = state_machine__11251__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var state_machine__11251__auto____1 = (function (state_17857){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_17857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e17942){if((e17942 instanceof Object)){
var ex__11254__auto__ = e17942;
var statearr_17943_18000 = state_17857;
(statearr_17943_18000[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_17857;
state_17857 = G__18001;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_17857){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_17857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___17945,cs,m,dchan,dctr,done))
})();
var state__11317__auto__ = (function (){var statearr_17944 = f__11316__auto__.call(null);
(statearr_17944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___17945);

return statearr_17944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___17945,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18003 = {};
return obj18003;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__8018__auto__ = m;
if(and__8018__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8674__auto__ = (((m == null))?null:m);
return (function (){var or__8030__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18123 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18123 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18124){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18124 = meta18124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18123.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18125){
var self__ = this;
var _18125__$1 = this;
return self__.meta18124;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18125,meta18124__$1){
var self__ = this;
var _18125__$1 = this;
return (new cljs.core.async.t18123(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18124__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18123.cljs$lang$type = true;

cljs.core.async.t18123.cljs$lang$ctorStr = "cljs.core.async/t18123";

cljs.core.async.t18123.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t18123");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18123 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18124){
return (new cljs.core.async.t18123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18124));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18123(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__11315__auto___18242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18195){
var state_val_18196 = (state_18195[(1)]);
if((state_val_18196 === (7))){
var inst_18139 = (state_18195[(7)]);
var inst_18144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18139);
var state_18195__$1 = state_18195;
var statearr_18197_18243 = state_18195__$1;
(statearr_18197_18243[(2)] = inst_18144);

(statearr_18197_18243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (20))){
var inst_18154 = (state_18195[(8)]);
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18195__$1,(23),out,inst_18154);
} else {
if((state_val_18196 === (1))){
var inst_18129 = (state_18195[(9)]);
var inst_18129__$1 = calc_state.call(null);
var inst_18130 = cljs.core.seq_QMARK_.call(null,inst_18129__$1);
var state_18195__$1 = (function (){var statearr_18198 = state_18195;
(statearr_18198[(9)] = inst_18129__$1);

return statearr_18198;
})();
if(inst_18130){
var statearr_18199_18244 = state_18195__$1;
(statearr_18199_18244[(1)] = (2));

} else {
var statearr_18200_18245 = state_18195__$1;
(statearr_18200_18245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (24))){
var inst_18147 = (state_18195[(10)]);
var inst_18139 = inst_18147;
var state_18195__$1 = (function (){var statearr_18201 = state_18195;
(statearr_18201[(7)] = inst_18139);

return statearr_18201;
})();
var statearr_18202_18246 = state_18195__$1;
(statearr_18202_18246[(2)] = null);

(statearr_18202_18246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (4))){
var inst_18129 = (state_18195[(9)]);
var inst_18135 = (state_18195[(2)]);
var inst_18136 = cljs.core.get.call(null,inst_18135,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18137 = cljs.core.get.call(null,inst_18135,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18138 = cljs.core.get.call(null,inst_18135,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18139 = inst_18129;
var state_18195__$1 = (function (){var statearr_18203 = state_18195;
(statearr_18203[(7)] = inst_18139);

(statearr_18203[(11)] = inst_18137);

(statearr_18203[(12)] = inst_18138);

(statearr_18203[(13)] = inst_18136);

return statearr_18203;
})();
var statearr_18204_18247 = state_18195__$1;
(statearr_18204_18247[(2)] = null);

(statearr_18204_18247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (15))){
var state_18195__$1 = state_18195;
var statearr_18205_18248 = state_18195__$1;
(statearr_18205_18248[(2)] = null);

(statearr_18205_18248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (21))){
var inst_18147 = (state_18195[(10)]);
var inst_18139 = inst_18147;
var state_18195__$1 = (function (){var statearr_18206 = state_18195;
(statearr_18206[(7)] = inst_18139);

return statearr_18206;
})();
var statearr_18207_18249 = state_18195__$1;
(statearr_18207_18249[(2)] = null);

(statearr_18207_18249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (13))){
var inst_18191 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18208_18250 = state_18195__$1;
(statearr_18208_18250[(2)] = inst_18191);

(statearr_18208_18250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (22))){
var inst_18189 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18209_18251 = state_18195__$1;
(statearr_18209_18251[(2)] = inst_18189);

(statearr_18209_18251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (6))){
var inst_18193 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18195__$1,inst_18193);
} else {
if((state_val_18196 === (25))){
var state_18195__$1 = state_18195;
var statearr_18210_18252 = state_18195__$1;
(statearr_18210_18252[(2)] = null);

(statearr_18210_18252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (17))){
var inst_18169 = (state_18195[(14)]);
var state_18195__$1 = state_18195;
var statearr_18211_18253 = state_18195__$1;
(statearr_18211_18253[(2)] = inst_18169);

(statearr_18211_18253[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (3))){
var inst_18129 = (state_18195[(9)]);
var state_18195__$1 = state_18195;
var statearr_18212_18254 = state_18195__$1;
(statearr_18212_18254[(2)] = inst_18129);

(statearr_18212_18254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (12))){
var inst_18169 = (state_18195[(14)]);
var inst_18150 = (state_18195[(15)]);
var inst_18155 = (state_18195[(16)]);
var inst_18169__$1 = inst_18150.call(null,inst_18155);
var state_18195__$1 = (function (){var statearr_18213 = state_18195;
(statearr_18213[(14)] = inst_18169__$1);

return statearr_18213;
})();
if(cljs.core.truth_(inst_18169__$1)){
var statearr_18214_18255 = state_18195__$1;
(statearr_18214_18255[(1)] = (17));

} else {
var statearr_18215_18256 = state_18195__$1;
(statearr_18215_18256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (2))){
var inst_18129 = (state_18195[(9)]);
var inst_18132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18129);
var state_18195__$1 = state_18195;
var statearr_18216_18257 = state_18195__$1;
(statearr_18216_18257[(2)] = inst_18132);

(statearr_18216_18257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (23))){
var inst_18180 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
if(cljs.core.truth_(inst_18180)){
var statearr_18217_18258 = state_18195__$1;
(statearr_18217_18258[(1)] = (24));

} else {
var statearr_18218_18259 = state_18195__$1;
(statearr_18218_18259[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (19))){
var inst_18177 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
if(cljs.core.truth_(inst_18177)){
var statearr_18219_18260 = state_18195__$1;
(statearr_18219_18260[(1)] = (20));

} else {
var statearr_18220_18261 = state_18195__$1;
(statearr_18220_18261[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (11))){
var inst_18154 = (state_18195[(8)]);
var inst_18160 = (inst_18154 == null);
var state_18195__$1 = state_18195;
if(cljs.core.truth_(inst_18160)){
var statearr_18221_18262 = state_18195__$1;
(statearr_18221_18262[(1)] = (14));

} else {
var statearr_18222_18263 = state_18195__$1;
(statearr_18222_18263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (9))){
var inst_18147 = (state_18195[(10)]);
var inst_18147__$1 = (state_18195[(2)]);
var inst_18148 = cljs.core.get.call(null,inst_18147__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18149 = cljs.core.get.call(null,inst_18147__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18150 = cljs.core.get.call(null,inst_18147__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18195__$1 = (function (){var statearr_18223 = state_18195;
(statearr_18223[(15)] = inst_18150);

(statearr_18223[(10)] = inst_18147__$1);

(statearr_18223[(17)] = inst_18149);

return statearr_18223;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18195__$1,(10),inst_18148);
} else {
if((state_val_18196 === (5))){
var inst_18139 = (state_18195[(7)]);
var inst_18142 = cljs.core.seq_QMARK_.call(null,inst_18139);
var state_18195__$1 = state_18195;
if(inst_18142){
var statearr_18224_18264 = state_18195__$1;
(statearr_18224_18264[(1)] = (7));

} else {
var statearr_18225_18265 = state_18195__$1;
(statearr_18225_18265[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (14))){
var inst_18155 = (state_18195[(16)]);
var inst_18162 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18155);
var state_18195__$1 = state_18195;
var statearr_18226_18266 = state_18195__$1;
(statearr_18226_18266[(2)] = inst_18162);

(statearr_18226_18266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (26))){
var inst_18185 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18227_18267 = state_18195__$1;
(statearr_18227_18267[(2)] = inst_18185);

(statearr_18227_18267[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (16))){
var inst_18165 = (state_18195[(2)]);
var inst_18166 = calc_state.call(null);
var inst_18139 = inst_18166;
var state_18195__$1 = (function (){var statearr_18228 = state_18195;
(statearr_18228[(7)] = inst_18139);

(statearr_18228[(18)] = inst_18165);

return statearr_18228;
})();
var statearr_18229_18268 = state_18195__$1;
(statearr_18229_18268[(2)] = null);

(statearr_18229_18268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (10))){
var inst_18155 = (state_18195[(16)]);
var inst_18154 = (state_18195[(8)]);
var inst_18153 = (state_18195[(2)]);
var inst_18154__$1 = cljs.core.nth.call(null,inst_18153,(0),null);
var inst_18155__$1 = cljs.core.nth.call(null,inst_18153,(1),null);
var inst_18156 = (inst_18154__$1 == null);
var inst_18157 = cljs.core._EQ_.call(null,inst_18155__$1,change);
var inst_18158 = (inst_18156) || (inst_18157);
var state_18195__$1 = (function (){var statearr_18230 = state_18195;
(statearr_18230[(16)] = inst_18155__$1);

(statearr_18230[(8)] = inst_18154__$1);

return statearr_18230;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18231_18269 = state_18195__$1;
(statearr_18231_18269[(1)] = (11));

} else {
var statearr_18232_18270 = state_18195__$1;
(statearr_18232_18270[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (18))){
var inst_18150 = (state_18195[(15)]);
var inst_18155 = (state_18195[(16)]);
var inst_18149 = (state_18195[(17)]);
var inst_18172 = cljs.core.empty_QMARK_.call(null,inst_18150);
var inst_18173 = inst_18149.call(null,inst_18155);
var inst_18174 = cljs.core.not.call(null,inst_18173);
var inst_18175 = (inst_18172) && (inst_18174);
var state_18195__$1 = state_18195;
var statearr_18233_18271 = state_18195__$1;
(statearr_18233_18271[(2)] = inst_18175);

(statearr_18233_18271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (8))){
var inst_18139 = (state_18195[(7)]);
var state_18195__$1 = state_18195;
var statearr_18234_18272 = state_18195__$1;
(statearr_18234_18272[(2)] = inst_18139);

(statearr_18234_18272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11250__auto__,c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_18238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18238[(0)] = state_machine__11251__auto__);

(statearr_18238[(1)] = (1));

return statearr_18238;
});
var state_machine__11251__auto____1 = (function (state_18195){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e18239){if((e18239 instanceof Object)){
var ex__11254__auto__ = e18239;
var statearr_18240_18273 = state_18195;
(statearr_18240_18273[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_18195;
state_18195 = G__18274;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18195){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11317__auto__ = (function (){var statearr_18241 = f__11316__auto__.call(null);
(statearr_18241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___18242);

return statearr_18241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___18242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj18276 = {};
return obj18276;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__8018__auto__ = p;
if(and__8018__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__8018__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8674__auto__ = (((p == null))?null:p);
return (function (){var or__8030__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__8018__auto__ = p;
if(and__8018__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__8018__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8674__auto__ = (((p == null))?null:p);
return (function (){var or__8030__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__8018__auto__ = p;
if(and__8018__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__8018__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8674__auto__ = (((p == null))?null:p);
return (function (){var or__8030__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__8018__auto__ = p;
if(and__8018__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__8018__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8674__auto__ = (((p == null))?null:p);
return (function (){var or__8030__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8674__auto__)]);
if(or__8030__auto__){
return or__8030__auto__;
} else {
var or__8030__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__8030__auto____$1){
return or__8030__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8030__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8030__auto__,mults){
return (function (p1__18277_SHARP_){
if(cljs.core.truth_(p1__18277_SHARP_.call(null,topic))){
return p1__18277_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8030__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18392 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18392 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18393){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18393 = meta18393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18392.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18394){
var self__ = this;
var _18394__$1 = this;
return self__.meta18393;
});})(mults,ensure_mult))
;

cljs.core.async.t18392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18394,meta18393__$1){
var self__ = this;
var _18394__$1 = this;
return (new cljs.core.async.t18392(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18393__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18392.cljs$lang$type = true;

cljs.core.async.t18392.cljs$lang$ctorStr = "cljs.core.async/t18392";

cljs.core.async.t18392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t18392");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18392 = ((function (mults,ensure_mult){
return (function __GT_t18392(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18393){
return (new cljs.core.async.t18392(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18393));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18392(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/moses/Projects/chessjure/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__11315__auto___18506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___18506,mults,ensure_mult,p){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___18506,mults,ensure_mult,p){
return (function (state_18462){
var state_val_18463 = (state_18462[(1)]);
if((state_val_18463 === (7))){
var inst_18458 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18464_18507 = state_18462__$1;
(statearr_18464_18507[(2)] = inst_18458);

(statearr_18464_18507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (20))){
var state_18462__$1 = state_18462;
var statearr_18465_18508 = state_18462__$1;
(statearr_18465_18508[(2)] = null);

(statearr_18465_18508[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (1))){
var state_18462__$1 = state_18462;
var statearr_18466_18509 = state_18462__$1;
(statearr_18466_18509[(2)] = null);

(statearr_18466_18509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (4))){
var inst_18397 = (state_18462[(7)]);
var inst_18397__$1 = (state_18462[(2)]);
var inst_18398 = (inst_18397__$1 == null);
var state_18462__$1 = (function (){var statearr_18467 = state_18462;
(statearr_18467[(7)] = inst_18397__$1);

return statearr_18467;
})();
if(cljs.core.truth_(inst_18398)){
var statearr_18468_18510 = state_18462__$1;
(statearr_18468_18510[(1)] = (5));

} else {
var statearr_18469_18511 = state_18462__$1;
(statearr_18469_18511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (15))){
var inst_18439 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18470_18512 = state_18462__$1;
(statearr_18470_18512[(2)] = inst_18439);

(statearr_18470_18512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (21))){
var inst_18445 = (state_18462[(8)]);
var inst_18453 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18445);
var state_18462__$1 = state_18462;
var statearr_18471_18513 = state_18462__$1;
(statearr_18471_18513[(2)] = inst_18453);

(statearr_18471_18513[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (13))){
var inst_18421 = (state_18462[(9)]);
var inst_18423 = cljs.core.chunked_seq_QMARK_.call(null,inst_18421);
var state_18462__$1 = state_18462;
if(inst_18423){
var statearr_18472_18514 = state_18462__$1;
(statearr_18472_18514[(1)] = (16));

} else {
var statearr_18473_18515 = state_18462__$1;
(statearr_18473_18515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (22))){
var inst_18455 = (state_18462[(2)]);
var state_18462__$1 = (function (){var statearr_18474 = state_18462;
(statearr_18474[(10)] = inst_18455);

return statearr_18474;
})();
var statearr_18475_18516 = state_18462__$1;
(statearr_18475_18516[(2)] = null);

(statearr_18475_18516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (6))){
var inst_18445 = (state_18462[(8)]);
var inst_18397 = (state_18462[(7)]);
var inst_18445__$1 = topic_fn.call(null,inst_18397);
var inst_18446 = cljs.core.deref.call(null,mults);
var inst_18447 = cljs.core.get.call(null,inst_18446,inst_18445__$1);
var inst_18448 = cljs.core.async.muxch_STAR_.call(null,inst_18447);
var state_18462__$1 = (function (){var statearr_18476 = state_18462;
(statearr_18476[(8)] = inst_18445__$1);

return statearr_18476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18462__$1,(19),inst_18448,inst_18397);
} else {
if((state_val_18463 === (17))){
var inst_18421 = (state_18462[(9)]);
var inst_18430 = cljs.core.first.call(null,inst_18421);
var inst_18431 = cljs.core.async.muxch_STAR_.call(null,inst_18430);
var inst_18432 = cljs.core.async.close_BANG_.call(null,inst_18431);
var inst_18433 = cljs.core.next.call(null,inst_18421);
var inst_18407 = inst_18433;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18462__$1 = (function (){var statearr_18477 = state_18462;
(statearr_18477[(11)] = inst_18408);

(statearr_18477[(12)] = inst_18410);

(statearr_18477[(13)] = inst_18432);

(statearr_18477[(14)] = inst_18409);

(statearr_18477[(15)] = inst_18407);

return statearr_18477;
})();
var statearr_18478_18517 = state_18462__$1;
(statearr_18478_18517[(2)] = null);

(statearr_18478_18517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (3))){
var inst_18460 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18462__$1,inst_18460);
} else {
if((state_val_18463 === (12))){
var inst_18441 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18479_18518 = state_18462__$1;
(statearr_18479_18518[(2)] = inst_18441);

(statearr_18479_18518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (2))){
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18462__$1,(4),ch);
} else {
if((state_val_18463 === (19))){
var inst_18450 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
if(cljs.core.truth_(inst_18450)){
var statearr_18480_18519 = state_18462__$1;
(statearr_18480_18519[(1)] = (20));

} else {
var statearr_18481_18520 = state_18462__$1;
(statearr_18481_18520[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (11))){
var inst_18421 = (state_18462[(9)]);
var inst_18407 = (state_18462[(15)]);
var inst_18421__$1 = cljs.core.seq.call(null,inst_18407);
var state_18462__$1 = (function (){var statearr_18482 = state_18462;
(statearr_18482[(9)] = inst_18421__$1);

return statearr_18482;
})();
if(inst_18421__$1){
var statearr_18483_18521 = state_18462__$1;
(statearr_18483_18521[(1)] = (13));

} else {
var statearr_18484_18522 = state_18462__$1;
(statearr_18484_18522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (9))){
var inst_18443 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18485_18523 = state_18462__$1;
(statearr_18485_18523[(2)] = inst_18443);

(statearr_18485_18523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (5))){
var inst_18404 = cljs.core.deref.call(null,mults);
var inst_18405 = cljs.core.vals.call(null,inst_18404);
var inst_18406 = cljs.core.seq.call(null,inst_18405);
var inst_18407 = inst_18406;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18462__$1 = (function (){var statearr_18486 = state_18462;
(statearr_18486[(11)] = inst_18408);

(statearr_18486[(12)] = inst_18410);

(statearr_18486[(14)] = inst_18409);

(statearr_18486[(15)] = inst_18407);

return statearr_18486;
})();
var statearr_18487_18524 = state_18462__$1;
(statearr_18487_18524[(2)] = null);

(statearr_18487_18524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (14))){
var state_18462__$1 = state_18462;
var statearr_18491_18525 = state_18462__$1;
(statearr_18491_18525[(2)] = null);

(statearr_18491_18525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (16))){
var inst_18421 = (state_18462[(9)]);
var inst_18425 = cljs.core.chunk_first.call(null,inst_18421);
var inst_18426 = cljs.core.chunk_rest.call(null,inst_18421);
var inst_18427 = cljs.core.count.call(null,inst_18425);
var inst_18407 = inst_18426;
var inst_18408 = inst_18425;
var inst_18409 = inst_18427;
var inst_18410 = (0);
var state_18462__$1 = (function (){var statearr_18492 = state_18462;
(statearr_18492[(11)] = inst_18408);

(statearr_18492[(12)] = inst_18410);

(statearr_18492[(14)] = inst_18409);

(statearr_18492[(15)] = inst_18407);

return statearr_18492;
})();
var statearr_18493_18526 = state_18462__$1;
(statearr_18493_18526[(2)] = null);

(statearr_18493_18526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (10))){
var inst_18408 = (state_18462[(11)]);
var inst_18410 = (state_18462[(12)]);
var inst_18409 = (state_18462[(14)]);
var inst_18407 = (state_18462[(15)]);
var inst_18415 = cljs.core._nth.call(null,inst_18408,inst_18410);
var inst_18416 = cljs.core.async.muxch_STAR_.call(null,inst_18415);
var inst_18417 = cljs.core.async.close_BANG_.call(null,inst_18416);
var inst_18418 = (inst_18410 + (1));
var tmp18488 = inst_18408;
var tmp18489 = inst_18409;
var tmp18490 = inst_18407;
var inst_18407__$1 = tmp18490;
var inst_18408__$1 = tmp18488;
var inst_18409__$1 = tmp18489;
var inst_18410__$1 = inst_18418;
var state_18462__$1 = (function (){var statearr_18494 = state_18462;
(statearr_18494[(11)] = inst_18408__$1);

(statearr_18494[(12)] = inst_18410__$1);

(statearr_18494[(16)] = inst_18417);

(statearr_18494[(14)] = inst_18409__$1);

(statearr_18494[(15)] = inst_18407__$1);

return statearr_18494;
})();
var statearr_18495_18527 = state_18462__$1;
(statearr_18495_18527[(2)] = null);

(statearr_18495_18527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (18))){
var inst_18436 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18496_18528 = state_18462__$1;
(statearr_18496_18528[(2)] = inst_18436);

(statearr_18496_18528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (8))){
var inst_18410 = (state_18462[(12)]);
var inst_18409 = (state_18462[(14)]);
var inst_18412 = (inst_18410 < inst_18409);
var inst_18413 = inst_18412;
var state_18462__$1 = state_18462;
if(cljs.core.truth_(inst_18413)){
var statearr_18497_18529 = state_18462__$1;
(statearr_18497_18529[(1)] = (10));

} else {
var statearr_18498_18530 = state_18462__$1;
(statearr_18498_18530[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___18506,mults,ensure_mult,p))
;
return ((function (switch__11250__auto__,c__11315__auto___18506,mults,ensure_mult,p){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_18502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18502[(0)] = state_machine__11251__auto__);

(statearr_18502[(1)] = (1));

return statearr_18502;
});
var state_machine__11251__auto____1 = (function (state_18462){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e18503){if((e18503 instanceof Object)){
var ex__11254__auto__ = e18503;
var statearr_18504_18531 = state_18462;
(statearr_18504_18531[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18532 = state_18462;
state_18462 = G__18532;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18462){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___18506,mults,ensure_mult,p))
})();
var state__11317__auto__ = (function (){var statearr_18505 = f__11316__auto__.call(null);
(statearr_18505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___18506);

return statearr_18505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___18506,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11315__auto___18669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18639){
var state_val_18640 = (state_18639[(1)]);
if((state_val_18640 === (7))){
var state_18639__$1 = state_18639;
var statearr_18641_18670 = state_18639__$1;
(statearr_18641_18670[(2)] = null);

(statearr_18641_18670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (1))){
var state_18639__$1 = state_18639;
var statearr_18642_18671 = state_18639__$1;
(statearr_18642_18671[(2)] = null);

(statearr_18642_18671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (4))){
var inst_18603 = (state_18639[(7)]);
var inst_18605 = (inst_18603 < cnt);
var state_18639__$1 = state_18639;
if(cljs.core.truth_(inst_18605)){
var statearr_18643_18672 = state_18639__$1;
(statearr_18643_18672[(1)] = (6));

} else {
var statearr_18644_18673 = state_18639__$1;
(statearr_18644_18673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (15))){
var inst_18635 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18645_18674 = state_18639__$1;
(statearr_18645_18674[(2)] = inst_18635);

(statearr_18645_18674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (13))){
var inst_18628 = cljs.core.async.close_BANG_.call(null,out);
var state_18639__$1 = state_18639;
var statearr_18646_18675 = state_18639__$1;
(statearr_18646_18675[(2)] = inst_18628);

(statearr_18646_18675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (6))){
var state_18639__$1 = state_18639;
var statearr_18647_18676 = state_18639__$1;
(statearr_18647_18676[(2)] = null);

(statearr_18647_18676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (3))){
var inst_18637 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18639__$1,inst_18637);
} else {
if((state_val_18640 === (12))){
var inst_18625 = (state_18639[(8)]);
var inst_18625__$1 = (state_18639[(2)]);
var inst_18626 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18625__$1);
var state_18639__$1 = (function (){var statearr_18648 = state_18639;
(statearr_18648[(8)] = inst_18625__$1);

return statearr_18648;
})();
if(cljs.core.truth_(inst_18626)){
var statearr_18649_18677 = state_18639__$1;
(statearr_18649_18677[(1)] = (13));

} else {
var statearr_18650_18678 = state_18639__$1;
(statearr_18650_18678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (2))){
var inst_18602 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18603 = (0);
var state_18639__$1 = (function (){var statearr_18651 = state_18639;
(statearr_18651[(9)] = inst_18602);

(statearr_18651[(7)] = inst_18603);

return statearr_18651;
})();
var statearr_18652_18679 = state_18639__$1;
(statearr_18652_18679[(2)] = null);

(statearr_18652_18679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (11))){
var inst_18603 = (state_18639[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18639,(10),Object,null,(9));
var inst_18612 = chs__$1.call(null,inst_18603);
var inst_18613 = done.call(null,inst_18603);
var inst_18614 = cljs.core.async.take_BANG_.call(null,inst_18612,inst_18613);
var state_18639__$1 = state_18639;
var statearr_18653_18680 = state_18639__$1;
(statearr_18653_18680[(2)] = inst_18614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (9))){
var inst_18603 = (state_18639[(7)]);
var inst_18616 = (state_18639[(2)]);
var inst_18617 = (inst_18603 + (1));
var inst_18603__$1 = inst_18617;
var state_18639__$1 = (function (){var statearr_18654 = state_18639;
(statearr_18654[(10)] = inst_18616);

(statearr_18654[(7)] = inst_18603__$1);

return statearr_18654;
})();
var statearr_18655_18681 = state_18639__$1;
(statearr_18655_18681[(2)] = null);

(statearr_18655_18681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (5))){
var inst_18623 = (state_18639[(2)]);
var state_18639__$1 = (function (){var statearr_18656 = state_18639;
(statearr_18656[(11)] = inst_18623);

return statearr_18656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18639__$1,(12),dchan);
} else {
if((state_val_18640 === (14))){
var inst_18625 = (state_18639[(8)]);
var inst_18630 = cljs.core.apply.call(null,f,inst_18625);
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18639__$1,(16),out,inst_18630);
} else {
if((state_val_18640 === (16))){
var inst_18632 = (state_18639[(2)]);
var state_18639__$1 = (function (){var statearr_18657 = state_18639;
(statearr_18657[(12)] = inst_18632);

return statearr_18657;
})();
var statearr_18658_18682 = state_18639__$1;
(statearr_18658_18682[(2)] = null);

(statearr_18658_18682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (10))){
var inst_18607 = (state_18639[(2)]);
var inst_18608 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18639__$1 = (function (){var statearr_18659 = state_18639;
(statearr_18659[(13)] = inst_18607);

return statearr_18659;
})();
var statearr_18660_18683 = state_18639__$1;
(statearr_18660_18683[(2)] = inst_18608);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18640 === (8))){
var inst_18621 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18661_18684 = state_18639__$1;
(statearr_18661_18684[(2)] = inst_18621);

(statearr_18661_18684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11250__auto__,c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_18665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18665[(0)] = state_machine__11251__auto__);

(statearr_18665[(1)] = (1));

return statearr_18665;
});
var state_machine__11251__auto____1 = (function (state_18639){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e18666){if((e18666 instanceof Object)){
var ex__11254__auto__ = e18666;
var statearr_18667_18685 = state_18639;
(statearr_18667_18685[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18686 = state_18639;
state_18639 = G__18686;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18639){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11317__auto__ = (function (){var statearr_18668 = f__11316__auto__.call(null);
(statearr_18668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___18669);

return statearr_18668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___18669,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___18794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___18794,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___18794,out){
return (function (state_18770){
var state_val_18771 = (state_18770[(1)]);
if((state_val_18771 === (7))){
var inst_18749 = (state_18770[(7)]);
var inst_18750 = (state_18770[(8)]);
var inst_18749__$1 = (state_18770[(2)]);
var inst_18750__$1 = cljs.core.nth.call(null,inst_18749__$1,(0),null);
var inst_18751 = cljs.core.nth.call(null,inst_18749__$1,(1),null);
var inst_18752 = (inst_18750__$1 == null);
var state_18770__$1 = (function (){var statearr_18772 = state_18770;
(statearr_18772[(9)] = inst_18751);

(statearr_18772[(7)] = inst_18749__$1);

(statearr_18772[(8)] = inst_18750__$1);

return statearr_18772;
})();
if(cljs.core.truth_(inst_18752)){
var statearr_18773_18795 = state_18770__$1;
(statearr_18773_18795[(1)] = (8));

} else {
var statearr_18774_18796 = state_18770__$1;
(statearr_18774_18796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (1))){
var inst_18741 = cljs.core.vec.call(null,chs);
var inst_18742 = inst_18741;
var state_18770__$1 = (function (){var statearr_18775 = state_18770;
(statearr_18775[(10)] = inst_18742);

return statearr_18775;
})();
var statearr_18776_18797 = state_18770__$1;
(statearr_18776_18797[(2)] = null);

(statearr_18776_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (4))){
var inst_18742 = (state_18770[(10)]);
var state_18770__$1 = state_18770;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18770__$1,(7),inst_18742);
} else {
if((state_val_18771 === (6))){
var inst_18766 = (state_18770[(2)]);
var state_18770__$1 = state_18770;
var statearr_18777_18798 = state_18770__$1;
(statearr_18777_18798[(2)] = inst_18766);

(statearr_18777_18798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (3))){
var inst_18768 = (state_18770[(2)]);
var state_18770__$1 = state_18770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18770__$1,inst_18768);
} else {
if((state_val_18771 === (2))){
var inst_18742 = (state_18770[(10)]);
var inst_18744 = cljs.core.count.call(null,inst_18742);
var inst_18745 = (inst_18744 > (0));
var state_18770__$1 = state_18770;
if(cljs.core.truth_(inst_18745)){
var statearr_18779_18799 = state_18770__$1;
(statearr_18779_18799[(1)] = (4));

} else {
var statearr_18780_18800 = state_18770__$1;
(statearr_18780_18800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (11))){
var inst_18742 = (state_18770[(10)]);
var inst_18759 = (state_18770[(2)]);
var tmp18778 = inst_18742;
var inst_18742__$1 = tmp18778;
var state_18770__$1 = (function (){var statearr_18781 = state_18770;
(statearr_18781[(10)] = inst_18742__$1);

(statearr_18781[(11)] = inst_18759);

return statearr_18781;
})();
var statearr_18782_18801 = state_18770__$1;
(statearr_18782_18801[(2)] = null);

(statearr_18782_18801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (9))){
var inst_18750 = (state_18770[(8)]);
var state_18770__$1 = state_18770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18770__$1,(11),out,inst_18750);
} else {
if((state_val_18771 === (5))){
var inst_18764 = cljs.core.async.close_BANG_.call(null,out);
var state_18770__$1 = state_18770;
var statearr_18783_18802 = state_18770__$1;
(statearr_18783_18802[(2)] = inst_18764);

(statearr_18783_18802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (10))){
var inst_18762 = (state_18770[(2)]);
var state_18770__$1 = state_18770;
var statearr_18784_18803 = state_18770__$1;
(statearr_18784_18803[(2)] = inst_18762);

(statearr_18784_18803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (8))){
var inst_18751 = (state_18770[(9)]);
var inst_18742 = (state_18770[(10)]);
var inst_18749 = (state_18770[(7)]);
var inst_18750 = (state_18770[(8)]);
var inst_18754 = (function (){var c = inst_18751;
var v = inst_18750;
var vec__18747 = inst_18749;
var cs = inst_18742;
return ((function (c,v,vec__18747,cs,inst_18751,inst_18742,inst_18749,inst_18750,state_val_18771,c__11315__auto___18794,out){
return (function (p1__18687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18687_SHARP_);
});
;})(c,v,vec__18747,cs,inst_18751,inst_18742,inst_18749,inst_18750,state_val_18771,c__11315__auto___18794,out))
})();
var inst_18755 = cljs.core.filterv.call(null,inst_18754,inst_18742);
var inst_18742__$1 = inst_18755;
var state_18770__$1 = (function (){var statearr_18785 = state_18770;
(statearr_18785[(10)] = inst_18742__$1);

return statearr_18785;
})();
var statearr_18786_18804 = state_18770__$1;
(statearr_18786_18804[(2)] = null);

(statearr_18786_18804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___18794,out))
;
return ((function (switch__11250__auto__,c__11315__auto___18794,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_18790 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18790[(0)] = state_machine__11251__auto__);

(statearr_18790[(1)] = (1));

return statearr_18790;
});
var state_machine__11251__auto____1 = (function (state_18770){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e18791){if((e18791 instanceof Object)){
var ex__11254__auto__ = e18791;
var statearr_18792_18805 = state_18770;
(statearr_18792_18805[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_18770;
state_18770 = G__18806;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18770){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___18794,out))
})();
var state__11317__auto__ = (function (){var statearr_18793 = f__11316__auto__.call(null);
(statearr_18793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___18794);

return statearr_18793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___18794,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___18899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___18899,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___18899,out){
return (function (state_18876){
var state_val_18877 = (state_18876[(1)]);
if((state_val_18877 === (7))){
var inst_18858 = (state_18876[(7)]);
var inst_18858__$1 = (state_18876[(2)]);
var inst_18859 = (inst_18858__$1 == null);
var inst_18860 = cljs.core.not.call(null,inst_18859);
var state_18876__$1 = (function (){var statearr_18878 = state_18876;
(statearr_18878[(7)] = inst_18858__$1);

return statearr_18878;
})();
if(inst_18860){
var statearr_18879_18900 = state_18876__$1;
(statearr_18879_18900[(1)] = (8));

} else {
var statearr_18880_18901 = state_18876__$1;
(statearr_18880_18901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (1))){
var inst_18853 = (0);
var state_18876__$1 = (function (){var statearr_18881 = state_18876;
(statearr_18881[(8)] = inst_18853);

return statearr_18881;
})();
var statearr_18882_18902 = state_18876__$1;
(statearr_18882_18902[(2)] = null);

(statearr_18882_18902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (4))){
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18876__$1,(7),ch);
} else {
if((state_val_18877 === (6))){
var inst_18871 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
var statearr_18883_18903 = state_18876__$1;
(statearr_18883_18903[(2)] = inst_18871);

(statearr_18883_18903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (3))){
var inst_18873 = (state_18876[(2)]);
var inst_18874 = cljs.core.async.close_BANG_.call(null,out);
var state_18876__$1 = (function (){var statearr_18884 = state_18876;
(statearr_18884[(9)] = inst_18873);

return statearr_18884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18876__$1,inst_18874);
} else {
if((state_val_18877 === (2))){
var inst_18853 = (state_18876[(8)]);
var inst_18855 = (inst_18853 < n);
var state_18876__$1 = state_18876;
if(cljs.core.truth_(inst_18855)){
var statearr_18885_18904 = state_18876__$1;
(statearr_18885_18904[(1)] = (4));

} else {
var statearr_18886_18905 = state_18876__$1;
(statearr_18886_18905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (11))){
var inst_18853 = (state_18876[(8)]);
var inst_18863 = (state_18876[(2)]);
var inst_18864 = (inst_18853 + (1));
var inst_18853__$1 = inst_18864;
var state_18876__$1 = (function (){var statearr_18887 = state_18876;
(statearr_18887[(8)] = inst_18853__$1);

(statearr_18887[(10)] = inst_18863);

return statearr_18887;
})();
var statearr_18888_18906 = state_18876__$1;
(statearr_18888_18906[(2)] = null);

(statearr_18888_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (9))){
var state_18876__$1 = state_18876;
var statearr_18889_18907 = state_18876__$1;
(statearr_18889_18907[(2)] = null);

(statearr_18889_18907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (5))){
var state_18876__$1 = state_18876;
var statearr_18890_18908 = state_18876__$1;
(statearr_18890_18908[(2)] = null);

(statearr_18890_18908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (10))){
var inst_18868 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
var statearr_18891_18909 = state_18876__$1;
(statearr_18891_18909[(2)] = inst_18868);

(statearr_18891_18909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (8))){
var inst_18858 = (state_18876[(7)]);
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18876__$1,(11),out,inst_18858);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___18899,out))
;
return ((function (switch__11250__auto__,c__11315__auto___18899,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_18895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18895[(0)] = state_machine__11251__auto__);

(statearr_18895[(1)] = (1));

return statearr_18895;
});
var state_machine__11251__auto____1 = (function (state_18876){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e18896){if((e18896 instanceof Object)){
var ex__11254__auto__ = e18896;
var statearr_18897_18910 = state_18876;
(statearr_18897_18910[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18911 = state_18876;
state_18876 = G__18911;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18876){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___18899,out))
})();
var state__11317__auto__ = (function (){var statearr_18898 = f__11316__auto__.call(null);
(statearr_18898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___18899);

return statearr_18898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___18899,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___19008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___19008,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___19008,out){
return (function (state_18983){
var state_val_18984 = (state_18983[(1)]);
if((state_val_18984 === (7))){
var inst_18978 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18985_19009 = state_18983__$1;
(statearr_18985_19009[(2)] = inst_18978);

(statearr_18985_19009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (1))){
var inst_18960 = null;
var state_18983__$1 = (function (){var statearr_18986 = state_18983;
(statearr_18986[(7)] = inst_18960);

return statearr_18986;
})();
var statearr_18987_19010 = state_18983__$1;
(statearr_18987_19010[(2)] = null);

(statearr_18987_19010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (4))){
var inst_18963 = (state_18983[(8)]);
var inst_18963__$1 = (state_18983[(2)]);
var inst_18964 = (inst_18963__$1 == null);
var inst_18965 = cljs.core.not.call(null,inst_18964);
var state_18983__$1 = (function (){var statearr_18988 = state_18983;
(statearr_18988[(8)] = inst_18963__$1);

return statearr_18988;
})();
if(inst_18965){
var statearr_18989_19011 = state_18983__$1;
(statearr_18989_19011[(1)] = (5));

} else {
var statearr_18990_19012 = state_18983__$1;
(statearr_18990_19012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (6))){
var state_18983__$1 = state_18983;
var statearr_18991_19013 = state_18983__$1;
(statearr_18991_19013[(2)] = null);

(statearr_18991_19013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (3))){
var inst_18980 = (state_18983[(2)]);
var inst_18981 = cljs.core.async.close_BANG_.call(null,out);
var state_18983__$1 = (function (){var statearr_18992 = state_18983;
(statearr_18992[(9)] = inst_18980);

return statearr_18992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18983__$1,inst_18981);
} else {
if((state_val_18984 === (2))){
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18983__$1,(4),ch);
} else {
if((state_val_18984 === (11))){
var inst_18963 = (state_18983[(8)]);
var inst_18972 = (state_18983[(2)]);
var inst_18960 = inst_18963;
var state_18983__$1 = (function (){var statearr_18993 = state_18983;
(statearr_18993[(7)] = inst_18960);

(statearr_18993[(10)] = inst_18972);

return statearr_18993;
})();
var statearr_18994_19014 = state_18983__$1;
(statearr_18994_19014[(2)] = null);

(statearr_18994_19014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (9))){
var inst_18963 = (state_18983[(8)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18983__$1,(11),out,inst_18963);
} else {
if((state_val_18984 === (5))){
var inst_18960 = (state_18983[(7)]);
var inst_18963 = (state_18983[(8)]);
var inst_18967 = cljs.core._EQ_.call(null,inst_18963,inst_18960);
var state_18983__$1 = state_18983;
if(inst_18967){
var statearr_18996_19015 = state_18983__$1;
(statearr_18996_19015[(1)] = (8));

} else {
var statearr_18997_19016 = state_18983__$1;
(statearr_18997_19016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (10))){
var inst_18975 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18998_19017 = state_18983__$1;
(statearr_18998_19017[(2)] = inst_18975);

(statearr_18998_19017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18984 === (8))){
var inst_18960 = (state_18983[(7)]);
var tmp18995 = inst_18960;
var inst_18960__$1 = tmp18995;
var state_18983__$1 = (function (){var statearr_18999 = state_18983;
(statearr_18999[(7)] = inst_18960__$1);

return statearr_18999;
})();
var statearr_19000_19018 = state_18983__$1;
(statearr_19000_19018[(2)] = null);

(statearr_19000_19018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___19008,out))
;
return ((function (switch__11250__auto__,c__11315__auto___19008,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_19004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19004[(0)] = state_machine__11251__auto__);

(statearr_19004[(1)] = (1));

return statearr_19004;
});
var state_machine__11251__auto____1 = (function (state_18983){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_18983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e19005){if((e19005 instanceof Object)){
var ex__11254__auto__ = e19005;
var statearr_19006_19019 = state_18983;
(statearr_19006_19019[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19020 = state_18983;
state_18983 = G__19020;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___19008,out))
})();
var state__11317__auto__ = (function (){var statearr_19007 = f__11316__auto__.call(null);
(statearr_19007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___19008);

return statearr_19007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___19008,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___19155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___19155,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___19155,out){
return (function (state_19125){
var state_val_19126 = (state_19125[(1)]);
if((state_val_19126 === (7))){
var inst_19121 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19127_19156 = state_19125__$1;
(statearr_19127_19156[(2)] = inst_19121);

(statearr_19127_19156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (1))){
var inst_19088 = (new Array(n));
var inst_19089 = inst_19088;
var inst_19090 = (0);
var state_19125__$1 = (function (){var statearr_19128 = state_19125;
(statearr_19128[(7)] = inst_19090);

(statearr_19128[(8)] = inst_19089);

return statearr_19128;
})();
var statearr_19129_19157 = state_19125__$1;
(statearr_19129_19157[(2)] = null);

(statearr_19129_19157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (4))){
var inst_19093 = (state_19125[(9)]);
var inst_19093__$1 = (state_19125[(2)]);
var inst_19094 = (inst_19093__$1 == null);
var inst_19095 = cljs.core.not.call(null,inst_19094);
var state_19125__$1 = (function (){var statearr_19130 = state_19125;
(statearr_19130[(9)] = inst_19093__$1);

return statearr_19130;
})();
if(inst_19095){
var statearr_19131_19158 = state_19125__$1;
(statearr_19131_19158[(1)] = (5));

} else {
var statearr_19132_19159 = state_19125__$1;
(statearr_19132_19159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (15))){
var inst_19115 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19133_19160 = state_19125__$1;
(statearr_19133_19160[(2)] = inst_19115);

(statearr_19133_19160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (13))){
var state_19125__$1 = state_19125;
var statearr_19134_19161 = state_19125__$1;
(statearr_19134_19161[(2)] = null);

(statearr_19134_19161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (6))){
var inst_19090 = (state_19125[(7)]);
var inst_19111 = (inst_19090 > (0));
var state_19125__$1 = state_19125;
if(cljs.core.truth_(inst_19111)){
var statearr_19135_19162 = state_19125__$1;
(statearr_19135_19162[(1)] = (12));

} else {
var statearr_19136_19163 = state_19125__$1;
(statearr_19136_19163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (3))){
var inst_19123 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19125__$1,inst_19123);
} else {
if((state_val_19126 === (12))){
var inst_19089 = (state_19125[(8)]);
var inst_19113 = cljs.core.vec.call(null,inst_19089);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19125__$1,(15),out,inst_19113);
} else {
if((state_val_19126 === (2))){
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19125__$1,(4),ch);
} else {
if((state_val_19126 === (11))){
var inst_19105 = (state_19125[(2)]);
var inst_19106 = (new Array(n));
var inst_19089 = inst_19106;
var inst_19090 = (0);
var state_19125__$1 = (function (){var statearr_19137 = state_19125;
(statearr_19137[(10)] = inst_19105);

(statearr_19137[(7)] = inst_19090);

(statearr_19137[(8)] = inst_19089);

return statearr_19137;
})();
var statearr_19138_19164 = state_19125__$1;
(statearr_19138_19164[(2)] = null);

(statearr_19138_19164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (9))){
var inst_19089 = (state_19125[(8)]);
var inst_19103 = cljs.core.vec.call(null,inst_19089);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19125__$1,(11),out,inst_19103);
} else {
if((state_val_19126 === (5))){
var inst_19098 = (state_19125[(11)]);
var inst_19093 = (state_19125[(9)]);
var inst_19090 = (state_19125[(7)]);
var inst_19089 = (state_19125[(8)]);
var inst_19097 = (inst_19089[inst_19090] = inst_19093);
var inst_19098__$1 = (inst_19090 + (1));
var inst_19099 = (inst_19098__$1 < n);
var state_19125__$1 = (function (){var statearr_19139 = state_19125;
(statearr_19139[(11)] = inst_19098__$1);

(statearr_19139[(12)] = inst_19097);

return statearr_19139;
})();
if(cljs.core.truth_(inst_19099)){
var statearr_19140_19165 = state_19125__$1;
(statearr_19140_19165[(1)] = (8));

} else {
var statearr_19141_19166 = state_19125__$1;
(statearr_19141_19166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (14))){
var inst_19118 = (state_19125[(2)]);
var inst_19119 = cljs.core.async.close_BANG_.call(null,out);
var state_19125__$1 = (function (){var statearr_19143 = state_19125;
(statearr_19143[(13)] = inst_19118);

return statearr_19143;
})();
var statearr_19144_19167 = state_19125__$1;
(statearr_19144_19167[(2)] = inst_19119);

(statearr_19144_19167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (10))){
var inst_19109 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19145_19168 = state_19125__$1;
(statearr_19145_19168[(2)] = inst_19109);

(statearr_19145_19168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (8))){
var inst_19098 = (state_19125[(11)]);
var inst_19089 = (state_19125[(8)]);
var tmp19142 = inst_19089;
var inst_19089__$1 = tmp19142;
var inst_19090 = inst_19098;
var state_19125__$1 = (function (){var statearr_19146 = state_19125;
(statearr_19146[(7)] = inst_19090);

(statearr_19146[(8)] = inst_19089__$1);

return statearr_19146;
})();
var statearr_19147_19169 = state_19125__$1;
(statearr_19147_19169[(2)] = null);

(statearr_19147_19169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___19155,out))
;
return ((function (switch__11250__auto__,c__11315__auto___19155,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_19151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19151[(0)] = state_machine__11251__auto__);

(statearr_19151[(1)] = (1));

return statearr_19151;
});
var state_machine__11251__auto____1 = (function (state_19125){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_19125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e19152){if((e19152 instanceof Object)){
var ex__11254__auto__ = e19152;
var statearr_19153_19170 = state_19125;
(statearr_19153_19170[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19171 = state_19125;
state_19125 = G__19171;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_19125){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_19125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___19155,out))
})();
var state__11317__auto__ = (function (){var statearr_19154 = f__11316__auto__.call(null);
(statearr_19154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___19155);

return statearr_19154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___19155,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11315__auto___19314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto___19314,out){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto___19314,out){
return (function (state_19284){
var state_val_19285 = (state_19284[(1)]);
if((state_val_19285 === (7))){
var inst_19280 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19286_19315 = state_19284__$1;
(statearr_19286_19315[(2)] = inst_19280);

(statearr_19286_19315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (1))){
var inst_19243 = [];
var inst_19244 = inst_19243;
var inst_19245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19284__$1 = (function (){var statearr_19287 = state_19284;
(statearr_19287[(7)] = inst_19244);

(statearr_19287[(8)] = inst_19245);

return statearr_19287;
})();
var statearr_19288_19316 = state_19284__$1;
(statearr_19288_19316[(2)] = null);

(statearr_19288_19316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (4))){
var inst_19248 = (state_19284[(9)]);
var inst_19248__$1 = (state_19284[(2)]);
var inst_19249 = (inst_19248__$1 == null);
var inst_19250 = cljs.core.not.call(null,inst_19249);
var state_19284__$1 = (function (){var statearr_19289 = state_19284;
(statearr_19289[(9)] = inst_19248__$1);

return statearr_19289;
})();
if(inst_19250){
var statearr_19290_19317 = state_19284__$1;
(statearr_19290_19317[(1)] = (5));

} else {
var statearr_19291_19318 = state_19284__$1;
(statearr_19291_19318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (15))){
var inst_19274 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19292_19319 = state_19284__$1;
(statearr_19292_19319[(2)] = inst_19274);

(statearr_19292_19319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (13))){
var state_19284__$1 = state_19284;
var statearr_19293_19320 = state_19284__$1;
(statearr_19293_19320[(2)] = null);

(statearr_19293_19320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (6))){
var inst_19244 = (state_19284[(7)]);
var inst_19269 = inst_19244.length;
var inst_19270 = (inst_19269 > (0));
var state_19284__$1 = state_19284;
if(cljs.core.truth_(inst_19270)){
var statearr_19294_19321 = state_19284__$1;
(statearr_19294_19321[(1)] = (12));

} else {
var statearr_19295_19322 = state_19284__$1;
(statearr_19295_19322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (3))){
var inst_19282 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19284__$1,inst_19282);
} else {
if((state_val_19285 === (12))){
var inst_19244 = (state_19284[(7)]);
var inst_19272 = cljs.core.vec.call(null,inst_19244);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19284__$1,(15),out,inst_19272);
} else {
if((state_val_19285 === (2))){
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19284__$1,(4),ch);
} else {
if((state_val_19285 === (11))){
var inst_19252 = (state_19284[(10)]);
var inst_19248 = (state_19284[(9)]);
var inst_19262 = (state_19284[(2)]);
var inst_19263 = [];
var inst_19264 = inst_19263.push(inst_19248);
var inst_19244 = inst_19263;
var inst_19245 = inst_19252;
var state_19284__$1 = (function (){var statearr_19296 = state_19284;
(statearr_19296[(11)] = inst_19264);

(statearr_19296[(7)] = inst_19244);

(statearr_19296[(12)] = inst_19262);

(statearr_19296[(8)] = inst_19245);

return statearr_19296;
})();
var statearr_19297_19323 = state_19284__$1;
(statearr_19297_19323[(2)] = null);

(statearr_19297_19323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (9))){
var inst_19244 = (state_19284[(7)]);
var inst_19260 = cljs.core.vec.call(null,inst_19244);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19284__$1,(11),out,inst_19260);
} else {
if((state_val_19285 === (5))){
var inst_19245 = (state_19284[(8)]);
var inst_19252 = (state_19284[(10)]);
var inst_19248 = (state_19284[(9)]);
var inst_19252__$1 = f.call(null,inst_19248);
var inst_19253 = cljs.core._EQ_.call(null,inst_19252__$1,inst_19245);
var inst_19254 = cljs.core.keyword_identical_QMARK_.call(null,inst_19245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19255 = (inst_19253) || (inst_19254);
var state_19284__$1 = (function (){var statearr_19298 = state_19284;
(statearr_19298[(10)] = inst_19252__$1);

return statearr_19298;
})();
if(cljs.core.truth_(inst_19255)){
var statearr_19299_19324 = state_19284__$1;
(statearr_19299_19324[(1)] = (8));

} else {
var statearr_19300_19325 = state_19284__$1;
(statearr_19300_19325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (14))){
var inst_19277 = (state_19284[(2)]);
var inst_19278 = cljs.core.async.close_BANG_.call(null,out);
var state_19284__$1 = (function (){var statearr_19302 = state_19284;
(statearr_19302[(13)] = inst_19277);

return statearr_19302;
})();
var statearr_19303_19326 = state_19284__$1;
(statearr_19303_19326[(2)] = inst_19278);

(statearr_19303_19326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (10))){
var inst_19267 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19304_19327 = state_19284__$1;
(statearr_19304_19327[(2)] = inst_19267);

(statearr_19304_19327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19285 === (8))){
var inst_19244 = (state_19284[(7)]);
var inst_19252 = (state_19284[(10)]);
var inst_19248 = (state_19284[(9)]);
var inst_19257 = inst_19244.push(inst_19248);
var tmp19301 = inst_19244;
var inst_19244__$1 = tmp19301;
var inst_19245 = inst_19252;
var state_19284__$1 = (function (){var statearr_19305 = state_19284;
(statearr_19305[(14)] = inst_19257);

(statearr_19305[(7)] = inst_19244__$1);

(statearr_19305[(8)] = inst_19245);

return statearr_19305;
})();
var statearr_19306_19328 = state_19284__$1;
(statearr_19306_19328[(2)] = null);

(statearr_19306_19328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11315__auto___19314,out))
;
return ((function (switch__11250__auto__,c__11315__auto___19314,out){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_19310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19310[(0)] = state_machine__11251__auto__);

(statearr_19310[(1)] = (1));

return statearr_19310;
});
var state_machine__11251__auto____1 = (function (state_19284){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_19284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e19311){if((e19311 instanceof Object)){
var ex__11254__auto__ = e19311;
var statearr_19312_19329 = state_19284;
(statearr_19312_19329[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19330 = state_19284;
state_19284 = G__19330;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto___19314,out))
})();
var state__11317__auto__ = (function (){var statearr_19313 = f__11316__auto__.call(null);
(statearr_19313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto___19314);

return statearr_19313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto___19314,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map