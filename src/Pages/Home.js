import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaShoppingBag ,FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

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


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRefresh = () => {
    // Your refresh logic here
    console.log('Refresh clicked!');
  };


  return (
    <div className='container  min-h-screen max-h-full'>
      <h2 className='text-4xl mt-2 mb-4'>Home</h2>
      <hr className='mb-6'></hr>

      <div className='flex my-4 mx-4'>
      <div className='flex mx-2 py-2 px-1'>
        <h2 className='p-1'>Start Date</h2>
        <DatePicker
          className='bg-yellow-100 p-1 ml-2'
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className='flex mx-2 py-2 px-1'>
        <h2 className='p-1'>End Date</h2>
        <DatePicker
          className='bg-yellow-100 p-1 ml-2'
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className='flex ml-auto items-center'>
        <button className='bg-yellow-100 px-4 py-1 rounded-md' onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    </div>
      <div className='flex flex-wrap '>
        <div className='h-[5%] w-[22%] m-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md bg-yellow-100 p-4'>
          <h1 className='text-sm font-semibold'>Total Order</h1>
          <span className='text-2xl font-bold text-[#FEC013]'>50 Order</span>
          <FaShoppingBag className='text-[#FEC013] text-2xl float-right' />
        </div>
        <div className='h-[5%] w-[22%] m-2 border-2 border-solid border-[#FEC013] rounded-md bg-yellow-100 p-4'>
          <h1 className='text-sm font-semibold'>Total Earning</h1>
          <span className='text-2xl font-bold text-[#FEC013]'>200000 Rs</span>
          <FaHandHoldingUsd className='text-[#FEC013] text-2xl float-right'/>
        </div>
        <div className='h-[5%] w-[22%] m-2 border-2 border-solid border-[#FEC013] rounded-md bg-yellow-100 p-4'>
          <h1 className='text-sm font-semibold'>Total Pending Order</h1>
          <span className='text-2xl font-bold text-[#FEC013]'>10 Order</span>
          <MdOutlinePendingActions className='text-[#FEC013] text-2xl float-right'/>
        </div>
        <div className='h-[5%] w-[23%] m-2 border-2 border-solid border-[#FEC013] rounded-md bg-yellow-100 p-4'>
          <h1 className='text-sm font-semibold'>Total Complete Order</h1>
          <span className='text-2xl font-bold text-[#FEC013]'>40 Orders</span>
          <TbChecklist className='text-[#FEC013] text-2xl float-right'/>

        </div>
      </div>
      <div className=' mt-20 h-[35vh]'>
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400]
              }
            ]
          }} />
      </div>
    </div>
  )
}

export default Home