const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const reqfun = function (req, res, next) {
    console.log(`${req.method} requested at ${req.url}`);
    next();
};

const formfun = function (req, res, next) {
    try {
        const name = req.body.name;
        if (name) {
            req.username = name;
            next();
        } else {
            res.status(400).send('Name is required');
        }
    } catch (error) {
        next(error);
    }
};

// User display middleware
const showUser = function (req, res) {
    try {
        const username = req.username || 'Guest';
        res.send(`Hello, ${username}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

// Routes
app.get('/', reqfun, (req, res) => {
    res.send(`
        <form method="POST" action="/process">
            <input type="text" name="name" placeholder="Enter your name"/>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/process', reqfun, formfun, showUser);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});