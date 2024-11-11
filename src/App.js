import React from 'react';
import './App.css';
import TransactionLog from './components/TransactionLog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hemi Blockchain Transaction Log</h1>
        <TransactionLog />
      </header>
    </div>
  );
}

export default App;
