import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
    
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={`bg-red-300 h-[100vh] ${sidebar ? 'w-60' : 'w-16'} fixed top-0 bottom-0 mt-16 transition-all duration-300 ease-in-out`}>
        <div className='flex flex-row my-4 justify-between'>
         {sidebar ?  <h1 className='font-sans text-lg px-2 font-semibold'>Dashboard</h1>:""}
          {sidebar ? (
            <IoMdMenu className='font-sans text-4xl px-2' onClick={showSidebar} />
          ) : (
            <IoMdClose className='font-sans text-4xl px-2' onClick={showSidebar} />
          )}
        </div>
        <hr></hr>
        {
          SidebarData.map((item , index) => (
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Dashboard;
