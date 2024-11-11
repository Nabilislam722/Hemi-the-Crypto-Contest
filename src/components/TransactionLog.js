import React, { useEffect, useState } from 'react';

const TransactionLog = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://hemi-the-crypto-contest.vercel.app/api/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-log">
      <h2>Transaction Log</h2>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p><strong>Hash:</strong> {transaction.hash}</p>
            <p><strong>From:</strong> {transaction.from.hash}</p>
            <p><strong>To:</strong> {transaction.to.hash}</p>
            <p><strong>Status:</strong> {transaction.status}</p>
            <p><strong>Timestamp:</strong> {new Date(transaction.timestamp).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No transactions available</p>
      )}
    </div>
  );
};

export default TransactionLog;
