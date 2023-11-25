import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const Login = () => {
  const navigation = useNavigate()
  const [name  , setName] = useState("")
  const [password , setPassword] = useState("")
  const {login} = useContext(AuthContext)
  const handleRedirect = () => {
    navigation('/signup')
  }
  const handleChange = (e) =>{
    if (e.target.name === 'name')setName(e.target.value)
    if (e.target.name === 'password')setPassword(e.target.value)
  }

  const handleLogin = (e)=>{
    e.preventDefault()
    if(name.length >=3&&password.length>=7){
      login(name , password)
    }else{
      alert("Fild must be appopriate")
    }
  }
  return (
    <>
      <div className='login template flex justify-center items-center min-h-screen bg-primary mt-8' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

        <div className="w-1/2 mt-[5%]  p-8 flex flex-col">
          <h1 className="text-white text-4xl font-semibold mb-4">Food Mania Login</h1>
          <p className="text-white text-2xl font-semibold mb-4">Embark on a culinary adventure with Food Mania, where every dish tells a story of flavor and every bite is a chapter of delight! 🍝✨</p>
        </div>

        <div className="w-1/2 mt-[8%]">
          <div className="w-4/5 mx-auto bg-yellow-50 p-8 rounded-lg">
            <form>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sign In </h3>
              <div className='mb-4'>
                <label htmlFor="email" className="block text-gray-800">Name *</label>
                <input
                  type="text" name='name' value={name} onChange={handleChange}
                  placeholder="Enter userName"
                  className="form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]"
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="password" className="block text-gray-800">Password *</label>
                <input type="password" placeholder='Enter Password' className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]'  name='password' value={password} onChange={handleChange} />
              </div>
              <div className='grid mt-4'>
                <button onClick={handleLogin} className="btn btn-primary bg-[#FEC013] py-2 rounded-lg">Login</button>
              </div>
            </form>
          </div>

          <div className='m-auto mt-4 bg-yellow-50 w-4/5 p-3 rounded-lg text-center mb-8'>
            <p className='py-2 px-2 font-sans text-base'>Let`s build your business together with amazing platform. Where you can increase your business digitally...</p>
            <button onClick={handleRedirect} className="btn btn-primary bg-[#FEC013] py-2 rounded-lg w-full my-4">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login