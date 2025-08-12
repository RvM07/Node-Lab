const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files in the directory:', files);
    }
});