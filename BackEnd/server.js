const express = require('express');
const fetchTransactions = require('./fetchTransactions');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());  // Enable CORS for all routes

app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await fetchTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on https://hemi-the-crypto-contest-c6xl.vercel.app`);
});
