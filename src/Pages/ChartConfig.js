import React, { useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
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
    layout: {
      // Set this to false to allow setting width and height
      margin: {
        top: 100,
        bottom: 50,
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
    layout: {
      // Set this to false to allow setting width and height
      padding: {
        left: 50,
        right: 50,
        bottom: 100,
      },
    },
  };

  return (
    <div className="">
      {/* Bar chart which shows the details sells against revenue..  */}
      <div className="w-full mt-20 mb-[5rem]">
        <Line data={barData} options={barOptions} />
      </div>

      <div className="flex md:flex-row flex-col ">
        {/* Bar chart which shows the details sells against revenue..  */}
        <div className="md:w-1/2 w-full mt-2">
          <Bar data={barData} options={barOptions} />
        </div>

        {/* Doughnut chart which shows the details sells against revenue..  */}
        <div className="md:w-1/2 w-full mt-2">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartConfig;
