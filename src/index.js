const express = require('express');
const connection = require('./configs/connection');
const camelize = require('camelize');

const PORT = process.env.PORT || '3001';
const app = express();

app.get('/', async (req, res) => {
  const [users] = await connection.execute('SELECT * FROM `user`');
  res.json(camelize(users));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});