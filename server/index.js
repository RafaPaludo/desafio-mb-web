const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const distPath = path.resolve(__dirname, '../frontend/dist');

app.get('/', (req, res) => {
  res.redirect('/registration');
});

app.use(express.static(distPath));

app.get('/registration', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.post('/registration', (req, res) => {
  console.log("POST")
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
