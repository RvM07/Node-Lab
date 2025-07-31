const EventEmitter = require('events');
const emitter = new EventEmitter();

var f1 = (msg) => {
    console.log("Message from event (f1):", msg);
};

var f2 = (msg) => {
    console.log("Message from event (f2):", msg);
};

emitter.on('event', f1);
emitter.on('event', f2);

emitter.emit('event', "Hello, World!");

console.log(emitter.listeners('event'));
console.log(emitter.listenerCount('event'));
