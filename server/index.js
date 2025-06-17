const express = require('express');
const path = require('path');
const distPath = path.resolve(__dirname, '../frontend/dist');
const validateUser = require('./validators/useValidator');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/registration');
});

app.use(express.static(distPath));

app.get('/registration', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.post('/registration', (req, res) => {
  try {
    const { ok } = validateUser(req.body);

    if (ok) res.status(200).json({ message: 'Registro feito com sucesso!' });
  } catch (error) {
    if (error.message) return res.status(400).json({ message: error.message });

    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
