import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import GetOrder from './GetOrder';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
 
  const [selectedTab, setSelectedTab] = useState('home'); // State to manage selected tab

  const changeTab = (tabName) => {
    setSelectedTab(tabName);
  };
 
  
  return (
    <div className="flex h-screen bg-white mt-[5%] flex-row">
      <div className="flex flex-col w-1/5 h-screen bg-yellow-50 border-r fixed">
        {/* Sidebar */}
        <div className="p-4 mt-2 border-b" >
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="p-4">
          {/* Navigation */}
          <ul>
            <li
              onClick={() => changeTab('home')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'home' ? 'text-black ml-[2px] pl-2 font-bold bg-[#fbb800] rounded-md' : ''
              }`}
            >
              Home
            </li>
            <li
              onClick={() => changeTab('addProduct')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'addProduct' ? 'text-black ml-[2px] pl-2 font-bold bg-[#fbb800] rounded-md' : ''
              }`}
            >
            Add Dishes
            </li>
            <li
              onClick={() => changeTab('viewDishes')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'viewDishes' ? 'text-black ml-[2px] pl-2 font-bold bg-[#fbb800] rounded-md' : ''
              }`}
            >
              View Dishes
            </li>
            <li
              onClick={() => changeTab('getOrder')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'getOrder' ? 'text-black ml-[2px] pl-2 font-bold bg-[#fbb800] rounded-md' : ''
              }`}
            >
              Get Order
            </li>
        
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
      <div className="flex-1 h-[120vh] w-4/5 p-8  ml-[20%]">
        {/* Main Content */}
        {selectedTab === 'home' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Home</h2>
            {/* Add home content */}
          </div>
        )}
        {selectedTab === 'addProduct' && (
          <div>
            <AddProduct/>
          </div>
        )}
        {selectedTab === 'viewDishes' && (
          <div>
           <ViewProduct/>
            {/* Add content for Add Product page */}
          </div>
        )}
        {selectedTab === 'getOrder' && (
          <div>
            <GetOrder/>
            {/* Add content for Delete Product page */}
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
