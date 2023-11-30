import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { toast } from 'react-toastify';


const ModalUpdate = ({ setModalOpen, foodItem }) => {
  
  const { userToken } = useContext(AuthContext)
  const initialValues = {
    foodTitle: foodItem.foodTitle || "",
    foodDescription: foodItem.foodDescription || "",
    foodQuantity: foodItem.foodQuantity || "",
    price: foodItem.price || 0,
    foodOffer: foodItem.foodOffer || "",
    image: foodItem.image || null,
  };

  const validationSchema = Yup.object({
    foodTitle: Yup.string().required("Required"),
    foodDescription: Yup.string().required("Required"),
    foodQuantity: Yup.string().required("Required"),
    price: Yup.number().required("Required").positive("Price cannot be negative"),
    foodOffer: Yup.string().required("Required"),
    image: Yup.mixed().required("Required"),
  });

  const onSubmit = async(values) => {
    try {
      const formData = new FormData();
      formData.append('foodTitle', values.foodTitle);
      formData.append('foodDescription', values.foodDescription);
      formData.append('foodQuantity', values.foodQuantity);
      formData.append('foodOffer', values.foodOffer);
      formData.append('price', values.price);
      formData.append('image', values.image);
      console.log('Request URL:', `http://localhost:3000/api/add/updatefood/${foodItem._id}`);
      const response = await fetch(`http://localhost:3000/api/add/updatefood/${foodItem._id}`, {
        method: 'PUT',
        headers: {
          'authToken': userToken,
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      const data = contentType && contentType.includes('application/json') ? await response.json() : await response.text();
  
      if (data.success) {
        toast.success(data.message);
        formik.resetForm();
      } else {
        toast.error(data.message || 'Failed to update food.');
      }
    } catch (error) {
      console.log(error);
      console.error('Error updating food:', error);
    }
    setModalOpen(false);
  };
  
  

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
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
            <div className="relative p-6 flex-auto h-96 overflow-y-auto custom-scrollbar">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Title
                  </label>
                  <input
                    type="text"
                    id="foodTitle"
                    name="foodTitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodTitle}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodTitle && formik.errors.foodTitle ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodTitle}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Description
                  </label>
                  <input
                    type="text"
                    id="foodDescription"
                    name="foodDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodDescription}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodDescription && formik.errors.foodDescription ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodDescription}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Quantity
                  </label>
                  <input
                    type="text"
                    id="foodQuantity"
                    name="foodQuantity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodQuantity}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodQuantity && formik.errors.foodQuantity ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodQuantity}
                    </div>
                  ) : null}

                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.price}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Offer
                  </label>
                  <input
                    type="text"
                    id="foodOffer"
                    name="foodOffer"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodOffer}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodOffer && formik.errors.foodOffer ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodOffer}
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
                    Update
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

export default ModalUpdate;
