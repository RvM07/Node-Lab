const EventEmitter = require('events');
const emitter = new EventEmitter();


var customer = function(name){
    console.log('Customer Name:'+ name);
}

emitter.on('myevent',customer);
emitter.on('message',function(msg){
    console.log('message:'+ msg);
});

emitter.emit('myevent','Ninad');
emitter.emit('myevent','Viru');
emitter.emit('message','this is the first message');
emitter.emit('message','this is the second message');
emitter.emit('message','Welcome to node js');

//Show function
var show = function(){
    console.log('This is show function');
}
emitter.on('showevent',show);
emitter.emit('showevent');

