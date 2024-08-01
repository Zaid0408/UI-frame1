"use client"; 

import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchData } from './api';

const OrdersChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('orders');
      setData(result);
    };
    getData();
  }, []);

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: 'Orders',
        data: data?.orders || [],
        backgroundColor: 'orange',
      },
      {
        label: 'Projections',
        data: data?.projections || [],
        backgroundColor: 'gray',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default OrdersChart;
