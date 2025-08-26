var EventEmitter = require('events');
const emitter = new EventEmitter();

var fun1 = function(msg) {
    console.log(msg);
};

var fun2 = ()=>{
    console.log("This is fun2");
};

emitter.on('event1', fun1);
emitter.on('event1', fun2);

console.log('Listeners:', emitter.listeners('event1'));
console.log('Listener count:', emitter.listenerCount('event1'));

emitter.emit('event1', 'Hello World');

function show(){
    emitter.emit('event2', 'Show triggered after emit');
}

function clg() {
    emitter.emit('event2');
}

setTimeout(show,clg, 2000);
