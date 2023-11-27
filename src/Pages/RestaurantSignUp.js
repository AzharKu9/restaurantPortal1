import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { useNavigate , Navigate} from 'react-router-dom';

const SignUp = () => {
  const { signup  , userToken} = useContext(AuthContext);
  const navigate = useNavigate();

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
      password: Yup.string().min(7, 'Must be at least 7 characters').required('Required'),
    }),
    onSubmit: (values) => {
      // Call your signup function with form values
      signup(values.name, values.email, values.phone, values.password);

      // Reset the form after submission
      formik.resetForm();

      // Navigate to the desired page after successful signup
      navigate('/Dashboard'); // Change the path as needed
    },
  });
  if (userToken !== null) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <div className='login template flex justify-center items-center min-h-screen bg-primary mt-6' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

        <div className="w-1/2 mt-[5%]  p-8 flex flex-col">
          <h1 className="text-white text-4xl font-semibold mb-4">Food Mania SignUp</h1>
          <p className="text-white text-2xl font-semibold mb-4">Embark on a culinary adventure with Food Mania, where every dish tells a story of flavor and every bite is a chapter of delight! 🍝✨</p>
        </div>

        <div className="w-1/2 mt-[8%] mb-8">
          <div className="w-4/5 mx-auto bg-yellow-50 p-8 rounded-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h3>
              <div className='mb-4'>
                <label htmlFor="Name" className="block text-gray-800">Name *</label>
                <input
                  type="text"
                  placeholder='Enter Name'
                  className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-yellow-600">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className="block text-gray-800">Email *</label>
                <input
                  type="email"
                  placeholder='Enter Email'
                  className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-yellow-600">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="Phone" className="block text-gray-800">Phone *</label>
                <input
                  type="number"
                  placeholder='Enter Phone'
                  className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]'
                  name='phone'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-yellow-600">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className='mb-4'>
                <label htmlFor="password" className="block text-gray-800">Password *</label>
                <input
                  type="password"
                  placeholder='Enter Password'
                  className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]'
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-yellow-600">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className='grid mt-4'>
                <button type="submit" className="btn btn-primary bg-[#FEC013] py-2 rounded-lg">
                  Get Started!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
