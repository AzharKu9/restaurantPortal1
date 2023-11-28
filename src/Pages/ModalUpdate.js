import React from "react";


const ModalUpdate = ({ setModalOpen }) => {


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-2/3 mx-auto max-w-5xl h-[70%]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold font-sans text-black">
                Update your food
              </h3>
              <button
                className="p-1 ml-auto  border-0 text-[#FEC013]  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto h-72 overflow-y-auto" >
              <form>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Title
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="email"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Description
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="email"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Quantity
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="email"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Price
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="email"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Offer
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
              <button
                className="bg-[#FEC013] text-black active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-yellow-400 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

    </>
  );
};

export default ModalUpdate;
