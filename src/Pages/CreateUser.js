import React from "react";

const CreateUser = () => {
  return (
    <>
      <div className="container min-h-screen max-h-full">
        <h2 className="text-4xl mt-2 mb-4">Create User</h2>
        <hr className="mb-6"></hr>
        <div className="flex flex-col">
          <img
            style={{ height: "280px", width: "100%" }}
            src={"image.avif"}
            alt="restaurantimage"
            className="rounded-md"
          />
          <div>
            <div className="">
              <h1 className="text-center m-10 text-2xl font-sans">
                Create Secondary User
              </h1>
              <div className="px-4 flex flex-wrap">
                <div className="px-2 w-1/2">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium text-black"
                    >
                      Name
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
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-medium text-black"
                    >
                      Email
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
                    <label
                      htmlFor="email"
                      className="leading-7 text-base font-medium text-black"
                    >
                      Phone
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
                <div className="px-2 w-1/2">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-base font-medium text-black"
                    >
                      Password
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
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b mb-[10rem] ">
          <button
            type="button"
            className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#FEC013] text-black active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-yellow-400 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Create User
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
