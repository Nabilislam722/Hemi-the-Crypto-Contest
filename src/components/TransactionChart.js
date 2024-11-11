import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TransactionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const txData = response.data.items.map((tx) => ({
          name: tx.hash.slice(0, 6),
          value: parseInt(tx.fee.value),
        }));
        setData(txData);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, []);

  return (
    <div className="transaction-chart">
      <h2>Transaction Fees</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
