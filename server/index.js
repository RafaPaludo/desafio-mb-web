const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/registration', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.post('/registration', (req, res) => {
  console.log("POST")
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
