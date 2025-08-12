const fs = require('fs');

const srcPath = __dirname + '/src.txt';
const destPath = __dirname + '/dest.txt';

fs.copyFile(srcPath, destPath, (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully');
    }
});