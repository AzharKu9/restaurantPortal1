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
      name: '',
      address: '',
      phone: '',
      email: '',
      image: null

    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, 'Must be at least 5 characters').required('Required'),
      address: Yup.string().min(11, 'Must be at least 12 characters').required('Required'),
      phone: Yup.string().min(10, 'Number is not valid').required('Required'),
      email: Yup.string().email('Invalid email address').required('Restaurant Email is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Create FormData object for handling file upload
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('address', values.address);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
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

        <div className="w-1/2 mt-[8%] mb-8">
          <div className="w-4/5 mx-auto bg-yellow-50 p-8 rounded-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Create Food Mania</h3>
              <div className='mb-4'>
                <label htmlFor="Name" className="block text-gray-800">Restaurant Name *</label>
                <input type="Name" placeholder='Enter Name' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-yellow-600">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="Phone" className="block text-gray-800">Restaurant Address *</label>
                <input type="Phone" placeholder='Enter Phone' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='address' value={formik.values.address} onChange={formik.handleChange} />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-yellow-600">{formik.errors.address}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="phone" className="block text-gray-800">Restaurant Phone *</label>
                <input type="number" placeholder='0333-xxxxxx' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-yellow-600">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className="block text-gray-800">Restaurant Email *</label>
                <input type="email" placeholder='xyz@gmail.com' className='form-input w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name='email' value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-yellow-600">{formik.errors.email}</div>
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

