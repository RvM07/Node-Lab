const fs = require('fs');

fs.rename('newDir', 'renamedDir', (err) => {
    if (err) {
        console.error('Error renaming directory:', err);
    } else {
        console.log('Directory renamed successfully');
    }
});