import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Skeleton } from 'antd';

const GetOrder = () => {
  const { userToken } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrder = async () => {
    setLoading(true);
    try {
      let response = await fetch(`http://localhost:3000/api/getorder`, {
        method: "GET",
        headers: {
          authToken: userToken,
        },
      });
      let res = await response.json();
      if (res.success) {
        setOrder(res.orders);
        setLoading(false);
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const updateOrder = async (orderNo, foodNo, resturantAuth, status) => {
    try {
      const response = await fetch(`http://localhost:3000/api/updateorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authToken: userToken,
        },
        body: JSON.stringify({
          orderNo,
          foodNo,
          resturantAuth,
          status,
        }),
      });
      let res = await response.json();
      if (res.success) {
        toast.success(res.message);
        getOrder(); // Refresh the order data after update
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="container h-auto max-w-[100%] overflow-x-scroll custom-scrollbar">
      <h2 className="text-4xl mt-2 mb-4">Get Order</h2>
      <hr className="mb-6"></hr>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-[#FEC013]">
            <th className="p-2 border">Order No</th>
            <th className="p-2 border">Customer Name</th>
            <th className="p-2 border">Order Details</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Change Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <Skeleton paragraph={{rows:8}}/>:
          order.length === 0 ? (
            <tr>
              <td className="text-center text-lg py-20" colSpan="5">
                <span className="">
                  <MdOutlineRemoveShoppingCart 
                    className="m-auto mt-4"
                    size={48}
                  />
                  <h1 className="mt-2 text-lg">
                    No Order
                  </h1>
                </span>
              </td>
            </tr>
          ) : (
            order.map((item, index) => (
              <tr key={index} className="">
                <td className="p-1 border">{item.orderNo}</td>
                <td className="p-1 border">{item.userName}</td>
                <td className="p-1 border">
                  {item.orderDetails.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <div>Food Title: {detail.foodTitle}</div>
                      <div>Food Quantity: {detail.qty}</div>
                      <div>Price: ${detail.totalPrice}</div>
                      {/* Add more details as needed */}
                    </div>
                  ))}
                </td>
                <td className="p-1 border">{item.orderDetails[0].status}</td>
                <td className="p-1 border">
                  <select
                    className="p-2"
                    onChange={(e) =>
                      updateOrder(
                        item.orderNo,
                        item.orderDetails[0].foodNo,
                        item.orderDetails[0].resturantAuth,
                        e.target.value
                      )
                    }
                  >
                    <option value="">Update status</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetOrder;
