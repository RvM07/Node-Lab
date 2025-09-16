const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/greet`);
});