import React from 'react';

const TransactionLog = ({ transactions }) => {
  return (
    <div className="transaction-log">
      <h2>Transaction Log</h2>
      <div className="transaction-fees">
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
              <p><strong>Amount:</strong> {transaction.amount}</p>
            </div>
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </div>
    </div>
  );
};

export default TransactionLog;
