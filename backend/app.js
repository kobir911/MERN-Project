import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.status(200).send(data.products);
});

const prot = process.env.PORT || 5000;

app.listen(prot, () => {
  console.log(`Server is on http://localhost:${prot}`);
});
