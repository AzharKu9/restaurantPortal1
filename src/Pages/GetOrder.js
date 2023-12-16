import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const GetOrder = () => {
  const { userToken } = useContext(AuthContext);
  const [order, setOrder] = useState({
    withOutOrderDetails: [],
    foodItems: [],
  });

  const getOrder = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/getorder`, {
        method: "GET",
        headers: {
          authToken: userToken,
        },
      });
      let res = await response.json();
      if (res.success) {
        setOrder({
          withOutOrderDetails: res.withOutOrderDetails,
          foodItems: res.foodItems,
        });
      } else {
        console.log(res.message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const updateOrder = async (foodNo, resturantAuth, status) => {
    // const {foodNo, resturantAuth, status} = data; // Remove this line
    try {
      const response = await fetch(`http://localhost:3000/api/updateorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authToken: userToken,
        },
        body: JSON.stringify({
          foodNo,
          resturantAuth,
          status,
        }),
      });
      let res = await response.json();
      if (res.success) {
        toast.success(res.message);
        setOrder(order.filter((x) => x.foodItem.status !== "pending"));
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
            <th className="p-2 border">Food Title</th>
            <th className="p-2 border">Food Quantity</th>
            <th className="p-2 border">Food Price</th>
            <th className="p-2 border">Order Qty</th>
            <th className="p-2 border">Order Total</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Change Status</th>
            <th className="p-2 border">Received Time</th>
            {/* <th className="p-2 border"></th> */}
          </tr>
        </thead>
        <tbody>
          {order.withOutOrderDetails.length === 0 ||
          order.foodItems.length === 0 ? (
            <tr>
              <td colSpan="8">No orders!</td>
            </tr>
          ) : (
            order.withOutOrderDetails.map((orderItem, index) => (
              <tr key={index} className="">
                <td className="p-1 border">{orderItem.orderNo}</td>
                <td className="p-1 border">{orderItem.userName}</td>
                {order.foodItems.map((foodItem, foodIndex) => (
                  <React.Fragment key={foodIndex}>
                    <td className="p-1 border">{foodItem.foodTitle}</td>
                    <td className="p-1 border">{foodItem.foodQuantity}</td>
                    <td className="p-1 border">${foodItem.price}</td>
                    <td className="p-1 border">{foodItem.qty}</td>
                    <td className="p-1 border">{foodItem.totalPrice}</td>
                    <td className="p-1 border">{foodItem.status}</td>
                    <td className="p-1 border">
                      <select
                        onChange={(e) =>
                          updateOrder(
                            foodItem.foodNo,
                            foodItem.resturantAuth,
                            e.target.value
                          )
                        }
                        className="p-2"
                      >
                        <option value="delivered">Delivered</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    {/* <td className="p-2 border"></td> */}
                  </React.Fragment>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetOrder;
