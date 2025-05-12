import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
  datasets: [
    {
      label: 'Sotuvlar (ming $)',
      data: [12, 15, 3, 5, 9],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'top' },
    title: { display: true, text: 'Oylik Sotuvlar Grafikasi' },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
