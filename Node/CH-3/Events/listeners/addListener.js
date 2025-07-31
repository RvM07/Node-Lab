var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.addListener('event', function () {
    console.log('This is addListener..!');
});

emitter.on('event', function () {
    console.log('This is on..!');
});

emitter.once('event', function () {
    console.log('This is once..!');
});

emitter.emit('event');

emitter.removeListener('event', function () {
    console.log('This is removeListener..!');
});

emitter.removeAllListeners('event');