const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde la app Node.js!');
});

app.listen(3000, () => {
  console.log('Servidor Node.js escuchando en puerto 3000');
});
