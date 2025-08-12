const fs = require('fs');

fs.existsSync('newDir', (exists) => {
    if (exists) {
        console.log('Directory exists');
    } else {
        console.log('Directory does not exist');
    }
});