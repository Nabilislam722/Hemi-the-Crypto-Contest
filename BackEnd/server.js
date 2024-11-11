const express = require('express');
const cors = require('cors');
const fetchTransactions = require('./fetchTransactions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await fetchTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
