// Compiled by ClojureScript 0.0-2511
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19440_20388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19441_20389 = null;
var count__19442_20390 = (0);
var i__19443_20391 = (0);
while(true){
if((i__19443_20391 < count__19442_20390)){
var arg__13972__auto___20392 = cljs.core._nth.call(null,chunk__19441_20389,i__19443_20391);
a__13971__auto__.push(arg__13972__auto___20392);

var G__20393 = seq__19440_20388;
var G__20394 = chunk__19441_20389;
var G__20395 = count__19442_20390;
var G__20396 = (i__19443_20391 + (1));
seq__19440_20388 = G__20393;
chunk__19441_20389 = G__20394;
count__19442_20390 = G__20395;
i__19443_20391 = G__20396;
continue;
} else {
var temp__4126__auto___20397 = cljs.core.seq.call(null,seq__19440_20388);
if(temp__4126__auto___20397){
var seq__19440_20398__$1 = temp__4126__auto___20397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19440_20398__$1)){
var c__8817__auto___20399 = cljs.core.chunk_first.call(null,seq__19440_20398__$1);
var G__20400 = cljs.core.chunk_rest.call(null,seq__19440_20398__$1);
var G__20401 = c__8817__auto___20399;
var G__20402 = cljs.core.count.call(null,c__8817__auto___20399);
var G__20403 = (0);
seq__19440_20388 = G__20400;
chunk__19441_20389 = G__20401;
count__19442_20390 = G__20402;
i__19443_20391 = G__20403;
continue;
} else {
var arg__13972__auto___20404 = cljs.core.first.call(null,seq__19440_20398__$1);
a__13971__auto__.push(arg__13972__auto___20404);

var G__20405 = cljs.core.next.call(null,seq__19440_20398__$1);
var G__20406 = null;
var G__20407 = (0);
var G__20408 = (0);
seq__19440_20388 = G__20405;
chunk__19441_20389 = G__20406;
count__19442_20390 = G__20407;
i__19443_20391 = G__20408;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__13971__auto__);
};
var a = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return a__delegate.call(this,args__13970__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__20409){
var args__13970__auto__ = cljs.core.seq(arglist__20409);
return a__delegate(args__13970__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19448_20410 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19449_20411 = null;
var count__19450_20412 = (0);
var i__19451_20413 = (0);
while(true){
if((i__19451_20413 < count__19450_20412)){
var arg__13972__auto___20414 = cljs.core._nth.call(null,chunk__19449_20411,i__19451_20413);
a__13971__auto__.push(arg__13972__auto___20414);

var G__20415 = seq__19448_20410;
var G__20416 = chunk__19449_20411;
var G__20417 = count__19450_20412;
var G__20418 = (i__19451_20413 + (1));
seq__19448_20410 = G__20415;
chunk__19449_20411 = G__20416;
count__19450_20412 = G__20417;
i__19451_20413 = G__20418;
continue;
} else {
var temp__4126__auto___20419 = cljs.core.seq.call(null,seq__19448_20410);
if(temp__4126__auto___20419){
var seq__19448_20420__$1 = temp__4126__auto___20419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19448_20420__$1)){
var c__8817__auto___20421 = cljs.core.chunk_first.call(null,seq__19448_20420__$1);
var G__20422 = cljs.core.chunk_rest.call(null,seq__19448_20420__$1);
var G__20423 = c__8817__auto___20421;
var G__20424 = cljs.core.count.call(null,c__8817__auto___20421);
var G__20425 = (0);
seq__19448_20410 = G__20422;
chunk__19449_20411 = G__20423;
count__19450_20412 = G__20424;
i__19451_20413 = G__20425;
continue;
} else {
var arg__13972__auto___20426 = cljs.core.first.call(null,seq__19448_20420__$1);
a__13971__auto__.push(arg__13972__auto___20426);

var G__20427 = cljs.core.next.call(null,seq__19448_20420__$1);
var G__20428 = null;
var G__20429 = (0);
var G__20430 = (0);
seq__19448_20410 = G__20427;
chunk__19449_20411 = G__20428;
count__19450_20412 = G__20429;
i__19451_20413 = G__20430;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__13971__auto__);
};
var abbr = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return abbr__delegate.call(this,args__13970__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__20431){
var args__13970__auto__ = cljs.core.seq(arglist__20431);
return abbr__delegate(args__13970__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19456_20432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19457_20433 = null;
var count__19458_20434 = (0);
var i__19459_20435 = (0);
while(true){
if((i__19459_20435 < count__19458_20434)){
var arg__13972__auto___20436 = cljs.core._nth.call(null,chunk__19457_20433,i__19459_20435);
a__13971__auto__.push(arg__13972__auto___20436);

var G__20437 = seq__19456_20432;
var G__20438 = chunk__19457_20433;
var G__20439 = count__19458_20434;
var G__20440 = (i__19459_20435 + (1));
seq__19456_20432 = G__20437;
chunk__19457_20433 = G__20438;
count__19458_20434 = G__20439;
i__19459_20435 = G__20440;
continue;
} else {
var temp__4126__auto___20441 = cljs.core.seq.call(null,seq__19456_20432);
if(temp__4126__auto___20441){
var seq__19456_20442__$1 = temp__4126__auto___20441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19456_20442__$1)){
var c__8817__auto___20443 = cljs.core.chunk_first.call(null,seq__19456_20442__$1);
var G__20444 = cljs.core.chunk_rest.call(null,seq__19456_20442__$1);
var G__20445 = c__8817__auto___20443;
var G__20446 = cljs.core.count.call(null,c__8817__auto___20443);
var G__20447 = (0);
seq__19456_20432 = G__20444;
chunk__19457_20433 = G__20445;
count__19458_20434 = G__20446;
i__19459_20435 = G__20447;
continue;
} else {
var arg__13972__auto___20448 = cljs.core.first.call(null,seq__19456_20442__$1);
a__13971__auto__.push(arg__13972__auto___20448);

var G__20449 = cljs.core.next.call(null,seq__19456_20442__$1);
var G__20450 = null;
var G__20451 = (0);
var G__20452 = (0);
seq__19456_20432 = G__20449;
chunk__19457_20433 = G__20450;
count__19458_20434 = G__20451;
i__19459_20435 = G__20452;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__13971__auto__);
};
var address = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return address__delegate.call(this,args__13970__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__20453){
var args__13970__auto__ = cljs.core.seq(arglist__20453);
return address__delegate(args__13970__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19464_20454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19465_20455 = null;
var count__19466_20456 = (0);
var i__19467_20457 = (0);
while(true){
if((i__19467_20457 < count__19466_20456)){
var arg__13972__auto___20458 = cljs.core._nth.call(null,chunk__19465_20455,i__19467_20457);
a__13971__auto__.push(arg__13972__auto___20458);

var G__20459 = seq__19464_20454;
var G__20460 = chunk__19465_20455;
var G__20461 = count__19466_20456;
var G__20462 = (i__19467_20457 + (1));
seq__19464_20454 = G__20459;
chunk__19465_20455 = G__20460;
count__19466_20456 = G__20461;
i__19467_20457 = G__20462;
continue;
} else {
var temp__4126__auto___20463 = cljs.core.seq.call(null,seq__19464_20454);
if(temp__4126__auto___20463){
var seq__19464_20464__$1 = temp__4126__auto___20463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19464_20464__$1)){
var c__8817__auto___20465 = cljs.core.chunk_first.call(null,seq__19464_20464__$1);
var G__20466 = cljs.core.chunk_rest.call(null,seq__19464_20464__$1);
var G__20467 = c__8817__auto___20465;
var G__20468 = cljs.core.count.call(null,c__8817__auto___20465);
var G__20469 = (0);
seq__19464_20454 = G__20466;
chunk__19465_20455 = G__20467;
count__19466_20456 = G__20468;
i__19467_20457 = G__20469;
continue;
} else {
var arg__13972__auto___20470 = cljs.core.first.call(null,seq__19464_20464__$1);
a__13971__auto__.push(arg__13972__auto___20470);

var G__20471 = cljs.core.next.call(null,seq__19464_20464__$1);
var G__20472 = null;
var G__20473 = (0);
var G__20474 = (0);
seq__19464_20454 = G__20471;
chunk__19465_20455 = G__20472;
count__19466_20456 = G__20473;
i__19467_20457 = G__20474;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__13971__auto__);
};
var area = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return area__delegate.call(this,args__13970__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__20475){
var args__13970__auto__ = cljs.core.seq(arglist__20475);
return area__delegate(args__13970__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19472_20476 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19473_20477 = null;
var count__19474_20478 = (0);
var i__19475_20479 = (0);
while(true){
if((i__19475_20479 < count__19474_20478)){
var arg__13972__auto___20480 = cljs.core._nth.call(null,chunk__19473_20477,i__19475_20479);
a__13971__auto__.push(arg__13972__auto___20480);

var G__20481 = seq__19472_20476;
var G__20482 = chunk__19473_20477;
var G__20483 = count__19474_20478;
var G__20484 = (i__19475_20479 + (1));
seq__19472_20476 = G__20481;
chunk__19473_20477 = G__20482;
count__19474_20478 = G__20483;
i__19475_20479 = G__20484;
continue;
} else {
var temp__4126__auto___20485 = cljs.core.seq.call(null,seq__19472_20476);
if(temp__4126__auto___20485){
var seq__19472_20486__$1 = temp__4126__auto___20485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19472_20486__$1)){
var c__8817__auto___20487 = cljs.core.chunk_first.call(null,seq__19472_20486__$1);
var G__20488 = cljs.core.chunk_rest.call(null,seq__19472_20486__$1);
var G__20489 = c__8817__auto___20487;
var G__20490 = cljs.core.count.call(null,c__8817__auto___20487);
var G__20491 = (0);
seq__19472_20476 = G__20488;
chunk__19473_20477 = G__20489;
count__19474_20478 = G__20490;
i__19475_20479 = G__20491;
continue;
} else {
var arg__13972__auto___20492 = cljs.core.first.call(null,seq__19472_20486__$1);
a__13971__auto__.push(arg__13972__auto___20492);

var G__20493 = cljs.core.next.call(null,seq__19472_20486__$1);
var G__20494 = null;
var G__20495 = (0);
var G__20496 = (0);
seq__19472_20476 = G__20493;
chunk__19473_20477 = G__20494;
count__19474_20478 = G__20495;
i__19475_20479 = G__20496;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__13971__auto__);
};
var article = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return article__delegate.call(this,args__13970__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__20497){
var args__13970__auto__ = cljs.core.seq(arglist__20497);
return article__delegate(args__13970__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19480_20498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19481_20499 = null;
var count__19482_20500 = (0);
var i__19483_20501 = (0);
while(true){
if((i__19483_20501 < count__19482_20500)){
var arg__13972__auto___20502 = cljs.core._nth.call(null,chunk__19481_20499,i__19483_20501);
a__13971__auto__.push(arg__13972__auto___20502);

var G__20503 = seq__19480_20498;
var G__20504 = chunk__19481_20499;
var G__20505 = count__19482_20500;
var G__20506 = (i__19483_20501 + (1));
seq__19480_20498 = G__20503;
chunk__19481_20499 = G__20504;
count__19482_20500 = G__20505;
i__19483_20501 = G__20506;
continue;
} else {
var temp__4126__auto___20507 = cljs.core.seq.call(null,seq__19480_20498);
if(temp__4126__auto___20507){
var seq__19480_20508__$1 = temp__4126__auto___20507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19480_20508__$1)){
var c__8817__auto___20509 = cljs.core.chunk_first.call(null,seq__19480_20508__$1);
var G__20510 = cljs.core.chunk_rest.call(null,seq__19480_20508__$1);
var G__20511 = c__8817__auto___20509;
var G__20512 = cljs.core.count.call(null,c__8817__auto___20509);
var G__20513 = (0);
seq__19480_20498 = G__20510;
chunk__19481_20499 = G__20511;
count__19482_20500 = G__20512;
i__19483_20501 = G__20513;
continue;
} else {
var arg__13972__auto___20514 = cljs.core.first.call(null,seq__19480_20508__$1);
a__13971__auto__.push(arg__13972__auto___20514);

var G__20515 = cljs.core.next.call(null,seq__19480_20508__$1);
var G__20516 = null;
var G__20517 = (0);
var G__20518 = (0);
seq__19480_20498 = G__20515;
chunk__19481_20499 = G__20516;
count__19482_20500 = G__20517;
i__19483_20501 = G__20518;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__13971__auto__);
};
var aside = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return aside__delegate.call(this,args__13970__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__20519){
var args__13970__auto__ = cljs.core.seq(arglist__20519);
return aside__delegate(args__13970__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19488_20520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19489_20521 = null;
var count__19490_20522 = (0);
var i__19491_20523 = (0);
while(true){
if((i__19491_20523 < count__19490_20522)){
var arg__13972__auto___20524 = cljs.core._nth.call(null,chunk__19489_20521,i__19491_20523);
a__13971__auto__.push(arg__13972__auto___20524);

var G__20525 = seq__19488_20520;
var G__20526 = chunk__19489_20521;
var G__20527 = count__19490_20522;
var G__20528 = (i__19491_20523 + (1));
seq__19488_20520 = G__20525;
chunk__19489_20521 = G__20526;
count__19490_20522 = G__20527;
i__19491_20523 = G__20528;
continue;
} else {
var temp__4126__auto___20529 = cljs.core.seq.call(null,seq__19488_20520);
if(temp__4126__auto___20529){
var seq__19488_20530__$1 = temp__4126__auto___20529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19488_20530__$1)){
var c__8817__auto___20531 = cljs.core.chunk_first.call(null,seq__19488_20530__$1);
var G__20532 = cljs.core.chunk_rest.call(null,seq__19488_20530__$1);
var G__20533 = c__8817__auto___20531;
var G__20534 = cljs.core.count.call(null,c__8817__auto___20531);
var G__20535 = (0);
seq__19488_20520 = G__20532;
chunk__19489_20521 = G__20533;
count__19490_20522 = G__20534;
i__19491_20523 = G__20535;
continue;
} else {
var arg__13972__auto___20536 = cljs.core.first.call(null,seq__19488_20530__$1);
a__13971__auto__.push(arg__13972__auto___20536);

var G__20537 = cljs.core.next.call(null,seq__19488_20530__$1);
var G__20538 = null;
var G__20539 = (0);
var G__20540 = (0);
seq__19488_20520 = G__20537;
chunk__19489_20521 = G__20538;
count__19490_20522 = G__20539;
i__19491_20523 = G__20540;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__13971__auto__);
};
var audio = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return audio__delegate.call(this,args__13970__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__20541){
var args__13970__auto__ = cljs.core.seq(arglist__20541);
return audio__delegate(args__13970__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19496_20542 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19497_20543 = null;
var count__19498_20544 = (0);
var i__19499_20545 = (0);
while(true){
if((i__19499_20545 < count__19498_20544)){
var arg__13972__auto___20546 = cljs.core._nth.call(null,chunk__19497_20543,i__19499_20545);
a__13971__auto__.push(arg__13972__auto___20546);

var G__20547 = seq__19496_20542;
var G__20548 = chunk__19497_20543;
var G__20549 = count__19498_20544;
var G__20550 = (i__19499_20545 + (1));
seq__19496_20542 = G__20547;
chunk__19497_20543 = G__20548;
count__19498_20544 = G__20549;
i__19499_20545 = G__20550;
continue;
} else {
var temp__4126__auto___20551 = cljs.core.seq.call(null,seq__19496_20542);
if(temp__4126__auto___20551){
var seq__19496_20552__$1 = temp__4126__auto___20551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19496_20552__$1)){
var c__8817__auto___20553 = cljs.core.chunk_first.call(null,seq__19496_20552__$1);
var G__20554 = cljs.core.chunk_rest.call(null,seq__19496_20552__$1);
var G__20555 = c__8817__auto___20553;
var G__20556 = cljs.core.count.call(null,c__8817__auto___20553);
var G__20557 = (0);
seq__19496_20542 = G__20554;
chunk__19497_20543 = G__20555;
count__19498_20544 = G__20556;
i__19499_20545 = G__20557;
continue;
} else {
var arg__13972__auto___20558 = cljs.core.first.call(null,seq__19496_20552__$1);
a__13971__auto__.push(arg__13972__auto___20558);

var G__20559 = cljs.core.next.call(null,seq__19496_20552__$1);
var G__20560 = null;
var G__20561 = (0);
var G__20562 = (0);
seq__19496_20542 = G__20559;
chunk__19497_20543 = G__20560;
count__19498_20544 = G__20561;
i__19499_20545 = G__20562;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__13971__auto__);
};
var b = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return b__delegate.call(this,args__13970__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__20563){
var args__13970__auto__ = cljs.core.seq(arglist__20563);
return b__delegate(args__13970__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19504_20564 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19505_20565 = null;
var count__19506_20566 = (0);
var i__19507_20567 = (0);
while(true){
if((i__19507_20567 < count__19506_20566)){
var arg__13972__auto___20568 = cljs.core._nth.call(null,chunk__19505_20565,i__19507_20567);
a__13971__auto__.push(arg__13972__auto___20568);

var G__20569 = seq__19504_20564;
var G__20570 = chunk__19505_20565;
var G__20571 = count__19506_20566;
var G__20572 = (i__19507_20567 + (1));
seq__19504_20564 = G__20569;
chunk__19505_20565 = G__20570;
count__19506_20566 = G__20571;
i__19507_20567 = G__20572;
continue;
} else {
var temp__4126__auto___20573 = cljs.core.seq.call(null,seq__19504_20564);
if(temp__4126__auto___20573){
var seq__19504_20574__$1 = temp__4126__auto___20573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19504_20574__$1)){
var c__8817__auto___20575 = cljs.core.chunk_first.call(null,seq__19504_20574__$1);
var G__20576 = cljs.core.chunk_rest.call(null,seq__19504_20574__$1);
var G__20577 = c__8817__auto___20575;
var G__20578 = cljs.core.count.call(null,c__8817__auto___20575);
var G__20579 = (0);
seq__19504_20564 = G__20576;
chunk__19505_20565 = G__20577;
count__19506_20566 = G__20578;
i__19507_20567 = G__20579;
continue;
} else {
var arg__13972__auto___20580 = cljs.core.first.call(null,seq__19504_20574__$1);
a__13971__auto__.push(arg__13972__auto___20580);

var G__20581 = cljs.core.next.call(null,seq__19504_20574__$1);
var G__20582 = null;
var G__20583 = (0);
var G__20584 = (0);
seq__19504_20564 = G__20581;
chunk__19505_20565 = G__20582;
count__19506_20566 = G__20583;
i__19507_20567 = G__20584;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__13971__auto__);
};
var base = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return base__delegate.call(this,args__13970__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__20585){
var args__13970__auto__ = cljs.core.seq(arglist__20585);
return base__delegate(args__13970__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19512_20586 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19513_20587 = null;
var count__19514_20588 = (0);
var i__19515_20589 = (0);
while(true){
if((i__19515_20589 < count__19514_20588)){
var arg__13972__auto___20590 = cljs.core._nth.call(null,chunk__19513_20587,i__19515_20589);
a__13971__auto__.push(arg__13972__auto___20590);

var G__20591 = seq__19512_20586;
var G__20592 = chunk__19513_20587;
var G__20593 = count__19514_20588;
var G__20594 = (i__19515_20589 + (1));
seq__19512_20586 = G__20591;
chunk__19513_20587 = G__20592;
count__19514_20588 = G__20593;
i__19515_20589 = G__20594;
continue;
} else {
var temp__4126__auto___20595 = cljs.core.seq.call(null,seq__19512_20586);
if(temp__4126__auto___20595){
var seq__19512_20596__$1 = temp__4126__auto___20595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19512_20596__$1)){
var c__8817__auto___20597 = cljs.core.chunk_first.call(null,seq__19512_20596__$1);
var G__20598 = cljs.core.chunk_rest.call(null,seq__19512_20596__$1);
var G__20599 = c__8817__auto___20597;
var G__20600 = cljs.core.count.call(null,c__8817__auto___20597);
var G__20601 = (0);
seq__19512_20586 = G__20598;
chunk__19513_20587 = G__20599;
count__19514_20588 = G__20600;
i__19515_20589 = G__20601;
continue;
} else {
var arg__13972__auto___20602 = cljs.core.first.call(null,seq__19512_20596__$1);
a__13971__auto__.push(arg__13972__auto___20602);

var G__20603 = cljs.core.next.call(null,seq__19512_20596__$1);
var G__20604 = null;
var G__20605 = (0);
var G__20606 = (0);
seq__19512_20586 = G__20603;
chunk__19513_20587 = G__20604;
count__19514_20588 = G__20605;
i__19515_20589 = G__20606;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__13971__auto__);
};
var bdi = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return bdi__delegate.call(this,args__13970__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__20607){
var args__13970__auto__ = cljs.core.seq(arglist__20607);
return bdi__delegate(args__13970__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19520_20608 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19521_20609 = null;
var count__19522_20610 = (0);
var i__19523_20611 = (0);
while(true){
if((i__19523_20611 < count__19522_20610)){
var arg__13972__auto___20612 = cljs.core._nth.call(null,chunk__19521_20609,i__19523_20611);
a__13971__auto__.push(arg__13972__auto___20612);

var G__20613 = seq__19520_20608;
var G__20614 = chunk__19521_20609;
var G__20615 = count__19522_20610;
var G__20616 = (i__19523_20611 + (1));
seq__19520_20608 = G__20613;
chunk__19521_20609 = G__20614;
count__19522_20610 = G__20615;
i__19523_20611 = G__20616;
continue;
} else {
var temp__4126__auto___20617 = cljs.core.seq.call(null,seq__19520_20608);
if(temp__4126__auto___20617){
var seq__19520_20618__$1 = temp__4126__auto___20617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19520_20618__$1)){
var c__8817__auto___20619 = cljs.core.chunk_first.call(null,seq__19520_20618__$1);
var G__20620 = cljs.core.chunk_rest.call(null,seq__19520_20618__$1);
var G__20621 = c__8817__auto___20619;
var G__20622 = cljs.core.count.call(null,c__8817__auto___20619);
var G__20623 = (0);
seq__19520_20608 = G__20620;
chunk__19521_20609 = G__20621;
count__19522_20610 = G__20622;
i__19523_20611 = G__20623;
continue;
} else {
var arg__13972__auto___20624 = cljs.core.first.call(null,seq__19520_20618__$1);
a__13971__auto__.push(arg__13972__auto___20624);

var G__20625 = cljs.core.next.call(null,seq__19520_20618__$1);
var G__20626 = null;
var G__20627 = (0);
var G__20628 = (0);
seq__19520_20608 = G__20625;
chunk__19521_20609 = G__20626;
count__19522_20610 = G__20627;
i__19523_20611 = G__20628;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__13971__auto__);
};
var bdo = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return bdo__delegate.call(this,args__13970__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__20629){
var args__13970__auto__ = cljs.core.seq(arglist__20629);
return bdo__delegate(args__13970__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19528_20630 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19529_20631 = null;
var count__19530_20632 = (0);
var i__19531_20633 = (0);
while(true){
if((i__19531_20633 < count__19530_20632)){
var arg__13972__auto___20634 = cljs.core._nth.call(null,chunk__19529_20631,i__19531_20633);
a__13971__auto__.push(arg__13972__auto___20634);

var G__20635 = seq__19528_20630;
var G__20636 = chunk__19529_20631;
var G__20637 = count__19530_20632;
var G__20638 = (i__19531_20633 + (1));
seq__19528_20630 = G__20635;
chunk__19529_20631 = G__20636;
count__19530_20632 = G__20637;
i__19531_20633 = G__20638;
continue;
} else {
var temp__4126__auto___20639 = cljs.core.seq.call(null,seq__19528_20630);
if(temp__4126__auto___20639){
var seq__19528_20640__$1 = temp__4126__auto___20639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19528_20640__$1)){
var c__8817__auto___20641 = cljs.core.chunk_first.call(null,seq__19528_20640__$1);
var G__20642 = cljs.core.chunk_rest.call(null,seq__19528_20640__$1);
var G__20643 = c__8817__auto___20641;
var G__20644 = cljs.core.count.call(null,c__8817__auto___20641);
var G__20645 = (0);
seq__19528_20630 = G__20642;
chunk__19529_20631 = G__20643;
count__19530_20632 = G__20644;
i__19531_20633 = G__20645;
continue;
} else {
var arg__13972__auto___20646 = cljs.core.first.call(null,seq__19528_20640__$1);
a__13971__auto__.push(arg__13972__auto___20646);

var G__20647 = cljs.core.next.call(null,seq__19528_20640__$1);
var G__20648 = null;
var G__20649 = (0);
var G__20650 = (0);
seq__19528_20630 = G__20647;
chunk__19529_20631 = G__20648;
count__19530_20632 = G__20649;
i__19531_20633 = G__20650;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__13971__auto__);
};
var big = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return big__delegate.call(this,args__13970__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__20651){
var args__13970__auto__ = cljs.core.seq(arglist__20651);
return big__delegate(args__13970__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19536_20652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19537_20653 = null;
var count__19538_20654 = (0);
var i__19539_20655 = (0);
while(true){
if((i__19539_20655 < count__19538_20654)){
var arg__13972__auto___20656 = cljs.core._nth.call(null,chunk__19537_20653,i__19539_20655);
a__13971__auto__.push(arg__13972__auto___20656);

var G__20657 = seq__19536_20652;
var G__20658 = chunk__19537_20653;
var G__20659 = count__19538_20654;
var G__20660 = (i__19539_20655 + (1));
seq__19536_20652 = G__20657;
chunk__19537_20653 = G__20658;
count__19538_20654 = G__20659;
i__19539_20655 = G__20660;
continue;
} else {
var temp__4126__auto___20661 = cljs.core.seq.call(null,seq__19536_20652);
if(temp__4126__auto___20661){
var seq__19536_20662__$1 = temp__4126__auto___20661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19536_20662__$1)){
var c__8817__auto___20663 = cljs.core.chunk_first.call(null,seq__19536_20662__$1);
var G__20664 = cljs.core.chunk_rest.call(null,seq__19536_20662__$1);
var G__20665 = c__8817__auto___20663;
var G__20666 = cljs.core.count.call(null,c__8817__auto___20663);
var G__20667 = (0);
seq__19536_20652 = G__20664;
chunk__19537_20653 = G__20665;
count__19538_20654 = G__20666;
i__19539_20655 = G__20667;
continue;
} else {
var arg__13972__auto___20668 = cljs.core.first.call(null,seq__19536_20662__$1);
a__13971__auto__.push(arg__13972__auto___20668);

var G__20669 = cljs.core.next.call(null,seq__19536_20662__$1);
var G__20670 = null;
var G__20671 = (0);
var G__20672 = (0);
seq__19536_20652 = G__20669;
chunk__19537_20653 = G__20670;
count__19538_20654 = G__20671;
i__19539_20655 = G__20672;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__13971__auto__);
};
var blockquote = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return blockquote__delegate.call(this,args__13970__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__20673){
var args__13970__auto__ = cljs.core.seq(arglist__20673);
return blockquote__delegate(args__13970__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19544_20674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19545_20675 = null;
var count__19546_20676 = (0);
var i__19547_20677 = (0);
while(true){
if((i__19547_20677 < count__19546_20676)){
var arg__13972__auto___20678 = cljs.core._nth.call(null,chunk__19545_20675,i__19547_20677);
a__13971__auto__.push(arg__13972__auto___20678);

var G__20679 = seq__19544_20674;
var G__20680 = chunk__19545_20675;
var G__20681 = count__19546_20676;
var G__20682 = (i__19547_20677 + (1));
seq__19544_20674 = G__20679;
chunk__19545_20675 = G__20680;
count__19546_20676 = G__20681;
i__19547_20677 = G__20682;
continue;
} else {
var temp__4126__auto___20683 = cljs.core.seq.call(null,seq__19544_20674);
if(temp__4126__auto___20683){
var seq__19544_20684__$1 = temp__4126__auto___20683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19544_20684__$1)){
var c__8817__auto___20685 = cljs.core.chunk_first.call(null,seq__19544_20684__$1);
var G__20686 = cljs.core.chunk_rest.call(null,seq__19544_20684__$1);
var G__20687 = c__8817__auto___20685;
var G__20688 = cljs.core.count.call(null,c__8817__auto___20685);
var G__20689 = (0);
seq__19544_20674 = G__20686;
chunk__19545_20675 = G__20687;
count__19546_20676 = G__20688;
i__19547_20677 = G__20689;
continue;
} else {
var arg__13972__auto___20690 = cljs.core.first.call(null,seq__19544_20684__$1);
a__13971__auto__.push(arg__13972__auto___20690);

var G__20691 = cljs.core.next.call(null,seq__19544_20684__$1);
var G__20692 = null;
var G__20693 = (0);
var G__20694 = (0);
seq__19544_20674 = G__20691;
chunk__19545_20675 = G__20692;
count__19546_20676 = G__20693;
i__19547_20677 = G__20694;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__13971__auto__);
};
var body = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return body__delegate.call(this,args__13970__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__20695){
var args__13970__auto__ = cljs.core.seq(arglist__20695);
return body__delegate(args__13970__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19552_20696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19553_20697 = null;
var count__19554_20698 = (0);
var i__19555_20699 = (0);
while(true){
if((i__19555_20699 < count__19554_20698)){
var arg__13972__auto___20700 = cljs.core._nth.call(null,chunk__19553_20697,i__19555_20699);
a__13971__auto__.push(arg__13972__auto___20700);

var G__20701 = seq__19552_20696;
var G__20702 = chunk__19553_20697;
var G__20703 = count__19554_20698;
var G__20704 = (i__19555_20699 + (1));
seq__19552_20696 = G__20701;
chunk__19553_20697 = G__20702;
count__19554_20698 = G__20703;
i__19555_20699 = G__20704;
continue;
} else {
var temp__4126__auto___20705 = cljs.core.seq.call(null,seq__19552_20696);
if(temp__4126__auto___20705){
var seq__19552_20706__$1 = temp__4126__auto___20705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19552_20706__$1)){
var c__8817__auto___20707 = cljs.core.chunk_first.call(null,seq__19552_20706__$1);
var G__20708 = cljs.core.chunk_rest.call(null,seq__19552_20706__$1);
var G__20709 = c__8817__auto___20707;
var G__20710 = cljs.core.count.call(null,c__8817__auto___20707);
var G__20711 = (0);
seq__19552_20696 = G__20708;
chunk__19553_20697 = G__20709;
count__19554_20698 = G__20710;
i__19555_20699 = G__20711;
continue;
} else {
var arg__13972__auto___20712 = cljs.core.first.call(null,seq__19552_20706__$1);
a__13971__auto__.push(arg__13972__auto___20712);

var G__20713 = cljs.core.next.call(null,seq__19552_20706__$1);
var G__20714 = null;
var G__20715 = (0);
var G__20716 = (0);
seq__19552_20696 = G__20713;
chunk__19553_20697 = G__20714;
count__19554_20698 = G__20715;
i__19555_20699 = G__20716;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__13971__auto__);
};
var br = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return br__delegate.call(this,args__13970__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__20717){
var args__13970__auto__ = cljs.core.seq(arglist__20717);
return br__delegate(args__13970__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19560_20718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19561_20719 = null;
var count__19562_20720 = (0);
var i__19563_20721 = (0);
while(true){
if((i__19563_20721 < count__19562_20720)){
var arg__13972__auto___20722 = cljs.core._nth.call(null,chunk__19561_20719,i__19563_20721);
a__13971__auto__.push(arg__13972__auto___20722);

var G__20723 = seq__19560_20718;
var G__20724 = chunk__19561_20719;
var G__20725 = count__19562_20720;
var G__20726 = (i__19563_20721 + (1));
seq__19560_20718 = G__20723;
chunk__19561_20719 = G__20724;
count__19562_20720 = G__20725;
i__19563_20721 = G__20726;
continue;
} else {
var temp__4126__auto___20727 = cljs.core.seq.call(null,seq__19560_20718);
if(temp__4126__auto___20727){
var seq__19560_20728__$1 = temp__4126__auto___20727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19560_20728__$1)){
var c__8817__auto___20729 = cljs.core.chunk_first.call(null,seq__19560_20728__$1);
var G__20730 = cljs.core.chunk_rest.call(null,seq__19560_20728__$1);
var G__20731 = c__8817__auto___20729;
var G__20732 = cljs.core.count.call(null,c__8817__auto___20729);
var G__20733 = (0);
seq__19560_20718 = G__20730;
chunk__19561_20719 = G__20731;
count__19562_20720 = G__20732;
i__19563_20721 = G__20733;
continue;
} else {
var arg__13972__auto___20734 = cljs.core.first.call(null,seq__19560_20728__$1);
a__13971__auto__.push(arg__13972__auto___20734);

var G__20735 = cljs.core.next.call(null,seq__19560_20728__$1);
var G__20736 = null;
var G__20737 = (0);
var G__20738 = (0);
seq__19560_20718 = G__20735;
chunk__19561_20719 = G__20736;
count__19562_20720 = G__20737;
i__19563_20721 = G__20738;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__13971__auto__);
};
var button = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return button__delegate.call(this,args__13970__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__20739){
var args__13970__auto__ = cljs.core.seq(arglist__20739);
return button__delegate(args__13970__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19568_20740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19569_20741 = null;
var count__19570_20742 = (0);
var i__19571_20743 = (0);
while(true){
if((i__19571_20743 < count__19570_20742)){
var arg__13972__auto___20744 = cljs.core._nth.call(null,chunk__19569_20741,i__19571_20743);
a__13971__auto__.push(arg__13972__auto___20744);

var G__20745 = seq__19568_20740;
var G__20746 = chunk__19569_20741;
var G__20747 = count__19570_20742;
var G__20748 = (i__19571_20743 + (1));
seq__19568_20740 = G__20745;
chunk__19569_20741 = G__20746;
count__19570_20742 = G__20747;
i__19571_20743 = G__20748;
continue;
} else {
var temp__4126__auto___20749 = cljs.core.seq.call(null,seq__19568_20740);
if(temp__4126__auto___20749){
var seq__19568_20750__$1 = temp__4126__auto___20749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19568_20750__$1)){
var c__8817__auto___20751 = cljs.core.chunk_first.call(null,seq__19568_20750__$1);
var G__20752 = cljs.core.chunk_rest.call(null,seq__19568_20750__$1);
var G__20753 = c__8817__auto___20751;
var G__20754 = cljs.core.count.call(null,c__8817__auto___20751);
var G__20755 = (0);
seq__19568_20740 = G__20752;
chunk__19569_20741 = G__20753;
count__19570_20742 = G__20754;
i__19571_20743 = G__20755;
continue;
} else {
var arg__13972__auto___20756 = cljs.core.first.call(null,seq__19568_20750__$1);
a__13971__auto__.push(arg__13972__auto___20756);

var G__20757 = cljs.core.next.call(null,seq__19568_20750__$1);
var G__20758 = null;
var G__20759 = (0);
var G__20760 = (0);
seq__19568_20740 = G__20757;
chunk__19569_20741 = G__20758;
count__19570_20742 = G__20759;
i__19571_20743 = G__20760;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__13971__auto__);
};
var canvas = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return canvas__delegate.call(this,args__13970__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__20761){
var args__13970__auto__ = cljs.core.seq(arglist__20761);
return canvas__delegate(args__13970__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19576_20762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19577_20763 = null;
var count__19578_20764 = (0);
var i__19579_20765 = (0);
while(true){
if((i__19579_20765 < count__19578_20764)){
var arg__13972__auto___20766 = cljs.core._nth.call(null,chunk__19577_20763,i__19579_20765);
a__13971__auto__.push(arg__13972__auto___20766);

var G__20767 = seq__19576_20762;
var G__20768 = chunk__19577_20763;
var G__20769 = count__19578_20764;
var G__20770 = (i__19579_20765 + (1));
seq__19576_20762 = G__20767;
chunk__19577_20763 = G__20768;
count__19578_20764 = G__20769;
i__19579_20765 = G__20770;
continue;
} else {
var temp__4126__auto___20771 = cljs.core.seq.call(null,seq__19576_20762);
if(temp__4126__auto___20771){
var seq__19576_20772__$1 = temp__4126__auto___20771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19576_20772__$1)){
var c__8817__auto___20773 = cljs.core.chunk_first.call(null,seq__19576_20772__$1);
var G__20774 = cljs.core.chunk_rest.call(null,seq__19576_20772__$1);
var G__20775 = c__8817__auto___20773;
var G__20776 = cljs.core.count.call(null,c__8817__auto___20773);
var G__20777 = (0);
seq__19576_20762 = G__20774;
chunk__19577_20763 = G__20775;
count__19578_20764 = G__20776;
i__19579_20765 = G__20777;
continue;
} else {
var arg__13972__auto___20778 = cljs.core.first.call(null,seq__19576_20772__$1);
a__13971__auto__.push(arg__13972__auto___20778);

var G__20779 = cljs.core.next.call(null,seq__19576_20772__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__19576_20762 = G__20779;
chunk__19577_20763 = G__20780;
count__19578_20764 = G__20781;
i__19579_20765 = G__20782;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__13971__auto__);
};
var caption = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return caption__delegate.call(this,args__13970__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__20783){
var args__13970__auto__ = cljs.core.seq(arglist__20783);
return caption__delegate(args__13970__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19584_20784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19585_20785 = null;
var count__19586_20786 = (0);
var i__19587_20787 = (0);
while(true){
if((i__19587_20787 < count__19586_20786)){
var arg__13972__auto___20788 = cljs.core._nth.call(null,chunk__19585_20785,i__19587_20787);
a__13971__auto__.push(arg__13972__auto___20788);

var G__20789 = seq__19584_20784;
var G__20790 = chunk__19585_20785;
var G__20791 = count__19586_20786;
var G__20792 = (i__19587_20787 + (1));
seq__19584_20784 = G__20789;
chunk__19585_20785 = G__20790;
count__19586_20786 = G__20791;
i__19587_20787 = G__20792;
continue;
} else {
var temp__4126__auto___20793 = cljs.core.seq.call(null,seq__19584_20784);
if(temp__4126__auto___20793){
var seq__19584_20794__$1 = temp__4126__auto___20793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19584_20794__$1)){
var c__8817__auto___20795 = cljs.core.chunk_first.call(null,seq__19584_20794__$1);
var G__20796 = cljs.core.chunk_rest.call(null,seq__19584_20794__$1);
var G__20797 = c__8817__auto___20795;
var G__20798 = cljs.core.count.call(null,c__8817__auto___20795);
var G__20799 = (0);
seq__19584_20784 = G__20796;
chunk__19585_20785 = G__20797;
count__19586_20786 = G__20798;
i__19587_20787 = G__20799;
continue;
} else {
var arg__13972__auto___20800 = cljs.core.first.call(null,seq__19584_20794__$1);
a__13971__auto__.push(arg__13972__auto___20800);

var G__20801 = cljs.core.next.call(null,seq__19584_20794__$1);
var G__20802 = null;
var G__20803 = (0);
var G__20804 = (0);
seq__19584_20784 = G__20801;
chunk__19585_20785 = G__20802;
count__19586_20786 = G__20803;
i__19587_20787 = G__20804;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__13971__auto__);
};
var cite = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cite__delegate.call(this,args__13970__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__20805){
var args__13970__auto__ = cljs.core.seq(arglist__20805);
return cite__delegate(args__13970__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19592_20806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19593_20807 = null;
var count__19594_20808 = (0);
var i__19595_20809 = (0);
while(true){
if((i__19595_20809 < count__19594_20808)){
var arg__13972__auto___20810 = cljs.core._nth.call(null,chunk__19593_20807,i__19595_20809);
a__13971__auto__.push(arg__13972__auto___20810);

var G__20811 = seq__19592_20806;
var G__20812 = chunk__19593_20807;
var G__20813 = count__19594_20808;
var G__20814 = (i__19595_20809 + (1));
seq__19592_20806 = G__20811;
chunk__19593_20807 = G__20812;
count__19594_20808 = G__20813;
i__19595_20809 = G__20814;
continue;
} else {
var temp__4126__auto___20815 = cljs.core.seq.call(null,seq__19592_20806);
if(temp__4126__auto___20815){
var seq__19592_20816__$1 = temp__4126__auto___20815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19592_20816__$1)){
var c__8817__auto___20817 = cljs.core.chunk_first.call(null,seq__19592_20816__$1);
var G__20818 = cljs.core.chunk_rest.call(null,seq__19592_20816__$1);
var G__20819 = c__8817__auto___20817;
var G__20820 = cljs.core.count.call(null,c__8817__auto___20817);
var G__20821 = (0);
seq__19592_20806 = G__20818;
chunk__19593_20807 = G__20819;
count__19594_20808 = G__20820;
i__19595_20809 = G__20821;
continue;
} else {
var arg__13972__auto___20822 = cljs.core.first.call(null,seq__19592_20816__$1);
a__13971__auto__.push(arg__13972__auto___20822);

var G__20823 = cljs.core.next.call(null,seq__19592_20816__$1);
var G__20824 = null;
var G__20825 = (0);
var G__20826 = (0);
seq__19592_20806 = G__20823;
chunk__19593_20807 = G__20824;
count__19594_20808 = G__20825;
i__19595_20809 = G__20826;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__13971__auto__);
};
var code = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return code__delegate.call(this,args__13970__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__20827){
var args__13970__auto__ = cljs.core.seq(arglist__20827);
return code__delegate(args__13970__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19600_20828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19601_20829 = null;
var count__19602_20830 = (0);
var i__19603_20831 = (0);
while(true){
if((i__19603_20831 < count__19602_20830)){
var arg__13972__auto___20832 = cljs.core._nth.call(null,chunk__19601_20829,i__19603_20831);
a__13971__auto__.push(arg__13972__auto___20832);

var G__20833 = seq__19600_20828;
var G__20834 = chunk__19601_20829;
var G__20835 = count__19602_20830;
var G__20836 = (i__19603_20831 + (1));
seq__19600_20828 = G__20833;
chunk__19601_20829 = G__20834;
count__19602_20830 = G__20835;
i__19603_20831 = G__20836;
continue;
} else {
var temp__4126__auto___20837 = cljs.core.seq.call(null,seq__19600_20828);
if(temp__4126__auto___20837){
var seq__19600_20838__$1 = temp__4126__auto___20837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19600_20838__$1)){
var c__8817__auto___20839 = cljs.core.chunk_first.call(null,seq__19600_20838__$1);
var G__20840 = cljs.core.chunk_rest.call(null,seq__19600_20838__$1);
var G__20841 = c__8817__auto___20839;
var G__20842 = cljs.core.count.call(null,c__8817__auto___20839);
var G__20843 = (0);
seq__19600_20828 = G__20840;
chunk__19601_20829 = G__20841;
count__19602_20830 = G__20842;
i__19603_20831 = G__20843;
continue;
} else {
var arg__13972__auto___20844 = cljs.core.first.call(null,seq__19600_20838__$1);
a__13971__auto__.push(arg__13972__auto___20844);

var G__20845 = cljs.core.next.call(null,seq__19600_20838__$1);
var G__20846 = null;
var G__20847 = (0);
var G__20848 = (0);
seq__19600_20828 = G__20845;
chunk__19601_20829 = G__20846;
count__19602_20830 = G__20847;
i__19603_20831 = G__20848;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__13971__auto__);
};
var col = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return col__delegate.call(this,args__13970__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__20849){
var args__13970__auto__ = cljs.core.seq(arglist__20849);
return col__delegate(args__13970__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19608_20850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19609_20851 = null;
var count__19610_20852 = (0);
var i__19611_20853 = (0);
while(true){
if((i__19611_20853 < count__19610_20852)){
var arg__13972__auto___20854 = cljs.core._nth.call(null,chunk__19609_20851,i__19611_20853);
a__13971__auto__.push(arg__13972__auto___20854);

var G__20855 = seq__19608_20850;
var G__20856 = chunk__19609_20851;
var G__20857 = count__19610_20852;
var G__20858 = (i__19611_20853 + (1));
seq__19608_20850 = G__20855;
chunk__19609_20851 = G__20856;
count__19610_20852 = G__20857;
i__19611_20853 = G__20858;
continue;
} else {
var temp__4126__auto___20859 = cljs.core.seq.call(null,seq__19608_20850);
if(temp__4126__auto___20859){
var seq__19608_20860__$1 = temp__4126__auto___20859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19608_20860__$1)){
var c__8817__auto___20861 = cljs.core.chunk_first.call(null,seq__19608_20860__$1);
var G__20862 = cljs.core.chunk_rest.call(null,seq__19608_20860__$1);
var G__20863 = c__8817__auto___20861;
var G__20864 = cljs.core.count.call(null,c__8817__auto___20861);
var G__20865 = (0);
seq__19608_20850 = G__20862;
chunk__19609_20851 = G__20863;
count__19610_20852 = G__20864;
i__19611_20853 = G__20865;
continue;
} else {
var arg__13972__auto___20866 = cljs.core.first.call(null,seq__19608_20860__$1);
a__13971__auto__.push(arg__13972__auto___20866);

var G__20867 = cljs.core.next.call(null,seq__19608_20860__$1);
var G__20868 = null;
var G__20869 = (0);
var G__20870 = (0);
seq__19608_20850 = G__20867;
chunk__19609_20851 = G__20868;
count__19610_20852 = G__20869;
i__19611_20853 = G__20870;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__13971__auto__);
};
var colgroup = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return colgroup__delegate.call(this,args__13970__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__20871){
var args__13970__auto__ = cljs.core.seq(arglist__20871);
return colgroup__delegate(args__13970__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19616_20872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19617_20873 = null;
var count__19618_20874 = (0);
var i__19619_20875 = (0);
while(true){
if((i__19619_20875 < count__19618_20874)){
var arg__13972__auto___20876 = cljs.core._nth.call(null,chunk__19617_20873,i__19619_20875);
a__13971__auto__.push(arg__13972__auto___20876);

var G__20877 = seq__19616_20872;
var G__20878 = chunk__19617_20873;
var G__20879 = count__19618_20874;
var G__20880 = (i__19619_20875 + (1));
seq__19616_20872 = G__20877;
chunk__19617_20873 = G__20878;
count__19618_20874 = G__20879;
i__19619_20875 = G__20880;
continue;
} else {
var temp__4126__auto___20881 = cljs.core.seq.call(null,seq__19616_20872);
if(temp__4126__auto___20881){
var seq__19616_20882__$1 = temp__4126__auto___20881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19616_20882__$1)){
var c__8817__auto___20883 = cljs.core.chunk_first.call(null,seq__19616_20882__$1);
var G__20884 = cljs.core.chunk_rest.call(null,seq__19616_20882__$1);
var G__20885 = c__8817__auto___20883;
var G__20886 = cljs.core.count.call(null,c__8817__auto___20883);
var G__20887 = (0);
seq__19616_20872 = G__20884;
chunk__19617_20873 = G__20885;
count__19618_20874 = G__20886;
i__19619_20875 = G__20887;
continue;
} else {
var arg__13972__auto___20888 = cljs.core.first.call(null,seq__19616_20882__$1);
a__13971__auto__.push(arg__13972__auto___20888);

var G__20889 = cljs.core.next.call(null,seq__19616_20882__$1);
var G__20890 = null;
var G__20891 = (0);
var G__20892 = (0);
seq__19616_20872 = G__20889;
chunk__19617_20873 = G__20890;
count__19618_20874 = G__20891;
i__19619_20875 = G__20892;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__13971__auto__);
};
var data = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return data__delegate.call(this,args__13970__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__20893){
var args__13970__auto__ = cljs.core.seq(arglist__20893);
return data__delegate(args__13970__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19624_20894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19625_20895 = null;
var count__19626_20896 = (0);
var i__19627_20897 = (0);
while(true){
if((i__19627_20897 < count__19626_20896)){
var arg__13972__auto___20898 = cljs.core._nth.call(null,chunk__19625_20895,i__19627_20897);
a__13971__auto__.push(arg__13972__auto___20898);

var G__20899 = seq__19624_20894;
var G__20900 = chunk__19625_20895;
var G__20901 = count__19626_20896;
var G__20902 = (i__19627_20897 + (1));
seq__19624_20894 = G__20899;
chunk__19625_20895 = G__20900;
count__19626_20896 = G__20901;
i__19627_20897 = G__20902;
continue;
} else {
var temp__4126__auto___20903 = cljs.core.seq.call(null,seq__19624_20894);
if(temp__4126__auto___20903){
var seq__19624_20904__$1 = temp__4126__auto___20903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19624_20904__$1)){
var c__8817__auto___20905 = cljs.core.chunk_first.call(null,seq__19624_20904__$1);
var G__20906 = cljs.core.chunk_rest.call(null,seq__19624_20904__$1);
var G__20907 = c__8817__auto___20905;
var G__20908 = cljs.core.count.call(null,c__8817__auto___20905);
var G__20909 = (0);
seq__19624_20894 = G__20906;
chunk__19625_20895 = G__20907;
count__19626_20896 = G__20908;
i__19627_20897 = G__20909;
continue;
} else {
var arg__13972__auto___20910 = cljs.core.first.call(null,seq__19624_20904__$1);
a__13971__auto__.push(arg__13972__auto___20910);

var G__20911 = cljs.core.next.call(null,seq__19624_20904__$1);
var G__20912 = null;
var G__20913 = (0);
var G__20914 = (0);
seq__19624_20894 = G__20911;
chunk__19625_20895 = G__20912;
count__19626_20896 = G__20913;
i__19627_20897 = G__20914;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__13971__auto__);
};
var datalist = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return datalist__delegate.call(this,args__13970__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__20915){
var args__13970__auto__ = cljs.core.seq(arglist__20915);
return datalist__delegate(args__13970__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19632_20916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19633_20917 = null;
var count__19634_20918 = (0);
var i__19635_20919 = (0);
while(true){
if((i__19635_20919 < count__19634_20918)){
var arg__13972__auto___20920 = cljs.core._nth.call(null,chunk__19633_20917,i__19635_20919);
a__13971__auto__.push(arg__13972__auto___20920);

var G__20921 = seq__19632_20916;
var G__20922 = chunk__19633_20917;
var G__20923 = count__19634_20918;
var G__20924 = (i__19635_20919 + (1));
seq__19632_20916 = G__20921;
chunk__19633_20917 = G__20922;
count__19634_20918 = G__20923;
i__19635_20919 = G__20924;
continue;
} else {
var temp__4126__auto___20925 = cljs.core.seq.call(null,seq__19632_20916);
if(temp__4126__auto___20925){
var seq__19632_20926__$1 = temp__4126__auto___20925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19632_20926__$1)){
var c__8817__auto___20927 = cljs.core.chunk_first.call(null,seq__19632_20926__$1);
var G__20928 = cljs.core.chunk_rest.call(null,seq__19632_20926__$1);
var G__20929 = c__8817__auto___20927;
var G__20930 = cljs.core.count.call(null,c__8817__auto___20927);
var G__20931 = (0);
seq__19632_20916 = G__20928;
chunk__19633_20917 = G__20929;
count__19634_20918 = G__20930;
i__19635_20919 = G__20931;
continue;
} else {
var arg__13972__auto___20932 = cljs.core.first.call(null,seq__19632_20926__$1);
a__13971__auto__.push(arg__13972__auto___20932);

var G__20933 = cljs.core.next.call(null,seq__19632_20926__$1);
var G__20934 = null;
var G__20935 = (0);
var G__20936 = (0);
seq__19632_20916 = G__20933;
chunk__19633_20917 = G__20934;
count__19634_20918 = G__20935;
i__19635_20919 = G__20936;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__13971__auto__);
};
var dd = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return dd__delegate.call(this,args__13970__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__20937){
var args__13970__auto__ = cljs.core.seq(arglist__20937);
return dd__delegate(args__13970__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19640_20938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19641_20939 = null;
var count__19642_20940 = (0);
var i__19643_20941 = (0);
while(true){
if((i__19643_20941 < count__19642_20940)){
var arg__13972__auto___20942 = cljs.core._nth.call(null,chunk__19641_20939,i__19643_20941);
a__13971__auto__.push(arg__13972__auto___20942);

var G__20943 = seq__19640_20938;
var G__20944 = chunk__19641_20939;
var G__20945 = count__19642_20940;
var G__20946 = (i__19643_20941 + (1));
seq__19640_20938 = G__20943;
chunk__19641_20939 = G__20944;
count__19642_20940 = G__20945;
i__19643_20941 = G__20946;
continue;
} else {
var temp__4126__auto___20947 = cljs.core.seq.call(null,seq__19640_20938);
if(temp__4126__auto___20947){
var seq__19640_20948__$1 = temp__4126__auto___20947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19640_20948__$1)){
var c__8817__auto___20949 = cljs.core.chunk_first.call(null,seq__19640_20948__$1);
var G__20950 = cljs.core.chunk_rest.call(null,seq__19640_20948__$1);
var G__20951 = c__8817__auto___20949;
var G__20952 = cljs.core.count.call(null,c__8817__auto___20949);
var G__20953 = (0);
seq__19640_20938 = G__20950;
chunk__19641_20939 = G__20951;
count__19642_20940 = G__20952;
i__19643_20941 = G__20953;
continue;
} else {
var arg__13972__auto___20954 = cljs.core.first.call(null,seq__19640_20948__$1);
a__13971__auto__.push(arg__13972__auto___20954);

var G__20955 = cljs.core.next.call(null,seq__19640_20948__$1);
var G__20956 = null;
var G__20957 = (0);
var G__20958 = (0);
seq__19640_20938 = G__20955;
chunk__19641_20939 = G__20956;
count__19642_20940 = G__20957;
i__19643_20941 = G__20958;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__13971__auto__);
};
var del = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return del__delegate.call(this,args__13970__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__20959){
var args__13970__auto__ = cljs.core.seq(arglist__20959);
return del__delegate(args__13970__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19648_20960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19649_20961 = null;
var count__19650_20962 = (0);
var i__19651_20963 = (0);
while(true){
if((i__19651_20963 < count__19650_20962)){
var arg__13972__auto___20964 = cljs.core._nth.call(null,chunk__19649_20961,i__19651_20963);
a__13971__auto__.push(arg__13972__auto___20964);

var G__20965 = seq__19648_20960;
var G__20966 = chunk__19649_20961;
var G__20967 = count__19650_20962;
var G__20968 = (i__19651_20963 + (1));
seq__19648_20960 = G__20965;
chunk__19649_20961 = G__20966;
count__19650_20962 = G__20967;
i__19651_20963 = G__20968;
continue;
} else {
var temp__4126__auto___20969 = cljs.core.seq.call(null,seq__19648_20960);
if(temp__4126__auto___20969){
var seq__19648_20970__$1 = temp__4126__auto___20969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19648_20970__$1)){
var c__8817__auto___20971 = cljs.core.chunk_first.call(null,seq__19648_20970__$1);
var G__20972 = cljs.core.chunk_rest.call(null,seq__19648_20970__$1);
var G__20973 = c__8817__auto___20971;
var G__20974 = cljs.core.count.call(null,c__8817__auto___20971);
var G__20975 = (0);
seq__19648_20960 = G__20972;
chunk__19649_20961 = G__20973;
count__19650_20962 = G__20974;
i__19651_20963 = G__20975;
continue;
} else {
var arg__13972__auto___20976 = cljs.core.first.call(null,seq__19648_20970__$1);
a__13971__auto__.push(arg__13972__auto___20976);

var G__20977 = cljs.core.next.call(null,seq__19648_20970__$1);
var G__20978 = null;
var G__20979 = (0);
var G__20980 = (0);
seq__19648_20960 = G__20977;
chunk__19649_20961 = G__20978;
count__19650_20962 = G__20979;
i__19651_20963 = G__20980;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__13971__auto__);
};
var details = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return details__delegate.call(this,args__13970__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__20981){
var args__13970__auto__ = cljs.core.seq(arglist__20981);
return details__delegate(args__13970__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19656_20982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19657_20983 = null;
var count__19658_20984 = (0);
var i__19659_20985 = (0);
while(true){
if((i__19659_20985 < count__19658_20984)){
var arg__13972__auto___20986 = cljs.core._nth.call(null,chunk__19657_20983,i__19659_20985);
a__13971__auto__.push(arg__13972__auto___20986);

var G__20987 = seq__19656_20982;
var G__20988 = chunk__19657_20983;
var G__20989 = count__19658_20984;
var G__20990 = (i__19659_20985 + (1));
seq__19656_20982 = G__20987;
chunk__19657_20983 = G__20988;
count__19658_20984 = G__20989;
i__19659_20985 = G__20990;
continue;
} else {
var temp__4126__auto___20991 = cljs.core.seq.call(null,seq__19656_20982);
if(temp__4126__auto___20991){
var seq__19656_20992__$1 = temp__4126__auto___20991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19656_20992__$1)){
var c__8817__auto___20993 = cljs.core.chunk_first.call(null,seq__19656_20992__$1);
var G__20994 = cljs.core.chunk_rest.call(null,seq__19656_20992__$1);
var G__20995 = c__8817__auto___20993;
var G__20996 = cljs.core.count.call(null,c__8817__auto___20993);
var G__20997 = (0);
seq__19656_20982 = G__20994;
chunk__19657_20983 = G__20995;
count__19658_20984 = G__20996;
i__19659_20985 = G__20997;
continue;
} else {
var arg__13972__auto___20998 = cljs.core.first.call(null,seq__19656_20992__$1);
a__13971__auto__.push(arg__13972__auto___20998);

var G__20999 = cljs.core.next.call(null,seq__19656_20992__$1);
var G__21000 = null;
var G__21001 = (0);
var G__21002 = (0);
seq__19656_20982 = G__20999;
chunk__19657_20983 = G__21000;
count__19658_20984 = G__21001;
i__19659_20985 = G__21002;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__13971__auto__);
};
var dfn = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return dfn__delegate.call(this,args__13970__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__21003){
var args__13970__auto__ = cljs.core.seq(arglist__21003);
return dfn__delegate(args__13970__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19664_21004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19665_21005 = null;
var count__19666_21006 = (0);
var i__19667_21007 = (0);
while(true){
if((i__19667_21007 < count__19666_21006)){
var arg__13972__auto___21008 = cljs.core._nth.call(null,chunk__19665_21005,i__19667_21007);
a__13971__auto__.push(arg__13972__auto___21008);

var G__21009 = seq__19664_21004;
var G__21010 = chunk__19665_21005;
var G__21011 = count__19666_21006;
var G__21012 = (i__19667_21007 + (1));
seq__19664_21004 = G__21009;
chunk__19665_21005 = G__21010;
count__19666_21006 = G__21011;
i__19667_21007 = G__21012;
continue;
} else {
var temp__4126__auto___21013 = cljs.core.seq.call(null,seq__19664_21004);
if(temp__4126__auto___21013){
var seq__19664_21014__$1 = temp__4126__auto___21013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19664_21014__$1)){
var c__8817__auto___21015 = cljs.core.chunk_first.call(null,seq__19664_21014__$1);
var G__21016 = cljs.core.chunk_rest.call(null,seq__19664_21014__$1);
var G__21017 = c__8817__auto___21015;
var G__21018 = cljs.core.count.call(null,c__8817__auto___21015);
var G__21019 = (0);
seq__19664_21004 = G__21016;
chunk__19665_21005 = G__21017;
count__19666_21006 = G__21018;
i__19667_21007 = G__21019;
continue;
} else {
var arg__13972__auto___21020 = cljs.core.first.call(null,seq__19664_21014__$1);
a__13971__auto__.push(arg__13972__auto___21020);

var G__21021 = cljs.core.next.call(null,seq__19664_21014__$1);
var G__21022 = null;
var G__21023 = (0);
var G__21024 = (0);
seq__19664_21004 = G__21021;
chunk__19665_21005 = G__21022;
count__19666_21006 = G__21023;
i__19667_21007 = G__21024;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__13971__auto__);
};
var div = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return div__delegate.call(this,args__13970__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__21025){
var args__13970__auto__ = cljs.core.seq(arglist__21025);
return div__delegate(args__13970__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19672_21026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19673_21027 = null;
var count__19674_21028 = (0);
var i__19675_21029 = (0);
while(true){
if((i__19675_21029 < count__19674_21028)){
var arg__13972__auto___21030 = cljs.core._nth.call(null,chunk__19673_21027,i__19675_21029);
a__13971__auto__.push(arg__13972__auto___21030);

var G__21031 = seq__19672_21026;
var G__21032 = chunk__19673_21027;
var G__21033 = count__19674_21028;
var G__21034 = (i__19675_21029 + (1));
seq__19672_21026 = G__21031;
chunk__19673_21027 = G__21032;
count__19674_21028 = G__21033;
i__19675_21029 = G__21034;
continue;
} else {
var temp__4126__auto___21035 = cljs.core.seq.call(null,seq__19672_21026);
if(temp__4126__auto___21035){
var seq__19672_21036__$1 = temp__4126__auto___21035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19672_21036__$1)){
var c__8817__auto___21037 = cljs.core.chunk_first.call(null,seq__19672_21036__$1);
var G__21038 = cljs.core.chunk_rest.call(null,seq__19672_21036__$1);
var G__21039 = c__8817__auto___21037;
var G__21040 = cljs.core.count.call(null,c__8817__auto___21037);
var G__21041 = (0);
seq__19672_21026 = G__21038;
chunk__19673_21027 = G__21039;
count__19674_21028 = G__21040;
i__19675_21029 = G__21041;
continue;
} else {
var arg__13972__auto___21042 = cljs.core.first.call(null,seq__19672_21036__$1);
a__13971__auto__.push(arg__13972__auto___21042);

var G__21043 = cljs.core.next.call(null,seq__19672_21036__$1);
var G__21044 = null;
var G__21045 = (0);
var G__21046 = (0);
seq__19672_21026 = G__21043;
chunk__19673_21027 = G__21044;
count__19674_21028 = G__21045;
i__19675_21029 = G__21046;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__13971__auto__);
};
var dl = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return dl__delegate.call(this,args__13970__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__21047){
var args__13970__auto__ = cljs.core.seq(arglist__21047);
return dl__delegate(args__13970__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19680_21048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19681_21049 = null;
var count__19682_21050 = (0);
var i__19683_21051 = (0);
while(true){
if((i__19683_21051 < count__19682_21050)){
var arg__13972__auto___21052 = cljs.core._nth.call(null,chunk__19681_21049,i__19683_21051);
a__13971__auto__.push(arg__13972__auto___21052);

var G__21053 = seq__19680_21048;
var G__21054 = chunk__19681_21049;
var G__21055 = count__19682_21050;
var G__21056 = (i__19683_21051 + (1));
seq__19680_21048 = G__21053;
chunk__19681_21049 = G__21054;
count__19682_21050 = G__21055;
i__19683_21051 = G__21056;
continue;
} else {
var temp__4126__auto___21057 = cljs.core.seq.call(null,seq__19680_21048);
if(temp__4126__auto___21057){
var seq__19680_21058__$1 = temp__4126__auto___21057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19680_21058__$1)){
var c__8817__auto___21059 = cljs.core.chunk_first.call(null,seq__19680_21058__$1);
var G__21060 = cljs.core.chunk_rest.call(null,seq__19680_21058__$1);
var G__21061 = c__8817__auto___21059;
var G__21062 = cljs.core.count.call(null,c__8817__auto___21059);
var G__21063 = (0);
seq__19680_21048 = G__21060;
chunk__19681_21049 = G__21061;
count__19682_21050 = G__21062;
i__19683_21051 = G__21063;
continue;
} else {
var arg__13972__auto___21064 = cljs.core.first.call(null,seq__19680_21058__$1);
a__13971__auto__.push(arg__13972__auto___21064);

var G__21065 = cljs.core.next.call(null,seq__19680_21058__$1);
var G__21066 = null;
var G__21067 = (0);
var G__21068 = (0);
seq__19680_21048 = G__21065;
chunk__19681_21049 = G__21066;
count__19682_21050 = G__21067;
i__19683_21051 = G__21068;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__13971__auto__);
};
var dt = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return dt__delegate.call(this,args__13970__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__21069){
var args__13970__auto__ = cljs.core.seq(arglist__21069);
return dt__delegate(args__13970__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19688_21070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19689_21071 = null;
var count__19690_21072 = (0);
var i__19691_21073 = (0);
while(true){
if((i__19691_21073 < count__19690_21072)){
var arg__13972__auto___21074 = cljs.core._nth.call(null,chunk__19689_21071,i__19691_21073);
a__13971__auto__.push(arg__13972__auto___21074);

var G__21075 = seq__19688_21070;
var G__21076 = chunk__19689_21071;
var G__21077 = count__19690_21072;
var G__21078 = (i__19691_21073 + (1));
seq__19688_21070 = G__21075;
chunk__19689_21071 = G__21076;
count__19690_21072 = G__21077;
i__19691_21073 = G__21078;
continue;
} else {
var temp__4126__auto___21079 = cljs.core.seq.call(null,seq__19688_21070);
if(temp__4126__auto___21079){
var seq__19688_21080__$1 = temp__4126__auto___21079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19688_21080__$1)){
var c__8817__auto___21081 = cljs.core.chunk_first.call(null,seq__19688_21080__$1);
var G__21082 = cljs.core.chunk_rest.call(null,seq__19688_21080__$1);
var G__21083 = c__8817__auto___21081;
var G__21084 = cljs.core.count.call(null,c__8817__auto___21081);
var G__21085 = (0);
seq__19688_21070 = G__21082;
chunk__19689_21071 = G__21083;
count__19690_21072 = G__21084;
i__19691_21073 = G__21085;
continue;
} else {
var arg__13972__auto___21086 = cljs.core.first.call(null,seq__19688_21080__$1);
a__13971__auto__.push(arg__13972__auto___21086);

var G__21087 = cljs.core.next.call(null,seq__19688_21080__$1);
var G__21088 = null;
var G__21089 = (0);
var G__21090 = (0);
seq__19688_21070 = G__21087;
chunk__19689_21071 = G__21088;
count__19690_21072 = G__21089;
i__19691_21073 = G__21090;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__13971__auto__);
};
var em = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return em__delegate.call(this,args__13970__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__21091){
var args__13970__auto__ = cljs.core.seq(arglist__21091);
return em__delegate(args__13970__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19704_21092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19705_21093 = null;
var count__19706_21094 = (0);
var i__19707_21095 = (0);
while(true){
if((i__19707_21095 < count__19706_21094)){
var arg__13972__auto___21096 = cljs.core._nth.call(null,chunk__19705_21093,i__19707_21095);
a__13971__auto__.push(arg__13972__auto___21096);

var G__21097 = seq__19704_21092;
var G__21098 = chunk__19705_21093;
var G__21099 = count__19706_21094;
var G__21100 = (i__19707_21095 + (1));
seq__19704_21092 = G__21097;
chunk__19705_21093 = G__21098;
count__19706_21094 = G__21099;
i__19707_21095 = G__21100;
continue;
} else {
var temp__4126__auto___21101 = cljs.core.seq.call(null,seq__19704_21092);
if(temp__4126__auto___21101){
var seq__19704_21102__$1 = temp__4126__auto___21101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19704_21102__$1)){
var c__8817__auto___21103 = cljs.core.chunk_first.call(null,seq__19704_21102__$1);
var G__21104 = cljs.core.chunk_rest.call(null,seq__19704_21102__$1);
var G__21105 = c__8817__auto___21103;
var G__21106 = cljs.core.count.call(null,c__8817__auto___21103);
var G__21107 = (0);
seq__19704_21092 = G__21104;
chunk__19705_21093 = G__21105;
count__19706_21094 = G__21106;
i__19707_21095 = G__21107;
continue;
} else {
var arg__13972__auto___21108 = cljs.core.first.call(null,seq__19704_21102__$1);
a__13971__auto__.push(arg__13972__auto___21108);

var G__21109 = cljs.core.next.call(null,seq__19704_21102__$1);
var G__21110 = null;
var G__21111 = (0);
var G__21112 = (0);
seq__19704_21092 = G__21109;
chunk__19705_21093 = G__21110;
count__19706_21094 = G__21111;
i__19707_21095 = G__21112;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__13971__auto__);
};
var embed = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return embed__delegate.call(this,args__13970__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__21113){
var args__13970__auto__ = cljs.core.seq(arglist__21113);
return embed__delegate(args__13970__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19712_21114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19713_21115 = null;
var count__19714_21116 = (0);
var i__19715_21117 = (0);
while(true){
if((i__19715_21117 < count__19714_21116)){
var arg__13972__auto___21118 = cljs.core._nth.call(null,chunk__19713_21115,i__19715_21117);
a__13971__auto__.push(arg__13972__auto___21118);

var G__21119 = seq__19712_21114;
var G__21120 = chunk__19713_21115;
var G__21121 = count__19714_21116;
var G__21122 = (i__19715_21117 + (1));
seq__19712_21114 = G__21119;
chunk__19713_21115 = G__21120;
count__19714_21116 = G__21121;
i__19715_21117 = G__21122;
continue;
} else {
var temp__4126__auto___21123 = cljs.core.seq.call(null,seq__19712_21114);
if(temp__4126__auto___21123){
var seq__19712_21124__$1 = temp__4126__auto___21123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19712_21124__$1)){
var c__8817__auto___21125 = cljs.core.chunk_first.call(null,seq__19712_21124__$1);
var G__21126 = cljs.core.chunk_rest.call(null,seq__19712_21124__$1);
var G__21127 = c__8817__auto___21125;
var G__21128 = cljs.core.count.call(null,c__8817__auto___21125);
var G__21129 = (0);
seq__19712_21114 = G__21126;
chunk__19713_21115 = G__21127;
count__19714_21116 = G__21128;
i__19715_21117 = G__21129;
continue;
} else {
var arg__13972__auto___21130 = cljs.core.first.call(null,seq__19712_21124__$1);
a__13971__auto__.push(arg__13972__auto___21130);

var G__21131 = cljs.core.next.call(null,seq__19712_21124__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__19712_21114 = G__21131;
chunk__19713_21115 = G__21132;
count__19714_21116 = G__21133;
i__19715_21117 = G__21134;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__13971__auto__);
};
var fieldset = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return fieldset__delegate.call(this,args__13970__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__21135){
var args__13970__auto__ = cljs.core.seq(arglist__21135);
return fieldset__delegate(args__13970__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19720_21136 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19721_21137 = null;
var count__19722_21138 = (0);
var i__19723_21139 = (0);
while(true){
if((i__19723_21139 < count__19722_21138)){
var arg__13972__auto___21140 = cljs.core._nth.call(null,chunk__19721_21137,i__19723_21139);
a__13971__auto__.push(arg__13972__auto___21140);

var G__21141 = seq__19720_21136;
var G__21142 = chunk__19721_21137;
var G__21143 = count__19722_21138;
var G__21144 = (i__19723_21139 + (1));
seq__19720_21136 = G__21141;
chunk__19721_21137 = G__21142;
count__19722_21138 = G__21143;
i__19723_21139 = G__21144;
continue;
} else {
var temp__4126__auto___21145 = cljs.core.seq.call(null,seq__19720_21136);
if(temp__4126__auto___21145){
var seq__19720_21146__$1 = temp__4126__auto___21145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19720_21146__$1)){
var c__8817__auto___21147 = cljs.core.chunk_first.call(null,seq__19720_21146__$1);
var G__21148 = cljs.core.chunk_rest.call(null,seq__19720_21146__$1);
var G__21149 = c__8817__auto___21147;
var G__21150 = cljs.core.count.call(null,c__8817__auto___21147);
var G__21151 = (0);
seq__19720_21136 = G__21148;
chunk__19721_21137 = G__21149;
count__19722_21138 = G__21150;
i__19723_21139 = G__21151;
continue;
} else {
var arg__13972__auto___21152 = cljs.core.first.call(null,seq__19720_21146__$1);
a__13971__auto__.push(arg__13972__auto___21152);

var G__21153 = cljs.core.next.call(null,seq__19720_21146__$1);
var G__21154 = null;
var G__21155 = (0);
var G__21156 = (0);
seq__19720_21136 = G__21153;
chunk__19721_21137 = G__21154;
count__19722_21138 = G__21155;
i__19723_21139 = G__21156;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__13971__auto__);
};
var figcaption = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return figcaption__delegate.call(this,args__13970__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__21157){
var args__13970__auto__ = cljs.core.seq(arglist__21157);
return figcaption__delegate(args__13970__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19728_21158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19729_21159 = null;
var count__19730_21160 = (0);
var i__19731_21161 = (0);
while(true){
if((i__19731_21161 < count__19730_21160)){
var arg__13972__auto___21162 = cljs.core._nth.call(null,chunk__19729_21159,i__19731_21161);
a__13971__auto__.push(arg__13972__auto___21162);

var G__21163 = seq__19728_21158;
var G__21164 = chunk__19729_21159;
var G__21165 = count__19730_21160;
var G__21166 = (i__19731_21161 + (1));
seq__19728_21158 = G__21163;
chunk__19729_21159 = G__21164;
count__19730_21160 = G__21165;
i__19731_21161 = G__21166;
continue;
} else {
var temp__4126__auto___21167 = cljs.core.seq.call(null,seq__19728_21158);
if(temp__4126__auto___21167){
var seq__19728_21168__$1 = temp__4126__auto___21167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19728_21168__$1)){
var c__8817__auto___21169 = cljs.core.chunk_first.call(null,seq__19728_21168__$1);
var G__21170 = cljs.core.chunk_rest.call(null,seq__19728_21168__$1);
var G__21171 = c__8817__auto___21169;
var G__21172 = cljs.core.count.call(null,c__8817__auto___21169);
var G__21173 = (0);
seq__19728_21158 = G__21170;
chunk__19729_21159 = G__21171;
count__19730_21160 = G__21172;
i__19731_21161 = G__21173;
continue;
} else {
var arg__13972__auto___21174 = cljs.core.first.call(null,seq__19728_21168__$1);
a__13971__auto__.push(arg__13972__auto___21174);

var G__21175 = cljs.core.next.call(null,seq__19728_21168__$1);
var G__21176 = null;
var G__21177 = (0);
var G__21178 = (0);
seq__19728_21158 = G__21175;
chunk__19729_21159 = G__21176;
count__19730_21160 = G__21177;
i__19731_21161 = G__21178;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__13971__auto__);
};
var figure = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return figure__delegate.call(this,args__13970__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__21179){
var args__13970__auto__ = cljs.core.seq(arglist__21179);
return figure__delegate(args__13970__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19736_21180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19737_21181 = null;
var count__19738_21182 = (0);
var i__19739_21183 = (0);
while(true){
if((i__19739_21183 < count__19738_21182)){
var arg__13972__auto___21184 = cljs.core._nth.call(null,chunk__19737_21181,i__19739_21183);
a__13971__auto__.push(arg__13972__auto___21184);

var G__21185 = seq__19736_21180;
var G__21186 = chunk__19737_21181;
var G__21187 = count__19738_21182;
var G__21188 = (i__19739_21183 + (1));
seq__19736_21180 = G__21185;
chunk__19737_21181 = G__21186;
count__19738_21182 = G__21187;
i__19739_21183 = G__21188;
continue;
} else {
var temp__4126__auto___21189 = cljs.core.seq.call(null,seq__19736_21180);
if(temp__4126__auto___21189){
var seq__19736_21190__$1 = temp__4126__auto___21189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19736_21190__$1)){
var c__8817__auto___21191 = cljs.core.chunk_first.call(null,seq__19736_21190__$1);
var G__21192 = cljs.core.chunk_rest.call(null,seq__19736_21190__$1);
var G__21193 = c__8817__auto___21191;
var G__21194 = cljs.core.count.call(null,c__8817__auto___21191);
var G__21195 = (0);
seq__19736_21180 = G__21192;
chunk__19737_21181 = G__21193;
count__19738_21182 = G__21194;
i__19739_21183 = G__21195;
continue;
} else {
var arg__13972__auto___21196 = cljs.core.first.call(null,seq__19736_21190__$1);
a__13971__auto__.push(arg__13972__auto___21196);

var G__21197 = cljs.core.next.call(null,seq__19736_21190__$1);
var G__21198 = null;
var G__21199 = (0);
var G__21200 = (0);
seq__19736_21180 = G__21197;
chunk__19737_21181 = G__21198;
count__19738_21182 = G__21199;
i__19739_21183 = G__21200;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__13971__auto__);
};
var footer = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return footer__delegate.call(this,args__13970__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__21201){
var args__13970__auto__ = cljs.core.seq(arglist__21201);
return footer__delegate(args__13970__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19744_21202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19745_21203 = null;
var count__19746_21204 = (0);
var i__19747_21205 = (0);
while(true){
if((i__19747_21205 < count__19746_21204)){
var arg__13972__auto___21206 = cljs.core._nth.call(null,chunk__19745_21203,i__19747_21205);
a__13971__auto__.push(arg__13972__auto___21206);

var G__21207 = seq__19744_21202;
var G__21208 = chunk__19745_21203;
var G__21209 = count__19746_21204;
var G__21210 = (i__19747_21205 + (1));
seq__19744_21202 = G__21207;
chunk__19745_21203 = G__21208;
count__19746_21204 = G__21209;
i__19747_21205 = G__21210;
continue;
} else {
var temp__4126__auto___21211 = cljs.core.seq.call(null,seq__19744_21202);
if(temp__4126__auto___21211){
var seq__19744_21212__$1 = temp__4126__auto___21211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19744_21212__$1)){
var c__8817__auto___21213 = cljs.core.chunk_first.call(null,seq__19744_21212__$1);
var G__21214 = cljs.core.chunk_rest.call(null,seq__19744_21212__$1);
var G__21215 = c__8817__auto___21213;
var G__21216 = cljs.core.count.call(null,c__8817__auto___21213);
var G__21217 = (0);
seq__19744_21202 = G__21214;
chunk__19745_21203 = G__21215;
count__19746_21204 = G__21216;
i__19747_21205 = G__21217;
continue;
} else {
var arg__13972__auto___21218 = cljs.core.first.call(null,seq__19744_21212__$1);
a__13971__auto__.push(arg__13972__auto___21218);

var G__21219 = cljs.core.next.call(null,seq__19744_21212__$1);
var G__21220 = null;
var G__21221 = (0);
var G__21222 = (0);
seq__19744_21202 = G__21219;
chunk__19745_21203 = G__21220;
count__19746_21204 = G__21221;
i__19747_21205 = G__21222;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__13971__auto__);
};
var form = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return form__delegate.call(this,args__13970__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__21223){
var args__13970__auto__ = cljs.core.seq(arglist__21223);
return form__delegate(args__13970__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19752_21224 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19753_21225 = null;
var count__19754_21226 = (0);
var i__19755_21227 = (0);
while(true){
if((i__19755_21227 < count__19754_21226)){
var arg__13972__auto___21228 = cljs.core._nth.call(null,chunk__19753_21225,i__19755_21227);
a__13971__auto__.push(arg__13972__auto___21228);

var G__21229 = seq__19752_21224;
var G__21230 = chunk__19753_21225;
var G__21231 = count__19754_21226;
var G__21232 = (i__19755_21227 + (1));
seq__19752_21224 = G__21229;
chunk__19753_21225 = G__21230;
count__19754_21226 = G__21231;
i__19755_21227 = G__21232;
continue;
} else {
var temp__4126__auto___21233 = cljs.core.seq.call(null,seq__19752_21224);
if(temp__4126__auto___21233){
var seq__19752_21234__$1 = temp__4126__auto___21233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19752_21234__$1)){
var c__8817__auto___21235 = cljs.core.chunk_first.call(null,seq__19752_21234__$1);
var G__21236 = cljs.core.chunk_rest.call(null,seq__19752_21234__$1);
var G__21237 = c__8817__auto___21235;
var G__21238 = cljs.core.count.call(null,c__8817__auto___21235);
var G__21239 = (0);
seq__19752_21224 = G__21236;
chunk__19753_21225 = G__21237;
count__19754_21226 = G__21238;
i__19755_21227 = G__21239;
continue;
} else {
var arg__13972__auto___21240 = cljs.core.first.call(null,seq__19752_21234__$1);
a__13971__auto__.push(arg__13972__auto___21240);

var G__21241 = cljs.core.next.call(null,seq__19752_21234__$1);
var G__21242 = null;
var G__21243 = (0);
var G__21244 = (0);
seq__19752_21224 = G__21241;
chunk__19753_21225 = G__21242;
count__19754_21226 = G__21243;
i__19755_21227 = G__21244;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__13971__auto__);
};
var h1 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h1__delegate.call(this,args__13970__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__21245){
var args__13970__auto__ = cljs.core.seq(arglist__21245);
return h1__delegate(args__13970__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19760_21246 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19761_21247 = null;
var count__19762_21248 = (0);
var i__19763_21249 = (0);
while(true){
if((i__19763_21249 < count__19762_21248)){
var arg__13972__auto___21250 = cljs.core._nth.call(null,chunk__19761_21247,i__19763_21249);
a__13971__auto__.push(arg__13972__auto___21250);

var G__21251 = seq__19760_21246;
var G__21252 = chunk__19761_21247;
var G__21253 = count__19762_21248;
var G__21254 = (i__19763_21249 + (1));
seq__19760_21246 = G__21251;
chunk__19761_21247 = G__21252;
count__19762_21248 = G__21253;
i__19763_21249 = G__21254;
continue;
} else {
var temp__4126__auto___21255 = cljs.core.seq.call(null,seq__19760_21246);
if(temp__4126__auto___21255){
var seq__19760_21256__$1 = temp__4126__auto___21255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19760_21256__$1)){
var c__8817__auto___21257 = cljs.core.chunk_first.call(null,seq__19760_21256__$1);
var G__21258 = cljs.core.chunk_rest.call(null,seq__19760_21256__$1);
var G__21259 = c__8817__auto___21257;
var G__21260 = cljs.core.count.call(null,c__8817__auto___21257);
var G__21261 = (0);
seq__19760_21246 = G__21258;
chunk__19761_21247 = G__21259;
count__19762_21248 = G__21260;
i__19763_21249 = G__21261;
continue;
} else {
var arg__13972__auto___21262 = cljs.core.first.call(null,seq__19760_21256__$1);
a__13971__auto__.push(arg__13972__auto___21262);

var G__21263 = cljs.core.next.call(null,seq__19760_21256__$1);
var G__21264 = null;
var G__21265 = (0);
var G__21266 = (0);
seq__19760_21246 = G__21263;
chunk__19761_21247 = G__21264;
count__19762_21248 = G__21265;
i__19763_21249 = G__21266;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__13971__auto__);
};
var h2 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h2__delegate.call(this,args__13970__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__21267){
var args__13970__auto__ = cljs.core.seq(arglist__21267);
return h2__delegate(args__13970__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19768_21268 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19769_21269 = null;
var count__19770_21270 = (0);
var i__19771_21271 = (0);
while(true){
if((i__19771_21271 < count__19770_21270)){
var arg__13972__auto___21272 = cljs.core._nth.call(null,chunk__19769_21269,i__19771_21271);
a__13971__auto__.push(arg__13972__auto___21272);

var G__21273 = seq__19768_21268;
var G__21274 = chunk__19769_21269;
var G__21275 = count__19770_21270;
var G__21276 = (i__19771_21271 + (1));
seq__19768_21268 = G__21273;
chunk__19769_21269 = G__21274;
count__19770_21270 = G__21275;
i__19771_21271 = G__21276;
continue;
} else {
var temp__4126__auto___21277 = cljs.core.seq.call(null,seq__19768_21268);
if(temp__4126__auto___21277){
var seq__19768_21278__$1 = temp__4126__auto___21277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19768_21278__$1)){
var c__8817__auto___21279 = cljs.core.chunk_first.call(null,seq__19768_21278__$1);
var G__21280 = cljs.core.chunk_rest.call(null,seq__19768_21278__$1);
var G__21281 = c__8817__auto___21279;
var G__21282 = cljs.core.count.call(null,c__8817__auto___21279);
var G__21283 = (0);
seq__19768_21268 = G__21280;
chunk__19769_21269 = G__21281;
count__19770_21270 = G__21282;
i__19771_21271 = G__21283;
continue;
} else {
var arg__13972__auto___21284 = cljs.core.first.call(null,seq__19768_21278__$1);
a__13971__auto__.push(arg__13972__auto___21284);

var G__21285 = cljs.core.next.call(null,seq__19768_21278__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__19768_21268 = G__21285;
chunk__19769_21269 = G__21286;
count__19770_21270 = G__21287;
i__19771_21271 = G__21288;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__13971__auto__);
};
var h3 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h3__delegate.call(this,args__13970__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__21289){
var args__13970__auto__ = cljs.core.seq(arglist__21289);
return h3__delegate(args__13970__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19776_21290 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19777_21291 = null;
var count__19778_21292 = (0);
var i__19779_21293 = (0);
while(true){
if((i__19779_21293 < count__19778_21292)){
var arg__13972__auto___21294 = cljs.core._nth.call(null,chunk__19777_21291,i__19779_21293);
a__13971__auto__.push(arg__13972__auto___21294);

var G__21295 = seq__19776_21290;
var G__21296 = chunk__19777_21291;
var G__21297 = count__19778_21292;
var G__21298 = (i__19779_21293 + (1));
seq__19776_21290 = G__21295;
chunk__19777_21291 = G__21296;
count__19778_21292 = G__21297;
i__19779_21293 = G__21298;
continue;
} else {
var temp__4126__auto___21299 = cljs.core.seq.call(null,seq__19776_21290);
if(temp__4126__auto___21299){
var seq__19776_21300__$1 = temp__4126__auto___21299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19776_21300__$1)){
var c__8817__auto___21301 = cljs.core.chunk_first.call(null,seq__19776_21300__$1);
var G__21302 = cljs.core.chunk_rest.call(null,seq__19776_21300__$1);
var G__21303 = c__8817__auto___21301;
var G__21304 = cljs.core.count.call(null,c__8817__auto___21301);
var G__21305 = (0);
seq__19776_21290 = G__21302;
chunk__19777_21291 = G__21303;
count__19778_21292 = G__21304;
i__19779_21293 = G__21305;
continue;
} else {
var arg__13972__auto___21306 = cljs.core.first.call(null,seq__19776_21300__$1);
a__13971__auto__.push(arg__13972__auto___21306);

var G__21307 = cljs.core.next.call(null,seq__19776_21300__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__19776_21290 = G__21307;
chunk__19777_21291 = G__21308;
count__19778_21292 = G__21309;
i__19779_21293 = G__21310;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__13971__auto__);
};
var h4 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h4__delegate.call(this,args__13970__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__21311){
var args__13970__auto__ = cljs.core.seq(arglist__21311);
return h4__delegate(args__13970__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19784_21312 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19785_21313 = null;
var count__19786_21314 = (0);
var i__19787_21315 = (0);
while(true){
if((i__19787_21315 < count__19786_21314)){
var arg__13972__auto___21316 = cljs.core._nth.call(null,chunk__19785_21313,i__19787_21315);
a__13971__auto__.push(arg__13972__auto___21316);

var G__21317 = seq__19784_21312;
var G__21318 = chunk__19785_21313;
var G__21319 = count__19786_21314;
var G__21320 = (i__19787_21315 + (1));
seq__19784_21312 = G__21317;
chunk__19785_21313 = G__21318;
count__19786_21314 = G__21319;
i__19787_21315 = G__21320;
continue;
} else {
var temp__4126__auto___21321 = cljs.core.seq.call(null,seq__19784_21312);
if(temp__4126__auto___21321){
var seq__19784_21322__$1 = temp__4126__auto___21321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19784_21322__$1)){
var c__8817__auto___21323 = cljs.core.chunk_first.call(null,seq__19784_21322__$1);
var G__21324 = cljs.core.chunk_rest.call(null,seq__19784_21322__$1);
var G__21325 = c__8817__auto___21323;
var G__21326 = cljs.core.count.call(null,c__8817__auto___21323);
var G__21327 = (0);
seq__19784_21312 = G__21324;
chunk__19785_21313 = G__21325;
count__19786_21314 = G__21326;
i__19787_21315 = G__21327;
continue;
} else {
var arg__13972__auto___21328 = cljs.core.first.call(null,seq__19784_21322__$1);
a__13971__auto__.push(arg__13972__auto___21328);

var G__21329 = cljs.core.next.call(null,seq__19784_21322__$1);
var G__21330 = null;
var G__21331 = (0);
var G__21332 = (0);
seq__19784_21312 = G__21329;
chunk__19785_21313 = G__21330;
count__19786_21314 = G__21331;
i__19787_21315 = G__21332;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__13971__auto__);
};
var h5 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h5__delegate.call(this,args__13970__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__21333){
var args__13970__auto__ = cljs.core.seq(arglist__21333);
return h5__delegate(args__13970__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19792_21334 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19793_21335 = null;
var count__19794_21336 = (0);
var i__19795_21337 = (0);
while(true){
if((i__19795_21337 < count__19794_21336)){
var arg__13972__auto___21338 = cljs.core._nth.call(null,chunk__19793_21335,i__19795_21337);
a__13971__auto__.push(arg__13972__auto___21338);

var G__21339 = seq__19792_21334;
var G__21340 = chunk__19793_21335;
var G__21341 = count__19794_21336;
var G__21342 = (i__19795_21337 + (1));
seq__19792_21334 = G__21339;
chunk__19793_21335 = G__21340;
count__19794_21336 = G__21341;
i__19795_21337 = G__21342;
continue;
} else {
var temp__4126__auto___21343 = cljs.core.seq.call(null,seq__19792_21334);
if(temp__4126__auto___21343){
var seq__19792_21344__$1 = temp__4126__auto___21343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19792_21344__$1)){
var c__8817__auto___21345 = cljs.core.chunk_first.call(null,seq__19792_21344__$1);
var G__21346 = cljs.core.chunk_rest.call(null,seq__19792_21344__$1);
var G__21347 = c__8817__auto___21345;
var G__21348 = cljs.core.count.call(null,c__8817__auto___21345);
var G__21349 = (0);
seq__19792_21334 = G__21346;
chunk__19793_21335 = G__21347;
count__19794_21336 = G__21348;
i__19795_21337 = G__21349;
continue;
} else {
var arg__13972__auto___21350 = cljs.core.first.call(null,seq__19792_21344__$1);
a__13971__auto__.push(arg__13972__auto___21350);

var G__21351 = cljs.core.next.call(null,seq__19792_21344__$1);
var G__21352 = null;
var G__21353 = (0);
var G__21354 = (0);
seq__19792_21334 = G__21351;
chunk__19793_21335 = G__21352;
count__19794_21336 = G__21353;
i__19795_21337 = G__21354;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__13971__auto__);
};
var h6 = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return h6__delegate.call(this,args__13970__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__21355){
var args__13970__auto__ = cljs.core.seq(arglist__21355);
return h6__delegate(args__13970__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19800_21356 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19801_21357 = null;
var count__19802_21358 = (0);
var i__19803_21359 = (0);
while(true){
if((i__19803_21359 < count__19802_21358)){
var arg__13972__auto___21360 = cljs.core._nth.call(null,chunk__19801_21357,i__19803_21359);
a__13971__auto__.push(arg__13972__auto___21360);

var G__21361 = seq__19800_21356;
var G__21362 = chunk__19801_21357;
var G__21363 = count__19802_21358;
var G__21364 = (i__19803_21359 + (1));
seq__19800_21356 = G__21361;
chunk__19801_21357 = G__21362;
count__19802_21358 = G__21363;
i__19803_21359 = G__21364;
continue;
} else {
var temp__4126__auto___21365 = cljs.core.seq.call(null,seq__19800_21356);
if(temp__4126__auto___21365){
var seq__19800_21366__$1 = temp__4126__auto___21365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19800_21366__$1)){
var c__8817__auto___21367 = cljs.core.chunk_first.call(null,seq__19800_21366__$1);
var G__21368 = cljs.core.chunk_rest.call(null,seq__19800_21366__$1);
var G__21369 = c__8817__auto___21367;
var G__21370 = cljs.core.count.call(null,c__8817__auto___21367);
var G__21371 = (0);
seq__19800_21356 = G__21368;
chunk__19801_21357 = G__21369;
count__19802_21358 = G__21370;
i__19803_21359 = G__21371;
continue;
} else {
var arg__13972__auto___21372 = cljs.core.first.call(null,seq__19800_21366__$1);
a__13971__auto__.push(arg__13972__auto___21372);

var G__21373 = cljs.core.next.call(null,seq__19800_21366__$1);
var G__21374 = null;
var G__21375 = (0);
var G__21376 = (0);
seq__19800_21356 = G__21373;
chunk__19801_21357 = G__21374;
count__19802_21358 = G__21375;
i__19803_21359 = G__21376;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__13971__auto__);
};
var head = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return head__delegate.call(this,args__13970__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__21377){
var args__13970__auto__ = cljs.core.seq(arglist__21377);
return head__delegate(args__13970__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19808_21378 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19809_21379 = null;
var count__19810_21380 = (0);
var i__19811_21381 = (0);
while(true){
if((i__19811_21381 < count__19810_21380)){
var arg__13972__auto___21382 = cljs.core._nth.call(null,chunk__19809_21379,i__19811_21381);
a__13971__auto__.push(arg__13972__auto___21382);

var G__21383 = seq__19808_21378;
var G__21384 = chunk__19809_21379;
var G__21385 = count__19810_21380;
var G__21386 = (i__19811_21381 + (1));
seq__19808_21378 = G__21383;
chunk__19809_21379 = G__21384;
count__19810_21380 = G__21385;
i__19811_21381 = G__21386;
continue;
} else {
var temp__4126__auto___21387 = cljs.core.seq.call(null,seq__19808_21378);
if(temp__4126__auto___21387){
var seq__19808_21388__$1 = temp__4126__auto___21387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19808_21388__$1)){
var c__8817__auto___21389 = cljs.core.chunk_first.call(null,seq__19808_21388__$1);
var G__21390 = cljs.core.chunk_rest.call(null,seq__19808_21388__$1);
var G__21391 = c__8817__auto___21389;
var G__21392 = cljs.core.count.call(null,c__8817__auto___21389);
var G__21393 = (0);
seq__19808_21378 = G__21390;
chunk__19809_21379 = G__21391;
count__19810_21380 = G__21392;
i__19811_21381 = G__21393;
continue;
} else {
var arg__13972__auto___21394 = cljs.core.first.call(null,seq__19808_21388__$1);
a__13971__auto__.push(arg__13972__auto___21394);

var G__21395 = cljs.core.next.call(null,seq__19808_21388__$1);
var G__21396 = null;
var G__21397 = (0);
var G__21398 = (0);
seq__19808_21378 = G__21395;
chunk__19809_21379 = G__21396;
count__19810_21380 = G__21397;
i__19811_21381 = G__21398;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__13971__auto__);
};
var header = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return header__delegate.call(this,args__13970__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__21399){
var args__13970__auto__ = cljs.core.seq(arglist__21399);
return header__delegate(args__13970__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19816_21400 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19817_21401 = null;
var count__19818_21402 = (0);
var i__19819_21403 = (0);
while(true){
if((i__19819_21403 < count__19818_21402)){
var arg__13972__auto___21404 = cljs.core._nth.call(null,chunk__19817_21401,i__19819_21403);
a__13971__auto__.push(arg__13972__auto___21404);

var G__21405 = seq__19816_21400;
var G__21406 = chunk__19817_21401;
var G__21407 = count__19818_21402;
var G__21408 = (i__19819_21403 + (1));
seq__19816_21400 = G__21405;
chunk__19817_21401 = G__21406;
count__19818_21402 = G__21407;
i__19819_21403 = G__21408;
continue;
} else {
var temp__4126__auto___21409 = cljs.core.seq.call(null,seq__19816_21400);
if(temp__4126__auto___21409){
var seq__19816_21410__$1 = temp__4126__auto___21409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19816_21410__$1)){
var c__8817__auto___21411 = cljs.core.chunk_first.call(null,seq__19816_21410__$1);
var G__21412 = cljs.core.chunk_rest.call(null,seq__19816_21410__$1);
var G__21413 = c__8817__auto___21411;
var G__21414 = cljs.core.count.call(null,c__8817__auto___21411);
var G__21415 = (0);
seq__19816_21400 = G__21412;
chunk__19817_21401 = G__21413;
count__19818_21402 = G__21414;
i__19819_21403 = G__21415;
continue;
} else {
var arg__13972__auto___21416 = cljs.core.first.call(null,seq__19816_21410__$1);
a__13971__auto__.push(arg__13972__auto___21416);

var G__21417 = cljs.core.next.call(null,seq__19816_21410__$1);
var G__21418 = null;
var G__21419 = (0);
var G__21420 = (0);
seq__19816_21400 = G__21417;
chunk__19817_21401 = G__21418;
count__19818_21402 = G__21419;
i__19819_21403 = G__21420;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__13971__auto__);
};
var hr = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hr__delegate.call(this,args__13970__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__21421){
var args__13970__auto__ = cljs.core.seq(arglist__21421);
return hr__delegate(args__13970__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19824_21422 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19825_21423 = null;
var count__19826_21424 = (0);
var i__19827_21425 = (0);
while(true){
if((i__19827_21425 < count__19826_21424)){
var arg__13972__auto___21426 = cljs.core._nth.call(null,chunk__19825_21423,i__19827_21425);
a__13971__auto__.push(arg__13972__auto___21426);

var G__21427 = seq__19824_21422;
var G__21428 = chunk__19825_21423;
var G__21429 = count__19826_21424;
var G__21430 = (i__19827_21425 + (1));
seq__19824_21422 = G__21427;
chunk__19825_21423 = G__21428;
count__19826_21424 = G__21429;
i__19827_21425 = G__21430;
continue;
} else {
var temp__4126__auto___21431 = cljs.core.seq.call(null,seq__19824_21422);
if(temp__4126__auto___21431){
var seq__19824_21432__$1 = temp__4126__auto___21431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19824_21432__$1)){
var c__8817__auto___21433 = cljs.core.chunk_first.call(null,seq__19824_21432__$1);
var G__21434 = cljs.core.chunk_rest.call(null,seq__19824_21432__$1);
var G__21435 = c__8817__auto___21433;
var G__21436 = cljs.core.count.call(null,c__8817__auto___21433);
var G__21437 = (0);
seq__19824_21422 = G__21434;
chunk__19825_21423 = G__21435;
count__19826_21424 = G__21436;
i__19827_21425 = G__21437;
continue;
} else {
var arg__13972__auto___21438 = cljs.core.first.call(null,seq__19824_21432__$1);
a__13971__auto__.push(arg__13972__auto___21438);

var G__21439 = cljs.core.next.call(null,seq__19824_21432__$1);
var G__21440 = null;
var G__21441 = (0);
var G__21442 = (0);
seq__19824_21422 = G__21439;
chunk__19825_21423 = G__21440;
count__19826_21424 = G__21441;
i__19827_21425 = G__21442;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__13971__auto__);
};
var html = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this,args__13970__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__21443){
var args__13970__auto__ = cljs.core.seq(arglist__21443);
return html__delegate(args__13970__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19832_21444 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19833_21445 = null;
var count__19834_21446 = (0);
var i__19835_21447 = (0);
while(true){
if((i__19835_21447 < count__19834_21446)){
var arg__13972__auto___21448 = cljs.core._nth.call(null,chunk__19833_21445,i__19835_21447);
a__13971__auto__.push(arg__13972__auto___21448);

var G__21449 = seq__19832_21444;
var G__21450 = chunk__19833_21445;
var G__21451 = count__19834_21446;
var G__21452 = (i__19835_21447 + (1));
seq__19832_21444 = G__21449;
chunk__19833_21445 = G__21450;
count__19834_21446 = G__21451;
i__19835_21447 = G__21452;
continue;
} else {
var temp__4126__auto___21453 = cljs.core.seq.call(null,seq__19832_21444);
if(temp__4126__auto___21453){
var seq__19832_21454__$1 = temp__4126__auto___21453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19832_21454__$1)){
var c__8817__auto___21455 = cljs.core.chunk_first.call(null,seq__19832_21454__$1);
var G__21456 = cljs.core.chunk_rest.call(null,seq__19832_21454__$1);
var G__21457 = c__8817__auto___21455;
var G__21458 = cljs.core.count.call(null,c__8817__auto___21455);
var G__21459 = (0);
seq__19832_21444 = G__21456;
chunk__19833_21445 = G__21457;
count__19834_21446 = G__21458;
i__19835_21447 = G__21459;
continue;
} else {
var arg__13972__auto___21460 = cljs.core.first.call(null,seq__19832_21454__$1);
a__13971__auto__.push(arg__13972__auto___21460);

var G__21461 = cljs.core.next.call(null,seq__19832_21454__$1);
var G__21462 = null;
var G__21463 = (0);
var G__21464 = (0);
seq__19832_21444 = G__21461;
chunk__19833_21445 = G__21462;
count__19834_21446 = G__21463;
i__19835_21447 = G__21464;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__13971__auto__);
};
var i = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return i__delegate.call(this,args__13970__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__21465){
var args__13970__auto__ = cljs.core.seq(arglist__21465);
return i__delegate(args__13970__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19840_21466 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19841_21467 = null;
var count__19842_21468 = (0);
var i__19843_21469 = (0);
while(true){
if((i__19843_21469 < count__19842_21468)){
var arg__13972__auto___21470 = cljs.core._nth.call(null,chunk__19841_21467,i__19843_21469);
a__13971__auto__.push(arg__13972__auto___21470);

var G__21471 = seq__19840_21466;
var G__21472 = chunk__19841_21467;
var G__21473 = count__19842_21468;
var G__21474 = (i__19843_21469 + (1));
seq__19840_21466 = G__21471;
chunk__19841_21467 = G__21472;
count__19842_21468 = G__21473;
i__19843_21469 = G__21474;
continue;
} else {
var temp__4126__auto___21475 = cljs.core.seq.call(null,seq__19840_21466);
if(temp__4126__auto___21475){
var seq__19840_21476__$1 = temp__4126__auto___21475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19840_21476__$1)){
var c__8817__auto___21477 = cljs.core.chunk_first.call(null,seq__19840_21476__$1);
var G__21478 = cljs.core.chunk_rest.call(null,seq__19840_21476__$1);
var G__21479 = c__8817__auto___21477;
var G__21480 = cljs.core.count.call(null,c__8817__auto___21477);
var G__21481 = (0);
seq__19840_21466 = G__21478;
chunk__19841_21467 = G__21479;
count__19842_21468 = G__21480;
i__19843_21469 = G__21481;
continue;
} else {
var arg__13972__auto___21482 = cljs.core.first.call(null,seq__19840_21476__$1);
a__13971__auto__.push(arg__13972__auto___21482);

var G__21483 = cljs.core.next.call(null,seq__19840_21476__$1);
var G__21484 = null;
var G__21485 = (0);
var G__21486 = (0);
seq__19840_21466 = G__21483;
chunk__19841_21467 = G__21484;
count__19842_21468 = G__21485;
i__19843_21469 = G__21486;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__13971__auto__);
};
var iframe = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return iframe__delegate.call(this,args__13970__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__21487){
var args__13970__auto__ = cljs.core.seq(arglist__21487);
return iframe__delegate(args__13970__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19848_21488 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19849_21489 = null;
var count__19850_21490 = (0);
var i__19851_21491 = (0);
while(true){
if((i__19851_21491 < count__19850_21490)){
var arg__13972__auto___21492 = cljs.core._nth.call(null,chunk__19849_21489,i__19851_21491);
a__13971__auto__.push(arg__13972__auto___21492);

var G__21493 = seq__19848_21488;
var G__21494 = chunk__19849_21489;
var G__21495 = count__19850_21490;
var G__21496 = (i__19851_21491 + (1));
seq__19848_21488 = G__21493;
chunk__19849_21489 = G__21494;
count__19850_21490 = G__21495;
i__19851_21491 = G__21496;
continue;
} else {
var temp__4126__auto___21497 = cljs.core.seq.call(null,seq__19848_21488);
if(temp__4126__auto___21497){
var seq__19848_21498__$1 = temp__4126__auto___21497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19848_21498__$1)){
var c__8817__auto___21499 = cljs.core.chunk_first.call(null,seq__19848_21498__$1);
var G__21500 = cljs.core.chunk_rest.call(null,seq__19848_21498__$1);
var G__21501 = c__8817__auto___21499;
var G__21502 = cljs.core.count.call(null,c__8817__auto___21499);
var G__21503 = (0);
seq__19848_21488 = G__21500;
chunk__19849_21489 = G__21501;
count__19850_21490 = G__21502;
i__19851_21491 = G__21503;
continue;
} else {
var arg__13972__auto___21504 = cljs.core.first.call(null,seq__19848_21498__$1);
a__13971__auto__.push(arg__13972__auto___21504);

var G__21505 = cljs.core.next.call(null,seq__19848_21498__$1);
var G__21506 = null;
var G__21507 = (0);
var G__21508 = (0);
seq__19848_21488 = G__21505;
chunk__19849_21489 = G__21506;
count__19850_21490 = G__21507;
i__19851_21491 = G__21508;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__13971__auto__);
};
var img = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return img__delegate.call(this,args__13970__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__21509){
var args__13970__auto__ = cljs.core.seq(arglist__21509);
return img__delegate(args__13970__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19856_21510 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19857_21511 = null;
var count__19858_21512 = (0);
var i__19859_21513 = (0);
while(true){
if((i__19859_21513 < count__19858_21512)){
var arg__13972__auto___21514 = cljs.core._nth.call(null,chunk__19857_21511,i__19859_21513);
a__13971__auto__.push(arg__13972__auto___21514);

var G__21515 = seq__19856_21510;
var G__21516 = chunk__19857_21511;
var G__21517 = count__19858_21512;
var G__21518 = (i__19859_21513 + (1));
seq__19856_21510 = G__21515;
chunk__19857_21511 = G__21516;
count__19858_21512 = G__21517;
i__19859_21513 = G__21518;
continue;
} else {
var temp__4126__auto___21519 = cljs.core.seq.call(null,seq__19856_21510);
if(temp__4126__auto___21519){
var seq__19856_21520__$1 = temp__4126__auto___21519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19856_21520__$1)){
var c__8817__auto___21521 = cljs.core.chunk_first.call(null,seq__19856_21520__$1);
var G__21522 = cljs.core.chunk_rest.call(null,seq__19856_21520__$1);
var G__21523 = c__8817__auto___21521;
var G__21524 = cljs.core.count.call(null,c__8817__auto___21521);
var G__21525 = (0);
seq__19856_21510 = G__21522;
chunk__19857_21511 = G__21523;
count__19858_21512 = G__21524;
i__19859_21513 = G__21525;
continue;
} else {
var arg__13972__auto___21526 = cljs.core.first.call(null,seq__19856_21520__$1);
a__13971__auto__.push(arg__13972__auto___21526);

var G__21527 = cljs.core.next.call(null,seq__19856_21520__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__19856_21510 = G__21527;
chunk__19857_21511 = G__21528;
count__19858_21512 = G__21529;
i__19859_21513 = G__21530;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__13971__auto__);
};
var input = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return input__delegate.call(this,args__13970__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__21531){
var args__13970__auto__ = cljs.core.seq(arglist__21531);
return input__delegate(args__13970__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19864_21532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19865_21533 = null;
var count__19866_21534 = (0);
var i__19867_21535 = (0);
while(true){
if((i__19867_21535 < count__19866_21534)){
var arg__13972__auto___21536 = cljs.core._nth.call(null,chunk__19865_21533,i__19867_21535);
a__13971__auto__.push(arg__13972__auto___21536);

var G__21537 = seq__19864_21532;
var G__21538 = chunk__19865_21533;
var G__21539 = count__19866_21534;
var G__21540 = (i__19867_21535 + (1));
seq__19864_21532 = G__21537;
chunk__19865_21533 = G__21538;
count__19866_21534 = G__21539;
i__19867_21535 = G__21540;
continue;
} else {
var temp__4126__auto___21541 = cljs.core.seq.call(null,seq__19864_21532);
if(temp__4126__auto___21541){
var seq__19864_21542__$1 = temp__4126__auto___21541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19864_21542__$1)){
var c__8817__auto___21543 = cljs.core.chunk_first.call(null,seq__19864_21542__$1);
var G__21544 = cljs.core.chunk_rest.call(null,seq__19864_21542__$1);
var G__21545 = c__8817__auto___21543;
var G__21546 = cljs.core.count.call(null,c__8817__auto___21543);
var G__21547 = (0);
seq__19864_21532 = G__21544;
chunk__19865_21533 = G__21545;
count__19866_21534 = G__21546;
i__19867_21535 = G__21547;
continue;
} else {
var arg__13972__auto___21548 = cljs.core.first.call(null,seq__19864_21542__$1);
a__13971__auto__.push(arg__13972__auto___21548);

var G__21549 = cljs.core.next.call(null,seq__19864_21542__$1);
var G__21550 = null;
var G__21551 = (0);
var G__21552 = (0);
seq__19864_21532 = G__21549;
chunk__19865_21533 = G__21550;
count__19866_21534 = G__21551;
i__19867_21535 = G__21552;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__13971__auto__);
};
var ins = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ins__delegate.call(this,args__13970__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__21553){
var args__13970__auto__ = cljs.core.seq(arglist__21553);
return ins__delegate(args__13970__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19872_21554 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19873_21555 = null;
var count__19874_21556 = (0);
var i__19875_21557 = (0);
while(true){
if((i__19875_21557 < count__19874_21556)){
var arg__13972__auto___21558 = cljs.core._nth.call(null,chunk__19873_21555,i__19875_21557);
a__13971__auto__.push(arg__13972__auto___21558);

var G__21559 = seq__19872_21554;
var G__21560 = chunk__19873_21555;
var G__21561 = count__19874_21556;
var G__21562 = (i__19875_21557 + (1));
seq__19872_21554 = G__21559;
chunk__19873_21555 = G__21560;
count__19874_21556 = G__21561;
i__19875_21557 = G__21562;
continue;
} else {
var temp__4126__auto___21563 = cljs.core.seq.call(null,seq__19872_21554);
if(temp__4126__auto___21563){
var seq__19872_21564__$1 = temp__4126__auto___21563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19872_21564__$1)){
var c__8817__auto___21565 = cljs.core.chunk_first.call(null,seq__19872_21564__$1);
var G__21566 = cljs.core.chunk_rest.call(null,seq__19872_21564__$1);
var G__21567 = c__8817__auto___21565;
var G__21568 = cljs.core.count.call(null,c__8817__auto___21565);
var G__21569 = (0);
seq__19872_21554 = G__21566;
chunk__19873_21555 = G__21567;
count__19874_21556 = G__21568;
i__19875_21557 = G__21569;
continue;
} else {
var arg__13972__auto___21570 = cljs.core.first.call(null,seq__19872_21564__$1);
a__13971__auto__.push(arg__13972__auto___21570);

var G__21571 = cljs.core.next.call(null,seq__19872_21564__$1);
var G__21572 = null;
var G__21573 = (0);
var G__21574 = (0);
seq__19872_21554 = G__21571;
chunk__19873_21555 = G__21572;
count__19874_21556 = G__21573;
i__19875_21557 = G__21574;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__13971__auto__);
};
var kbd = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return kbd__delegate.call(this,args__13970__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__21575){
var args__13970__auto__ = cljs.core.seq(arglist__21575);
return kbd__delegate(args__13970__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19880_21576 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19881_21577 = null;
var count__19882_21578 = (0);
var i__19883_21579 = (0);
while(true){
if((i__19883_21579 < count__19882_21578)){
var arg__13972__auto___21580 = cljs.core._nth.call(null,chunk__19881_21577,i__19883_21579);
a__13971__auto__.push(arg__13972__auto___21580);

var G__21581 = seq__19880_21576;
var G__21582 = chunk__19881_21577;
var G__21583 = count__19882_21578;
var G__21584 = (i__19883_21579 + (1));
seq__19880_21576 = G__21581;
chunk__19881_21577 = G__21582;
count__19882_21578 = G__21583;
i__19883_21579 = G__21584;
continue;
} else {
var temp__4126__auto___21585 = cljs.core.seq.call(null,seq__19880_21576);
if(temp__4126__auto___21585){
var seq__19880_21586__$1 = temp__4126__auto___21585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19880_21586__$1)){
var c__8817__auto___21587 = cljs.core.chunk_first.call(null,seq__19880_21586__$1);
var G__21588 = cljs.core.chunk_rest.call(null,seq__19880_21586__$1);
var G__21589 = c__8817__auto___21587;
var G__21590 = cljs.core.count.call(null,c__8817__auto___21587);
var G__21591 = (0);
seq__19880_21576 = G__21588;
chunk__19881_21577 = G__21589;
count__19882_21578 = G__21590;
i__19883_21579 = G__21591;
continue;
} else {
var arg__13972__auto___21592 = cljs.core.first.call(null,seq__19880_21586__$1);
a__13971__auto__.push(arg__13972__auto___21592);

var G__21593 = cljs.core.next.call(null,seq__19880_21586__$1);
var G__21594 = null;
var G__21595 = (0);
var G__21596 = (0);
seq__19880_21576 = G__21593;
chunk__19881_21577 = G__21594;
count__19882_21578 = G__21595;
i__19883_21579 = G__21596;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__13971__auto__);
};
var keygen = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return keygen__delegate.call(this,args__13970__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__21597){
var args__13970__auto__ = cljs.core.seq(arglist__21597);
return keygen__delegate(args__13970__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19888_21598 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19889_21599 = null;
var count__19890_21600 = (0);
var i__19891_21601 = (0);
while(true){
if((i__19891_21601 < count__19890_21600)){
var arg__13972__auto___21602 = cljs.core._nth.call(null,chunk__19889_21599,i__19891_21601);
a__13971__auto__.push(arg__13972__auto___21602);

var G__21603 = seq__19888_21598;
var G__21604 = chunk__19889_21599;
var G__21605 = count__19890_21600;
var G__21606 = (i__19891_21601 + (1));
seq__19888_21598 = G__21603;
chunk__19889_21599 = G__21604;
count__19890_21600 = G__21605;
i__19891_21601 = G__21606;
continue;
} else {
var temp__4126__auto___21607 = cljs.core.seq.call(null,seq__19888_21598);
if(temp__4126__auto___21607){
var seq__19888_21608__$1 = temp__4126__auto___21607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19888_21608__$1)){
var c__8817__auto___21609 = cljs.core.chunk_first.call(null,seq__19888_21608__$1);
var G__21610 = cljs.core.chunk_rest.call(null,seq__19888_21608__$1);
var G__21611 = c__8817__auto___21609;
var G__21612 = cljs.core.count.call(null,c__8817__auto___21609);
var G__21613 = (0);
seq__19888_21598 = G__21610;
chunk__19889_21599 = G__21611;
count__19890_21600 = G__21612;
i__19891_21601 = G__21613;
continue;
} else {
var arg__13972__auto___21614 = cljs.core.first.call(null,seq__19888_21608__$1);
a__13971__auto__.push(arg__13972__auto___21614);

var G__21615 = cljs.core.next.call(null,seq__19888_21608__$1);
var G__21616 = null;
var G__21617 = (0);
var G__21618 = (0);
seq__19888_21598 = G__21615;
chunk__19889_21599 = G__21616;
count__19890_21600 = G__21617;
i__19891_21601 = G__21618;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__13971__auto__);
};
var label = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return label__delegate.call(this,args__13970__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__21619){
var args__13970__auto__ = cljs.core.seq(arglist__21619);
return label__delegate(args__13970__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19896_21620 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19897_21621 = null;
var count__19898_21622 = (0);
var i__19899_21623 = (0);
while(true){
if((i__19899_21623 < count__19898_21622)){
var arg__13972__auto___21624 = cljs.core._nth.call(null,chunk__19897_21621,i__19899_21623);
a__13971__auto__.push(arg__13972__auto___21624);

var G__21625 = seq__19896_21620;
var G__21626 = chunk__19897_21621;
var G__21627 = count__19898_21622;
var G__21628 = (i__19899_21623 + (1));
seq__19896_21620 = G__21625;
chunk__19897_21621 = G__21626;
count__19898_21622 = G__21627;
i__19899_21623 = G__21628;
continue;
} else {
var temp__4126__auto___21629 = cljs.core.seq.call(null,seq__19896_21620);
if(temp__4126__auto___21629){
var seq__19896_21630__$1 = temp__4126__auto___21629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19896_21630__$1)){
var c__8817__auto___21631 = cljs.core.chunk_first.call(null,seq__19896_21630__$1);
var G__21632 = cljs.core.chunk_rest.call(null,seq__19896_21630__$1);
var G__21633 = c__8817__auto___21631;
var G__21634 = cljs.core.count.call(null,c__8817__auto___21631);
var G__21635 = (0);
seq__19896_21620 = G__21632;
chunk__19897_21621 = G__21633;
count__19898_21622 = G__21634;
i__19899_21623 = G__21635;
continue;
} else {
var arg__13972__auto___21636 = cljs.core.first.call(null,seq__19896_21630__$1);
a__13971__auto__.push(arg__13972__auto___21636);

var G__21637 = cljs.core.next.call(null,seq__19896_21630__$1);
var G__21638 = null;
var G__21639 = (0);
var G__21640 = (0);
seq__19896_21620 = G__21637;
chunk__19897_21621 = G__21638;
count__19898_21622 = G__21639;
i__19899_21623 = G__21640;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__13971__auto__);
};
var legend = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return legend__delegate.call(this,args__13970__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__21641){
var args__13970__auto__ = cljs.core.seq(arglist__21641);
return legend__delegate(args__13970__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19904_21642 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19905_21643 = null;
var count__19906_21644 = (0);
var i__19907_21645 = (0);
while(true){
if((i__19907_21645 < count__19906_21644)){
var arg__13972__auto___21646 = cljs.core._nth.call(null,chunk__19905_21643,i__19907_21645);
a__13971__auto__.push(arg__13972__auto___21646);

var G__21647 = seq__19904_21642;
var G__21648 = chunk__19905_21643;
var G__21649 = count__19906_21644;
var G__21650 = (i__19907_21645 + (1));
seq__19904_21642 = G__21647;
chunk__19905_21643 = G__21648;
count__19906_21644 = G__21649;
i__19907_21645 = G__21650;
continue;
} else {
var temp__4126__auto___21651 = cljs.core.seq.call(null,seq__19904_21642);
if(temp__4126__auto___21651){
var seq__19904_21652__$1 = temp__4126__auto___21651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19904_21652__$1)){
var c__8817__auto___21653 = cljs.core.chunk_first.call(null,seq__19904_21652__$1);
var G__21654 = cljs.core.chunk_rest.call(null,seq__19904_21652__$1);
var G__21655 = c__8817__auto___21653;
var G__21656 = cljs.core.count.call(null,c__8817__auto___21653);
var G__21657 = (0);
seq__19904_21642 = G__21654;
chunk__19905_21643 = G__21655;
count__19906_21644 = G__21656;
i__19907_21645 = G__21657;
continue;
} else {
var arg__13972__auto___21658 = cljs.core.first.call(null,seq__19904_21652__$1);
a__13971__auto__.push(arg__13972__auto___21658);

var G__21659 = cljs.core.next.call(null,seq__19904_21652__$1);
var G__21660 = null;
var G__21661 = (0);
var G__21662 = (0);
seq__19904_21642 = G__21659;
chunk__19905_21643 = G__21660;
count__19906_21644 = G__21661;
i__19907_21645 = G__21662;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__13971__auto__);
};
var li = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return li__delegate.call(this,args__13970__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__21663){
var args__13970__auto__ = cljs.core.seq(arglist__21663);
return li__delegate(args__13970__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19912_21664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19913_21665 = null;
var count__19914_21666 = (0);
var i__19915_21667 = (0);
while(true){
if((i__19915_21667 < count__19914_21666)){
var arg__13972__auto___21668 = cljs.core._nth.call(null,chunk__19913_21665,i__19915_21667);
a__13971__auto__.push(arg__13972__auto___21668);

var G__21669 = seq__19912_21664;
var G__21670 = chunk__19913_21665;
var G__21671 = count__19914_21666;
var G__21672 = (i__19915_21667 + (1));
seq__19912_21664 = G__21669;
chunk__19913_21665 = G__21670;
count__19914_21666 = G__21671;
i__19915_21667 = G__21672;
continue;
} else {
var temp__4126__auto___21673 = cljs.core.seq.call(null,seq__19912_21664);
if(temp__4126__auto___21673){
var seq__19912_21674__$1 = temp__4126__auto___21673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19912_21674__$1)){
var c__8817__auto___21675 = cljs.core.chunk_first.call(null,seq__19912_21674__$1);
var G__21676 = cljs.core.chunk_rest.call(null,seq__19912_21674__$1);
var G__21677 = c__8817__auto___21675;
var G__21678 = cljs.core.count.call(null,c__8817__auto___21675);
var G__21679 = (0);
seq__19912_21664 = G__21676;
chunk__19913_21665 = G__21677;
count__19914_21666 = G__21678;
i__19915_21667 = G__21679;
continue;
} else {
var arg__13972__auto___21680 = cljs.core.first.call(null,seq__19912_21674__$1);
a__13971__auto__.push(arg__13972__auto___21680);

var G__21681 = cljs.core.next.call(null,seq__19912_21674__$1);
var G__21682 = null;
var G__21683 = (0);
var G__21684 = (0);
seq__19912_21664 = G__21681;
chunk__19913_21665 = G__21682;
count__19914_21666 = G__21683;
i__19915_21667 = G__21684;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__13971__auto__);
};
var link = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return link__delegate.call(this,args__13970__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__21685){
var args__13970__auto__ = cljs.core.seq(arglist__21685);
return link__delegate(args__13970__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19920_21686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19921_21687 = null;
var count__19922_21688 = (0);
var i__19923_21689 = (0);
while(true){
if((i__19923_21689 < count__19922_21688)){
var arg__13972__auto___21690 = cljs.core._nth.call(null,chunk__19921_21687,i__19923_21689);
a__13971__auto__.push(arg__13972__auto___21690);

var G__21691 = seq__19920_21686;
var G__21692 = chunk__19921_21687;
var G__21693 = count__19922_21688;
var G__21694 = (i__19923_21689 + (1));
seq__19920_21686 = G__21691;
chunk__19921_21687 = G__21692;
count__19922_21688 = G__21693;
i__19923_21689 = G__21694;
continue;
} else {
var temp__4126__auto___21695 = cljs.core.seq.call(null,seq__19920_21686);
if(temp__4126__auto___21695){
var seq__19920_21696__$1 = temp__4126__auto___21695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19920_21696__$1)){
var c__8817__auto___21697 = cljs.core.chunk_first.call(null,seq__19920_21696__$1);
var G__21698 = cljs.core.chunk_rest.call(null,seq__19920_21696__$1);
var G__21699 = c__8817__auto___21697;
var G__21700 = cljs.core.count.call(null,c__8817__auto___21697);
var G__21701 = (0);
seq__19920_21686 = G__21698;
chunk__19921_21687 = G__21699;
count__19922_21688 = G__21700;
i__19923_21689 = G__21701;
continue;
} else {
var arg__13972__auto___21702 = cljs.core.first.call(null,seq__19920_21696__$1);
a__13971__auto__.push(arg__13972__auto___21702);

var G__21703 = cljs.core.next.call(null,seq__19920_21696__$1);
var G__21704 = null;
var G__21705 = (0);
var G__21706 = (0);
seq__19920_21686 = G__21703;
chunk__19921_21687 = G__21704;
count__19922_21688 = G__21705;
i__19923_21689 = G__21706;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__13971__auto__);
};
var main = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return main__delegate.call(this,args__13970__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__21707){
var args__13970__auto__ = cljs.core.seq(arglist__21707);
return main__delegate(args__13970__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19928_21708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19929_21709 = null;
var count__19930_21710 = (0);
var i__19931_21711 = (0);
while(true){
if((i__19931_21711 < count__19930_21710)){
var arg__13972__auto___21712 = cljs.core._nth.call(null,chunk__19929_21709,i__19931_21711);
a__13971__auto__.push(arg__13972__auto___21712);

var G__21713 = seq__19928_21708;
var G__21714 = chunk__19929_21709;
var G__21715 = count__19930_21710;
var G__21716 = (i__19931_21711 + (1));
seq__19928_21708 = G__21713;
chunk__19929_21709 = G__21714;
count__19930_21710 = G__21715;
i__19931_21711 = G__21716;
continue;
} else {
var temp__4126__auto___21717 = cljs.core.seq.call(null,seq__19928_21708);
if(temp__4126__auto___21717){
var seq__19928_21718__$1 = temp__4126__auto___21717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19928_21718__$1)){
var c__8817__auto___21719 = cljs.core.chunk_first.call(null,seq__19928_21718__$1);
var G__21720 = cljs.core.chunk_rest.call(null,seq__19928_21718__$1);
var G__21721 = c__8817__auto___21719;
var G__21722 = cljs.core.count.call(null,c__8817__auto___21719);
var G__21723 = (0);
seq__19928_21708 = G__21720;
chunk__19929_21709 = G__21721;
count__19930_21710 = G__21722;
i__19931_21711 = G__21723;
continue;
} else {
var arg__13972__auto___21724 = cljs.core.first.call(null,seq__19928_21718__$1);
a__13971__auto__.push(arg__13972__auto___21724);

var G__21725 = cljs.core.next.call(null,seq__19928_21718__$1);
var G__21726 = null;
var G__21727 = (0);
var G__21728 = (0);
seq__19928_21708 = G__21725;
chunk__19929_21709 = G__21726;
count__19930_21710 = G__21727;
i__19931_21711 = G__21728;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__13971__auto__);
};
var map = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return map__delegate.call(this,args__13970__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__21729){
var args__13970__auto__ = cljs.core.seq(arglist__21729);
return map__delegate(args__13970__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19936_21730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19937_21731 = null;
var count__19938_21732 = (0);
var i__19939_21733 = (0);
while(true){
if((i__19939_21733 < count__19938_21732)){
var arg__13972__auto___21734 = cljs.core._nth.call(null,chunk__19937_21731,i__19939_21733);
a__13971__auto__.push(arg__13972__auto___21734);

var G__21735 = seq__19936_21730;
var G__21736 = chunk__19937_21731;
var G__21737 = count__19938_21732;
var G__21738 = (i__19939_21733 + (1));
seq__19936_21730 = G__21735;
chunk__19937_21731 = G__21736;
count__19938_21732 = G__21737;
i__19939_21733 = G__21738;
continue;
} else {
var temp__4126__auto___21739 = cljs.core.seq.call(null,seq__19936_21730);
if(temp__4126__auto___21739){
var seq__19936_21740__$1 = temp__4126__auto___21739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19936_21740__$1)){
var c__8817__auto___21741 = cljs.core.chunk_first.call(null,seq__19936_21740__$1);
var G__21742 = cljs.core.chunk_rest.call(null,seq__19936_21740__$1);
var G__21743 = c__8817__auto___21741;
var G__21744 = cljs.core.count.call(null,c__8817__auto___21741);
var G__21745 = (0);
seq__19936_21730 = G__21742;
chunk__19937_21731 = G__21743;
count__19938_21732 = G__21744;
i__19939_21733 = G__21745;
continue;
} else {
var arg__13972__auto___21746 = cljs.core.first.call(null,seq__19936_21740__$1);
a__13971__auto__.push(arg__13972__auto___21746);

var G__21747 = cljs.core.next.call(null,seq__19936_21740__$1);
var G__21748 = null;
var G__21749 = (0);
var G__21750 = (0);
seq__19936_21730 = G__21747;
chunk__19937_21731 = G__21748;
count__19938_21732 = G__21749;
i__19939_21733 = G__21750;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__13971__auto__);
};
var mark = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return mark__delegate.call(this,args__13970__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__21751){
var args__13970__auto__ = cljs.core.seq(arglist__21751);
return mark__delegate(args__13970__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19944_21752 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19945_21753 = null;
var count__19946_21754 = (0);
var i__19947_21755 = (0);
while(true){
if((i__19947_21755 < count__19946_21754)){
var arg__13972__auto___21756 = cljs.core._nth.call(null,chunk__19945_21753,i__19947_21755);
a__13971__auto__.push(arg__13972__auto___21756);

var G__21757 = seq__19944_21752;
var G__21758 = chunk__19945_21753;
var G__21759 = count__19946_21754;
var G__21760 = (i__19947_21755 + (1));
seq__19944_21752 = G__21757;
chunk__19945_21753 = G__21758;
count__19946_21754 = G__21759;
i__19947_21755 = G__21760;
continue;
} else {
var temp__4126__auto___21761 = cljs.core.seq.call(null,seq__19944_21752);
if(temp__4126__auto___21761){
var seq__19944_21762__$1 = temp__4126__auto___21761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19944_21762__$1)){
var c__8817__auto___21763 = cljs.core.chunk_first.call(null,seq__19944_21762__$1);
var G__21764 = cljs.core.chunk_rest.call(null,seq__19944_21762__$1);
var G__21765 = c__8817__auto___21763;
var G__21766 = cljs.core.count.call(null,c__8817__auto___21763);
var G__21767 = (0);
seq__19944_21752 = G__21764;
chunk__19945_21753 = G__21765;
count__19946_21754 = G__21766;
i__19947_21755 = G__21767;
continue;
} else {
var arg__13972__auto___21768 = cljs.core.first.call(null,seq__19944_21762__$1);
a__13971__auto__.push(arg__13972__auto___21768);

var G__21769 = cljs.core.next.call(null,seq__19944_21762__$1);
var G__21770 = null;
var G__21771 = (0);
var G__21772 = (0);
seq__19944_21752 = G__21769;
chunk__19945_21753 = G__21770;
count__19946_21754 = G__21771;
i__19947_21755 = G__21772;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__13971__auto__);
};
var menu = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return menu__delegate.call(this,args__13970__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__21773){
var args__13970__auto__ = cljs.core.seq(arglist__21773);
return menu__delegate(args__13970__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19952_21774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19953_21775 = null;
var count__19954_21776 = (0);
var i__19955_21777 = (0);
while(true){
if((i__19955_21777 < count__19954_21776)){
var arg__13972__auto___21778 = cljs.core._nth.call(null,chunk__19953_21775,i__19955_21777);
a__13971__auto__.push(arg__13972__auto___21778);

var G__21779 = seq__19952_21774;
var G__21780 = chunk__19953_21775;
var G__21781 = count__19954_21776;
var G__21782 = (i__19955_21777 + (1));
seq__19952_21774 = G__21779;
chunk__19953_21775 = G__21780;
count__19954_21776 = G__21781;
i__19955_21777 = G__21782;
continue;
} else {
var temp__4126__auto___21783 = cljs.core.seq.call(null,seq__19952_21774);
if(temp__4126__auto___21783){
var seq__19952_21784__$1 = temp__4126__auto___21783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19952_21784__$1)){
var c__8817__auto___21785 = cljs.core.chunk_first.call(null,seq__19952_21784__$1);
var G__21786 = cljs.core.chunk_rest.call(null,seq__19952_21784__$1);
var G__21787 = c__8817__auto___21785;
var G__21788 = cljs.core.count.call(null,c__8817__auto___21785);
var G__21789 = (0);
seq__19952_21774 = G__21786;
chunk__19953_21775 = G__21787;
count__19954_21776 = G__21788;
i__19955_21777 = G__21789;
continue;
} else {
var arg__13972__auto___21790 = cljs.core.first.call(null,seq__19952_21784__$1);
a__13971__auto__.push(arg__13972__auto___21790);

var G__21791 = cljs.core.next.call(null,seq__19952_21784__$1);
var G__21792 = null;
var G__21793 = (0);
var G__21794 = (0);
seq__19952_21774 = G__21791;
chunk__19953_21775 = G__21792;
count__19954_21776 = G__21793;
i__19955_21777 = G__21794;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__13971__auto__);
};
var menuitem = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return menuitem__delegate.call(this,args__13970__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__21795){
var args__13970__auto__ = cljs.core.seq(arglist__21795);
return menuitem__delegate(args__13970__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19960_21796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19961_21797 = null;
var count__19962_21798 = (0);
var i__19963_21799 = (0);
while(true){
if((i__19963_21799 < count__19962_21798)){
var arg__13972__auto___21800 = cljs.core._nth.call(null,chunk__19961_21797,i__19963_21799);
a__13971__auto__.push(arg__13972__auto___21800);

var G__21801 = seq__19960_21796;
var G__21802 = chunk__19961_21797;
var G__21803 = count__19962_21798;
var G__21804 = (i__19963_21799 + (1));
seq__19960_21796 = G__21801;
chunk__19961_21797 = G__21802;
count__19962_21798 = G__21803;
i__19963_21799 = G__21804;
continue;
} else {
var temp__4126__auto___21805 = cljs.core.seq.call(null,seq__19960_21796);
if(temp__4126__auto___21805){
var seq__19960_21806__$1 = temp__4126__auto___21805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19960_21806__$1)){
var c__8817__auto___21807 = cljs.core.chunk_first.call(null,seq__19960_21806__$1);
var G__21808 = cljs.core.chunk_rest.call(null,seq__19960_21806__$1);
var G__21809 = c__8817__auto___21807;
var G__21810 = cljs.core.count.call(null,c__8817__auto___21807);
var G__21811 = (0);
seq__19960_21796 = G__21808;
chunk__19961_21797 = G__21809;
count__19962_21798 = G__21810;
i__19963_21799 = G__21811;
continue;
} else {
var arg__13972__auto___21812 = cljs.core.first.call(null,seq__19960_21806__$1);
a__13971__auto__.push(arg__13972__auto___21812);

var G__21813 = cljs.core.next.call(null,seq__19960_21806__$1);
var G__21814 = null;
var G__21815 = (0);
var G__21816 = (0);
seq__19960_21796 = G__21813;
chunk__19961_21797 = G__21814;
count__19962_21798 = G__21815;
i__19963_21799 = G__21816;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__13971__auto__);
};
var meta = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return meta__delegate.call(this,args__13970__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__21817){
var args__13970__auto__ = cljs.core.seq(arglist__21817);
return meta__delegate(args__13970__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19968_21818 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19969_21819 = null;
var count__19970_21820 = (0);
var i__19971_21821 = (0);
while(true){
if((i__19971_21821 < count__19970_21820)){
var arg__13972__auto___21822 = cljs.core._nth.call(null,chunk__19969_21819,i__19971_21821);
a__13971__auto__.push(arg__13972__auto___21822);

var G__21823 = seq__19968_21818;
var G__21824 = chunk__19969_21819;
var G__21825 = count__19970_21820;
var G__21826 = (i__19971_21821 + (1));
seq__19968_21818 = G__21823;
chunk__19969_21819 = G__21824;
count__19970_21820 = G__21825;
i__19971_21821 = G__21826;
continue;
} else {
var temp__4126__auto___21827 = cljs.core.seq.call(null,seq__19968_21818);
if(temp__4126__auto___21827){
var seq__19968_21828__$1 = temp__4126__auto___21827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19968_21828__$1)){
var c__8817__auto___21829 = cljs.core.chunk_first.call(null,seq__19968_21828__$1);
var G__21830 = cljs.core.chunk_rest.call(null,seq__19968_21828__$1);
var G__21831 = c__8817__auto___21829;
var G__21832 = cljs.core.count.call(null,c__8817__auto___21829);
var G__21833 = (0);
seq__19968_21818 = G__21830;
chunk__19969_21819 = G__21831;
count__19970_21820 = G__21832;
i__19971_21821 = G__21833;
continue;
} else {
var arg__13972__auto___21834 = cljs.core.first.call(null,seq__19968_21828__$1);
a__13971__auto__.push(arg__13972__auto___21834);

var G__21835 = cljs.core.next.call(null,seq__19968_21828__$1);
var G__21836 = null;
var G__21837 = (0);
var G__21838 = (0);
seq__19968_21818 = G__21835;
chunk__19969_21819 = G__21836;
count__19970_21820 = G__21837;
i__19971_21821 = G__21838;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__13971__auto__);
};
var meter = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return meter__delegate.call(this,args__13970__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__21839){
var args__13970__auto__ = cljs.core.seq(arglist__21839);
return meter__delegate(args__13970__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19976_21840 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19977_21841 = null;
var count__19978_21842 = (0);
var i__19979_21843 = (0);
while(true){
if((i__19979_21843 < count__19978_21842)){
var arg__13972__auto___21844 = cljs.core._nth.call(null,chunk__19977_21841,i__19979_21843);
a__13971__auto__.push(arg__13972__auto___21844);

var G__21845 = seq__19976_21840;
var G__21846 = chunk__19977_21841;
var G__21847 = count__19978_21842;
var G__21848 = (i__19979_21843 + (1));
seq__19976_21840 = G__21845;
chunk__19977_21841 = G__21846;
count__19978_21842 = G__21847;
i__19979_21843 = G__21848;
continue;
} else {
var temp__4126__auto___21849 = cljs.core.seq.call(null,seq__19976_21840);
if(temp__4126__auto___21849){
var seq__19976_21850__$1 = temp__4126__auto___21849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19976_21850__$1)){
var c__8817__auto___21851 = cljs.core.chunk_first.call(null,seq__19976_21850__$1);
var G__21852 = cljs.core.chunk_rest.call(null,seq__19976_21850__$1);
var G__21853 = c__8817__auto___21851;
var G__21854 = cljs.core.count.call(null,c__8817__auto___21851);
var G__21855 = (0);
seq__19976_21840 = G__21852;
chunk__19977_21841 = G__21853;
count__19978_21842 = G__21854;
i__19979_21843 = G__21855;
continue;
} else {
var arg__13972__auto___21856 = cljs.core.first.call(null,seq__19976_21850__$1);
a__13971__auto__.push(arg__13972__auto___21856);

var G__21857 = cljs.core.next.call(null,seq__19976_21850__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__19976_21840 = G__21857;
chunk__19977_21841 = G__21858;
count__19978_21842 = G__21859;
i__19979_21843 = G__21860;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__13971__auto__);
};
var nav = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return nav__delegate.call(this,args__13970__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__21861){
var args__13970__auto__ = cljs.core.seq(arglist__21861);
return nav__delegate(args__13970__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19984_21862 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19985_21863 = null;
var count__19986_21864 = (0);
var i__19987_21865 = (0);
while(true){
if((i__19987_21865 < count__19986_21864)){
var arg__13972__auto___21866 = cljs.core._nth.call(null,chunk__19985_21863,i__19987_21865);
a__13971__auto__.push(arg__13972__auto___21866);

var G__21867 = seq__19984_21862;
var G__21868 = chunk__19985_21863;
var G__21869 = count__19986_21864;
var G__21870 = (i__19987_21865 + (1));
seq__19984_21862 = G__21867;
chunk__19985_21863 = G__21868;
count__19986_21864 = G__21869;
i__19987_21865 = G__21870;
continue;
} else {
var temp__4126__auto___21871 = cljs.core.seq.call(null,seq__19984_21862);
if(temp__4126__auto___21871){
var seq__19984_21872__$1 = temp__4126__auto___21871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19984_21872__$1)){
var c__8817__auto___21873 = cljs.core.chunk_first.call(null,seq__19984_21872__$1);
var G__21874 = cljs.core.chunk_rest.call(null,seq__19984_21872__$1);
var G__21875 = c__8817__auto___21873;
var G__21876 = cljs.core.count.call(null,c__8817__auto___21873);
var G__21877 = (0);
seq__19984_21862 = G__21874;
chunk__19985_21863 = G__21875;
count__19986_21864 = G__21876;
i__19987_21865 = G__21877;
continue;
} else {
var arg__13972__auto___21878 = cljs.core.first.call(null,seq__19984_21872__$1);
a__13971__auto__.push(arg__13972__auto___21878);

var G__21879 = cljs.core.next.call(null,seq__19984_21872__$1);
var G__21880 = null;
var G__21881 = (0);
var G__21882 = (0);
seq__19984_21862 = G__21879;
chunk__19985_21863 = G__21880;
count__19986_21864 = G__21881;
i__19987_21865 = G__21882;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__13971__auto__);
};
var noscript = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return noscript__delegate.call(this,args__13970__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__21883){
var args__13970__auto__ = cljs.core.seq(arglist__21883);
return noscript__delegate(args__13970__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19992_21884 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19993_21885 = null;
var count__19994_21886 = (0);
var i__19995_21887 = (0);
while(true){
if((i__19995_21887 < count__19994_21886)){
var arg__13972__auto___21888 = cljs.core._nth.call(null,chunk__19993_21885,i__19995_21887);
a__13971__auto__.push(arg__13972__auto___21888);

var G__21889 = seq__19992_21884;
var G__21890 = chunk__19993_21885;
var G__21891 = count__19994_21886;
var G__21892 = (i__19995_21887 + (1));
seq__19992_21884 = G__21889;
chunk__19993_21885 = G__21890;
count__19994_21886 = G__21891;
i__19995_21887 = G__21892;
continue;
} else {
var temp__4126__auto___21893 = cljs.core.seq.call(null,seq__19992_21884);
if(temp__4126__auto___21893){
var seq__19992_21894__$1 = temp__4126__auto___21893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19992_21894__$1)){
var c__8817__auto___21895 = cljs.core.chunk_first.call(null,seq__19992_21894__$1);
var G__21896 = cljs.core.chunk_rest.call(null,seq__19992_21894__$1);
var G__21897 = c__8817__auto___21895;
var G__21898 = cljs.core.count.call(null,c__8817__auto___21895);
var G__21899 = (0);
seq__19992_21884 = G__21896;
chunk__19993_21885 = G__21897;
count__19994_21886 = G__21898;
i__19995_21887 = G__21899;
continue;
} else {
var arg__13972__auto___21900 = cljs.core.first.call(null,seq__19992_21894__$1);
a__13971__auto__.push(arg__13972__auto___21900);

var G__21901 = cljs.core.next.call(null,seq__19992_21894__$1);
var G__21902 = null;
var G__21903 = (0);
var G__21904 = (0);
seq__19992_21884 = G__21901;
chunk__19993_21885 = G__21902;
count__19994_21886 = G__21903;
i__19995_21887 = G__21904;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__13971__auto__);
};
var object = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return object__delegate.call(this,args__13970__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__21905){
var args__13970__auto__ = cljs.core.seq(arglist__21905);
return object__delegate(args__13970__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20000_21906 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20001_21907 = null;
var count__20002_21908 = (0);
var i__20003_21909 = (0);
while(true){
if((i__20003_21909 < count__20002_21908)){
var arg__13972__auto___21910 = cljs.core._nth.call(null,chunk__20001_21907,i__20003_21909);
a__13971__auto__.push(arg__13972__auto___21910);

var G__21911 = seq__20000_21906;
var G__21912 = chunk__20001_21907;
var G__21913 = count__20002_21908;
var G__21914 = (i__20003_21909 + (1));
seq__20000_21906 = G__21911;
chunk__20001_21907 = G__21912;
count__20002_21908 = G__21913;
i__20003_21909 = G__21914;
continue;
} else {
var temp__4126__auto___21915 = cljs.core.seq.call(null,seq__20000_21906);
if(temp__4126__auto___21915){
var seq__20000_21916__$1 = temp__4126__auto___21915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20000_21916__$1)){
var c__8817__auto___21917 = cljs.core.chunk_first.call(null,seq__20000_21916__$1);
var G__21918 = cljs.core.chunk_rest.call(null,seq__20000_21916__$1);
var G__21919 = c__8817__auto___21917;
var G__21920 = cljs.core.count.call(null,c__8817__auto___21917);
var G__21921 = (0);
seq__20000_21906 = G__21918;
chunk__20001_21907 = G__21919;
count__20002_21908 = G__21920;
i__20003_21909 = G__21921;
continue;
} else {
var arg__13972__auto___21922 = cljs.core.first.call(null,seq__20000_21916__$1);
a__13971__auto__.push(arg__13972__auto___21922);

var G__21923 = cljs.core.next.call(null,seq__20000_21916__$1);
var G__21924 = null;
var G__21925 = (0);
var G__21926 = (0);
seq__20000_21906 = G__21923;
chunk__20001_21907 = G__21924;
count__20002_21908 = G__21925;
i__20003_21909 = G__21926;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__13971__auto__);
};
var ol = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ol__delegate.call(this,args__13970__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__21927){
var args__13970__auto__ = cljs.core.seq(arglist__21927);
return ol__delegate(args__13970__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20008_21928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20009_21929 = null;
var count__20010_21930 = (0);
var i__20011_21931 = (0);
while(true){
if((i__20011_21931 < count__20010_21930)){
var arg__13972__auto___21932 = cljs.core._nth.call(null,chunk__20009_21929,i__20011_21931);
a__13971__auto__.push(arg__13972__auto___21932);

var G__21933 = seq__20008_21928;
var G__21934 = chunk__20009_21929;
var G__21935 = count__20010_21930;
var G__21936 = (i__20011_21931 + (1));
seq__20008_21928 = G__21933;
chunk__20009_21929 = G__21934;
count__20010_21930 = G__21935;
i__20011_21931 = G__21936;
continue;
} else {
var temp__4126__auto___21937 = cljs.core.seq.call(null,seq__20008_21928);
if(temp__4126__auto___21937){
var seq__20008_21938__$1 = temp__4126__auto___21937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20008_21938__$1)){
var c__8817__auto___21939 = cljs.core.chunk_first.call(null,seq__20008_21938__$1);
var G__21940 = cljs.core.chunk_rest.call(null,seq__20008_21938__$1);
var G__21941 = c__8817__auto___21939;
var G__21942 = cljs.core.count.call(null,c__8817__auto___21939);
var G__21943 = (0);
seq__20008_21928 = G__21940;
chunk__20009_21929 = G__21941;
count__20010_21930 = G__21942;
i__20011_21931 = G__21943;
continue;
} else {
var arg__13972__auto___21944 = cljs.core.first.call(null,seq__20008_21938__$1);
a__13971__auto__.push(arg__13972__auto___21944);

var G__21945 = cljs.core.next.call(null,seq__20008_21938__$1);
var G__21946 = null;
var G__21947 = (0);
var G__21948 = (0);
seq__20008_21928 = G__21945;
chunk__20009_21929 = G__21946;
count__20010_21930 = G__21947;
i__20011_21931 = G__21948;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__13971__auto__);
};
var optgroup = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return optgroup__delegate.call(this,args__13970__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__21949){
var args__13970__auto__ = cljs.core.seq(arglist__21949);
return optgroup__delegate(args__13970__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20016_21950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20017_21951 = null;
var count__20018_21952 = (0);
var i__20019_21953 = (0);
while(true){
if((i__20019_21953 < count__20018_21952)){
var arg__13972__auto___21954 = cljs.core._nth.call(null,chunk__20017_21951,i__20019_21953);
a__13971__auto__.push(arg__13972__auto___21954);

var G__21955 = seq__20016_21950;
var G__21956 = chunk__20017_21951;
var G__21957 = count__20018_21952;
var G__21958 = (i__20019_21953 + (1));
seq__20016_21950 = G__21955;
chunk__20017_21951 = G__21956;
count__20018_21952 = G__21957;
i__20019_21953 = G__21958;
continue;
} else {
var temp__4126__auto___21959 = cljs.core.seq.call(null,seq__20016_21950);
if(temp__4126__auto___21959){
var seq__20016_21960__$1 = temp__4126__auto___21959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20016_21960__$1)){
var c__8817__auto___21961 = cljs.core.chunk_first.call(null,seq__20016_21960__$1);
var G__21962 = cljs.core.chunk_rest.call(null,seq__20016_21960__$1);
var G__21963 = c__8817__auto___21961;
var G__21964 = cljs.core.count.call(null,c__8817__auto___21961);
var G__21965 = (0);
seq__20016_21950 = G__21962;
chunk__20017_21951 = G__21963;
count__20018_21952 = G__21964;
i__20019_21953 = G__21965;
continue;
} else {
var arg__13972__auto___21966 = cljs.core.first.call(null,seq__20016_21960__$1);
a__13971__auto__.push(arg__13972__auto___21966);

var G__21967 = cljs.core.next.call(null,seq__20016_21960__$1);
var G__21968 = null;
var G__21969 = (0);
var G__21970 = (0);
seq__20016_21950 = G__21967;
chunk__20017_21951 = G__21968;
count__20018_21952 = G__21969;
i__20019_21953 = G__21970;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__13971__auto__);
};
var option = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return option__delegate.call(this,args__13970__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__21971){
var args__13970__auto__ = cljs.core.seq(arglist__21971);
return option__delegate(args__13970__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20024_21972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20025_21973 = null;
var count__20026_21974 = (0);
var i__20027_21975 = (0);
while(true){
if((i__20027_21975 < count__20026_21974)){
var arg__13972__auto___21976 = cljs.core._nth.call(null,chunk__20025_21973,i__20027_21975);
a__13971__auto__.push(arg__13972__auto___21976);

var G__21977 = seq__20024_21972;
var G__21978 = chunk__20025_21973;
var G__21979 = count__20026_21974;
var G__21980 = (i__20027_21975 + (1));
seq__20024_21972 = G__21977;
chunk__20025_21973 = G__21978;
count__20026_21974 = G__21979;
i__20027_21975 = G__21980;
continue;
} else {
var temp__4126__auto___21981 = cljs.core.seq.call(null,seq__20024_21972);
if(temp__4126__auto___21981){
var seq__20024_21982__$1 = temp__4126__auto___21981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20024_21982__$1)){
var c__8817__auto___21983 = cljs.core.chunk_first.call(null,seq__20024_21982__$1);
var G__21984 = cljs.core.chunk_rest.call(null,seq__20024_21982__$1);
var G__21985 = c__8817__auto___21983;
var G__21986 = cljs.core.count.call(null,c__8817__auto___21983);
var G__21987 = (0);
seq__20024_21972 = G__21984;
chunk__20025_21973 = G__21985;
count__20026_21974 = G__21986;
i__20027_21975 = G__21987;
continue;
} else {
var arg__13972__auto___21988 = cljs.core.first.call(null,seq__20024_21982__$1);
a__13971__auto__.push(arg__13972__auto___21988);

var G__21989 = cljs.core.next.call(null,seq__20024_21982__$1);
var G__21990 = null;
var G__21991 = (0);
var G__21992 = (0);
seq__20024_21972 = G__21989;
chunk__20025_21973 = G__21990;
count__20026_21974 = G__21991;
i__20027_21975 = G__21992;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__13971__auto__);
};
var output = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return output__delegate.call(this,args__13970__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__21993){
var args__13970__auto__ = cljs.core.seq(arglist__21993);
return output__delegate(args__13970__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20032_21994 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20033_21995 = null;
var count__20034_21996 = (0);
var i__20035_21997 = (0);
while(true){
if((i__20035_21997 < count__20034_21996)){
var arg__13972__auto___21998 = cljs.core._nth.call(null,chunk__20033_21995,i__20035_21997);
a__13971__auto__.push(arg__13972__auto___21998);

var G__21999 = seq__20032_21994;
var G__22000 = chunk__20033_21995;
var G__22001 = count__20034_21996;
var G__22002 = (i__20035_21997 + (1));
seq__20032_21994 = G__21999;
chunk__20033_21995 = G__22000;
count__20034_21996 = G__22001;
i__20035_21997 = G__22002;
continue;
} else {
var temp__4126__auto___22003 = cljs.core.seq.call(null,seq__20032_21994);
if(temp__4126__auto___22003){
var seq__20032_22004__$1 = temp__4126__auto___22003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20032_22004__$1)){
var c__8817__auto___22005 = cljs.core.chunk_first.call(null,seq__20032_22004__$1);
var G__22006 = cljs.core.chunk_rest.call(null,seq__20032_22004__$1);
var G__22007 = c__8817__auto___22005;
var G__22008 = cljs.core.count.call(null,c__8817__auto___22005);
var G__22009 = (0);
seq__20032_21994 = G__22006;
chunk__20033_21995 = G__22007;
count__20034_21996 = G__22008;
i__20035_21997 = G__22009;
continue;
} else {
var arg__13972__auto___22010 = cljs.core.first.call(null,seq__20032_22004__$1);
a__13971__auto__.push(arg__13972__auto___22010);

var G__22011 = cljs.core.next.call(null,seq__20032_22004__$1);
var G__22012 = null;
var G__22013 = (0);
var G__22014 = (0);
seq__20032_21994 = G__22011;
chunk__20033_21995 = G__22012;
count__20034_21996 = G__22013;
i__20035_21997 = G__22014;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__13971__auto__);
};
var p = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return p__delegate.call(this,args__13970__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__22015){
var args__13970__auto__ = cljs.core.seq(arglist__22015);
return p__delegate(args__13970__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20040_22016 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20041_22017 = null;
var count__20042_22018 = (0);
var i__20043_22019 = (0);
while(true){
if((i__20043_22019 < count__20042_22018)){
var arg__13972__auto___22020 = cljs.core._nth.call(null,chunk__20041_22017,i__20043_22019);
a__13971__auto__.push(arg__13972__auto___22020);

var G__22021 = seq__20040_22016;
var G__22022 = chunk__20041_22017;
var G__22023 = count__20042_22018;
var G__22024 = (i__20043_22019 + (1));
seq__20040_22016 = G__22021;
chunk__20041_22017 = G__22022;
count__20042_22018 = G__22023;
i__20043_22019 = G__22024;
continue;
} else {
var temp__4126__auto___22025 = cljs.core.seq.call(null,seq__20040_22016);
if(temp__4126__auto___22025){
var seq__20040_22026__$1 = temp__4126__auto___22025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20040_22026__$1)){
var c__8817__auto___22027 = cljs.core.chunk_first.call(null,seq__20040_22026__$1);
var G__22028 = cljs.core.chunk_rest.call(null,seq__20040_22026__$1);
var G__22029 = c__8817__auto___22027;
var G__22030 = cljs.core.count.call(null,c__8817__auto___22027);
var G__22031 = (0);
seq__20040_22016 = G__22028;
chunk__20041_22017 = G__22029;
count__20042_22018 = G__22030;
i__20043_22019 = G__22031;
continue;
} else {
var arg__13972__auto___22032 = cljs.core.first.call(null,seq__20040_22026__$1);
a__13971__auto__.push(arg__13972__auto___22032);

var G__22033 = cljs.core.next.call(null,seq__20040_22026__$1);
var G__22034 = null;
var G__22035 = (0);
var G__22036 = (0);
seq__20040_22016 = G__22033;
chunk__20041_22017 = G__22034;
count__20042_22018 = G__22035;
i__20043_22019 = G__22036;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__13971__auto__);
};
var param = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return param__delegate.call(this,args__13970__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__22037){
var args__13970__auto__ = cljs.core.seq(arglist__22037);
return param__delegate(args__13970__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20048_22038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20049_22039 = null;
var count__20050_22040 = (0);
var i__20051_22041 = (0);
while(true){
if((i__20051_22041 < count__20050_22040)){
var arg__13972__auto___22042 = cljs.core._nth.call(null,chunk__20049_22039,i__20051_22041);
a__13971__auto__.push(arg__13972__auto___22042);

var G__22043 = seq__20048_22038;
var G__22044 = chunk__20049_22039;
var G__22045 = count__20050_22040;
var G__22046 = (i__20051_22041 + (1));
seq__20048_22038 = G__22043;
chunk__20049_22039 = G__22044;
count__20050_22040 = G__22045;
i__20051_22041 = G__22046;
continue;
} else {
var temp__4126__auto___22047 = cljs.core.seq.call(null,seq__20048_22038);
if(temp__4126__auto___22047){
var seq__20048_22048__$1 = temp__4126__auto___22047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20048_22048__$1)){
var c__8817__auto___22049 = cljs.core.chunk_first.call(null,seq__20048_22048__$1);
var G__22050 = cljs.core.chunk_rest.call(null,seq__20048_22048__$1);
var G__22051 = c__8817__auto___22049;
var G__22052 = cljs.core.count.call(null,c__8817__auto___22049);
var G__22053 = (0);
seq__20048_22038 = G__22050;
chunk__20049_22039 = G__22051;
count__20050_22040 = G__22052;
i__20051_22041 = G__22053;
continue;
} else {
var arg__13972__auto___22054 = cljs.core.first.call(null,seq__20048_22048__$1);
a__13971__auto__.push(arg__13972__auto___22054);

var G__22055 = cljs.core.next.call(null,seq__20048_22048__$1);
var G__22056 = null;
var G__22057 = (0);
var G__22058 = (0);
seq__20048_22038 = G__22055;
chunk__20049_22039 = G__22056;
count__20050_22040 = G__22057;
i__20051_22041 = G__22058;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__13971__auto__);
};
var pre = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pre__delegate.call(this,args__13970__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__22059){
var args__13970__auto__ = cljs.core.seq(arglist__22059);
return pre__delegate(args__13970__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20056_22060 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20057_22061 = null;
var count__20058_22062 = (0);
var i__20059_22063 = (0);
while(true){
if((i__20059_22063 < count__20058_22062)){
var arg__13972__auto___22064 = cljs.core._nth.call(null,chunk__20057_22061,i__20059_22063);
a__13971__auto__.push(arg__13972__auto___22064);

var G__22065 = seq__20056_22060;
var G__22066 = chunk__20057_22061;
var G__22067 = count__20058_22062;
var G__22068 = (i__20059_22063 + (1));
seq__20056_22060 = G__22065;
chunk__20057_22061 = G__22066;
count__20058_22062 = G__22067;
i__20059_22063 = G__22068;
continue;
} else {
var temp__4126__auto___22069 = cljs.core.seq.call(null,seq__20056_22060);
if(temp__4126__auto___22069){
var seq__20056_22070__$1 = temp__4126__auto___22069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20056_22070__$1)){
var c__8817__auto___22071 = cljs.core.chunk_first.call(null,seq__20056_22070__$1);
var G__22072 = cljs.core.chunk_rest.call(null,seq__20056_22070__$1);
var G__22073 = c__8817__auto___22071;
var G__22074 = cljs.core.count.call(null,c__8817__auto___22071);
var G__22075 = (0);
seq__20056_22060 = G__22072;
chunk__20057_22061 = G__22073;
count__20058_22062 = G__22074;
i__20059_22063 = G__22075;
continue;
} else {
var arg__13972__auto___22076 = cljs.core.first.call(null,seq__20056_22070__$1);
a__13971__auto__.push(arg__13972__auto___22076);

var G__22077 = cljs.core.next.call(null,seq__20056_22070__$1);
var G__22078 = null;
var G__22079 = (0);
var G__22080 = (0);
seq__20056_22060 = G__22077;
chunk__20057_22061 = G__22078;
count__20058_22062 = G__22079;
i__20059_22063 = G__22080;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__13971__auto__);
};
var progress = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return progress__delegate.call(this,args__13970__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__22081){
var args__13970__auto__ = cljs.core.seq(arglist__22081);
return progress__delegate(args__13970__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20064_22082 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20065_22083 = null;
var count__20066_22084 = (0);
var i__20067_22085 = (0);
while(true){
if((i__20067_22085 < count__20066_22084)){
var arg__13972__auto___22086 = cljs.core._nth.call(null,chunk__20065_22083,i__20067_22085);
a__13971__auto__.push(arg__13972__auto___22086);

var G__22087 = seq__20064_22082;
var G__22088 = chunk__20065_22083;
var G__22089 = count__20066_22084;
var G__22090 = (i__20067_22085 + (1));
seq__20064_22082 = G__22087;
chunk__20065_22083 = G__22088;
count__20066_22084 = G__22089;
i__20067_22085 = G__22090;
continue;
} else {
var temp__4126__auto___22091 = cljs.core.seq.call(null,seq__20064_22082);
if(temp__4126__auto___22091){
var seq__20064_22092__$1 = temp__4126__auto___22091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20064_22092__$1)){
var c__8817__auto___22093 = cljs.core.chunk_first.call(null,seq__20064_22092__$1);
var G__22094 = cljs.core.chunk_rest.call(null,seq__20064_22092__$1);
var G__22095 = c__8817__auto___22093;
var G__22096 = cljs.core.count.call(null,c__8817__auto___22093);
var G__22097 = (0);
seq__20064_22082 = G__22094;
chunk__20065_22083 = G__22095;
count__20066_22084 = G__22096;
i__20067_22085 = G__22097;
continue;
} else {
var arg__13972__auto___22098 = cljs.core.first.call(null,seq__20064_22092__$1);
a__13971__auto__.push(arg__13972__auto___22098);

var G__22099 = cljs.core.next.call(null,seq__20064_22092__$1);
var G__22100 = null;
var G__22101 = (0);
var G__22102 = (0);
seq__20064_22082 = G__22099;
chunk__20065_22083 = G__22100;
count__20066_22084 = G__22101;
i__20067_22085 = G__22102;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__13971__auto__);
};
var q = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return q__delegate.call(this,args__13970__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__22103){
var args__13970__auto__ = cljs.core.seq(arglist__22103);
return q__delegate(args__13970__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20072_22104 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20073_22105 = null;
var count__20074_22106 = (0);
var i__20075_22107 = (0);
while(true){
if((i__20075_22107 < count__20074_22106)){
var arg__13972__auto___22108 = cljs.core._nth.call(null,chunk__20073_22105,i__20075_22107);
a__13971__auto__.push(arg__13972__auto___22108);

var G__22109 = seq__20072_22104;
var G__22110 = chunk__20073_22105;
var G__22111 = count__20074_22106;
var G__22112 = (i__20075_22107 + (1));
seq__20072_22104 = G__22109;
chunk__20073_22105 = G__22110;
count__20074_22106 = G__22111;
i__20075_22107 = G__22112;
continue;
} else {
var temp__4126__auto___22113 = cljs.core.seq.call(null,seq__20072_22104);
if(temp__4126__auto___22113){
var seq__20072_22114__$1 = temp__4126__auto___22113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20072_22114__$1)){
var c__8817__auto___22115 = cljs.core.chunk_first.call(null,seq__20072_22114__$1);
var G__22116 = cljs.core.chunk_rest.call(null,seq__20072_22114__$1);
var G__22117 = c__8817__auto___22115;
var G__22118 = cljs.core.count.call(null,c__8817__auto___22115);
var G__22119 = (0);
seq__20072_22104 = G__22116;
chunk__20073_22105 = G__22117;
count__20074_22106 = G__22118;
i__20075_22107 = G__22119;
continue;
} else {
var arg__13972__auto___22120 = cljs.core.first.call(null,seq__20072_22114__$1);
a__13971__auto__.push(arg__13972__auto___22120);

var G__22121 = cljs.core.next.call(null,seq__20072_22114__$1);
var G__22122 = null;
var G__22123 = (0);
var G__22124 = (0);
seq__20072_22104 = G__22121;
chunk__20073_22105 = G__22122;
count__20074_22106 = G__22123;
i__20075_22107 = G__22124;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__13971__auto__);
};
var rp = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return rp__delegate.call(this,args__13970__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__22125){
var args__13970__auto__ = cljs.core.seq(arglist__22125);
return rp__delegate(args__13970__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20080_22126 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20081_22127 = null;
var count__20082_22128 = (0);
var i__20083_22129 = (0);
while(true){
if((i__20083_22129 < count__20082_22128)){
var arg__13972__auto___22130 = cljs.core._nth.call(null,chunk__20081_22127,i__20083_22129);
a__13971__auto__.push(arg__13972__auto___22130);

var G__22131 = seq__20080_22126;
var G__22132 = chunk__20081_22127;
var G__22133 = count__20082_22128;
var G__22134 = (i__20083_22129 + (1));
seq__20080_22126 = G__22131;
chunk__20081_22127 = G__22132;
count__20082_22128 = G__22133;
i__20083_22129 = G__22134;
continue;
} else {
var temp__4126__auto___22135 = cljs.core.seq.call(null,seq__20080_22126);
if(temp__4126__auto___22135){
var seq__20080_22136__$1 = temp__4126__auto___22135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20080_22136__$1)){
var c__8817__auto___22137 = cljs.core.chunk_first.call(null,seq__20080_22136__$1);
var G__22138 = cljs.core.chunk_rest.call(null,seq__20080_22136__$1);
var G__22139 = c__8817__auto___22137;
var G__22140 = cljs.core.count.call(null,c__8817__auto___22137);
var G__22141 = (0);
seq__20080_22126 = G__22138;
chunk__20081_22127 = G__22139;
count__20082_22128 = G__22140;
i__20083_22129 = G__22141;
continue;
} else {
var arg__13972__auto___22142 = cljs.core.first.call(null,seq__20080_22136__$1);
a__13971__auto__.push(arg__13972__auto___22142);

var G__22143 = cljs.core.next.call(null,seq__20080_22136__$1);
var G__22144 = null;
var G__22145 = (0);
var G__22146 = (0);
seq__20080_22126 = G__22143;
chunk__20081_22127 = G__22144;
count__20082_22128 = G__22145;
i__20083_22129 = G__22146;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__13971__auto__);
};
var rt = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return rt__delegate.call(this,args__13970__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__22147){
var args__13970__auto__ = cljs.core.seq(arglist__22147);
return rt__delegate(args__13970__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20088_22148 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20089_22149 = null;
var count__20090_22150 = (0);
var i__20091_22151 = (0);
while(true){
if((i__20091_22151 < count__20090_22150)){
var arg__13972__auto___22152 = cljs.core._nth.call(null,chunk__20089_22149,i__20091_22151);
a__13971__auto__.push(arg__13972__auto___22152);

var G__22153 = seq__20088_22148;
var G__22154 = chunk__20089_22149;
var G__22155 = count__20090_22150;
var G__22156 = (i__20091_22151 + (1));
seq__20088_22148 = G__22153;
chunk__20089_22149 = G__22154;
count__20090_22150 = G__22155;
i__20091_22151 = G__22156;
continue;
} else {
var temp__4126__auto___22157 = cljs.core.seq.call(null,seq__20088_22148);
if(temp__4126__auto___22157){
var seq__20088_22158__$1 = temp__4126__auto___22157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20088_22158__$1)){
var c__8817__auto___22159 = cljs.core.chunk_first.call(null,seq__20088_22158__$1);
var G__22160 = cljs.core.chunk_rest.call(null,seq__20088_22158__$1);
var G__22161 = c__8817__auto___22159;
var G__22162 = cljs.core.count.call(null,c__8817__auto___22159);
var G__22163 = (0);
seq__20088_22148 = G__22160;
chunk__20089_22149 = G__22161;
count__20090_22150 = G__22162;
i__20091_22151 = G__22163;
continue;
} else {
var arg__13972__auto___22164 = cljs.core.first.call(null,seq__20088_22158__$1);
a__13971__auto__.push(arg__13972__auto___22164);

var G__22165 = cljs.core.next.call(null,seq__20088_22158__$1);
var G__22166 = null;
var G__22167 = (0);
var G__22168 = (0);
seq__20088_22148 = G__22165;
chunk__20089_22149 = G__22166;
count__20090_22150 = G__22167;
i__20091_22151 = G__22168;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__13971__auto__);
};
var ruby = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ruby__delegate.call(this,args__13970__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__22169){
var args__13970__auto__ = cljs.core.seq(arglist__22169);
return ruby__delegate(args__13970__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20096_22170 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20097_22171 = null;
var count__20098_22172 = (0);
var i__20099_22173 = (0);
while(true){
if((i__20099_22173 < count__20098_22172)){
var arg__13972__auto___22174 = cljs.core._nth.call(null,chunk__20097_22171,i__20099_22173);
a__13971__auto__.push(arg__13972__auto___22174);

var G__22175 = seq__20096_22170;
var G__22176 = chunk__20097_22171;
var G__22177 = count__20098_22172;
var G__22178 = (i__20099_22173 + (1));
seq__20096_22170 = G__22175;
chunk__20097_22171 = G__22176;
count__20098_22172 = G__22177;
i__20099_22173 = G__22178;
continue;
} else {
var temp__4126__auto___22179 = cljs.core.seq.call(null,seq__20096_22170);
if(temp__4126__auto___22179){
var seq__20096_22180__$1 = temp__4126__auto___22179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20096_22180__$1)){
var c__8817__auto___22181 = cljs.core.chunk_first.call(null,seq__20096_22180__$1);
var G__22182 = cljs.core.chunk_rest.call(null,seq__20096_22180__$1);
var G__22183 = c__8817__auto___22181;
var G__22184 = cljs.core.count.call(null,c__8817__auto___22181);
var G__22185 = (0);
seq__20096_22170 = G__22182;
chunk__20097_22171 = G__22183;
count__20098_22172 = G__22184;
i__20099_22173 = G__22185;
continue;
} else {
var arg__13972__auto___22186 = cljs.core.first.call(null,seq__20096_22180__$1);
a__13971__auto__.push(arg__13972__auto___22186);

var G__22187 = cljs.core.next.call(null,seq__20096_22180__$1);
var G__22188 = null;
var G__22189 = (0);
var G__22190 = (0);
seq__20096_22170 = G__22187;
chunk__20097_22171 = G__22188;
count__20098_22172 = G__22189;
i__20099_22173 = G__22190;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__13971__auto__);
};
var s = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return s__delegate.call(this,args__13970__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__22191){
var args__13970__auto__ = cljs.core.seq(arglist__22191);
return s__delegate(args__13970__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20104_22192 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20105_22193 = null;
var count__20106_22194 = (0);
var i__20107_22195 = (0);
while(true){
if((i__20107_22195 < count__20106_22194)){
var arg__13972__auto___22196 = cljs.core._nth.call(null,chunk__20105_22193,i__20107_22195);
a__13971__auto__.push(arg__13972__auto___22196);

var G__22197 = seq__20104_22192;
var G__22198 = chunk__20105_22193;
var G__22199 = count__20106_22194;
var G__22200 = (i__20107_22195 + (1));
seq__20104_22192 = G__22197;
chunk__20105_22193 = G__22198;
count__20106_22194 = G__22199;
i__20107_22195 = G__22200;
continue;
} else {
var temp__4126__auto___22201 = cljs.core.seq.call(null,seq__20104_22192);
if(temp__4126__auto___22201){
var seq__20104_22202__$1 = temp__4126__auto___22201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20104_22202__$1)){
var c__8817__auto___22203 = cljs.core.chunk_first.call(null,seq__20104_22202__$1);
var G__22204 = cljs.core.chunk_rest.call(null,seq__20104_22202__$1);
var G__22205 = c__8817__auto___22203;
var G__22206 = cljs.core.count.call(null,c__8817__auto___22203);
var G__22207 = (0);
seq__20104_22192 = G__22204;
chunk__20105_22193 = G__22205;
count__20106_22194 = G__22206;
i__20107_22195 = G__22207;
continue;
} else {
var arg__13972__auto___22208 = cljs.core.first.call(null,seq__20104_22202__$1);
a__13971__auto__.push(arg__13972__auto___22208);

var G__22209 = cljs.core.next.call(null,seq__20104_22202__$1);
var G__22210 = null;
var G__22211 = (0);
var G__22212 = (0);
seq__20104_22192 = G__22209;
chunk__20105_22193 = G__22210;
count__20106_22194 = G__22211;
i__20107_22195 = G__22212;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__13971__auto__);
};
var samp = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return samp__delegate.call(this,args__13970__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__22213){
var args__13970__auto__ = cljs.core.seq(arglist__22213);
return samp__delegate(args__13970__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20112_22214 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20113_22215 = null;
var count__20114_22216 = (0);
var i__20115_22217 = (0);
while(true){
if((i__20115_22217 < count__20114_22216)){
var arg__13972__auto___22218 = cljs.core._nth.call(null,chunk__20113_22215,i__20115_22217);
a__13971__auto__.push(arg__13972__auto___22218);

var G__22219 = seq__20112_22214;
var G__22220 = chunk__20113_22215;
var G__22221 = count__20114_22216;
var G__22222 = (i__20115_22217 + (1));
seq__20112_22214 = G__22219;
chunk__20113_22215 = G__22220;
count__20114_22216 = G__22221;
i__20115_22217 = G__22222;
continue;
} else {
var temp__4126__auto___22223 = cljs.core.seq.call(null,seq__20112_22214);
if(temp__4126__auto___22223){
var seq__20112_22224__$1 = temp__4126__auto___22223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20112_22224__$1)){
var c__8817__auto___22225 = cljs.core.chunk_first.call(null,seq__20112_22224__$1);
var G__22226 = cljs.core.chunk_rest.call(null,seq__20112_22224__$1);
var G__22227 = c__8817__auto___22225;
var G__22228 = cljs.core.count.call(null,c__8817__auto___22225);
var G__22229 = (0);
seq__20112_22214 = G__22226;
chunk__20113_22215 = G__22227;
count__20114_22216 = G__22228;
i__20115_22217 = G__22229;
continue;
} else {
var arg__13972__auto___22230 = cljs.core.first.call(null,seq__20112_22224__$1);
a__13971__auto__.push(arg__13972__auto___22230);

var G__22231 = cljs.core.next.call(null,seq__20112_22224__$1);
var G__22232 = null;
var G__22233 = (0);
var G__22234 = (0);
seq__20112_22214 = G__22231;
chunk__20113_22215 = G__22232;
count__20114_22216 = G__22233;
i__20115_22217 = G__22234;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__13971__auto__);
};
var script = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return script__delegate.call(this,args__13970__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__22235){
var args__13970__auto__ = cljs.core.seq(arglist__22235);
return script__delegate(args__13970__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20120_22236 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20121_22237 = null;
var count__20122_22238 = (0);
var i__20123_22239 = (0);
while(true){
if((i__20123_22239 < count__20122_22238)){
var arg__13972__auto___22240 = cljs.core._nth.call(null,chunk__20121_22237,i__20123_22239);
a__13971__auto__.push(arg__13972__auto___22240);

var G__22241 = seq__20120_22236;
var G__22242 = chunk__20121_22237;
var G__22243 = count__20122_22238;
var G__22244 = (i__20123_22239 + (1));
seq__20120_22236 = G__22241;
chunk__20121_22237 = G__22242;
count__20122_22238 = G__22243;
i__20123_22239 = G__22244;
continue;
} else {
var temp__4126__auto___22245 = cljs.core.seq.call(null,seq__20120_22236);
if(temp__4126__auto___22245){
var seq__20120_22246__$1 = temp__4126__auto___22245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20120_22246__$1)){
var c__8817__auto___22247 = cljs.core.chunk_first.call(null,seq__20120_22246__$1);
var G__22248 = cljs.core.chunk_rest.call(null,seq__20120_22246__$1);
var G__22249 = c__8817__auto___22247;
var G__22250 = cljs.core.count.call(null,c__8817__auto___22247);
var G__22251 = (0);
seq__20120_22236 = G__22248;
chunk__20121_22237 = G__22249;
count__20122_22238 = G__22250;
i__20123_22239 = G__22251;
continue;
} else {
var arg__13972__auto___22252 = cljs.core.first.call(null,seq__20120_22246__$1);
a__13971__auto__.push(arg__13972__auto___22252);

var G__22253 = cljs.core.next.call(null,seq__20120_22246__$1);
var G__22254 = null;
var G__22255 = (0);
var G__22256 = (0);
seq__20120_22236 = G__22253;
chunk__20121_22237 = G__22254;
count__20122_22238 = G__22255;
i__20123_22239 = G__22256;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__13971__auto__);
};
var section = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return section__delegate.call(this,args__13970__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__22257){
var args__13970__auto__ = cljs.core.seq(arglist__22257);
return section__delegate(args__13970__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20128_22258 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20129_22259 = null;
var count__20130_22260 = (0);
var i__20131_22261 = (0);
while(true){
if((i__20131_22261 < count__20130_22260)){
var arg__13972__auto___22262 = cljs.core._nth.call(null,chunk__20129_22259,i__20131_22261);
a__13971__auto__.push(arg__13972__auto___22262);

var G__22263 = seq__20128_22258;
var G__22264 = chunk__20129_22259;
var G__22265 = count__20130_22260;
var G__22266 = (i__20131_22261 + (1));
seq__20128_22258 = G__22263;
chunk__20129_22259 = G__22264;
count__20130_22260 = G__22265;
i__20131_22261 = G__22266;
continue;
} else {
var temp__4126__auto___22267 = cljs.core.seq.call(null,seq__20128_22258);
if(temp__4126__auto___22267){
var seq__20128_22268__$1 = temp__4126__auto___22267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20128_22268__$1)){
var c__8817__auto___22269 = cljs.core.chunk_first.call(null,seq__20128_22268__$1);
var G__22270 = cljs.core.chunk_rest.call(null,seq__20128_22268__$1);
var G__22271 = c__8817__auto___22269;
var G__22272 = cljs.core.count.call(null,c__8817__auto___22269);
var G__22273 = (0);
seq__20128_22258 = G__22270;
chunk__20129_22259 = G__22271;
count__20130_22260 = G__22272;
i__20131_22261 = G__22273;
continue;
} else {
var arg__13972__auto___22274 = cljs.core.first.call(null,seq__20128_22268__$1);
a__13971__auto__.push(arg__13972__auto___22274);

var G__22275 = cljs.core.next.call(null,seq__20128_22268__$1);
var G__22276 = null;
var G__22277 = (0);
var G__22278 = (0);
seq__20128_22258 = G__22275;
chunk__20129_22259 = G__22276;
count__20130_22260 = G__22277;
i__20131_22261 = G__22278;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__13971__auto__);
};
var select = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return select__delegate.call(this,args__13970__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__22279){
var args__13970__auto__ = cljs.core.seq(arglist__22279);
return select__delegate(args__13970__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20136_22280 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20137_22281 = null;
var count__20138_22282 = (0);
var i__20139_22283 = (0);
while(true){
if((i__20139_22283 < count__20138_22282)){
var arg__13972__auto___22284 = cljs.core._nth.call(null,chunk__20137_22281,i__20139_22283);
a__13971__auto__.push(arg__13972__auto___22284);

var G__22285 = seq__20136_22280;
var G__22286 = chunk__20137_22281;
var G__22287 = count__20138_22282;
var G__22288 = (i__20139_22283 + (1));
seq__20136_22280 = G__22285;
chunk__20137_22281 = G__22286;
count__20138_22282 = G__22287;
i__20139_22283 = G__22288;
continue;
} else {
var temp__4126__auto___22289 = cljs.core.seq.call(null,seq__20136_22280);
if(temp__4126__auto___22289){
var seq__20136_22290__$1 = temp__4126__auto___22289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20136_22290__$1)){
var c__8817__auto___22291 = cljs.core.chunk_first.call(null,seq__20136_22290__$1);
var G__22292 = cljs.core.chunk_rest.call(null,seq__20136_22290__$1);
var G__22293 = c__8817__auto___22291;
var G__22294 = cljs.core.count.call(null,c__8817__auto___22291);
var G__22295 = (0);
seq__20136_22280 = G__22292;
chunk__20137_22281 = G__22293;
count__20138_22282 = G__22294;
i__20139_22283 = G__22295;
continue;
} else {
var arg__13972__auto___22296 = cljs.core.first.call(null,seq__20136_22290__$1);
a__13971__auto__.push(arg__13972__auto___22296);

var G__22297 = cljs.core.next.call(null,seq__20136_22290__$1);
var G__22298 = null;
var G__22299 = (0);
var G__22300 = (0);
seq__20136_22280 = G__22297;
chunk__20137_22281 = G__22298;
count__20138_22282 = G__22299;
i__20139_22283 = G__22300;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__13971__auto__);
};
var small = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return small__delegate.call(this,args__13970__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__22301){
var args__13970__auto__ = cljs.core.seq(arglist__22301);
return small__delegate(args__13970__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20144_22302 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20145_22303 = null;
var count__20146_22304 = (0);
var i__20147_22305 = (0);
while(true){
if((i__20147_22305 < count__20146_22304)){
var arg__13972__auto___22306 = cljs.core._nth.call(null,chunk__20145_22303,i__20147_22305);
a__13971__auto__.push(arg__13972__auto___22306);

var G__22307 = seq__20144_22302;
var G__22308 = chunk__20145_22303;
var G__22309 = count__20146_22304;
var G__22310 = (i__20147_22305 + (1));
seq__20144_22302 = G__22307;
chunk__20145_22303 = G__22308;
count__20146_22304 = G__22309;
i__20147_22305 = G__22310;
continue;
} else {
var temp__4126__auto___22311 = cljs.core.seq.call(null,seq__20144_22302);
if(temp__4126__auto___22311){
var seq__20144_22312__$1 = temp__4126__auto___22311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20144_22312__$1)){
var c__8817__auto___22313 = cljs.core.chunk_first.call(null,seq__20144_22312__$1);
var G__22314 = cljs.core.chunk_rest.call(null,seq__20144_22312__$1);
var G__22315 = c__8817__auto___22313;
var G__22316 = cljs.core.count.call(null,c__8817__auto___22313);
var G__22317 = (0);
seq__20144_22302 = G__22314;
chunk__20145_22303 = G__22315;
count__20146_22304 = G__22316;
i__20147_22305 = G__22317;
continue;
} else {
var arg__13972__auto___22318 = cljs.core.first.call(null,seq__20144_22312__$1);
a__13971__auto__.push(arg__13972__auto___22318);

var G__22319 = cljs.core.next.call(null,seq__20144_22312__$1);
var G__22320 = null;
var G__22321 = (0);
var G__22322 = (0);
seq__20144_22302 = G__22319;
chunk__20145_22303 = G__22320;
count__20146_22304 = G__22321;
i__20147_22305 = G__22322;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__13971__auto__);
};
var source = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return source__delegate.call(this,args__13970__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__22323){
var args__13970__auto__ = cljs.core.seq(arglist__22323);
return source__delegate(args__13970__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20152_22324 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20153_22325 = null;
var count__20154_22326 = (0);
var i__20155_22327 = (0);
while(true){
if((i__20155_22327 < count__20154_22326)){
var arg__13972__auto___22328 = cljs.core._nth.call(null,chunk__20153_22325,i__20155_22327);
a__13971__auto__.push(arg__13972__auto___22328);

var G__22329 = seq__20152_22324;
var G__22330 = chunk__20153_22325;
var G__22331 = count__20154_22326;
var G__22332 = (i__20155_22327 + (1));
seq__20152_22324 = G__22329;
chunk__20153_22325 = G__22330;
count__20154_22326 = G__22331;
i__20155_22327 = G__22332;
continue;
} else {
var temp__4126__auto___22333 = cljs.core.seq.call(null,seq__20152_22324);
if(temp__4126__auto___22333){
var seq__20152_22334__$1 = temp__4126__auto___22333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20152_22334__$1)){
var c__8817__auto___22335 = cljs.core.chunk_first.call(null,seq__20152_22334__$1);
var G__22336 = cljs.core.chunk_rest.call(null,seq__20152_22334__$1);
var G__22337 = c__8817__auto___22335;
var G__22338 = cljs.core.count.call(null,c__8817__auto___22335);
var G__22339 = (0);
seq__20152_22324 = G__22336;
chunk__20153_22325 = G__22337;
count__20154_22326 = G__22338;
i__20155_22327 = G__22339;
continue;
} else {
var arg__13972__auto___22340 = cljs.core.first.call(null,seq__20152_22334__$1);
a__13971__auto__.push(arg__13972__auto___22340);

var G__22341 = cljs.core.next.call(null,seq__20152_22334__$1);
var G__22342 = null;
var G__22343 = (0);
var G__22344 = (0);
seq__20152_22324 = G__22341;
chunk__20153_22325 = G__22342;
count__20154_22326 = G__22343;
i__20155_22327 = G__22344;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__13971__auto__);
};
var span = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return span__delegate.call(this,args__13970__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__22345){
var args__13970__auto__ = cljs.core.seq(arglist__22345);
return span__delegate(args__13970__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20160_22346 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20161_22347 = null;
var count__20162_22348 = (0);
var i__20163_22349 = (0);
while(true){
if((i__20163_22349 < count__20162_22348)){
var arg__13972__auto___22350 = cljs.core._nth.call(null,chunk__20161_22347,i__20163_22349);
a__13971__auto__.push(arg__13972__auto___22350);

var G__22351 = seq__20160_22346;
var G__22352 = chunk__20161_22347;
var G__22353 = count__20162_22348;
var G__22354 = (i__20163_22349 + (1));
seq__20160_22346 = G__22351;
chunk__20161_22347 = G__22352;
count__20162_22348 = G__22353;
i__20163_22349 = G__22354;
continue;
} else {
var temp__4126__auto___22355 = cljs.core.seq.call(null,seq__20160_22346);
if(temp__4126__auto___22355){
var seq__20160_22356__$1 = temp__4126__auto___22355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20160_22356__$1)){
var c__8817__auto___22357 = cljs.core.chunk_first.call(null,seq__20160_22356__$1);
var G__22358 = cljs.core.chunk_rest.call(null,seq__20160_22356__$1);
var G__22359 = c__8817__auto___22357;
var G__22360 = cljs.core.count.call(null,c__8817__auto___22357);
var G__22361 = (0);
seq__20160_22346 = G__22358;
chunk__20161_22347 = G__22359;
count__20162_22348 = G__22360;
i__20163_22349 = G__22361;
continue;
} else {
var arg__13972__auto___22362 = cljs.core.first.call(null,seq__20160_22356__$1);
a__13971__auto__.push(arg__13972__auto___22362);

var G__22363 = cljs.core.next.call(null,seq__20160_22356__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__20160_22346 = G__22363;
chunk__20161_22347 = G__22364;
count__20162_22348 = G__22365;
i__20163_22349 = G__22366;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__13971__auto__);
};
var strong = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return strong__delegate.call(this,args__13970__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__22367){
var args__13970__auto__ = cljs.core.seq(arglist__22367);
return strong__delegate(args__13970__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20168_22368 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20169_22369 = null;
var count__20170_22370 = (0);
var i__20171_22371 = (0);
while(true){
if((i__20171_22371 < count__20170_22370)){
var arg__13972__auto___22372 = cljs.core._nth.call(null,chunk__20169_22369,i__20171_22371);
a__13971__auto__.push(arg__13972__auto___22372);

var G__22373 = seq__20168_22368;
var G__22374 = chunk__20169_22369;
var G__22375 = count__20170_22370;
var G__22376 = (i__20171_22371 + (1));
seq__20168_22368 = G__22373;
chunk__20169_22369 = G__22374;
count__20170_22370 = G__22375;
i__20171_22371 = G__22376;
continue;
} else {
var temp__4126__auto___22377 = cljs.core.seq.call(null,seq__20168_22368);
if(temp__4126__auto___22377){
var seq__20168_22378__$1 = temp__4126__auto___22377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20168_22378__$1)){
var c__8817__auto___22379 = cljs.core.chunk_first.call(null,seq__20168_22378__$1);
var G__22380 = cljs.core.chunk_rest.call(null,seq__20168_22378__$1);
var G__22381 = c__8817__auto___22379;
var G__22382 = cljs.core.count.call(null,c__8817__auto___22379);
var G__22383 = (0);
seq__20168_22368 = G__22380;
chunk__20169_22369 = G__22381;
count__20170_22370 = G__22382;
i__20171_22371 = G__22383;
continue;
} else {
var arg__13972__auto___22384 = cljs.core.first.call(null,seq__20168_22378__$1);
a__13971__auto__.push(arg__13972__auto___22384);

var G__22385 = cljs.core.next.call(null,seq__20168_22378__$1);
var G__22386 = null;
var G__22387 = (0);
var G__22388 = (0);
seq__20168_22368 = G__22385;
chunk__20169_22369 = G__22386;
count__20170_22370 = G__22387;
i__20171_22371 = G__22388;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__13971__auto__);
};
var style = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return style__delegate.call(this,args__13970__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__22389){
var args__13970__auto__ = cljs.core.seq(arglist__22389);
return style__delegate(args__13970__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20176_22390 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20177_22391 = null;
var count__20178_22392 = (0);
var i__20179_22393 = (0);
while(true){
if((i__20179_22393 < count__20178_22392)){
var arg__13972__auto___22394 = cljs.core._nth.call(null,chunk__20177_22391,i__20179_22393);
a__13971__auto__.push(arg__13972__auto___22394);

var G__22395 = seq__20176_22390;
var G__22396 = chunk__20177_22391;
var G__22397 = count__20178_22392;
var G__22398 = (i__20179_22393 + (1));
seq__20176_22390 = G__22395;
chunk__20177_22391 = G__22396;
count__20178_22392 = G__22397;
i__20179_22393 = G__22398;
continue;
} else {
var temp__4126__auto___22399 = cljs.core.seq.call(null,seq__20176_22390);
if(temp__4126__auto___22399){
var seq__20176_22400__$1 = temp__4126__auto___22399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20176_22400__$1)){
var c__8817__auto___22401 = cljs.core.chunk_first.call(null,seq__20176_22400__$1);
var G__22402 = cljs.core.chunk_rest.call(null,seq__20176_22400__$1);
var G__22403 = c__8817__auto___22401;
var G__22404 = cljs.core.count.call(null,c__8817__auto___22401);
var G__22405 = (0);
seq__20176_22390 = G__22402;
chunk__20177_22391 = G__22403;
count__20178_22392 = G__22404;
i__20179_22393 = G__22405;
continue;
} else {
var arg__13972__auto___22406 = cljs.core.first.call(null,seq__20176_22400__$1);
a__13971__auto__.push(arg__13972__auto___22406);

var G__22407 = cljs.core.next.call(null,seq__20176_22400__$1);
var G__22408 = null;
var G__22409 = (0);
var G__22410 = (0);
seq__20176_22390 = G__22407;
chunk__20177_22391 = G__22408;
count__20178_22392 = G__22409;
i__20179_22393 = G__22410;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__13971__auto__);
};
var sub = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sub__delegate.call(this,args__13970__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__22411){
var args__13970__auto__ = cljs.core.seq(arglist__22411);
return sub__delegate(args__13970__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20184_22412 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20185_22413 = null;
var count__20186_22414 = (0);
var i__20187_22415 = (0);
while(true){
if((i__20187_22415 < count__20186_22414)){
var arg__13972__auto___22416 = cljs.core._nth.call(null,chunk__20185_22413,i__20187_22415);
a__13971__auto__.push(arg__13972__auto___22416);

var G__22417 = seq__20184_22412;
var G__22418 = chunk__20185_22413;
var G__22419 = count__20186_22414;
var G__22420 = (i__20187_22415 + (1));
seq__20184_22412 = G__22417;
chunk__20185_22413 = G__22418;
count__20186_22414 = G__22419;
i__20187_22415 = G__22420;
continue;
} else {
var temp__4126__auto___22421 = cljs.core.seq.call(null,seq__20184_22412);
if(temp__4126__auto___22421){
var seq__20184_22422__$1 = temp__4126__auto___22421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20184_22422__$1)){
var c__8817__auto___22423 = cljs.core.chunk_first.call(null,seq__20184_22422__$1);
var G__22424 = cljs.core.chunk_rest.call(null,seq__20184_22422__$1);
var G__22425 = c__8817__auto___22423;
var G__22426 = cljs.core.count.call(null,c__8817__auto___22423);
var G__22427 = (0);
seq__20184_22412 = G__22424;
chunk__20185_22413 = G__22425;
count__20186_22414 = G__22426;
i__20187_22415 = G__22427;
continue;
} else {
var arg__13972__auto___22428 = cljs.core.first.call(null,seq__20184_22422__$1);
a__13971__auto__.push(arg__13972__auto___22428);

var G__22429 = cljs.core.next.call(null,seq__20184_22422__$1);
var G__22430 = null;
var G__22431 = (0);
var G__22432 = (0);
seq__20184_22412 = G__22429;
chunk__20185_22413 = G__22430;
count__20186_22414 = G__22431;
i__20187_22415 = G__22432;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__13971__auto__);
};
var summary = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return summary__delegate.call(this,args__13970__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__22433){
var args__13970__auto__ = cljs.core.seq(arglist__22433);
return summary__delegate(args__13970__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20192_22434 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20193_22435 = null;
var count__20194_22436 = (0);
var i__20195_22437 = (0);
while(true){
if((i__20195_22437 < count__20194_22436)){
var arg__13972__auto___22438 = cljs.core._nth.call(null,chunk__20193_22435,i__20195_22437);
a__13971__auto__.push(arg__13972__auto___22438);

var G__22439 = seq__20192_22434;
var G__22440 = chunk__20193_22435;
var G__22441 = count__20194_22436;
var G__22442 = (i__20195_22437 + (1));
seq__20192_22434 = G__22439;
chunk__20193_22435 = G__22440;
count__20194_22436 = G__22441;
i__20195_22437 = G__22442;
continue;
} else {
var temp__4126__auto___22443 = cljs.core.seq.call(null,seq__20192_22434);
if(temp__4126__auto___22443){
var seq__20192_22444__$1 = temp__4126__auto___22443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20192_22444__$1)){
var c__8817__auto___22445 = cljs.core.chunk_first.call(null,seq__20192_22444__$1);
var G__22446 = cljs.core.chunk_rest.call(null,seq__20192_22444__$1);
var G__22447 = c__8817__auto___22445;
var G__22448 = cljs.core.count.call(null,c__8817__auto___22445);
var G__22449 = (0);
seq__20192_22434 = G__22446;
chunk__20193_22435 = G__22447;
count__20194_22436 = G__22448;
i__20195_22437 = G__22449;
continue;
} else {
var arg__13972__auto___22450 = cljs.core.first.call(null,seq__20192_22444__$1);
a__13971__auto__.push(arg__13972__auto___22450);

var G__22451 = cljs.core.next.call(null,seq__20192_22444__$1);
var G__22452 = null;
var G__22453 = (0);
var G__22454 = (0);
seq__20192_22434 = G__22451;
chunk__20193_22435 = G__22452;
count__20194_22436 = G__22453;
i__20195_22437 = G__22454;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__13971__auto__);
};
var sup = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sup__delegate.call(this,args__13970__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__22455){
var args__13970__auto__ = cljs.core.seq(arglist__22455);
return sup__delegate(args__13970__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20200_22456 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20201_22457 = null;
var count__20202_22458 = (0);
var i__20203_22459 = (0);
while(true){
if((i__20203_22459 < count__20202_22458)){
var arg__13972__auto___22460 = cljs.core._nth.call(null,chunk__20201_22457,i__20203_22459);
a__13971__auto__.push(arg__13972__auto___22460);

var G__22461 = seq__20200_22456;
var G__22462 = chunk__20201_22457;
var G__22463 = count__20202_22458;
var G__22464 = (i__20203_22459 + (1));
seq__20200_22456 = G__22461;
chunk__20201_22457 = G__22462;
count__20202_22458 = G__22463;
i__20203_22459 = G__22464;
continue;
} else {
var temp__4126__auto___22465 = cljs.core.seq.call(null,seq__20200_22456);
if(temp__4126__auto___22465){
var seq__20200_22466__$1 = temp__4126__auto___22465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20200_22466__$1)){
var c__8817__auto___22467 = cljs.core.chunk_first.call(null,seq__20200_22466__$1);
var G__22468 = cljs.core.chunk_rest.call(null,seq__20200_22466__$1);
var G__22469 = c__8817__auto___22467;
var G__22470 = cljs.core.count.call(null,c__8817__auto___22467);
var G__22471 = (0);
seq__20200_22456 = G__22468;
chunk__20201_22457 = G__22469;
count__20202_22458 = G__22470;
i__20203_22459 = G__22471;
continue;
} else {
var arg__13972__auto___22472 = cljs.core.first.call(null,seq__20200_22466__$1);
a__13971__auto__.push(arg__13972__auto___22472);

var G__22473 = cljs.core.next.call(null,seq__20200_22466__$1);
var G__22474 = null;
var G__22475 = (0);
var G__22476 = (0);
seq__20200_22456 = G__22473;
chunk__20201_22457 = G__22474;
count__20202_22458 = G__22475;
i__20203_22459 = G__22476;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__13971__auto__);
};
var table = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return table__delegate.call(this,args__13970__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__22477){
var args__13970__auto__ = cljs.core.seq(arglist__22477);
return table__delegate(args__13970__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20208_22478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20209_22479 = null;
var count__20210_22480 = (0);
var i__20211_22481 = (0);
while(true){
if((i__20211_22481 < count__20210_22480)){
var arg__13972__auto___22482 = cljs.core._nth.call(null,chunk__20209_22479,i__20211_22481);
a__13971__auto__.push(arg__13972__auto___22482);

var G__22483 = seq__20208_22478;
var G__22484 = chunk__20209_22479;
var G__22485 = count__20210_22480;
var G__22486 = (i__20211_22481 + (1));
seq__20208_22478 = G__22483;
chunk__20209_22479 = G__22484;
count__20210_22480 = G__22485;
i__20211_22481 = G__22486;
continue;
} else {
var temp__4126__auto___22487 = cljs.core.seq.call(null,seq__20208_22478);
if(temp__4126__auto___22487){
var seq__20208_22488__$1 = temp__4126__auto___22487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20208_22488__$1)){
var c__8817__auto___22489 = cljs.core.chunk_first.call(null,seq__20208_22488__$1);
var G__22490 = cljs.core.chunk_rest.call(null,seq__20208_22488__$1);
var G__22491 = c__8817__auto___22489;
var G__22492 = cljs.core.count.call(null,c__8817__auto___22489);
var G__22493 = (0);
seq__20208_22478 = G__22490;
chunk__20209_22479 = G__22491;
count__20210_22480 = G__22492;
i__20211_22481 = G__22493;
continue;
} else {
var arg__13972__auto___22494 = cljs.core.first.call(null,seq__20208_22488__$1);
a__13971__auto__.push(arg__13972__auto___22494);

var G__22495 = cljs.core.next.call(null,seq__20208_22488__$1);
var G__22496 = null;
var G__22497 = (0);
var G__22498 = (0);
seq__20208_22478 = G__22495;
chunk__20209_22479 = G__22496;
count__20210_22480 = G__22497;
i__20211_22481 = G__22498;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__13971__auto__);
};
var tbody = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return tbody__delegate.call(this,args__13970__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__22499){
var args__13970__auto__ = cljs.core.seq(arglist__22499);
return tbody__delegate(args__13970__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20216_22500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20217_22501 = null;
var count__20218_22502 = (0);
var i__20219_22503 = (0);
while(true){
if((i__20219_22503 < count__20218_22502)){
var arg__13972__auto___22504 = cljs.core._nth.call(null,chunk__20217_22501,i__20219_22503);
a__13971__auto__.push(arg__13972__auto___22504);

var G__22505 = seq__20216_22500;
var G__22506 = chunk__20217_22501;
var G__22507 = count__20218_22502;
var G__22508 = (i__20219_22503 + (1));
seq__20216_22500 = G__22505;
chunk__20217_22501 = G__22506;
count__20218_22502 = G__22507;
i__20219_22503 = G__22508;
continue;
} else {
var temp__4126__auto___22509 = cljs.core.seq.call(null,seq__20216_22500);
if(temp__4126__auto___22509){
var seq__20216_22510__$1 = temp__4126__auto___22509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20216_22510__$1)){
var c__8817__auto___22511 = cljs.core.chunk_first.call(null,seq__20216_22510__$1);
var G__22512 = cljs.core.chunk_rest.call(null,seq__20216_22510__$1);
var G__22513 = c__8817__auto___22511;
var G__22514 = cljs.core.count.call(null,c__8817__auto___22511);
var G__22515 = (0);
seq__20216_22500 = G__22512;
chunk__20217_22501 = G__22513;
count__20218_22502 = G__22514;
i__20219_22503 = G__22515;
continue;
} else {
var arg__13972__auto___22516 = cljs.core.first.call(null,seq__20216_22510__$1);
a__13971__auto__.push(arg__13972__auto___22516);

var G__22517 = cljs.core.next.call(null,seq__20216_22510__$1);
var G__22518 = null;
var G__22519 = (0);
var G__22520 = (0);
seq__20216_22500 = G__22517;
chunk__20217_22501 = G__22518;
count__20218_22502 = G__22519;
i__20219_22503 = G__22520;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__13971__auto__);
};
var td = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return td__delegate.call(this,args__13970__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__22521){
var args__13970__auto__ = cljs.core.seq(arglist__22521);
return td__delegate(args__13970__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20224_22522 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20225_22523 = null;
var count__20226_22524 = (0);
var i__20227_22525 = (0);
while(true){
if((i__20227_22525 < count__20226_22524)){
var arg__13972__auto___22526 = cljs.core._nth.call(null,chunk__20225_22523,i__20227_22525);
a__13971__auto__.push(arg__13972__auto___22526);

var G__22527 = seq__20224_22522;
var G__22528 = chunk__20225_22523;
var G__22529 = count__20226_22524;
var G__22530 = (i__20227_22525 + (1));
seq__20224_22522 = G__22527;
chunk__20225_22523 = G__22528;
count__20226_22524 = G__22529;
i__20227_22525 = G__22530;
continue;
} else {
var temp__4126__auto___22531 = cljs.core.seq.call(null,seq__20224_22522);
if(temp__4126__auto___22531){
var seq__20224_22532__$1 = temp__4126__auto___22531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20224_22532__$1)){
var c__8817__auto___22533 = cljs.core.chunk_first.call(null,seq__20224_22532__$1);
var G__22534 = cljs.core.chunk_rest.call(null,seq__20224_22532__$1);
var G__22535 = c__8817__auto___22533;
var G__22536 = cljs.core.count.call(null,c__8817__auto___22533);
var G__22537 = (0);
seq__20224_22522 = G__22534;
chunk__20225_22523 = G__22535;
count__20226_22524 = G__22536;
i__20227_22525 = G__22537;
continue;
} else {
var arg__13972__auto___22538 = cljs.core.first.call(null,seq__20224_22532__$1);
a__13971__auto__.push(arg__13972__auto___22538);

var G__22539 = cljs.core.next.call(null,seq__20224_22532__$1);
var G__22540 = null;
var G__22541 = (0);
var G__22542 = (0);
seq__20224_22522 = G__22539;
chunk__20225_22523 = G__22540;
count__20226_22524 = G__22541;
i__20227_22525 = G__22542;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__13971__auto__);
};
var textarea = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return textarea__delegate.call(this,args__13970__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__22543){
var args__13970__auto__ = cljs.core.seq(arglist__22543);
return textarea__delegate(args__13970__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20232_22544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20233_22545 = null;
var count__20234_22546 = (0);
var i__20235_22547 = (0);
while(true){
if((i__20235_22547 < count__20234_22546)){
var arg__13972__auto___22548 = cljs.core._nth.call(null,chunk__20233_22545,i__20235_22547);
a__13971__auto__.push(arg__13972__auto___22548);

var G__22549 = seq__20232_22544;
var G__22550 = chunk__20233_22545;
var G__22551 = count__20234_22546;
var G__22552 = (i__20235_22547 + (1));
seq__20232_22544 = G__22549;
chunk__20233_22545 = G__22550;
count__20234_22546 = G__22551;
i__20235_22547 = G__22552;
continue;
} else {
var temp__4126__auto___22553 = cljs.core.seq.call(null,seq__20232_22544);
if(temp__4126__auto___22553){
var seq__20232_22554__$1 = temp__4126__auto___22553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20232_22554__$1)){
var c__8817__auto___22555 = cljs.core.chunk_first.call(null,seq__20232_22554__$1);
var G__22556 = cljs.core.chunk_rest.call(null,seq__20232_22554__$1);
var G__22557 = c__8817__auto___22555;
var G__22558 = cljs.core.count.call(null,c__8817__auto___22555);
var G__22559 = (0);
seq__20232_22544 = G__22556;
chunk__20233_22545 = G__22557;
count__20234_22546 = G__22558;
i__20235_22547 = G__22559;
continue;
} else {
var arg__13972__auto___22560 = cljs.core.first.call(null,seq__20232_22554__$1);
a__13971__auto__.push(arg__13972__auto___22560);

var G__22561 = cljs.core.next.call(null,seq__20232_22554__$1);
var G__22562 = null;
var G__22563 = (0);
var G__22564 = (0);
seq__20232_22544 = G__22561;
chunk__20233_22545 = G__22562;
count__20234_22546 = G__22563;
i__20235_22547 = G__22564;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__13971__auto__);
};
var tfoot = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return tfoot__delegate.call(this,args__13970__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__22565){
var args__13970__auto__ = cljs.core.seq(arglist__22565);
return tfoot__delegate(args__13970__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20240_22566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20241_22567 = null;
var count__20242_22568 = (0);
var i__20243_22569 = (0);
while(true){
if((i__20243_22569 < count__20242_22568)){
var arg__13972__auto___22570 = cljs.core._nth.call(null,chunk__20241_22567,i__20243_22569);
a__13971__auto__.push(arg__13972__auto___22570);

var G__22571 = seq__20240_22566;
var G__22572 = chunk__20241_22567;
var G__22573 = count__20242_22568;
var G__22574 = (i__20243_22569 + (1));
seq__20240_22566 = G__22571;
chunk__20241_22567 = G__22572;
count__20242_22568 = G__22573;
i__20243_22569 = G__22574;
continue;
} else {
var temp__4126__auto___22575 = cljs.core.seq.call(null,seq__20240_22566);
if(temp__4126__auto___22575){
var seq__20240_22576__$1 = temp__4126__auto___22575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20240_22576__$1)){
var c__8817__auto___22577 = cljs.core.chunk_first.call(null,seq__20240_22576__$1);
var G__22578 = cljs.core.chunk_rest.call(null,seq__20240_22576__$1);
var G__22579 = c__8817__auto___22577;
var G__22580 = cljs.core.count.call(null,c__8817__auto___22577);
var G__22581 = (0);
seq__20240_22566 = G__22578;
chunk__20241_22567 = G__22579;
count__20242_22568 = G__22580;
i__20243_22569 = G__22581;
continue;
} else {
var arg__13972__auto___22582 = cljs.core.first.call(null,seq__20240_22576__$1);
a__13971__auto__.push(arg__13972__auto___22582);

var G__22583 = cljs.core.next.call(null,seq__20240_22576__$1);
var G__22584 = null;
var G__22585 = (0);
var G__22586 = (0);
seq__20240_22566 = G__22583;
chunk__20241_22567 = G__22584;
count__20242_22568 = G__22585;
i__20243_22569 = G__22586;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__13971__auto__);
};
var th = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return th__delegate.call(this,args__13970__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__22587){
var args__13970__auto__ = cljs.core.seq(arglist__22587);
return th__delegate(args__13970__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20248_22588 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20249_22589 = null;
var count__20250_22590 = (0);
var i__20251_22591 = (0);
while(true){
if((i__20251_22591 < count__20250_22590)){
var arg__13972__auto___22592 = cljs.core._nth.call(null,chunk__20249_22589,i__20251_22591);
a__13971__auto__.push(arg__13972__auto___22592);

var G__22593 = seq__20248_22588;
var G__22594 = chunk__20249_22589;
var G__22595 = count__20250_22590;
var G__22596 = (i__20251_22591 + (1));
seq__20248_22588 = G__22593;
chunk__20249_22589 = G__22594;
count__20250_22590 = G__22595;
i__20251_22591 = G__22596;
continue;
} else {
var temp__4126__auto___22597 = cljs.core.seq.call(null,seq__20248_22588);
if(temp__4126__auto___22597){
var seq__20248_22598__$1 = temp__4126__auto___22597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20248_22598__$1)){
var c__8817__auto___22599 = cljs.core.chunk_first.call(null,seq__20248_22598__$1);
var G__22600 = cljs.core.chunk_rest.call(null,seq__20248_22598__$1);
var G__22601 = c__8817__auto___22599;
var G__22602 = cljs.core.count.call(null,c__8817__auto___22599);
var G__22603 = (0);
seq__20248_22588 = G__22600;
chunk__20249_22589 = G__22601;
count__20250_22590 = G__22602;
i__20251_22591 = G__22603;
continue;
} else {
var arg__13972__auto___22604 = cljs.core.first.call(null,seq__20248_22598__$1);
a__13971__auto__.push(arg__13972__auto___22604);

var G__22605 = cljs.core.next.call(null,seq__20248_22598__$1);
var G__22606 = null;
var G__22607 = (0);
var G__22608 = (0);
seq__20248_22588 = G__22605;
chunk__20249_22589 = G__22606;
count__20250_22590 = G__22607;
i__20251_22591 = G__22608;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__13971__auto__);
};
var thead = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return thead__delegate.call(this,args__13970__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__22609){
var args__13970__auto__ = cljs.core.seq(arglist__22609);
return thead__delegate(args__13970__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20256_22610 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20257_22611 = null;
var count__20258_22612 = (0);
var i__20259_22613 = (0);
while(true){
if((i__20259_22613 < count__20258_22612)){
var arg__13972__auto___22614 = cljs.core._nth.call(null,chunk__20257_22611,i__20259_22613);
a__13971__auto__.push(arg__13972__auto___22614);

var G__22615 = seq__20256_22610;
var G__22616 = chunk__20257_22611;
var G__22617 = count__20258_22612;
var G__22618 = (i__20259_22613 + (1));
seq__20256_22610 = G__22615;
chunk__20257_22611 = G__22616;
count__20258_22612 = G__22617;
i__20259_22613 = G__22618;
continue;
} else {
var temp__4126__auto___22619 = cljs.core.seq.call(null,seq__20256_22610);
if(temp__4126__auto___22619){
var seq__20256_22620__$1 = temp__4126__auto___22619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20256_22620__$1)){
var c__8817__auto___22621 = cljs.core.chunk_first.call(null,seq__20256_22620__$1);
var G__22622 = cljs.core.chunk_rest.call(null,seq__20256_22620__$1);
var G__22623 = c__8817__auto___22621;
var G__22624 = cljs.core.count.call(null,c__8817__auto___22621);
var G__22625 = (0);
seq__20256_22610 = G__22622;
chunk__20257_22611 = G__22623;
count__20258_22612 = G__22624;
i__20259_22613 = G__22625;
continue;
} else {
var arg__13972__auto___22626 = cljs.core.first.call(null,seq__20256_22620__$1);
a__13971__auto__.push(arg__13972__auto___22626);

var G__22627 = cljs.core.next.call(null,seq__20256_22620__$1);
var G__22628 = null;
var G__22629 = (0);
var G__22630 = (0);
seq__20256_22610 = G__22627;
chunk__20257_22611 = G__22628;
count__20258_22612 = G__22629;
i__20259_22613 = G__22630;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__13971__auto__);
};
var time = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return time__delegate.call(this,args__13970__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__22631){
var args__13970__auto__ = cljs.core.seq(arglist__22631);
return time__delegate(args__13970__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20264_22632 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20265_22633 = null;
var count__20266_22634 = (0);
var i__20267_22635 = (0);
while(true){
if((i__20267_22635 < count__20266_22634)){
var arg__13972__auto___22636 = cljs.core._nth.call(null,chunk__20265_22633,i__20267_22635);
a__13971__auto__.push(arg__13972__auto___22636);

var G__22637 = seq__20264_22632;
var G__22638 = chunk__20265_22633;
var G__22639 = count__20266_22634;
var G__22640 = (i__20267_22635 + (1));
seq__20264_22632 = G__22637;
chunk__20265_22633 = G__22638;
count__20266_22634 = G__22639;
i__20267_22635 = G__22640;
continue;
} else {
var temp__4126__auto___22641 = cljs.core.seq.call(null,seq__20264_22632);
if(temp__4126__auto___22641){
var seq__20264_22642__$1 = temp__4126__auto___22641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20264_22642__$1)){
var c__8817__auto___22643 = cljs.core.chunk_first.call(null,seq__20264_22642__$1);
var G__22644 = cljs.core.chunk_rest.call(null,seq__20264_22642__$1);
var G__22645 = c__8817__auto___22643;
var G__22646 = cljs.core.count.call(null,c__8817__auto___22643);
var G__22647 = (0);
seq__20264_22632 = G__22644;
chunk__20265_22633 = G__22645;
count__20266_22634 = G__22646;
i__20267_22635 = G__22647;
continue;
} else {
var arg__13972__auto___22648 = cljs.core.first.call(null,seq__20264_22642__$1);
a__13971__auto__.push(arg__13972__auto___22648);

var G__22649 = cljs.core.next.call(null,seq__20264_22642__$1);
var G__22650 = null;
var G__22651 = (0);
var G__22652 = (0);
seq__20264_22632 = G__22649;
chunk__20265_22633 = G__22650;
count__20266_22634 = G__22651;
i__20267_22635 = G__22652;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__13971__auto__);
};
var title = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return title__delegate.call(this,args__13970__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__22653){
var args__13970__auto__ = cljs.core.seq(arglist__22653);
return title__delegate(args__13970__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20272_22654 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20273_22655 = null;
var count__20274_22656 = (0);
var i__20275_22657 = (0);
while(true){
if((i__20275_22657 < count__20274_22656)){
var arg__13972__auto___22658 = cljs.core._nth.call(null,chunk__20273_22655,i__20275_22657);
a__13971__auto__.push(arg__13972__auto___22658);

var G__22659 = seq__20272_22654;
var G__22660 = chunk__20273_22655;
var G__22661 = count__20274_22656;
var G__22662 = (i__20275_22657 + (1));
seq__20272_22654 = G__22659;
chunk__20273_22655 = G__22660;
count__20274_22656 = G__22661;
i__20275_22657 = G__22662;
continue;
} else {
var temp__4126__auto___22663 = cljs.core.seq.call(null,seq__20272_22654);
if(temp__4126__auto___22663){
var seq__20272_22664__$1 = temp__4126__auto___22663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20272_22664__$1)){
var c__8817__auto___22665 = cljs.core.chunk_first.call(null,seq__20272_22664__$1);
var G__22666 = cljs.core.chunk_rest.call(null,seq__20272_22664__$1);
var G__22667 = c__8817__auto___22665;
var G__22668 = cljs.core.count.call(null,c__8817__auto___22665);
var G__22669 = (0);
seq__20272_22654 = G__22666;
chunk__20273_22655 = G__22667;
count__20274_22656 = G__22668;
i__20275_22657 = G__22669;
continue;
} else {
var arg__13972__auto___22670 = cljs.core.first.call(null,seq__20272_22664__$1);
a__13971__auto__.push(arg__13972__auto___22670);

var G__22671 = cljs.core.next.call(null,seq__20272_22664__$1);
var G__22672 = null;
var G__22673 = (0);
var G__22674 = (0);
seq__20272_22654 = G__22671;
chunk__20273_22655 = G__22672;
count__20274_22656 = G__22673;
i__20275_22657 = G__22674;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__13971__auto__);
};
var tr = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return tr__delegate.call(this,args__13970__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__22675){
var args__13970__auto__ = cljs.core.seq(arglist__22675);
return tr__delegate(args__13970__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20280_22676 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20281_22677 = null;
var count__20282_22678 = (0);
var i__20283_22679 = (0);
while(true){
if((i__20283_22679 < count__20282_22678)){
var arg__13972__auto___22680 = cljs.core._nth.call(null,chunk__20281_22677,i__20283_22679);
a__13971__auto__.push(arg__13972__auto___22680);

var G__22681 = seq__20280_22676;
var G__22682 = chunk__20281_22677;
var G__22683 = count__20282_22678;
var G__22684 = (i__20283_22679 + (1));
seq__20280_22676 = G__22681;
chunk__20281_22677 = G__22682;
count__20282_22678 = G__22683;
i__20283_22679 = G__22684;
continue;
} else {
var temp__4126__auto___22685 = cljs.core.seq.call(null,seq__20280_22676);
if(temp__4126__auto___22685){
var seq__20280_22686__$1 = temp__4126__auto___22685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20280_22686__$1)){
var c__8817__auto___22687 = cljs.core.chunk_first.call(null,seq__20280_22686__$1);
var G__22688 = cljs.core.chunk_rest.call(null,seq__20280_22686__$1);
var G__22689 = c__8817__auto___22687;
var G__22690 = cljs.core.count.call(null,c__8817__auto___22687);
var G__22691 = (0);
seq__20280_22676 = G__22688;
chunk__20281_22677 = G__22689;
count__20282_22678 = G__22690;
i__20283_22679 = G__22691;
continue;
} else {
var arg__13972__auto___22692 = cljs.core.first.call(null,seq__20280_22686__$1);
a__13971__auto__.push(arg__13972__auto___22692);

var G__22693 = cljs.core.next.call(null,seq__20280_22686__$1);
var G__22694 = null;
var G__22695 = (0);
var G__22696 = (0);
seq__20280_22676 = G__22693;
chunk__20281_22677 = G__22694;
count__20282_22678 = G__22695;
i__20283_22679 = G__22696;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__13971__auto__);
};
var track = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return track__delegate.call(this,args__13970__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__22697){
var args__13970__auto__ = cljs.core.seq(arglist__22697);
return track__delegate(args__13970__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20288_22698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20289_22699 = null;
var count__20290_22700 = (0);
var i__20291_22701 = (0);
while(true){
if((i__20291_22701 < count__20290_22700)){
var arg__13972__auto___22702 = cljs.core._nth.call(null,chunk__20289_22699,i__20291_22701);
a__13971__auto__.push(arg__13972__auto___22702);

var G__22703 = seq__20288_22698;
var G__22704 = chunk__20289_22699;
var G__22705 = count__20290_22700;
var G__22706 = (i__20291_22701 + (1));
seq__20288_22698 = G__22703;
chunk__20289_22699 = G__22704;
count__20290_22700 = G__22705;
i__20291_22701 = G__22706;
continue;
} else {
var temp__4126__auto___22707 = cljs.core.seq.call(null,seq__20288_22698);
if(temp__4126__auto___22707){
var seq__20288_22708__$1 = temp__4126__auto___22707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20288_22708__$1)){
var c__8817__auto___22709 = cljs.core.chunk_first.call(null,seq__20288_22708__$1);
var G__22710 = cljs.core.chunk_rest.call(null,seq__20288_22708__$1);
var G__22711 = c__8817__auto___22709;
var G__22712 = cljs.core.count.call(null,c__8817__auto___22709);
var G__22713 = (0);
seq__20288_22698 = G__22710;
chunk__20289_22699 = G__22711;
count__20290_22700 = G__22712;
i__20291_22701 = G__22713;
continue;
} else {
var arg__13972__auto___22714 = cljs.core.first.call(null,seq__20288_22708__$1);
a__13971__auto__.push(arg__13972__auto___22714);

var G__22715 = cljs.core.next.call(null,seq__20288_22708__$1);
var G__22716 = null;
var G__22717 = (0);
var G__22718 = (0);
seq__20288_22698 = G__22715;
chunk__20289_22699 = G__22716;
count__20290_22700 = G__22717;
i__20291_22701 = G__22718;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__13971__auto__);
};
var u = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return u__delegate.call(this,args__13970__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__22719){
var args__13970__auto__ = cljs.core.seq(arglist__22719);
return u__delegate(args__13970__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20296_22720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20297_22721 = null;
var count__20298_22722 = (0);
var i__20299_22723 = (0);
while(true){
if((i__20299_22723 < count__20298_22722)){
var arg__13972__auto___22724 = cljs.core._nth.call(null,chunk__20297_22721,i__20299_22723);
a__13971__auto__.push(arg__13972__auto___22724);

var G__22725 = seq__20296_22720;
var G__22726 = chunk__20297_22721;
var G__22727 = count__20298_22722;
var G__22728 = (i__20299_22723 + (1));
seq__20296_22720 = G__22725;
chunk__20297_22721 = G__22726;
count__20298_22722 = G__22727;
i__20299_22723 = G__22728;
continue;
} else {
var temp__4126__auto___22729 = cljs.core.seq.call(null,seq__20296_22720);
if(temp__4126__auto___22729){
var seq__20296_22730__$1 = temp__4126__auto___22729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20296_22730__$1)){
var c__8817__auto___22731 = cljs.core.chunk_first.call(null,seq__20296_22730__$1);
var G__22732 = cljs.core.chunk_rest.call(null,seq__20296_22730__$1);
var G__22733 = c__8817__auto___22731;
var G__22734 = cljs.core.count.call(null,c__8817__auto___22731);
var G__22735 = (0);
seq__20296_22720 = G__22732;
chunk__20297_22721 = G__22733;
count__20298_22722 = G__22734;
i__20299_22723 = G__22735;
continue;
} else {
var arg__13972__auto___22736 = cljs.core.first.call(null,seq__20296_22730__$1);
a__13971__auto__.push(arg__13972__auto___22736);

var G__22737 = cljs.core.next.call(null,seq__20296_22730__$1);
var G__22738 = null;
var G__22739 = (0);
var G__22740 = (0);
seq__20296_22720 = G__22737;
chunk__20297_22721 = G__22738;
count__20298_22722 = G__22739;
i__20299_22723 = G__22740;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__13971__auto__);
};
var ul = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ul__delegate.call(this,args__13970__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__22741){
var args__13970__auto__ = cljs.core.seq(arglist__22741);
return ul__delegate(args__13970__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20304_22742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20305_22743 = null;
var count__20306_22744 = (0);
var i__20307_22745 = (0);
while(true){
if((i__20307_22745 < count__20306_22744)){
var arg__13972__auto___22746 = cljs.core._nth.call(null,chunk__20305_22743,i__20307_22745);
a__13971__auto__.push(arg__13972__auto___22746);

var G__22747 = seq__20304_22742;
var G__22748 = chunk__20305_22743;
var G__22749 = count__20306_22744;
var G__22750 = (i__20307_22745 + (1));
seq__20304_22742 = G__22747;
chunk__20305_22743 = G__22748;
count__20306_22744 = G__22749;
i__20307_22745 = G__22750;
continue;
} else {
var temp__4126__auto___22751 = cljs.core.seq.call(null,seq__20304_22742);
if(temp__4126__auto___22751){
var seq__20304_22752__$1 = temp__4126__auto___22751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20304_22752__$1)){
var c__8817__auto___22753 = cljs.core.chunk_first.call(null,seq__20304_22752__$1);
var G__22754 = cljs.core.chunk_rest.call(null,seq__20304_22752__$1);
var G__22755 = c__8817__auto___22753;
var G__22756 = cljs.core.count.call(null,c__8817__auto___22753);
var G__22757 = (0);
seq__20304_22742 = G__22754;
chunk__20305_22743 = G__22755;
count__20306_22744 = G__22756;
i__20307_22745 = G__22757;
continue;
} else {
var arg__13972__auto___22758 = cljs.core.first.call(null,seq__20304_22752__$1);
a__13971__auto__.push(arg__13972__auto___22758);

var G__22759 = cljs.core.next.call(null,seq__20304_22752__$1);
var G__22760 = null;
var G__22761 = (0);
var G__22762 = (0);
seq__20304_22742 = G__22759;
chunk__20305_22743 = G__22760;
count__20306_22744 = G__22761;
i__20307_22745 = G__22762;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__13971__auto__);
};
var var$ = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return var$__delegate.call(this,args__13970__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__22763){
var args__13970__auto__ = cljs.core.seq(arglist__22763);
return var$__delegate(args__13970__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20312_22764 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20313_22765 = null;
var count__20314_22766 = (0);
var i__20315_22767 = (0);
while(true){
if((i__20315_22767 < count__20314_22766)){
var arg__13972__auto___22768 = cljs.core._nth.call(null,chunk__20313_22765,i__20315_22767);
a__13971__auto__.push(arg__13972__auto___22768);

var G__22769 = seq__20312_22764;
var G__22770 = chunk__20313_22765;
var G__22771 = count__20314_22766;
var G__22772 = (i__20315_22767 + (1));
seq__20312_22764 = G__22769;
chunk__20313_22765 = G__22770;
count__20314_22766 = G__22771;
i__20315_22767 = G__22772;
continue;
} else {
var temp__4126__auto___22773 = cljs.core.seq.call(null,seq__20312_22764);
if(temp__4126__auto___22773){
var seq__20312_22774__$1 = temp__4126__auto___22773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20312_22774__$1)){
var c__8817__auto___22775 = cljs.core.chunk_first.call(null,seq__20312_22774__$1);
var G__22776 = cljs.core.chunk_rest.call(null,seq__20312_22774__$1);
var G__22777 = c__8817__auto___22775;
var G__22778 = cljs.core.count.call(null,c__8817__auto___22775);
var G__22779 = (0);
seq__20312_22764 = G__22776;
chunk__20313_22765 = G__22777;
count__20314_22766 = G__22778;
i__20315_22767 = G__22779;
continue;
} else {
var arg__13972__auto___22780 = cljs.core.first.call(null,seq__20312_22774__$1);
a__13971__auto__.push(arg__13972__auto___22780);

var G__22781 = cljs.core.next.call(null,seq__20312_22774__$1);
var G__22782 = null;
var G__22783 = (0);
var G__22784 = (0);
seq__20312_22764 = G__22781;
chunk__20313_22765 = G__22782;
count__20314_22766 = G__22783;
i__20315_22767 = G__22784;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__13971__auto__);
};
var video = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return video__delegate.call(this,args__13970__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__22785){
var args__13970__auto__ = cljs.core.seq(arglist__22785);
return video__delegate(args__13970__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20320_22786 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20321_22787 = null;
var count__20322_22788 = (0);
var i__20323_22789 = (0);
while(true){
if((i__20323_22789 < count__20322_22788)){
var arg__13972__auto___22790 = cljs.core._nth.call(null,chunk__20321_22787,i__20323_22789);
a__13971__auto__.push(arg__13972__auto___22790);

var G__22791 = seq__20320_22786;
var G__22792 = chunk__20321_22787;
var G__22793 = count__20322_22788;
var G__22794 = (i__20323_22789 + (1));
seq__20320_22786 = G__22791;
chunk__20321_22787 = G__22792;
count__20322_22788 = G__22793;
i__20323_22789 = G__22794;
continue;
} else {
var temp__4126__auto___22795 = cljs.core.seq.call(null,seq__20320_22786);
if(temp__4126__auto___22795){
var seq__20320_22796__$1 = temp__4126__auto___22795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20320_22796__$1)){
var c__8817__auto___22797 = cljs.core.chunk_first.call(null,seq__20320_22796__$1);
var G__22798 = cljs.core.chunk_rest.call(null,seq__20320_22796__$1);
var G__22799 = c__8817__auto___22797;
var G__22800 = cljs.core.count.call(null,c__8817__auto___22797);
var G__22801 = (0);
seq__20320_22786 = G__22798;
chunk__20321_22787 = G__22799;
count__20322_22788 = G__22800;
i__20323_22789 = G__22801;
continue;
} else {
var arg__13972__auto___22802 = cljs.core.first.call(null,seq__20320_22796__$1);
a__13971__auto__.push(arg__13972__auto___22802);

var G__22803 = cljs.core.next.call(null,seq__20320_22796__$1);
var G__22804 = null;
var G__22805 = (0);
var G__22806 = (0);
seq__20320_22786 = G__22803;
chunk__20321_22787 = G__22804;
count__20322_22788 = G__22805;
i__20323_22789 = G__22806;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__13971__auto__);
};
var wbr = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return wbr__delegate.call(this,args__13970__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__22807){
var args__13970__auto__ = cljs.core.seq(arglist__22807);
return wbr__delegate(args__13970__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20328_22808 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20329_22809 = null;
var count__20330_22810 = (0);
var i__20331_22811 = (0);
while(true){
if((i__20331_22811 < count__20330_22810)){
var arg__13972__auto___22812 = cljs.core._nth.call(null,chunk__20329_22809,i__20331_22811);
a__13971__auto__.push(arg__13972__auto___22812);

var G__22813 = seq__20328_22808;
var G__22814 = chunk__20329_22809;
var G__22815 = count__20330_22810;
var G__22816 = (i__20331_22811 + (1));
seq__20328_22808 = G__22813;
chunk__20329_22809 = G__22814;
count__20330_22810 = G__22815;
i__20331_22811 = G__22816;
continue;
} else {
var temp__4126__auto___22817 = cljs.core.seq.call(null,seq__20328_22808);
if(temp__4126__auto___22817){
var seq__20328_22818__$1 = temp__4126__auto___22817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20328_22818__$1)){
var c__8817__auto___22819 = cljs.core.chunk_first.call(null,seq__20328_22818__$1);
var G__22820 = cljs.core.chunk_rest.call(null,seq__20328_22818__$1);
var G__22821 = c__8817__auto___22819;
var G__22822 = cljs.core.count.call(null,c__8817__auto___22819);
var G__22823 = (0);
seq__20328_22808 = G__22820;
chunk__20329_22809 = G__22821;
count__20330_22810 = G__22822;
i__20331_22811 = G__22823;
continue;
} else {
var arg__13972__auto___22824 = cljs.core.first.call(null,seq__20328_22818__$1);
a__13971__auto__.push(arg__13972__auto___22824);

var G__22825 = cljs.core.next.call(null,seq__20328_22818__$1);
var G__22826 = null;
var G__22827 = (0);
var G__22828 = (0);
seq__20328_22808 = G__22825;
chunk__20329_22809 = G__22826;
count__20330_22810 = G__22827;
i__20331_22811 = G__22828;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__13971__auto__);
};
var circle = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return circle__delegate.call(this,args__13970__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__22829){
var args__13970__auto__ = cljs.core.seq(arglist__22829);
return circle__delegate(args__13970__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20336_22830 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20337_22831 = null;
var count__20338_22832 = (0);
var i__20339_22833 = (0);
while(true){
if((i__20339_22833 < count__20338_22832)){
var arg__13972__auto___22834 = cljs.core._nth.call(null,chunk__20337_22831,i__20339_22833);
a__13971__auto__.push(arg__13972__auto___22834);

var G__22835 = seq__20336_22830;
var G__22836 = chunk__20337_22831;
var G__22837 = count__20338_22832;
var G__22838 = (i__20339_22833 + (1));
seq__20336_22830 = G__22835;
chunk__20337_22831 = G__22836;
count__20338_22832 = G__22837;
i__20339_22833 = G__22838;
continue;
} else {
var temp__4126__auto___22839 = cljs.core.seq.call(null,seq__20336_22830);
if(temp__4126__auto___22839){
var seq__20336_22840__$1 = temp__4126__auto___22839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20336_22840__$1)){
var c__8817__auto___22841 = cljs.core.chunk_first.call(null,seq__20336_22840__$1);
var G__22842 = cljs.core.chunk_rest.call(null,seq__20336_22840__$1);
var G__22843 = c__8817__auto___22841;
var G__22844 = cljs.core.count.call(null,c__8817__auto___22841);
var G__22845 = (0);
seq__20336_22830 = G__22842;
chunk__20337_22831 = G__22843;
count__20338_22832 = G__22844;
i__20339_22833 = G__22845;
continue;
} else {
var arg__13972__auto___22846 = cljs.core.first.call(null,seq__20336_22840__$1);
a__13971__auto__.push(arg__13972__auto___22846);

var G__22847 = cljs.core.next.call(null,seq__20336_22840__$1);
var G__22848 = null;
var G__22849 = (0);
var G__22850 = (0);
seq__20336_22830 = G__22847;
chunk__20337_22831 = G__22848;
count__20338_22832 = G__22849;
i__20339_22833 = G__22850;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__13971__auto__);
};
var g = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return g__delegate.call(this,args__13970__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__22851){
var args__13970__auto__ = cljs.core.seq(arglist__22851);
return g__delegate(args__13970__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20344_22852 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20345_22853 = null;
var count__20346_22854 = (0);
var i__20347_22855 = (0);
while(true){
if((i__20347_22855 < count__20346_22854)){
var arg__13972__auto___22856 = cljs.core._nth.call(null,chunk__20345_22853,i__20347_22855);
a__13971__auto__.push(arg__13972__auto___22856);

var G__22857 = seq__20344_22852;
var G__22858 = chunk__20345_22853;
var G__22859 = count__20346_22854;
var G__22860 = (i__20347_22855 + (1));
seq__20344_22852 = G__22857;
chunk__20345_22853 = G__22858;
count__20346_22854 = G__22859;
i__20347_22855 = G__22860;
continue;
} else {
var temp__4126__auto___22861 = cljs.core.seq.call(null,seq__20344_22852);
if(temp__4126__auto___22861){
var seq__20344_22862__$1 = temp__4126__auto___22861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20344_22862__$1)){
var c__8817__auto___22863 = cljs.core.chunk_first.call(null,seq__20344_22862__$1);
var G__22864 = cljs.core.chunk_rest.call(null,seq__20344_22862__$1);
var G__22865 = c__8817__auto___22863;
var G__22866 = cljs.core.count.call(null,c__8817__auto___22863);
var G__22867 = (0);
seq__20344_22852 = G__22864;
chunk__20345_22853 = G__22865;
count__20346_22854 = G__22866;
i__20347_22855 = G__22867;
continue;
} else {
var arg__13972__auto___22868 = cljs.core.first.call(null,seq__20344_22862__$1);
a__13971__auto__.push(arg__13972__auto___22868);

var G__22869 = cljs.core.next.call(null,seq__20344_22862__$1);
var G__22870 = null;
var G__22871 = (0);
var G__22872 = (0);
seq__20344_22852 = G__22869;
chunk__20345_22853 = G__22870;
count__20346_22854 = G__22871;
i__20347_22855 = G__22872;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__13971__auto__);
};
var line = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return line__delegate.call(this,args__13970__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__22873){
var args__13970__auto__ = cljs.core.seq(arglist__22873);
return line__delegate(args__13970__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20352_22874 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20353_22875 = null;
var count__20354_22876 = (0);
var i__20355_22877 = (0);
while(true){
if((i__20355_22877 < count__20354_22876)){
var arg__13972__auto___22878 = cljs.core._nth.call(null,chunk__20353_22875,i__20355_22877);
a__13971__auto__.push(arg__13972__auto___22878);

var G__22879 = seq__20352_22874;
var G__22880 = chunk__20353_22875;
var G__22881 = count__20354_22876;
var G__22882 = (i__20355_22877 + (1));
seq__20352_22874 = G__22879;
chunk__20353_22875 = G__22880;
count__20354_22876 = G__22881;
i__20355_22877 = G__22882;
continue;
} else {
var temp__4126__auto___22883 = cljs.core.seq.call(null,seq__20352_22874);
if(temp__4126__auto___22883){
var seq__20352_22884__$1 = temp__4126__auto___22883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20352_22884__$1)){
var c__8817__auto___22885 = cljs.core.chunk_first.call(null,seq__20352_22884__$1);
var G__22886 = cljs.core.chunk_rest.call(null,seq__20352_22884__$1);
var G__22887 = c__8817__auto___22885;
var G__22888 = cljs.core.count.call(null,c__8817__auto___22885);
var G__22889 = (0);
seq__20352_22874 = G__22886;
chunk__20353_22875 = G__22887;
count__20354_22876 = G__22888;
i__20355_22877 = G__22889;
continue;
} else {
var arg__13972__auto___22890 = cljs.core.first.call(null,seq__20352_22884__$1);
a__13971__auto__.push(arg__13972__auto___22890);

var G__22891 = cljs.core.next.call(null,seq__20352_22884__$1);
var G__22892 = null;
var G__22893 = (0);
var G__22894 = (0);
seq__20352_22874 = G__22891;
chunk__20353_22875 = G__22892;
count__20354_22876 = G__22893;
i__20355_22877 = G__22894;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__13971__auto__);
};
var path = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return path__delegate.call(this,args__13970__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__22895){
var args__13970__auto__ = cljs.core.seq(arglist__22895);
return path__delegate(args__13970__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20360_22896 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20361_22897 = null;
var count__20362_22898 = (0);
var i__20363_22899 = (0);
while(true){
if((i__20363_22899 < count__20362_22898)){
var arg__13972__auto___22900 = cljs.core._nth.call(null,chunk__20361_22897,i__20363_22899);
a__13971__auto__.push(arg__13972__auto___22900);

var G__22901 = seq__20360_22896;
var G__22902 = chunk__20361_22897;
var G__22903 = count__20362_22898;
var G__22904 = (i__20363_22899 + (1));
seq__20360_22896 = G__22901;
chunk__20361_22897 = G__22902;
count__20362_22898 = G__22903;
i__20363_22899 = G__22904;
continue;
} else {
var temp__4126__auto___22905 = cljs.core.seq.call(null,seq__20360_22896);
if(temp__4126__auto___22905){
var seq__20360_22906__$1 = temp__4126__auto___22905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20360_22906__$1)){
var c__8817__auto___22907 = cljs.core.chunk_first.call(null,seq__20360_22906__$1);
var G__22908 = cljs.core.chunk_rest.call(null,seq__20360_22906__$1);
var G__22909 = c__8817__auto___22907;
var G__22910 = cljs.core.count.call(null,c__8817__auto___22907);
var G__22911 = (0);
seq__20360_22896 = G__22908;
chunk__20361_22897 = G__22909;
count__20362_22898 = G__22910;
i__20363_22899 = G__22911;
continue;
} else {
var arg__13972__auto___22912 = cljs.core.first.call(null,seq__20360_22906__$1);
a__13971__auto__.push(arg__13972__auto___22912);

var G__22913 = cljs.core.next.call(null,seq__20360_22906__$1);
var G__22914 = null;
var G__22915 = (0);
var G__22916 = (0);
seq__20360_22896 = G__22913;
chunk__20361_22897 = G__22914;
count__20362_22898 = G__22915;
i__20363_22899 = G__22916;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__13971__auto__);
};
var polygon = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return polygon__delegate.call(this,args__13970__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__22917){
var args__13970__auto__ = cljs.core.seq(arglist__22917);
return polygon__delegate(args__13970__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20368_22918 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20369_22919 = null;
var count__20370_22920 = (0);
var i__20371_22921 = (0);
while(true){
if((i__20371_22921 < count__20370_22920)){
var arg__13972__auto___22922 = cljs.core._nth.call(null,chunk__20369_22919,i__20371_22921);
a__13971__auto__.push(arg__13972__auto___22922);

var G__22923 = seq__20368_22918;
var G__22924 = chunk__20369_22919;
var G__22925 = count__20370_22920;
var G__22926 = (i__20371_22921 + (1));
seq__20368_22918 = G__22923;
chunk__20369_22919 = G__22924;
count__20370_22920 = G__22925;
i__20371_22921 = G__22926;
continue;
} else {
var temp__4126__auto___22927 = cljs.core.seq.call(null,seq__20368_22918);
if(temp__4126__auto___22927){
var seq__20368_22928__$1 = temp__4126__auto___22927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20368_22928__$1)){
var c__8817__auto___22929 = cljs.core.chunk_first.call(null,seq__20368_22928__$1);
var G__22930 = cljs.core.chunk_rest.call(null,seq__20368_22928__$1);
var G__22931 = c__8817__auto___22929;
var G__22932 = cljs.core.count.call(null,c__8817__auto___22929);
var G__22933 = (0);
seq__20368_22918 = G__22930;
chunk__20369_22919 = G__22931;
count__20370_22920 = G__22932;
i__20371_22921 = G__22933;
continue;
} else {
var arg__13972__auto___22934 = cljs.core.first.call(null,seq__20368_22928__$1);
a__13971__auto__.push(arg__13972__auto___22934);

var G__22935 = cljs.core.next.call(null,seq__20368_22928__$1);
var G__22936 = null;
var G__22937 = (0);
var G__22938 = (0);
seq__20368_22918 = G__22935;
chunk__20369_22919 = G__22936;
count__20370_22920 = G__22937;
i__20371_22921 = G__22938;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__13971__auto__);
};
var polyline = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return polyline__delegate.call(this,args__13970__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__22939){
var args__13970__auto__ = cljs.core.seq(arglist__22939);
return polyline__delegate(args__13970__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20376_22940 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20377_22941 = null;
var count__20378_22942 = (0);
var i__20379_22943 = (0);
while(true){
if((i__20379_22943 < count__20378_22942)){
var arg__13972__auto___22944 = cljs.core._nth.call(null,chunk__20377_22941,i__20379_22943);
a__13971__auto__.push(arg__13972__auto___22944);

var G__22945 = seq__20376_22940;
var G__22946 = chunk__20377_22941;
var G__22947 = count__20378_22942;
var G__22948 = (i__20379_22943 + (1));
seq__20376_22940 = G__22945;
chunk__20377_22941 = G__22946;
count__20378_22942 = G__22947;
i__20379_22943 = G__22948;
continue;
} else {
var temp__4126__auto___22949 = cljs.core.seq.call(null,seq__20376_22940);
if(temp__4126__auto___22949){
var seq__20376_22950__$1 = temp__4126__auto___22949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20376_22950__$1)){
var c__8817__auto___22951 = cljs.core.chunk_first.call(null,seq__20376_22950__$1);
var G__22952 = cljs.core.chunk_rest.call(null,seq__20376_22950__$1);
var G__22953 = c__8817__auto___22951;
var G__22954 = cljs.core.count.call(null,c__8817__auto___22951);
var G__22955 = (0);
seq__20376_22940 = G__22952;
chunk__20377_22941 = G__22953;
count__20378_22942 = G__22954;
i__20379_22943 = G__22955;
continue;
} else {
var arg__13972__auto___22956 = cljs.core.first.call(null,seq__20376_22950__$1);
a__13971__auto__.push(arg__13972__auto___22956);

var G__22957 = cljs.core.next.call(null,seq__20376_22950__$1);
var G__22958 = null;
var G__22959 = (0);
var G__22960 = (0);
seq__20376_22940 = G__22957;
chunk__20377_22941 = G__22958;
count__20378_22942 = G__22959;
i__20379_22943 = G__22960;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__13971__auto__);
};
var rect = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return rect__delegate.call(this,args__13970__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__22961){
var args__13970__auto__ = cljs.core.seq(arglist__22961);
return rect__delegate(args__13970__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__20384_22962 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__20385_22963 = null;
var count__20386_22964 = (0);
var i__20387_22965 = (0);
while(true){
if((i__20387_22965 < count__20386_22964)){
var arg__13972__auto___22966 = cljs.core._nth.call(null,chunk__20385_22963,i__20387_22965);
a__13971__auto__.push(arg__13972__auto___22966);

var G__22967 = seq__20384_22962;
var G__22968 = chunk__20385_22963;
var G__22969 = count__20386_22964;
var G__22970 = (i__20387_22965 + (1));
seq__20384_22962 = G__22967;
chunk__20385_22963 = G__22968;
count__20386_22964 = G__22969;
i__20387_22965 = G__22970;
continue;
} else {
var temp__4126__auto___22971 = cljs.core.seq.call(null,seq__20384_22962);
if(temp__4126__auto___22971){
var seq__20384_22972__$1 = temp__4126__auto___22971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20384_22972__$1)){
var c__8817__auto___22973 = cljs.core.chunk_first.call(null,seq__20384_22972__$1);
var G__22974 = cljs.core.chunk_rest.call(null,seq__20384_22972__$1);
var G__22975 = c__8817__auto___22973;
var G__22976 = cljs.core.count.call(null,c__8817__auto___22973);
var G__22977 = (0);
seq__20384_22962 = G__22974;
chunk__20385_22963 = G__22975;
count__20386_22964 = G__22976;
i__20387_22965 = G__22977;
continue;
} else {
var arg__13972__auto___22978 = cljs.core.first.call(null,seq__20384_22972__$1);
a__13971__auto__.push(arg__13972__auto___22978);

var G__22979 = cljs.core.next.call(null,seq__20384_22972__$1);
var G__22980 = null;
var G__22981 = (0);
var G__22982 = (0);
seq__20384_22962 = G__22979;
chunk__20385_22963 = G__22980;
count__20386_22964 = G__22981;
i__20387_22965 = G__22982;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__13971__auto__);
};
var svg = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return svg__delegate.call(this,args__13970__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__22983){
var args__13970__auto__ = cljs.core.seq(arglist__22983);
return svg__delegate(args__13970__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__13970__auto__){

var a__13971__auto__ = [];
a__13971__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13970__auto__)));

var seq__19696_22984 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13970__auto__));
var chunk__19697_22985 = null;
var count__19698_22986 = (0);
var i__19699_22987 = (0);
while(true){
if((i__19699_22987 < count__19698_22986)){
var arg__13972__auto___22988 = cljs.core._nth.call(null,chunk__19697_22985,i__19699_22987);
a__13971__auto__.push(arg__13972__auto___22988);

var G__22989 = seq__19696_22984;
var G__22990 = chunk__19697_22985;
var G__22991 = count__19698_22986;
var G__22992 = (i__19699_22987 + (1));
seq__19696_22984 = G__22989;
chunk__19697_22985 = G__22990;
count__19698_22986 = G__22991;
i__19699_22987 = G__22992;
continue;
} else {
var temp__4126__auto___22993 = cljs.core.seq.call(null,seq__19696_22984);
if(temp__4126__auto___22993){
var seq__19696_22994__$1 = temp__4126__auto___22993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19696_22994__$1)){
var c__8817__auto___22995 = cljs.core.chunk_first.call(null,seq__19696_22994__$1);
var G__22996 = cljs.core.chunk_rest.call(null,seq__19696_22994__$1);
var G__22997 = c__8817__auto___22995;
var G__22998 = cljs.core.count.call(null,c__8817__auto___22995);
var G__22999 = (0);
seq__19696_22984 = G__22996;
chunk__19697_22985 = G__22997;
count__19698_22986 = G__22998;
i__19699_22987 = G__22999;
continue;
} else {
var arg__13972__auto___23000 = cljs.core.first.call(null,seq__19696_22994__$1);
a__13971__auto__.push(arg__13972__auto___23000);

var G__23001 = cljs.core.next.call(null,seq__19696_22994__$1);
var G__23002 = null;
var G__23003 = (0);
var G__23004 = (0);
seq__19696_22984 = G__23001;
chunk__19697_22985 = G__23002;
count__19698_22986 = G__23003;
i__19699_22987 = G__23004;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__13971__auto__);
};
var text = function (var_args){
var args__13970__auto__ = null;
if (arguments.length > 0) {
  args__13970__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return text__delegate.call(this,args__13970__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__23005){
var args__13970__auto__ = cljs.core.seq(arglist__23005);
return text__delegate(args__13970__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map