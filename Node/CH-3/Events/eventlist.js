const EventEmitter = require('events');
const emitter = new EventEmitter();

function eventList(eventName) {
    console.log(`Callback triggered by ${eventName}`);
}

['eventA','eventB','eventC'].forEach(event=>{
    emitter.on(event,()=>eventList(event));
});

emitter.emit('eventB');