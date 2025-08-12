const fs = require('fs');
const filePath = './sample.txt';
const word = 'example';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        const occurrences = data.split(word).length - 1;
        console.log(`The word "${word}" occurs ${occurrences} times in the file.`);
    }
});