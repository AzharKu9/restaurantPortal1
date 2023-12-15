import { useFormik } from 'formik';
import React, { useContext } from 'react'
import * as Yup from 'yup'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateRestaurant = () => {
 const {userToken} = useContext(AuthContext)
 const navigation = useNavigate()
  const formik = useFormik({
    initialValues: {
      restaurantName: '',
      restaurantDescription:'',
      restaurantAddress: '',
      restaurantPhone: '',
      restaurantEmail: '',
      image: null

    },
    validationSchema: Yup.object({
      restaurantName: Yup.string().min(4, 'Must be at least 5 characters').required('Required'),
      restaurantDescription: Yup.string().min(12, 'Must be at least 5 characters').required('Required'),
      restaurantAddress: Yup.string().min(11, 'Must be at least 12 characters').required('Required'),
      restaurantPhone: Yup.string().min(10, 'Number is not valid').required('Required'),
      restaurantEmail: Yup.string().email('Invalid restaurantEmail restaurantAddress').required('Restaurant restaurantEmail is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Create FormData object for handling file upload
        const formData = new FormData();
        formData.append('restaurantName', values.restaurantName);
        formData.append('restaurantDescription', values.restaurantDescription);
        formData.append('restaurantAddress', values.restaurantAddress);
        formData.append('restaurantPhone', values.restaurantPhone);
        formData.append('restaurantEmail', values.restaurantEmail);
        formData.append('image', values.image);
        const response = await fetch('http://localhost:3000/api/add/addresturant', {
          method: 'POST',
          headers: {
            'authToken': userToken,
          },
          body: formData,  // Use FormData for file uploads
        });
    
        const data = await response.json();
    
        if (data.success) {
          toast.success(data.message);
          formik.resetForm();
          navigation('/login')

        } else {
          toast.error(data.message || 'Failed to create restaurant.');
        }
      } catch (error) {
        console.log(error);
        console.error('Error creating restaurant:', error);
        // Log the specific error message from the server (if available)
      }
    },
    
  });

  return (
    <>
      <div className='login template flex justify-center items-center min-h-screen bg-primary mt-6' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

        <div className="w-1/2 mt-[5%] p-8 flex flex-col">
          <h1 className="text-white text-4xl font-semibold mb-4">Food Mania Restaurant Creation</h1>
          <p className="text-white text-2xl font-semibold mb-4">Embark on a culinary adventure with Food Mania, where every dish tells a story of flavor and every bite is a chapter of delight! 🍝✨</p>
        </div>

        <div className="w-1/2 mt-[10%] mb-[10rem]">
          <div className="w-4/5 mx-auto bg-yellow-50 p-8 rounded-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Create Food Mania</h3>
              <div className='mb-4'>
                <label htmlFor="Name" className="block text-gray-800">Restaurant Name *</label>
                <input type="text" placeholder='Enter Name' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='restaurantName' value={formik.values.restaurantName} onChange={formik.handleChange} />
                {formik.touched.restaurantName && formik.errors.restaurantName ? (
                  <div className="text-yellow-600">{formik.errors.restaurantName}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="Name" className="block text-gray-800">Restaurant Description *</label>
                <input type="text" placeholder='Enter description' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='restaurantDescription' value={formik.values.restaurantDescription} onChange={formik.handleChange} />
                {formik.touched.restaurantDescription && formik.errors.restaurantDescription ? (
                  <div className="text-yellow-600">{formik.errors.restaurantDescription}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="restaurantPhone" className="block text-gray-800">Restaurant Address *</label>
                <input type="restaurantPhone" placeholder='Enter restaurantPhone' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='restaurantAddress' value={formik.values.restaurantAddress} onChange={formik.handleChange} />
                {formik.touched.restaurantAddress && formik.errors.restaurantAddress ? (
                  <div className="text-yellow-600">{formik.errors.restaurantAddress}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="restaurantPhone" className="block text-gray-800">Restaurant Phone *</label>
                <input type="number" placeholder='0333-xxxxxx' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='restaurantPhone' value={formik.values.restaurantPhone} onChange={formik.handleChange} />
                {formik.touched.restaurantPhone && formik.errors.restaurantPhone ? (
                  <div className="text-yellow-600">{formik.errors.restaurantPhone}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="restaurantEmail" className="block text-gray-800">Restaurant Email *</label>
                <input type="restaurantEmail" placeholder='xyz@gmail.com' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='restaurantEmail' value={formik.values.restaurantEmail} onChange={formik.handleChange} />
                {formik.touched.restaurantEmail && formik.errors.restaurantEmail ? (
                  <div className="text-yellow-600">{formik.errors.restaurantEmail}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="image" className="block text-gray-800">Upload Image (Image must be aesthetic)</label>
                <input
                  type="file"
                  placeholder='Upload File'
                  className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                  name='image'
                  onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="text-yellow-600">{formik.errors.image}</div>
                ) : null}
              </div>
              <div className='grid mt-4'>
                <button className="btn btn-primary bg-[#FEC013] py-2 rounded-lg">Create Restaurant</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRestaurant

