import React, {useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaShoppingBag ,FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { MdFoodBank } from "react-icons/md";
import ChartConfig from './ChartConfig';
const Home = () => {

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
    <div className='container min-h-screen max-h-full'>
      <h2 className='text-4xl mt-2 mb-4'>Home</h2>
      <hr className='mb-6'></hr>

      <div className='flex my-4 mx-2'>
      <div className='flex mx-1 py-2 px-1'>
        <h2 className='p-1'>Start Date:</h2>
        <DatePicker
          className='border-2 border-solid border-[#FEC013] rounded-md p-1 ml-2 min-w-[6rem] max-w-[8rem]'
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className='flex mx-1 py-2 px-1'>
        <h2 className='p-1'>End Date:</h2>
        <DatePicker
          className='border-2 border-solid border-[#FEC013] rounded-md p-1 ml-2 min-w-[6rem] max-w-[8rem]'
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className='flex ml-auto items-center'>
        <button className='bg-[#FEC013] px-4 py-1 rounded-md flex flex-row items-center hover:bg-[#febf13da]' onClick={handleRefresh}>
        <TfiReload className='mr-2' /> Refresh
        </button>
      </div>

    </div>
      <hr className='mb-6'></hr>
      <div className='flex flex-wrap'>
        <div className='h-[5%] w-[26%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4'>
          <h1 className='text-sm font-semibold'>Total Order</h1>
          <span className='text-3xl font-bold text-[#FEC013]'>50 Order</span>
          <FaShoppingBag className='text-[#FEC013] text-3xl float-right' />
        </div>
        <div className='h-[5%] w-[26%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4'>
          <h1 className='text-sm font-semibold'>Total Earning</h1>
          <span className='text-3xl font-bold text-[#FEC013]'>200000 Rs</span>
          <FaHandHoldingUsd className='text-[#FEC013] text-3xl float-right'/>
        </div>
        <div className='h-[5%] w-[26%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4'>
          <h1 className='text-sm font-semibold'>Total Pending Order</h1>
          <span className='text-3xl font-bold text-[#FEC013]'>10 Order</span>
          <MdOutlinePendingActions className='text-[#FEC013] text-3xl float-right'/>
        </div>
        <div className='h-[5%] w-[26%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4'>
          <h1 className='text-sm font-semibold'>Total Complete Order</h1>
          <span className='text-3xl font-bold text-[#FEC013]'>40 Orders</span>
          <TbChecklist className='text-[#FEC013] text-3xl float-right'/>

        </div>
        <div className='h-[5%] w-[26%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4'>
          <h1 className='text-sm font-semibold'>Total Active Dishes</h1>
          <span className='text-3xl font-bold text-[#FEC013]'>15 Orders</span>
          <MdFoodBank className='text-[#FEC013] text-3xl float-right'/>
        </div>
      </div>
   
     <ChartConfig/>
    </div>
  )
}

export default Home