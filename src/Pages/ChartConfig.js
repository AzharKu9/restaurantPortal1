import React, { useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartConfig = () => {
  useEffect(() => {
    return () => {
      // Cleanup: Destroy the chart instance
      const chartInstance = Chart.getChart("chart-0");
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  // *********************** BAR CHARTS **********************

  const barData = {
    labels: [
      "January",
      "Febuary",
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
    ],
    datasets: [
      {
        label: "Sale",
        data: [200, 300, 400],
      },
      {
        label: "Revenue",
        data: [50, 70, 90],
      },
    ],
  };

  const barOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    // Add more Bar chart specific options as needed
  };

  // *********************** DOUGHNUT CHARTS **********************

  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, // Adjust this to control the size of the hole in the center
  };

  return (
    <div className="mt-20 w-full">
      {/* Bar chart which shows the details sells against reveneue..  */}
      <div className="w-[90%] h-[30%] m-auto">
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Doughunt chart which shows the details sells against reveneue..  */}
      <div className="">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartConfig;
