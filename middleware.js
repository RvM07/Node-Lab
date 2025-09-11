const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const reqfun = function (req, res, next) {
    console.log(`Request URL:${req.method} requested at ${req.url}`);
    next();
}

const formfun = function (res, req, next) {
    const { name: uname } = req.body.name;
    if (uname) {
        req.username = uname;
        next();
    }
}

const showUser = function (req, res){
    const username = req.username || 'Guest';
    res.send(`Hello, ${username}`);
}

app.get('/',reqfun,(res,req)=>{
    res.send(`
        <form method="POST" action="/process">
            <input type="text" name="name" placeholder="Enter your name"/>
            <button type="submit">Submit</button>
        </form>
    `);
})

app.post('/process', reqfun, formfun, showUser);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});