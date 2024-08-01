"use client"; 

import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchData } from './api';

const RevenueChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('revenue');
      setData(result);
    };
    getData();
  }, []);

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        data: data?.values || [],
        backgroundColor: ['	#ffce00', 'orange', '#cc621b', 'gray'],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return <Doughnut data={chartData} options={options} />;
};

export default RevenueChart;
