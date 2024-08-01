"use client"; 
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { LinearScale } from "chart.js/auto";
import { useEffect, useState } from 'react';
import { fetchData } from './api';
import {Chart as ChartJS} from 'chart.js/auto';

const CustomerChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('customers');
      setData(result);
    };
    getData();
  }, []);
  useEffect(() => {
    if (!data) return;
    ChartJS.register({
        id: 'x-axis-0',
        type: 'linear', // Type of scale for X axis
        ticks: {
          min: 0, // Start at zero
          max: 11, // Adjust as per your number of labels (0 to 11 for 12 months)
          stepSize: 1, // Step size between labels
          callback: (value) => data.labels[value], // Display labels (Jan, Feb, ..., Dec)
        },
      });
  
      ChartJS.register({
        id: 'y-axis-0',
        type: 'linear', // Type of scale for Y axis
        ticks: {
          beginAtZero: true, // Start Y axis scale at zero
          // Adjust max dynamically based on data to ensure both years fit within the scale
          max: Math.max(...data.thisYear, ...data.lastYear) + 200, // Add buffer for better visualization
          stepSize: 200, // Adjust step size as needed
        },
      });
   
  }, [data]); // Ensure this useEffect runs whenever data changes

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: 'This Year',
        data: data?.thisYear || [],
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'Last Year',
        data: data?.lastYear || [],
        borderColor: 'gray',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default CustomerChart;
