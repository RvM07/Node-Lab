const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px;">
        <h1>Welcome to Registration form</h1>
        <a href="/registration">Go to Registration Form</a>
        </div>
    `);
});

app.get('/registration', (req, res) => {
    res.send(`
        <div class="container">
            <h1>Registration Form</h1>
            <form action="/submit-registration" method="POST">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                <label for="roll-no">Roll No:</label><br>
                <input type="number" id="roll-no" name="roll-no" required><br><br>
                <label for="class-s">lass:</label><br>
                <input type="class-s" id="class-s" name="roll-no" required><br><br>
                <label for="qualification">Qualification:</label><br>
                <textarea id="qualification" name="qualification" rows="4" required></textarea><br><br>
                <button type="submit">Submit</button>
            </form>
            <p><a href='/'>Back to home page</a></p>
        </div>
    `);
});

app.post('/submit-registration', (req, res) => {
    const { name, email, feedback } = req.body;
    console.log(`Registred from ${name} (${email}): ${feedback} ${class-s} `);
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
        <h1>Thank you for your feedback, ${name}!</h1>
        <p>We recieved your feedback:</p>
        <blockquote>${feedback}</blockquote>
        <p>We'll get back to you at ${email} if necessary</p>
        <p><a href='/'>Back to home page</a></p>
        </body>
        </html>
    `);
});

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
});