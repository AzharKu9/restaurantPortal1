import React, { useContext, useState } from "react";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import GetOrder from "./GetOrder";
import Home from "./Home";
import Setting from "./Setting";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaHome, FaGetPocket } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlinePreview } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import CreateUser from "./CreateUser";
import { FaUserPlus } from "react-icons/fa";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState("home"); // State to manage selected tab
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const changeTab = (tabName) => {
    setSelectedTab(tabName);
  };
  const handleLogout = () => {
    toast.success("Logout!");
    logout();
  };
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen bg-white mt-[5%] flex-row">
      <div className="flex flex-col w-1/5 h-screen  border-r fixed">
        {/* Sidebar */}
        <div className="p-4 mt-2 border-b">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="py-4">
          {/* Navigation */}
          <ul>
            <li
              onClick={() => changeTab("home")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "home"
                  ? "text-black font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              {screenWidth >= 600 ? (
                <>
                  <FaHome className="mr-2" />
                  Home
                </>
              ) : (
                <FaHome className="mr-2" />
              )}
            </li>
            <li
              onClick={() => changeTab("addProduct")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "addProduct"
                  ? "text-black  font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              <IoIosAddCircle className="mr-2" />
              Add Dishes
            </li>
            <li
              onClick={() => changeTab("viewDishes")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "viewDishes"
                  ? "text-black  font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              <MdOutlinePreview className="mr-2" />
              View Dishes
            </li>
            <li
              onClick={() => changeTab("getOrder")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "getOrder"
                  ? "text-black font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              <FaGetPocket className="mr-2" />
              Get Order
            </li>
            <li
              onClick={() => changeTab("setting")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "setting"
                  ? "text-black font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              <IoMdSettings className="mr-2" />
              Setting
            </li>
            <li
              onClick={() => changeTab("createuser")}
              className={`flex flex-row items-center cursor-pointer py-2 pl-4 border-b-2 border-[#fbb800] ${
                selectedTab === "createuser"
                  ? "text-black font-bold bg-[#fbb800] rounded-sm border-r-4 border-r-black"
                  : ""
              }`}
            >
              <FaUserPlus className="mr-2" />
              Create User
            </li>
            {/* Add more navigation items as needed */}
          </ul>
          <div className="  bg-[#FEC013] bottom-32 py-2 w-full rounded-sm flex justify-center mt-4">
            <button
              onClick={handleLogout}
              className="font-semibold  flex flex-row items-center"
            >
              <IoLogOut className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[120vh] w-4/5 p-8  ml-[20%]">
        {/* Main Content */}
        {selectedTab === "home" && (
          <div>
            <Home />
            {/* Add home content */}
          </div>
        )}
        {selectedTab === "addProduct" && (
          <div>
            <AddProduct />
          </div>
        )}
        {selectedTab === "viewDishes" && (
          <div>
            <ViewProduct />
            {/* Add content for Add Product page */}
          </div>
        )}
        {selectedTab === "getOrder" && (
          <div>
            <GetOrder />
            {/* Add content for Delete Product page */}
          </div>
        )}
        {selectedTab === "setting" && (
          <div>
            <Setting />
            {/* Add content for Delete Product page */}
          </div>
        )}
        {selectedTab === "createuser" && (
          <div>
            <CreateUser />
            {/* Add content for Delete Product page */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
