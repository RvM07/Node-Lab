const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="./public/style.css">
        <title>Registration Successful</title>
        </head>
        <body>
        <div style="text-align: center; margin-top: 50px;">
            <h1>Welcome to Registration form</h1>
            <a href="/registration">Go to Registration Form</a>
        </div>
        </body>
        </html>
    `);
});

app.get('/registration', (req, res) => {
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="./public/style.css">
        <title>Registration Successful</title>
        </head>
        <body>
        <div class="container">
            <h1>Registration Form</h1>
            <form action="/submit-registration" method="POST">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>

                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>

                <label for="pass">Password:</label><br>
                <input type="password" id="pass" name="pass" required><br><br>

                <label for="rollNo">Roll No:</label><br>
                <input type="number" id="rollNo" name="rollNo" required><br><br>

                <label for="classS">Class:</label><br>
                <input type="text" id="classS" name="classS" required><br><br>

                <label for="qualification">Qualification:</label><br>
                <textarea id="qualification" name="qualification" required></textarea><br><br>

                <button type="submit">Submit</button>
            </form>
            <p><a href='/'>Back to home page</a></p>
        </div>
        </body>
        </html>
    `);
});

app.post('/submit-registration', (req, res) => {
    const { name, email, rollNo, classS, qualification, pass} = req.body;
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="./public/style.css">
        <title>Registration Successful</title>
        </head>
        <body>
            <h1>Thank you for your registration, ${name}!</h1>
            <p>We received your details:</p>
            <ul>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Roll No:</strong> ${rollNo}</li>
                <li><strong>Class:</strong> ${classS}</li>
                <li><strong>Qualification:</strong> ${qualification}</li>
            </ul>
            <p><a href='/'>Back to home page</a></p>
        </body>
        </html>
    `);
});

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
});
