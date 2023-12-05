import React, { useContext, useState } from 'react';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import GetOrder from './GetOrder';
import Home from './Home';
import Setting from './Setting';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const {logout} = useContext(AuthContext)
  const [selectedTab, setSelectedTab] = useState('home'); // State to manage selected tab

  const changeTab = (tabName) => {
    setSelectedTab(tabName);
  };
  const handleLogout = ()=>{
    toast.success("Logout!")
    logout()    
  }


  return (
    <div className="flex h-screen bg-white mt-[5%] flex-row">
      <div className="flex flex-col w-1/5 h-screen bg-yellow-50 border-r fixed">
        {/* Sidebar */}
        <div className="p-4 mt-2 border-b" >
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="py-4">
          {/* Navigation */}
          <ul>
            <li
              onClick={() => changeTab('home')}
              className={`cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${selectedTab === 'home' ? 'text-black font-bold bg-[#fbb800] rounded-sm' : ''
                }`}
            >
              Home
            </li>
            <li
              onClick={() => changeTab('addProduct')}
              className={`cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${selectedTab === 'addProduct' ? 'text-black  font-bold bg-[#fbb800] rounded-sm' : ''
                }`}
            >
              Add Dishes
            </li>
            <li
              onClick={() => changeTab('viewDishes')}
              className={`cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${selectedTab === 'viewDishes' ? 'text-black  font-bold bg-[#fbb800] rounded-sm' : ''
                }`}
            >
              View Dishes
            </li>
            <li
              onClick={() => changeTab('getOrder')}
              className={`cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${selectedTab === 'getOrder' ? 'text-black font-bold bg-[#fbb800] rounded-sm' : ''
                }`}
            >
              Get Order
            </li>
            <li
              onClick={() => changeTab('setting')}
              className={`cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${selectedTab === 'setting' ? 'text-black font-bold bg-[#fbb800] rounded-sm' : ''
                }`}
            >
              Setting
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        <div className='absolute left-0  bg-[#FEC013] bottom-32 py-2 w-full rounded-sm flex justify-center'>
          <button onClick={handleLogout} className='font-semibold'>Logout</button>
        </div>
        </div>
      </div>
      <div className="flex-1 h-[120vh] w-4/5 p-8  ml-[20%]">
        {/* Main Content */}
        {selectedTab === 'home' && (
          <div>
            <Home />
            {/* Add home content */}
          </div>
        )}
        {selectedTab === 'addProduct' && (
          <div>
            <AddProduct />
          </div>
        )}
        {selectedTab === 'viewDishes' && (
          <div>
            <ViewProduct />
            {/* Add content for Add Product page */}
          </div>
        )}
        {selectedTab === 'getOrder' && (
          <div>
            <GetOrder />
            {/* Add content for Delete Product page */}
          </div>
        )}
        {selectedTab === 'setting' && (
          <div>
            <Setting />
            {/* Add content for Delete Product page */}
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
