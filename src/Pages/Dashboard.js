import React, { useState } from 'react';
import AddProduct from './AddProduct';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('home'); // State to manage selected tab

  const changeTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 bg-white border-r">
        {/* Sidebar */}
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="p-4">
          {/* Navigation */}
          <ul>
            <li
              onClick={() => changeTab('home')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'home' ? 'text-blue-500 font-bold' : ''
              }`}
            >
              Home
            </li>
            <li
              onClick={() => changeTab('addProduct')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'addProduct' ? 'text-blue-500 font-bold' : ''
              }`}
            >
            Add Dishes
            </li>
            <li
              onClick={() => changeTab('viewDishes')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'viewDishes' ? 'text-blue-500 font-bold' : ''
              }`}
            >
              View Dishes
            </li>
            <li
              onClick={() => changeTab('updateDishes')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'updateDishes' ? 'text-blue-500 font-bold' : ''
              }`}
            >
              Update Food
            </li>
            <li
              onClick={() => changeTab('deleteDishes')}
              className={`cursor-pointer py-2 ${
                selectedTab === 'deleteDishes' ? 'text-blue-500 font-bold' : ''
              }`}
            >
              Delete Food
            </li>

            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-8">
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
            {/* <h2 className="text-2xl font-bold mb-4">Update Food</h2> */}
            {/* Add analytics content */}
          </div>
        )}
        {selectedTab === 'viewDishes' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">View Food</h2>
            {/* Add content for Add Product page */}
          </div>
        )}
        {selectedTab === 'deleteProduct' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Delete Food</h2>
            {/* Add content for Delete Product page */}
          </div>
        )}
        {selectedTab === 'updateDishes' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">updateDishes</h2>
            {/* Add content for View Product page */}
          </div>
        )}
        {selectedTab === 'invoiceProduct' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Invoice </h2>
            {/* Add content for Invoice Product page */}
          </div>
        )}
        {/* Add content for other tabs */}
      </div>
    </div>
  );
};

export default Dashboard;
