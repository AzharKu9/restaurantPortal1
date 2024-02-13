import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaShoppingBag, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { MdFoodBank } from "react-icons/md";
import ChartConfig from "./ChartConfig";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { userToken } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(""); 
  const [totalOrderAmount, setTotalOrderAmount] = useState(0)
  const [peningCount, setPendingCount] = useState(0)
  const [rideCount, setRideCount] = useState(0)

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRefresh = () => {
    console.log("Refresh clicked!");
  };

  const totalAmount = (response) =>{
    const totalAmount = response.allOrder.reduce((acc, order) => {
      const orderAmount = parseFloat(order.totalAmount);
      return acc + orderAmount;
    }, 0);
    setTotalOrderAmount(totalAmount)
  }

  const calculateOrder = (status) => {
    status.orderWithStatus.forEach((order) => {
      order.orderDetails.forEach((item) => {
        if (item.status === 'pending') {
          setPendingCount(peningCount+1);
        } else if (item.status === 'ride' || item.status === 'picked') {
          setRideCount(rideCount+1);
        }
      });
    });
  };
  
  

  const fetchRestaurant = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/api/getallorder`, {
        headers: {
          authToken: userToken,
        },
      });
      const response = await res.json();
      if (response.success) {
        setLength(response.allOrder.length)
        setData(response.allOrder.foodDetails)
        totalAmount(response)
        calculateOrder(response.orderWithStatus)
        setLoading(false)
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchRestaurant();
  }, []);
  

  if (isLoading) {
    return <div className="text-lg m-12 font-semibold">Loading...</div>;
  }

  return (
    <div className="container min-h-screen max-h-full mb-[10rem]">
      <h2 className="text-4xl mt-2 mb-4">Home</h2>
      <hr className="mb-6"></hr>

      <div className="flex flex-col md:flex-row my-4 mx-2">
        <div className="flex mx-1 py-2 px-1 items-center">
          <h2 className="p-1">Start Date:</h2>
          <DatePicker
            className="border-2 border-solid border-[#FEC013] rounded-md p-1 ml-2 min-w-[6rem] max-w-[8rem]"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="flex mx-1 py-2 px-1 items-center">
          <h2 className="p-1">End Date:</h2>
          <DatePicker
            className="border-2 border-solid border-[#FEC013] rounded-md p-1 ml-2 min-w-[6rem] max-w-[8rem]"
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="flex ml-12 items-center">
          <button
            className="bg-[#FEC013] px-4 py-1 rounded-md flex flex-row items-center hover:bg-[#febf13da]"
            onClick={handleRefresh}
          >
            <TfiReload className="mr-2" /> Refresh
          </button>
        </div>
      </div>
      <hr className="mb-6"></hr>
      <div className="flex flex-wrap w-full">
        <div className="h-[5%] w-[100%] md:w-[27%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4">
          <h1 className="text-sm font-semibold">Total Order</h1>
          <span className="text-3xl font-bold text-[#FEC013]">{length} Order</span>
          <FaShoppingBag className="text-[#FEC013] text-3xl float-right" />
        </div>
        <div className="h-[5%] w-[100%] md:w-[27%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4">
          <h1 className="text-sm font-semibold">Total Earning</h1>
          <span className="text-3xl font-bold text-[#FEC013]">{totalOrderAmount} Rs</span>
          <FaHandHoldingUsd className="text-[#FEC013] text-3xl float-right" />
        </div>
        <div className="h-[5%] w-[100%] md:w-[27%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4">
          <h1 className="text-sm font-semibold">Total Pending Order</h1>
          <span className="text-3xl font-bold text-[#FEC013]">{peningCount} Orders</span>
          <MdOutlinePendingActions className="text-[#FEC013] text-3xl float-right" />
        </div>
        <div className="h-[5%] w-[100%] md:w-[27%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4">
          <h1 className="text-sm font-semibold">Total Complete Order</h1>
          <span className="text-3xl font-bold text-[#FEC013]">{rideCount} Orders</span>
          <TbChecklist className="text-[#FEC013] text-3xl float-right" />
        </div>
        <div className="h-[5%] w-[100%] md:w-[27%] my-2 mx-4 border-2 border-solid border-[#FEC013] rounded-md p-4">
          <h1 className="text-sm font-semibold">Total Active Dishes</h1>
          <span className="text-3xl font-bold text-[#FEC013]">15 Orders</span>
          <MdFoodBank className="text-[#FEC013] text-3xl float-right" />
        </div>
      </div>

      <ChartConfig />
    </div>
  );
};

export default Home;
