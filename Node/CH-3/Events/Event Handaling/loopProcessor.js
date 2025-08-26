var emitter = require('events').EventEmitter;

function loopProcessor(num) {
    const e = new emitter();
    
    setTimeout(() => {
        for (let i = 1; i < num; i++) {
            e.emit('BeforeProcess', i);
            console.log(`Processing item ${i}`);
            e.emit('AfterProcess', i);
        }
    },2000);
    return e;
}

var lp = loopProcessor(5);
lp.on('BeforeProcess', (item) => {
    console.log(`Before processing item ${item}`);
});
lp.on('AfterProcess', (item) => {
    console.log(`Completed processing item ${item}\n`);
});