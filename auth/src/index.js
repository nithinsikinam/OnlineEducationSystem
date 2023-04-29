const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello worlD');
});

app.listen(5000, (req, res) => {
  console.log('app started');
});
