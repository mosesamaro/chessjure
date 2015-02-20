// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_19425 = (0);
while(true){
var m_19426 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_19426 == null)){
} else {
m_19426.call(null);

if((count_19425 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__19427 = (count_19425 + (1));
count_19425 = G__19427;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
if(typeof MessageChannel !== 'undefined'){
cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());

cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){
return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else {
}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){
if(cljs.core.truth_((function (){var and__8018__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(and__8018__auto__){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__8018__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

if(typeof MessageChannel !== 'undefined'){
return cljs.core.async.impl.dispatch.message_channel.port2.postMessage((0));
} else {
if(typeof setImmediate !== 'undefined'){
return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else {
return setTimeout(cljs.core.async.impl.dispatch.process_messages,(0));

}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map