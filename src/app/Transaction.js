"use client";
import { useState, useEffect } from 'react';
import { fetchData } from './api';

const RecentTransactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('transactions');
      setTransactions(result);
      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const getFilteredTransactions = async () => {
      let filteredTransactions = await fetchData('transactions');

      if (searchTerm) {
        filteredTransactions = filteredTransactions.filter(
          transaction =>
            transaction.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.account.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (filterStatus !== 'All') {
        filteredTransactions = filteredTransactions.filter(
          transaction => transaction.status === filterStatus
        );
      }

      setTransactions(filteredTransactions);
    };

    getFilteredTransactions();
  }, [searchTerm, filterStatus]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
      <strong className="text-lg" style={{color:'black'}}>Recent Transactions</strong>
        <div style={{color:'gray'}}>
          <select
            className="p-2 border border-gray-300 rounded-lg"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{color:'black'}}
        />
      </div>
      <table className="w-full text-left table-auto" style={{color:'black'}}>
        <thead>
          <tr>
            <th className="px-4 py-2">Invoice</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Account</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.invoice} className="border-t border-gray-300">
              <td className="px-4 py-2">{transaction.invoice}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.status}</td>
              <td className="px-4 py-2">{transaction.customer}</td>
              <td className="px-4 py-2">{transaction.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
