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

arear(4,5);
areas(14);
areacir(7);