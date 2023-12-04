import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 
const Home = () => {
  useEffect(() => {
    return () => {
      // Cleanup: Destroy the chart instance
      const chartInstance = Chart.getChart('chart-0');
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);
  return (
    <div className='container  min-h-screen max-h-full'>
    <h2 className='text-4xl mt-2 mb-4'>Home</h2>
    <hr className='mb-6'></hr>
    <div className='flex flex-wrap justify-center'>
    <div className='h-[5%] w-[20%] m-2 b-2 b-yellow-600 bg-yellow-100'><h1>Total Order</h1></div>
    <div className='h-[5%] w-[20%] m-2 b-2 b-yellow-600 bg-yellow-100'><h1>Total Earning</h1></div>
    <div className='h-[5%] w-[20%] m-2 b-2 b-yellow-600 bg-yellow-100'><h1>Total Pending Order</h1></div>
    <div className='h-[5%] w-[20%] m-2 b-2 b-yellow-600 bg-yellow-100'><h1>Total Complete Order</h1></div>
    </div>
    <div className=''>
      <Bar 
      data={{
        labels:["A" ,"B" ,"C"],
        datasets:[
          {
            label:"Revenue",
            data:[200 , 300 ,400]
          }
        ]
      }}/>
    </div>
  </div>
  )
}

export default Home