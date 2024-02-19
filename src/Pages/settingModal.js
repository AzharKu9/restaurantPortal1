import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { toast } from 'react-toastify';


const SettingModal = ({ setModalOpen , account, setLoading, setAccount}) => {

  const { userToken } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      restaurantName: account?.restaurantName || "",
      restaurantDescription: account?.restaurantDescription || "",
      restaurantAddress: account?.restaurantAddress || "",
      restaurantPhone: account?.restaurantPhone || "",
      restaurantEmail: account?.restaurantEmail || "",
      image: account?.image || null,
    },
    validationSchema: Yup.object({
      restaurantName: Yup.string()
        .min(4, "Must be at least 5 characters")
        .required("Required"),
      restaurantDescription: Yup.string()
        .min(12, "Must be at least 5 characters")
        .required("Required"),
      restaurantAddress: Yup.string()
        .min(11, "Must be at least 12 characters")
        .required("Required"),
      restaurantPhone: Yup.string()
        .min(10, "Number is not valid")
        .required("Required"),
      restaurantEmail: Yup.string()
        .email("Invalid restaurantEmail restaurantAddress")
        .required("Restaurant restaurantEmail is required"),
      image: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true)
        // Create FormData object for handling file upload
        const formData = new FormData();
        formData.append("restaurantName", values.restaurantName);
        formData.append("restaurantDescription", values.restaurantDescription);
        formData.append("restaurantAddress", values.restaurantAddress);
        formData.append("restaurantPhone", values.restaurantPhone);
        formData.append("restaurantEmail", values.restaurantEmail);
        formData.append("image", values.image);
        const response = await fetch(
          "http://localhost:3000/api/add/updaterestaurant",
          {
            method: "PUT",
            headers: {
              authToken: userToken,
            },
            body: formData, // Use FormData for file uploads
          }
        );

        const data = await response.json()
        if (data.success) {
          toast.success(data.message);
          formik.resetForm();
          setLoading(false)
          setModalOpen(false)
          setAccount(data.restaurant)
        } else {
          toast.error(data.message || "Failed to create restaurant.");
          setModalOpen(false)
        }
      } catch (error) {
        console.log(error);
        console.error("Error creating restaurant:", error);
        setModalOpen(false)
        // Log the specific error message from the server (if available)
      }
    },
  });
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-2/3 mx-auto max-w-full h-[70%]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold font-sans text-black">
                Update your Restaurant Account
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
            <div className="relative p-6 flex-auto h-96 overflow-y-auto custom-scrollbar">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.restaurantName}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.restaurantName && formik.errors.restaurantName ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.restaurantName}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Restaurant Description
                  </label>
                  <input
                    type="text"
                    id="restaurantDescription"
                    name="restaurantDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.restaurantDescription}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.restaurantDescription && formik.errors.restaurantDescription ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.restaurantDescription}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Restaurant Address
                  </label>
                  <input
                    type="text"
                    id="restaurantAddress"
                    name="restaurantAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.restaurantAddress}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.restaurantAddress && formik.errors.restaurantAddress ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.restaurantAddress}
                    </div>
                  ) : null}

                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Restaurant Phone
                  </label>
                  <input
                    type="number"
                    id="restaurantPhone"
                    name="restaurantPhone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.restaurantPhone}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.restaurantPhone && formik.errors.restaurantPhone ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.restaurantPhone}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Restaurant Email
                  </label>
                  <input
                    type="email"
                    id="restaurantEmail"
                    name="restaurantEmail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.restaurantEmail}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.restaurantEmail && formik.errors.restaurantEmail ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.restaurantEmail}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    name="image"
                    onChange={(event) => {
                      formik.setFieldValue('image', event.currentTarget.files[0]);
                    }}
                    onBlur={formik.handleBlur}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.image && formik.errors.image ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.image}
                    </div>
                  ) : null}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FEC013] text-black active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-yellow-400 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Update Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SettingModal;
