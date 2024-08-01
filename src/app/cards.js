"use client"; 
import { fetchData } from './api';
import React, { useState, useEffect } from 'react';
import './cards.css';

const Card = ({ title, value, percentage }) => {
  const percentageStyle = {
    color: percentage > 0 ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div className="card">
        <div className='"p-4 bg-white rounded-lg shadow-md"'>
            <h3>{title}</h3>
            <p>{value}</p>
            <span style={percentageStyle}>{percentage}%</span>
        </div>
    </div>
  );
};

const Cards = () => {
  const [data, setData] = useState({ title: [], values: [], percentage: [] });

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('cards');
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="card-container">
      {data.title.map((title, index) => (
        <Card
          key={title}
          title={title}
          value={data.values[index]}
          percentage={data.percentage[index]}
        />
      ))}
    </div>
  );
};

export default Cards;