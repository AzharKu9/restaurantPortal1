import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Skeleton } from "antd";
import { MdOutlineAddShoppingCart } from "react-icons/md";

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
        setLoading(false);
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

        {/* // this is update code of there is any error occur then you can match code with your github account */}
        {loading ? (
          <tr>
            <td className="text-center text-lg py-20" colSpan="5">
              <Skeleton paragraph={{ rows: 8 }} />
            </td>
          </tr>
        ) : order.length === 0 ? (
          <tr>
            <td colSpan={5}>
            <span  className="m-auto">
            <MdOutlineAddShoppingCart className="m-auto mt-16" size={48} />
            <h1 className="mt-2 text-lg text-center">
              There is no food added in restauarnt
            </h1>
          </span>
            </td>
          </tr>
         
        ) : (
          order.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan={2} className="p-1 border">
                  {item.orderNo}
                </td>
                <td rowSpan={2} className="p-1 border">
                  {item.userName}
                </td>
              </tr>
              {item.orderDetails.map((detail, detailIndex) => (
                <tr key={detailIndex} className="">
                  <td className="p-1 border">
                    <div>
                      <div>Food Title: {detail.foodTitle}</div>
                      <div>Food Quantity: {detail.qty}</div>
                      <div>Price: ${detail.totalPrice}</div>
                      {/* Add more details as needed */}
                    </div>
                  </td>
                  <td className="p-1 border">{detail.status}</td>
                  <td className="p-1 border">
                    <select
                      className="p-2"
                      onChange={(e) =>
                        updateOrder(
                          item.orderNo,
                          detail.foodNo,
                          detail.resturantAuth,
                          e.target.value
                        )
                      }
                    >
                      <option value="">~Update status~</option>
                      <option value="ride">Ride</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))
        )}
      </table>
    </div>
  );
};

export default GetOrder;
