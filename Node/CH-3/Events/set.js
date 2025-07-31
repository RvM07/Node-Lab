var add = function(a, b) {
    console.log('Adding 2 numbers:', a+b);
}

add(5, 10);
console.log("main function\n");

setImmediate(() => {
    add(20, 30);
    console.log("Immediate function executed\n");
},5000);

setTimeout(() => {
    add(15, 25);
    console.log("Timeout function executed\n");
}, 1000);

process.nextTick(() => {
    add(1, 2);
    console.log("Next tick function executed\n");
});