import React, { useContext, useEffect, useState } from 'react';
import ModalUpdate from './ModalUpdate';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const ViewProduct = () => {
  const [modelOpen, setModalOpen] = useState(false)
  const [food, setFood] = useState()
  const { userToken } = useContext(AuthContext)
  const fetchFood = async () => {
    let res = await fetch('http://localhost:3000/api/add/viewfood', {
      method: 'GET',
      headers: {
        'authtoken': userToken
      }
    })
    let data = await res.json()
    if (data.success) {
      setFood(data.foodItems)
      toast.success(data.message);
    }
    else {
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchFood()
  }, [])
  return (
    <div className='container m-h-full max-w-full pb-20 bg-white'>
      <h2 className='text-4xl mt-2 mb-4'>View Food</h2>
      <hr className='mb-6'></hr>
      <div className='flex flex-wrap  justify-center h-auto'>
        {!food ? <h1>Not Found</h1> : food.map((item, index) => {
          return (
            <div key={index} className='h-1/3 w-[30%] mt-4 mx-3 rounded-md shadow-lg shadow-gray-400' >
              <img src='./image.avif' alt={item.foodTitle} />
              <h2 className='px-3 py-1 mt-4 text-base font-sans font-semibold'><strong>Food Title:</strong> {item.foodTitle}</h2>
              <p className='px-3 py-1 text-base font-sans font-semibold'> <strong>Food Description:</strong> {item.foodDescription}</p>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'><strong>Food Price:</strong> {item.price} Rs.</h2>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'><strong>Food Quantity:</strong> {item.foodQuantity}</h2>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'><strong>Food Offer</strong> {item.foodOffer}</h2>
              <div className='my-2 mx-2'>
                <button onClick={() => setModalOpen(true)} className='px-4 py-2 m-2 text-lg font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Update</button>
                <button className='px-4 py-2 m-2 text-lg font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Delete</button>
              </div>
            </div>
          )
        })}







        {/* <div className='h-[30rem] overflow-auto custom-scrollbar'>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Title
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Description
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Quantity
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Price
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Offer
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Update
                </th>
                <th className='p-2 bg-[#FEC013] border-r-2 border-black pt-3 pb-3 text-left sticky top-0'>
                  Food Delete
                </th>
              </tr>
            </thead>
            <tbody className='h-auto overflow-auto'>
              <tr>
                <td className='p-2 bg-yellow-50 text-center'>walesdgfdgfdsg</td>
                <td className='p-2 bg-yellow-50 text-center'>walesdgfdgfdsg walesdgfdg walesfdfdgfdgfdsg</td>
                <td className='p-2 bg-yellow-50 text-center'>1 kg</td>
                <td className='p-2 bg-yellow-50 text-center'>550</td>
                <td className='p-2 bg-yellow-50 text-center'>walesdgfdgfdsg</td>
                <td className='p-2 bg-yellow-50 text-center'>
                  <button onClick={()=>setModalOpen(true)} className='p-2 m-2 bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Update</button>
                </td>
                <td className='p-2 bg-yellow-50 text-center'>
                  <button className='p-2 m-2 bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Delete</button>
                </td>
              </tr>
  
            </tbody>
          </table>
        </div> */}
      </div>


      {modelOpen && <ModalUpdate setModalOpen={setModalOpen} />}
    </div>
  );
};

export default ViewProduct;
