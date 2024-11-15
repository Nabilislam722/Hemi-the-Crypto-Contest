import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionLog from './components/TransactionLog';
import TransactionChart from './components/TransactionChart';
import axios from 'axios';
import { title } from 'process';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://hemi-the-crypto-contest-dws5h9jha-nabilislam722s-projects.vercel.app/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="Header">Hemi Blockchain Transaction Log</h1>
        {/* Pass transactions as a prop to TransactionLog */}
        <TransactionLog transactions={transactions} />
        <TransactionChart transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
