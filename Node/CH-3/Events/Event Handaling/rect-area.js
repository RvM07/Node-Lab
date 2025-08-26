const EventEmitter = require('events');
const emitter = new EventEmitter();

function arear(l,b){
    console.log(`Area of rectangle is ${l*b}`);
}

function areas(s){
    console.log(`Area of square is ${s*s}`);
}

function areacir(r){
    console.log(`Area of circle is ${3.14*r*r}`);
}

emitter.on('event',arear);
emitter.on('event',areas);
emitter.on('event',areacir);

emitter.emit('event',4,5)
