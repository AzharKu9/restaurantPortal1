import React, {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const SignUp = () => {
  const {signup} = useContext(AuthContext)
  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')
  const [phone ,setPhone] = useState('')
  const [password ,setPassword] = useState('')

  
  const handleChange = (e) =>{
    if(e.target.name === 'name')setName(e.target.value)
    if(e.target.name === 'email')setEmail(e.target.value)
    if(e.target.name === 'phone')setPhone(e.target.value)
    if(e.target.name === 'password')setPassword(e.target.value)
  }

    const handleGetStarted  =() =>{
        if(name.length>=3&&email.includes('@','.com') && phone>=10 && password.length>=7){
          signup(name , email , phone , password)
          setName("")
          setEmail("")
          setPhone("")
          setPassword("")
        }else{
          alert("All Filed must be appopraite")
        }
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
            <form>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h3>
              <div className='mb-4'>
                <label htmlFor="Name" className="block text-gray-800">Name *</label>
                <input type="Name" placeholder='Enter Name' className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]' name='name' value={name} onChange={handleChange} />
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className="block text-gray-800">Email *</label>
                <input type="email" placeholder='Enter Email' className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]' name='email' value={email} onChange={handleChange} />
              </div>
              <div className='mb-4'>
                <label htmlFor="Phone" className="block text-gray-800">Phone *</label>
                <input type="number" placeholder='Enter Phone' className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]' name='phone' value={phone} onChange={handleChange} />
              </div>
              <div className='mb-4'>
                <label htmlFor="password" className="block text-gray-800">Password *</label>
                <input type="password" placeholder='Enter Password' className='form-input w-full py-2 px-3 border border-[#FEC013] rounded-md focus:outline-none focus:border-[#FEC013]' name='password' value={password} onChange={handleChange} />
              </div>
              <div className='grid mt-4'>
                <button onClick={handleGetStarted} className="btn btn-primary bg-[#FEC013] py-2 rounded-lg">Get Started!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    );
};

export default SignUp

