const EventEmitter = require('events');
const emitter = new EventEmitter();

function show(msg) {
    console.log(msg);
}

function clg() {
    console.log("This is fun2");
}

function add(n1, n2) {
    console.log("Sum of 2 numbers is:", n1 + n2);
}

emitter.on('event3', show);
emitter.on('event3', clg);
emitter.on('event3', () => add(7, 14));

emitter.emit('event3', 'Hello World');

console.log('Listeners:', emitter.listeners('event3'));
console.log('Listener count:', emitter.listenerCount('event3'));

emitter.prependListener('event3', () => {
    console.log("Prepended function runs first");
});

