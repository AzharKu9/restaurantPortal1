import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      foodTitle: '',
      foodDescription: '',
      foodQuantity: 0,
      price: 0,
      image: null, // New field for image upload
    },
    validationSchema: Yup.object({
      foodTitle: Yup.string().required('Food title is required'),
      foodDescription: Yup.string().required('Food Description is required'),
      foodQuantity: Yup.number().required('Quantity is required').positive('Quantity must be positive'),
      price: Yup.number().required('Price is required').positive('Price must be positive'),
      image: Yup.mixed().required('Image is required'), // Validation for image upload
    }),
    onSubmit: (values) => {
      // Handle the form submission logic here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className='container  min-h-screen max-h-full'>
      <h2 className='text-4xl mt-2 mb-4'>Add Food</h2>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data" className='mb-4'>
        <div className="mb-3 flex flex-col">
          <label htmlFor="productname" className="form-label">Food Title</label>
          <input
            type="text"
            className={`form-control mt-2 w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.foodTitle && formik.errors.foodTitle ? 'border-yellow-500' : ''}`}
            id="foodTitle"
            name="foodTitle"
            value={formik.values.foodTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.foodTitle && formik.errors.foodTitle && (
            <p className="text-yellow-500 mt-1">{formik.errors.foodTitle}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="productname" className="form-label">Food Description</label>
          <input
            type="text"
            className={`w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-control mt-2 ${formik.touched.foodDescription && formik.errors.foodDescription ? 'border-yellow-500' : ''}`}
            id="foodDescription"
            name="foodDescription"
            value={formik.values.foodDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.foodDescription && formik.errors.foodDescription && (
            <p className="text-yellow-500 mt-1">{formik.errors.foodDescription}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="foodQuantity" className="form-label">Food Quantity</label>
          <input
            type="text"
            className={`form-control rounded mt-2 w-full bg-white  border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${formik.touched.foodQuantity && formik.errors.foodQuantity ? 'border-yellow-500' : ''}`}
            id="foodQuantity"
            name="foodQuantity"
            value={formik.values.foodQuantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.foodQuantity && formik.errors.foodQuantity && (
            <p className="text-yellow-500 mt-1">{formik.errors.foodQuantity}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="productname" className="form-label">Food Price</label>
          <input
            type="number"
            className={`form-control border-2 border-[#FEC013] rounded mt-2 w-full bg-white focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${formik.touched.price && formik.errors.price ? 'border-yellow-500' : ''}`}
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-yellow-500 mt-1">{formik.errors.price}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="productimage" className="form-label">Food Image</label>
          <input
            type="file"
            accept="image/*"
            className={`form-control mt-2 w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${formik.touched.image && formik.errors.image ? 'border-yellow-500' : ''}`}
            id="image"
            name="image"
            onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image && (
            <p className="text-yellow-500 mt-1">{formik.errors.image}</p>
          )}
        </div>
        <button type='submit' className='bg-[#FEC013] px-4 py-2 m-1 rounded-md' >Add Food</button>
      </form >
    </div>
  );
};

export default AddProduct;
