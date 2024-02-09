import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Skeleton } from "antd";


const OrderDetailModal = ({ setIsModal, order, setOrder, oneItem}) => {
  console.log("OneItem",oneItem);
  const [loading, setLoading] = useState(false);
  const { userToken } = useContext(AuthContext);

  const updateOrder = async (orderNo, resturantAuth, status) => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:3000/api/updateorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authToken: userToken,
        },
        body: JSON.stringify({
          orderNo,
          resturantAuth,
          status,
        }),
      });
      let res = await response.json();
      if (res.success) {
        toast.success(res.message);
        setOrder((prevOrder) => prevOrder.filter((x) => x.orderNo !== orderNo));
        setIsModal(false);
        setLoading(false)
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-16">
        <div className="relative w-3/4 mx-auto max-w-full h-[95%] max-h-[800px] mt-6">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold font-sans text-black">
                View Order Details
              </h3>
              <button
                className="p-1 ml-auto border-0 text-[#FEC013] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsModal(false)}
              >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            {/* <div className="relative p-6 flex-auto h-96 overflow-y-auto custom-scrollbar">
            </div> */}
            <div className="container max-w-[100%] overflow-x-scroll custom-scrollbar  h-full">
              {loading ? (
                <div>
                  <Skeleton paragraph={{ rows: 8 }} />
                </div>
              ) : oneItem.length === 0 ? (
                <div>Order Not Found</div>
              ) : (
                <div className="h-full">
                  <div>
                        <div className="text-base font-normal font-sans mx-4 my-2">
                          <h1 className="pt-1">Order No: {oneItem.orderNo}</h1>
                          <h1 className="pt-1">
                            Customer Name: {oneItem.userName}
                          </h1>
                          <h1 className="pt-1">
                            Total Ammount: {oneItem.totalAmount} Rs.
                          </h1>
                          <h1 className="pt-1">
                            Total Quantity: {oneItem.totalQty}
                          </h1>
                          <h1 className="pt-1">
                            Status: {oneItem.orderDetails[0].status}
                          </h1>
                          <h1 className="pt-1">
                            Order Recive Time: {oneItem.createdAt}
                          </h1>
                        </div>
                        <div className="flex flex-wrap">
                          {oneItem.orderDetails.map((itemDetails, index) => {
                            return (
                              <div
                                key={index}
                                className="flex flex-col w-[27%] h-[27%] border-2 border-[#FEC013] px-4 py-2 m-4 rounded-md"
                              >
                                <h1>Food No: {itemDetails.foodNo}</h1>
                                <h1>Food Title: {itemDetails.foodTitle}</h1>
                                <h1>
                                  Food Quantity: {itemDetails.foodQuantity}
                                </h1>
                                <h1>Food Price: {itemDetails.price} Rs.</h1>
                                <h1>Food Order Qty: {itemDetails.qty}</h1>
                              </div>
                            );
                          })}
                        </div>
                        <select
                          className="mx-4 mt-2 mb-4 p-2 bg-[#FEC013] rounded-md float-right"
                          onChange={(e) =>
                            updateOrder(
                              oneItem.orderNo,
                              oneItem.orderDetails[0].resturantAuth,
                              e.target.value
                            )
                          }
                        >
                          <option>~Update status~</option>
                          <option value="ride">Ride</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default OrderDetailModal;
