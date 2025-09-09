const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/Node/CH-3/Events/Express/Public', express.static('Public'));
app.use('/Node/CH-3/Events/Express/todos', express.static('todos'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});