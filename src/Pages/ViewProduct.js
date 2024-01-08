import React, { useContext, useEffect, useState } from "react";
import ModalUpdate from "./ModalUpdate";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Skeleton } from 'antd';

const ViewProduct = () => {
  const [modelOpen, setModalOpen] = useState(false);
  const [foodItem, setFoodItem] = useState(null);
  const [food, setFood] = useState([]);
  const [loading , setLoading] = useState(true);

  const { userToken } = useContext(AuthContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`http://localhost:3000/api/add/viewfood`, {
        method: "GET",
        headers: {
          authtoken: userToken,
        },
      });

      let data = await res.json();
      // console.log(data);
      if (data.success) {
        setFood(data.foodItems);
        setLoading(false);
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.error("Error fetching food:", error);
      toast.error("Failed to fetch food items. Please try again.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    let res = await fetch(`http://localhost:3000/api/add/deletefood/${id}`, {
      method: "DELETE",
      headers: {
        authtoken: userToken,
      },
    });
    let response = await res.json();
    if (response.success) {
      toast.success(response.message);
      setFood(food.filter((prev) => prev._id !== id));
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="container m-h-full max-w-full pb-20 bg-white">
      <h2 className="text-4xl mt-2 mb-4">View Food</h2>
      <hr className="mb-6"></hr>
      <div className="flex flex-wrap h-auto">
        {loading ? <Skeleton paragraph={{rows:8}}/>: 
         food.length === 0 ? (
          <span className="m-auto">
            <MdOutlineAddShoppingCart className="m-auto mt-16" size={48} />
            <h1 className="mt-2 text-lg">
              There is no food added in restauarnt  
            </h1>
          </span>
        ) : (
          food.map((item, index) => {
            return (
              <div
                key={index}
                className="h-1/3 w-[30%] mt-4 mx-3 rounded-md shadow-lg shadow-gray-400"
              >
                <img
                   style={{ height: '280px' , width:"100%" }}
                  src={item.image}
                  alt={item.foodTitle}
                  className="rounded-md"
                />
                <h2 className="px-3 py-1 mt-4 text-base font-sans font-semibold">
                  {item.foodTitle}
                </h2>
                <p className="px-3 py-1 text-base font-sans font-semibold">
                  {item.foodDescription}
                </p>
                <h2 className="px-3 py-1 text-base font-sans font-semibold">
                  {item.price} Rs.
                </h2>
                <h2 className="px-3 py-1 text-base font-sans font-semibold">
                  {" "}
                  {item.foodQuantity}
                </h2>
                <h2 className="px-3 py-1 text-base font-sans font-semibold">
                  {item.foodOffer}
                </h2>
                <div className="my-2 mx-2 flex flex-row">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setFoodItem(item);
                    }}
                    className="px-4 py-2 m-2 text-base font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded flex flex-row items-center"
                  >
                    <FaEdit className="mr-2" /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 m-2 text-base font-medium bg-[#FEC013] hover:bg-[#ffd04f] rounded flex flex-row items-center"
                  >
                    <IoTrashBin className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      
       
      </div>

      {modelOpen && (
        <ModalUpdate setModalOpen={setModalOpen} foodItem={foodItem} />
      )}
    </div>
  );
};

export default ViewProduct;
