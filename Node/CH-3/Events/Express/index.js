const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/Public', express.static('Public'));
app.use('/todos', express.static('todos'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});