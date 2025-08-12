const fs = require('fs');

fs.mkdir('newDir', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully');
    }
});

