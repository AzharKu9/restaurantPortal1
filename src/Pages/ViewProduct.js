import React, { useContext, useEffect, useState } from 'react';
import ModalUpdate from './ModalUpdate';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const ViewProduct = () => {

  const [modelOpen, setModalOpen] = useState(false)
  const [foodItem, setFoodItem] = useState(null);
  const [food, setFood] = useState([])
  const { userToken } = useContext(AuthContext)

  const fetchData = async () => {
    try {
      let res = await fetch(`http://localhost:3000/api/add/viewfood`, {
        method: 'GET',
        headers: {
          'authtoken': userToken
        }
      });

      let data = await res.json();
      if (data.success) {
        setFood(data.foodItems);
      } else {
        
      }
    } catch (error) {
      console.error('Error fetching food:', error);
      toast.error('Failed to fetch food items. Please try again.');
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []); 

  const handleDelete = async (id) => {
    let res = await fetch(`http://localhost:3000/api/add/deletefood/${id}`, {
      method: "DELETE",
      headers: {
        "authtoken": userToken
      }
    });
    let response = await res.json();
    if (response.success) {
      toast.success(response.message);
      setFood(food.filter(prev=>prev._id !== id));
    } else {
      toast.error(response.message);
    }
  };
  

  return (
    <div className='container m-h-full max-w-full pb-20 bg-white'>
      <h2 className='text-4xl mt-2 mb-4'>View Food</h2>
      <hr className='mb-6'></hr>
      <div className='flex flex-wrap  justify-center h-auto'>
        {food.length === 0 ? <h1 className='mt-4 text-lg'>There is no food added in restauarnt</h1> : food.map((item, index) => {
          return (
            <div key={index} className='h-1/3 w-[30%] mt-4 mx-3 rounded-md shadow-lg shadow-gray-400' >
              <img src='./image.avif' alt={item.foodTitle} />
              <h2 className='px-3 py-1 mt-4 text-base font-sans font-semibold'>{item.foodTitle}</h2>
              <p className='px-3 py-1 text-base font-sans font-semibold'>{item.foodDescription}</p>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'>{item.price} Rs.</h2>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'> {item.foodQuantity}</h2>
              <h2 className='px-3 py-1 text-base font-sans font-semibold'>{item.foodOffer}</h2>
              <div className='my-2 mx-2'>
                <button onClick={() => {
                  setModalOpen(true);
                  setFoodItem(item);
                }} className='px-4 py-2 m-2 text-lg font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Update</button>
                <button onClick={()=>handleDelete(item._id)} className='px-4 py-2 m-2 text-lg font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>

      {modelOpen && <ModalUpdate setModalOpen={setModalOpen} foodItem={foodItem} />}

    </div>
  );
};

export default ViewProduct;
