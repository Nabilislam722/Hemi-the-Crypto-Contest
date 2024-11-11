const axios = require('axios');

const fetchTransactions = async () => {
  try {
    const response = await axios.get('https://testnet.explorer.hemi.xyz/api/v2/transactions');
    const transactions = response.data.items;

    transactions.forEach(tx => {
      console.log(`Transaction Hash: ${tx.hash}`);
      console.log(`From: ${tx.from.hash}`);
      console.log(`To: ${tx.to.hash}`);
      console.log(`Status: ${tx.status}`);
      console.log(`Timestamp: ${new Date(tx.timestamp).toLocaleString()}`);
      console.log('--------------------------------');
    });

    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

module.exports = fetchTransactions;
