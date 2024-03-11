import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Expenses tracker 2024",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const expanse = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 900, 800];
const income = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 900, 800];

export const data = {
  labels,
  datasets: [
    {
      label: "Expanse",
      data: expanse,
      backgroundColor: "red",
      stack: "Stack 0",
    },
    {
      label: "Income",
      data: income,
      backgroundColor: "green",
      stack: "Stack 1",
    },
  ],
};

export function DashboardPage() {
  return <Bar options={options} data={data} />;
}

export default DashboardPage;
