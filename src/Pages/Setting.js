import React, { useEffect, useState } from "react";


const Setting = () => {
  return (
    <div className="container  min-h-screen max-h-full">
      <h2 className="text-4xl mt-2 mb-4">Setting</h2>
      <hr className="mb-6"></hr>
      <div className="flex flex-col">
        <img
          style={{ height: "280px", width: "100%" }}
          src={'image.avif'}
          alt="restaurantimage"
          className="rounded-md"
        />
        <div>
        <div className="mb-[10rem]">
      <h1 className='text-center m-10 text-2xl font-sans'>The Account</h1>
      <div className="px-4 flex">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-base font-medium text-black">
              Restaurant Id
            </label>
            <input
              type="name"
              id="firstname"
              name="firstName"
              readOnly
              className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-base font-medium text-black">
              Restaurant No
            </label>
            <input
              type="name"
              id="lastname"
              name="lastName"
              readOnly
              className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-base font-medium text-black">
              Resturant Name
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="px-6 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-base font-medium text-black">
            Restaurant Description
          </label>
          <textarea
            type="email"
            name="address"
            readOnly
            className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400  text-base outline-none text-yellow-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      {/* *This is accordian */}

      <div className='mx-6 mb-4' id="accordion-arrow-icon" data-accordion="open">
        <h2 id="accordion-arrow-icon-heading-2">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-yellow-500 border  bg-white rounded  border-[#FEC013] focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 hover:bg-yellow-100" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
            <span>Change you accout setting...</span>
            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
          </button>
        </h2>
        <div id="accordion-arrow-icon-body-2" className="hidden " aria-labelledby="accordion-arrow-icon-heading-2">
          <div className="p-5 border rounded border-yellow-400">
         <p>lorem
          jsdkgncv ,nviovcjkbjer cvber nvcigu
         </p>
          </div>
        </div>
      </div>

    </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
