import React, { useContext } from 'react';
import { useNavigate  , Navigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigation = useNavigate();
  
  const { login , userToken } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
      password: Yup.string().min(7, 'Password must be at least 7 characters').required('Required'),
    }),
    onSubmit: (values) => {
      login(values.name, values.password);
    },
  });
  if (userToken !== null) {
    return <Navigate to="/dashboard" />;
  }
  const handleRedirect = () => {
    navigation('/signup');
  };

  return (
    <>
      <div className='login template flex justify-center items-center min-h-screen bg-primary mt-12' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

        <div className="w-1/2 mt-[5%]  p-8 flex flex-col">
          <h1 className="text-white text-4xl font-semibold mb-4">Food Mania Login</h1>
          <p className="text-white text-2xl font-semibold mb-4">Embark on a culinary adventure with Food Mania, where every dish tells a story of flavor and every bite is a chapter of delight! 🍝✨</p>
        </div>

        <div className="w-1/2 mt-[10%]">
          <div className="w-4/5 mx-auto bg-yellow-50 p-8 rounded-lg">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sign In </h3>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-800'>
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Enter userName'
                  className={`form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013] ${
                    formik.touched.name && formik.errors.name ? 'border-[#FEC013]' : ''
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className='text-yellow-600 text-xs mt-1'>{formik.errors.name}</p>
                )}
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-800'>
                  Password *
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Enter Password'
                  className={`form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013] ${
                    formik.touched.password && formik.errors.password ? 'border-[#FEC013]' : ''
                  }`}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className='text-yellow-600 text-xs mt-1'>{formik.errors.password}</p>
                )}
              </div>
              <div className='grid mt-4'>
                <button type='submit' className='btn btn-primary bg-[#FEC013] py-2 rounded-lg'>
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className='m-auto mt-4 bg-yellow-50 w-4/5 p-3 rounded-lg text-center mb-[10rem]'>
            <p className='py-2 px-2 font-sans text-base'>Let`s build your business together with amazing platform. Where you can increase your business digitally...</p>
            <button onClick={handleRedirect} className='btn btn-primary bg-[#FEC013] py-2 rounded-lg w-full my-4'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
