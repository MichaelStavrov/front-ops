const express = require('express');

const fetch = (url, init) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));

const app = express();

const DATE_SERVICE_HOST =
  process.env.DATE_SERVICE_HOST || 'http://localhost:3005';

app.get('/', (req, res) => {
  fetch(DATE_SERVICE_HOST)
    .then((res) => res.json())
    .then((date) => res.send(`Hello! Current date is ${date}\n`));
});

app.listen(3000, () => {
  console.log('Ready');
});
