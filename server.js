const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, username: 'admin', password: '123' },
  { id: 2, username: 'gui', password: '456' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
  res.status(200).json({ username: user.username });
});

app.listen(3000, () => console.log('Servidor rodando'));