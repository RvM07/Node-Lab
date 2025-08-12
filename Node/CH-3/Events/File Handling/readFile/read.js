const fs = require('fs');

const filePath = __dirname + '/sample.txt';
const word = 'example';

fs.readFile(filePath, (err, data) => {
    if (err) return console.error('Error reading file:', err);

    const bool = (data.includes(word));
    console.log('The word is found',bool);
    
});