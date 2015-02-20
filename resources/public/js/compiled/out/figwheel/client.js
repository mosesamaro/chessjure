// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__16326,args){
var map__16328 = p__16326;
var map__16328__$1 = ((cljs.core.seq_QMARK_.call(null,map__16328))?cljs.core.apply.call(null,cljs.core.hash_map,map__16328):map__16328);
var debug = cljs.core.get.call(null,map__16328__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__16326,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__16326,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16329){
var p__16326 = cljs.core.first(arglist__16329);
var args = cljs.core.rest(arglist__16329);
return log__delegate(p__16326,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__16330){
var map__16332 = p__16330;
var map__16332__$1 = ((cljs.core.seq_QMARK_.call(null,map__16332))?cljs.core.apply.call(null,cljs.core.hash_map,map__16332):map__16332);
var websocket_url = cljs.core.get.call(null,map__16332__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__16333,callback){
var map__16335 = p__16333;
var map__16335__$1 = ((cljs.core.seq_QMARK_.call(null,map__16335))?cljs.core.apply.call(null,cljs.core.hash_map,map__16335):map__16335);
var msg = map__16335__$1;
var dependency_file = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__8030__auto__ = dependency_file;
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16335,map__16335__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16335,map__16335__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__16336,p__16337){
var map__16340 = p__16336;
var map__16340__$1 = ((cljs.core.seq_QMARK_.call(null,map__16340))?cljs.core.apply.call(null,cljs.core.hash_map,map__16340):map__16340);
var opts = map__16340__$1;
var url_rewriter = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__16341 = p__16337;
var map__16341__$1 = ((cljs.core.seq_QMARK_.call(null,map__16341))?cljs.core.apply.call(null,cljs.core.hash_map,map__16341):map__16341);
var d = map__16341__$1;
var file = cljs.core.get.call(null,map__16341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16342,p__16343){
var map__16385 = p__16342;
var map__16385__$1 = ((cljs.core.seq_QMARK_.call(null,map__16385))?cljs.core.apply.call(null,cljs.core.hash_map,map__16385):map__16385);
var opts = map__16385__$1;
var on_jsload = cljs.core.get.call(null,map__16385__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__16385__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__16386 = p__16343;
var map__16386__$1 = ((cljs.core.seq_QMARK_.call(null,map__16386))?cljs.core.apply.call(null,cljs.core.hash_map,map__16386):map__16386);
var files = cljs.core.get.call(null,map__16386__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files){
return (function (state_16409){
var state_val_16410 = (state_16409[(1)]);
if((state_val_16410 === (6))){
var inst_16391 = (state_16409[(7)]);
var inst_16400 = (state_16409[(2)]);
var inst_16401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16402 = [inst_16391];
var inst_16403 = (new cljs.core.PersistentVector(null,1,(5),inst_16401,inst_16402,null));
var inst_16404 = cljs.core.apply.call(null,on_jsload,inst_16403);
var state_16409__$1 = (function (){var statearr_16411 = state_16409;
(statearr_16411[(8)] = inst_16400);

return statearr_16411;
})();
var statearr_16412_16426 = state_16409__$1;
(statearr_16412_16426[(2)] = inst_16404);

(statearr_16412_16426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (5))){
var inst_16407 = (state_16409[(2)]);
var state_16409__$1 = state_16409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16409__$1,inst_16407);
} else {
if((state_val_16410 === (4))){
var state_16409__$1 = state_16409;
var statearr_16413_16427 = state_16409__$1;
(statearr_16413_16427[(2)] = null);

(statearr_16413_16427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (3))){
var inst_16391 = (state_16409[(7)]);
var inst_16394 = console.debug("Figwheel: loaded these files");
var inst_16395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16391);
var inst_16396 = cljs.core.prn_str.call(null,inst_16395);
var inst_16397 = console.log(inst_16396);
var inst_16398 = cljs.core.async.timeout.call(null,(10));
var state_16409__$1 = (function (){var statearr_16414 = state_16409;
(statearr_16414[(9)] = inst_16394);

(statearr_16414[(10)] = inst_16397);

return statearr_16414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16409__$1,(6),inst_16398);
} else {
if((state_val_16410 === (2))){
var inst_16391 = (state_16409[(7)]);
var inst_16391__$1 = (state_16409[(2)]);
var inst_16392 = cljs.core.not_empty.call(null,inst_16391__$1);
var state_16409__$1 = (function (){var statearr_16415 = state_16409;
(statearr_16415[(7)] = inst_16391__$1);

return statearr_16415;
})();
if(cljs.core.truth_(inst_16392)){
var statearr_16416_16428 = state_16409__$1;
(statearr_16416_16428[(1)] = (3));

} else {
var statearr_16417_16429 = state_16409__$1;
(statearr_16417_16429[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (1))){
var inst_16387 = before_jsload.call(null,files);
var inst_16388 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_16389 = figwheel.client.load_all_js_files.call(null,inst_16388);
var state_16409__$1 = (function (){var statearr_16418 = state_16409;
(statearr_16418[(11)] = inst_16387);

return statearr_16418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16409__$1,(2),inst_16389);
} else {
return null;
}
}
}
}
}
}
});})(c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files))
;
return ((function (switch__11250__auto__,c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_16422 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16422[(0)] = state_machine__11251__auto__);

(statearr_16422[(1)] = (1));

return statearr_16422;
});
var state_machine__11251__auto____1 = (function (state_16409){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_16409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e16423){if((e16423 instanceof Object)){
var ex__11254__auto__ = e16423;
var statearr_16424_16430 = state_16409;
(statearr_16424_16430[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16431 = state_16409;
state_16409 = G__16431;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_16409){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_16409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files))
})();
var state__11317__auto__ = (function (){var statearr_16425 = f__11316__auto__.call(null);
(statearr_16425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_16425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__,map__16385,map__16385__$1,opts,on_jsload,before_jsload,map__16386,map__16386__$1,files))
);

return c__11315__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16432,link_href){
var map__16434 = p__16432;
var map__16434__$1 = ((cljs.core.seq_QMARK_.call(null,map__16434))?cljs.core.apply.call(null,cljs.core.hash_map,map__16434):map__16434);
var request_url = cljs.core.get.call(null,map__16434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__,parent){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__,parent){
return (function (state_16455){
var state_val_16456 = (state_16455[(1)]);
if((state_val_16456 === (2))){
var inst_16452 = (state_16455[(2)]);
var inst_16453 = parent.removeChild(orig_link);
var state_16455__$1 = (function (){var statearr_16457 = state_16455;
(statearr_16457[(7)] = inst_16452);

return statearr_16457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16455__$1,inst_16453);
} else {
if((state_val_16456 === (1))){
var inst_16450 = cljs.core.async.timeout.call(null,(200));
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16455__$1,(2),inst_16450);
} else {
return null;
}
}
});})(c__11315__auto__,parent))
;
return ((function (switch__11250__auto__,c__11315__auto__,parent){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_16461 = [null,null,null,null,null,null,null,null];
(statearr_16461[(0)] = state_machine__11251__auto__);

(statearr_16461[(1)] = (1));

return statearr_16461;
});
var state_machine__11251__auto____1 = (function (state_16455){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_16455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e16462){if((e16462 instanceof Object)){
var ex__11254__auto__ = e16462;
var statearr_16463_16465 = state_16455;
(statearr_16463_16465[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16466 = state_16455;
state_16455 = G__16466;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__,parent))
})();
var state__11317__auto__ = (function (){var statearr_16464 = f__11316__auto__.call(null);
(statearr_16464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_16464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__,parent))
);

return c__11315__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__16467){
var map__16469 = p__16467;
var map__16469__$1 = ((cljs.core.seq_QMARK_.call(null,map__16469))?cljs.core.apply.call(null,cljs.core.hash_map,map__16469):map__16469);
var f_data = map__16469__$1;
var request_url = cljs.core.get.call(null,map__16469__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16470,files_msg){
var map__16492 = p__16470;
var map__16492__$1 = ((cljs.core.seq_QMARK_.call(null,map__16492))?cljs.core.apply.call(null,cljs.core.hash_map,map__16492):map__16492);
var opts = map__16492__$1;
var on_cssload = cljs.core.get.call(null,map__16492__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__16493_16513 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__16494_16514 = null;
var count__16495_16515 = (0);
var i__16496_16516 = (0);
while(true){
if((i__16496_16516 < count__16495_16515)){
var f_16517 = cljs.core._nth.call(null,chunk__16494_16514,i__16496_16516);
figwheel.client.reload_css_file.call(null,f_16517);

var G__16518 = seq__16493_16513;
var G__16519 = chunk__16494_16514;
var G__16520 = count__16495_16515;
var G__16521 = (i__16496_16516 + (1));
seq__16493_16513 = G__16518;
chunk__16494_16514 = G__16519;
count__16495_16515 = G__16520;
i__16496_16516 = G__16521;
continue;
} else {
var temp__4126__auto___16522 = cljs.core.seq.call(null,seq__16493_16513);
if(temp__4126__auto___16522){
var seq__16493_16523__$1 = temp__4126__auto___16522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16493_16523__$1)){
var c__8817__auto___16524 = cljs.core.chunk_first.call(null,seq__16493_16523__$1);
var G__16525 = cljs.core.chunk_rest.call(null,seq__16493_16523__$1);
var G__16526 = c__8817__auto___16524;
var G__16527 = cljs.core.count.call(null,c__8817__auto___16524);
var G__16528 = (0);
seq__16493_16513 = G__16525;
chunk__16494_16514 = G__16526;
count__16495_16515 = G__16527;
i__16496_16516 = G__16528;
continue;
} else {
var f_16529 = cljs.core.first.call(null,seq__16493_16523__$1);
figwheel.client.reload_css_file.call(null,f_16529);

var G__16530 = cljs.core.next.call(null,seq__16493_16523__$1);
var G__16531 = null;
var G__16532 = (0);
var G__16533 = (0);
seq__16493_16513 = G__16530;
chunk__16494_16514 = G__16531;
count__16495_16515 = G__16532;
i__16496_16516 = G__16533;
continue;
}
} else {
}
}
break;
}

var c__11315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload){
return (function (){
var f__11316__auto__ = (function (){var switch__11250__auto__ = ((function (c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload){
return (function (state_16503){
var state_val_16504 = (state_16503[(1)]);
if((state_val_16504 === (2))){
var inst_16499 = (state_16503[(2)]);
var inst_16500 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_16501 = on_cssload.call(null,inst_16500);
var state_16503__$1 = (function (){var statearr_16505 = state_16503;
(statearr_16505[(7)] = inst_16499);

return statearr_16505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16503__$1,inst_16501);
} else {
if((state_val_16504 === (1))){
var inst_16497 = cljs.core.async.timeout.call(null,(100));
var state_16503__$1 = state_16503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16503__$1,(2),inst_16497);
} else {
return null;
}
}
});})(c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload))
;
return ((function (switch__11250__auto__,c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload){
return (function() {
var state_machine__11251__auto__ = null;
var state_machine__11251__auto____0 = (function (){
var statearr_16509 = [null,null,null,null,null,null,null,null];
(statearr_16509[(0)] = state_machine__11251__auto__);

(statearr_16509[(1)] = (1));

return statearr_16509;
});
var state_machine__11251__auto____1 = (function (state_16503){
while(true){
var ret_value__11252__auto__ = (function (){try{while(true){
var result__11253__auto__ = switch__11250__auto__.call(null,state_16503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11253__auto__;
}
break;
}
}catch (e16510){if((e16510 instanceof Object)){
var ex__11254__auto__ = e16510;
var statearr_16511_16534 = state_16503;
(statearr_16511_16534[(5)] = ex__11254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16535 = state_16503;
state_16503 = G__16535;
continue;
} else {
return ret_value__11252__auto__;
}
break;
}
});
state_machine__11251__auto__ = function(state_16503){
switch(arguments.length){
case 0:
return state_machine__11251__auto____0.call(this);
case 1:
return state_machine__11251__auto____1.call(this,state_16503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11251__auto____0;
state_machine__11251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11251__auto____1;
return state_machine__11251__auto__;
})()
;})(switch__11250__auto__,c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload))
})();
var state__11317__auto__ = (function (){var statearr_16512 = f__11316__auto__.call(null);
(statearr_16512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11315__auto__);

return statearr_16512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11317__auto__);
});})(c__11315__auto__,map__16492,map__16492__$1,opts,on_cssload))
);

return c__11315__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16536){
var map__16541 = p__16536;
var map__16541__$1 = ((cljs.core.seq_QMARK_.call(null,map__16541))?cljs.core.apply.call(null,cljs.core.hash_map,map__16541):map__16541);
var opts = map__16541__$1;
var on_compile_fail = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__16542 = cljs.core._EQ_;
var expr__16543 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__16542.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__16543))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__16542.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__16543))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__16542.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16543))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16541,map__16541__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16548 = {"detail":url};
return obj16548;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16549){
var map__16551 = p__16549;
var map__16551__$1 = ((cljs.core.seq_QMARK_.call(null,map__16551))?cljs.core.apply.call(null,cljs.core.hash_map,map__16551):map__16551);
var class$ = cljs.core.get.call(null,map__16551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16551__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16552){
var map__16558 = p__16552;
var map__16558__$1 = ((cljs.core.seq_QMARK_.call(null,map__16558))?cljs.core.apply.call(null,cljs.core.hash_map,map__16558):map__16558);
var ed = map__16558__$1;
var exception_data = cljs.core.get.call(null,map__16558__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__16558__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__16559_16563 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__16560_16564 = null;
var count__16561_16565 = (0);
var i__16562_16566 = (0);
while(true){
if((i__16562_16566 < count__16561_16565)){
var msg_16567 = cljs.core._nth.call(null,chunk__16560_16564,i__16562_16566);
console.log(msg_16567);

var G__16568 = seq__16559_16563;
var G__16569 = chunk__16560_16564;
var G__16570 = count__16561_16565;
var G__16571 = (i__16562_16566 + (1));
seq__16559_16563 = G__16568;
chunk__16560_16564 = G__16569;
count__16561_16565 = G__16570;
i__16562_16566 = G__16571;
continue;
} else {
var temp__4126__auto___16572 = cljs.core.seq.call(null,seq__16559_16563);
if(temp__4126__auto___16572){
var seq__16559_16573__$1 = temp__4126__auto___16572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16559_16573__$1)){
var c__8817__auto___16574 = cljs.core.chunk_first.call(null,seq__16559_16573__$1);
var G__16575 = cljs.core.chunk_rest.call(null,seq__16559_16573__$1);
var G__16576 = c__8817__auto___16574;
var G__16577 = cljs.core.count.call(null,c__8817__auto___16574);
var G__16578 = (0);
seq__16559_16563 = G__16575;
chunk__16560_16564 = G__16576;
count__16561_16565 = G__16577;
i__16562_16566 = G__16578;
continue;
} else {
var msg_16579 = cljs.core.first.call(null,seq__16559_16573__$1);
console.log(msg_16579);

var G__16580 = cljs.core.next.call(null,seq__16559_16573__$1);
var G__16581 = null;
var G__16582 = (0);
var G__16583 = (0);
seq__16559_16563 = G__16580;
chunk__16560_16564 = G__16581;
count__16561_16565 = G__16582;
i__16562_16566 = G__16583;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__8030__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8030__auto__)){
return or__8030__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__16584){
var map__16586 = p__16584;
var map__16586__$1 = ((cljs.core.seq_QMARK_.call(null,map__16586))?cljs.core.apply.call(null,cljs.core.hash_map,map__16586):map__16586);
var opts = map__16586__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16584 = null;
if (arguments.length > 0) {
  p__16584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__16584);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16587){
var p__16584 = cljs.core.seq(arglist__16587);
return watch_and_reload__delegate(p__16584);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map