const EventEmitter = require('events');
const emitter = new EventEmitter();

function show(msg){
    console.log(msg);
    emitter.emit('event3','Hello World')
}

function clg(){
    console.log("This is fun2");
    emitter.emit('event3')
}

function add(n1,n2){
    console.log("Sum of 2 numbers is:",n1+n2);
    emitter.emit('event3',7,14);
}

console.log(emitter.listeners('event3'));
console.log(emitter.listenerCount('event3'));

show();
clg();
add();

emitter.prependListener('event3',clg);
console.log(emitter.listeners('event3'));

