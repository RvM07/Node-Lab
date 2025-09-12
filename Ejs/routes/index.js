const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the Home Page!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', message: 'Learn more about us on this page.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});