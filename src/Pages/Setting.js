import React, { useContext, useEffect, useState } from "react";
import SettingModal from "./settingModal";
import { AuthContext } from "../context/AuthContext";

const Setting = () => {
  const [modelOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [account , setAccount] = useState()
  const  {userToken} = useContext(AuthContext)

  const fetchSetting  = async()=>{
    try {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/add/viewrestaurant`,{
        headers:{
          authtoken:userToken
        }
      })
      const response = await res.json()
      if(response.success){
        setAccount(response.restaurant)
        setLoading(false)
        console.log(account);
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchSetting()
  },[])

  if(loading){
    return <div className="mt-12 font-semibold text-xl items-center">Updating Account...</div>
  }
  return (
    <div className="container min-h-screen max-h-full">
      <h2 className="text-4xl mt-2 mb-4">Setting</h2>
      <hr className="mb-6"></hr>
      <div className="flex flex-col">
        <img
          style={{ height: "280px", width: "100%" }}
          src={account?.image}
          alt={account?.restaurantName}
          className="rounded-md"
        />
        <div>
          <div className="">
            <h1 className="text-center m-10 text-2xl font-sans">The Account</h1>
            <div className="px-4 flex flex-wrap">
              <div className="px-2 w-full md:w-[33%]">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-medium text-black"
                  >
                    Restaurant Id
                  </label>
                  <input
                    type="name"
                    id="firstname"
                    name="firstName"
                    value={account?._id}
                    readOnly
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-semibold  "
                  />
                </div>
              </div>
              <div className="px-2 w-full md:w-[33%]">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-medium text-black"
                  >
                    Restaurant No
                  </label>
                  <input
                    type="name"
                    id="lastname"
                    name="lastName"
                    value={account?.restaurantNo}
                    readOnly
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-semibold"
                  />
                </div>
              </div>
              <div className="px-2 w-full md:w-[33%]">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-base font-medium text-black"
                  >
                    Resturant Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={account?.restaurantName}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-500 py-1 px-3 font-semibold leading-8 transition-colors duration-200 ease-in-out"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="px-6 w-full">
              <div className="">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base font-medium text-black"
                  >
                    Restaurant Address
                  </label>
                  <input
                    type="name"
                    id="lastname"
                    name="lastName"
                    value={account?.restaurantAddress}
                    readOnly
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-semibold"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-base font-medium text-black"
                >
                  Restaurant Description
                </label>
                <textarea
                  type="email"
                  name="address"
                  value={account?.restaurantDescription}
                  readOnly
                  className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b mb-[5rem] ">
          <button
             onClick={() => {
              setModalOpen(!modelOpen);
            }}
            className="bg-[#FEC013] text-black active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-yellow-400 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Update Account
          </button>
        </div>
      </div>
      {modelOpen && (<SettingModal setModalOpen={setModalOpen} setAccount={setAccount} account={account} setLoading={setLoading}/>)}
    </div>
  );
};

export default Setting;
