const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px;">
        <h1>Welcome to feedback form</h1>
        <a href="/feedback">Go to Feedback Form</a>
        </div>
    `);
});

app.get('/feedback', (req, res) => {
    res.send(`
        <div class="container">
            <h1>Feedback Form</h1>
            <form action="/submit-feedback" method="POST"></form>
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                <label for="feedback">Feedback:</label><br>
                <textarea id="feedback" name="feedback" rows="4" required></textarea><br><br>
                <input type="submit" value="Submit">
                <button type="submit" Submit feedback</button>
            </form>
            <p><a href='/'>Back to home page</a></p>
        </div>
    `);
});

app.post('/submit-feedback', (req, res) => {
    const { name, email, feedback } = req.body;
    console.log(`Feedback received from ${name} (${email}): ${feedback}`);
    res.send(`
        <h1>Thank you for your feedback, ${name}!</h1>
        <p>We recieved your feedback:</p>
        <p><a href='/'>Back to home page</a></p>
    `);
});