const EventEmitter = require('events');
var emitter = new EventEmitter();

function table (n){
    for (let i = 1; i <= 10; i++) {
        res = n*i;
        console.log(n,'x',i,'=',res);
    }
}

function fact(n){
    f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
        }
    console.log(`\nFactorial is ${f}`);
    
}

table(7);
fact(5);
