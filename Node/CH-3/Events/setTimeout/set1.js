const EventEmitter = require('events');
const emitter = new EventEmitter();

var f1 = ('event', (msg) => {
    console.log("Message from event:", msg);
});

var f2 =('event', "SBUP");

emitter.on('event', f1);
emitter.on('event', f2);

emitter.emit('event', "Hello, World!");

console.log(emitter.listeners('event'));
console.log(emitter.listenersCount('event'));
