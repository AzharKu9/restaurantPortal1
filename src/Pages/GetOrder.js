import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Skeleton } from "antd";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import OrderDetailModal from "./OrderDetailModal";

const GetOrder = () => {
  const { userToken } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModal , setIsModal] = useState(false);
  const [oneItem , setOneItem] = useState([])

  const handleModalClicked = (item)=>{
    setIsModal(!isModal)
    setOneItem(item)
  }
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
      console.log(res);
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

  return (
    <div className="container h-auto max-w-[100%] overflow-x-scroll custom-scrollbar">
      <h2 className="text-4xl mt-2 mb-4">Get Order</h2>
      <hr className="mb-6"></hr>
      <div className="flex flex-row bg-[#FEC013] w-full">
        <h1 className="my-2 mx-1 w-[16%]">Order No</h1>
        <h1 className="my-2 mx-1 w-[16%]">Customer Name</h1>
        <h1 className="my-2 mx-1 w-[16%]">Total Ammount</h1>
        <h1 className="my-2 mx-1 w-[16%]">Total Qunatity</h1>
        <h1 className="my-2 mx-1 w-[16%]">Status</h1>
        <h1 className="my-2 mx-1 w-[16%] ">See Details</h1>
      </div>
      {loading ? (
          <div>
            <div className="text-center text-lg py-20" colSpan="5">
              <Skeleton paragraph={{ rows: 8 }} />
            </div>
          </div>
        ) : order.length === 0 ? (
          <div>
            <div colSpan={5}>
            <span  className="m-auto">
            <MdOutlineAddShoppingCart className="m-auto mt-16" size={48} />
            <h1 className="mt-2 text-lg text-center">
              There is no food added in restauarnt
            </h1>
          </span>
            </div>
          </div>
         
        ) : (
          order.map((item, index) => (
              <div key={index} className="flex flex-row w-full">
                <h1 className="p-1 border w-[16.5%] px-2 pt-2">
                  {item.orderNo}
                </h1>
                <h1  className="p-1 border w-[16.5%] px-2 pt-2">
                  {item.userName}
                </h1>
                <h1  className="p-1 border w-[16.5%] px-2 pt-2">
                  {item.totalAmount}
                </h1>
                <h1  className="p-1 border w-[16.5%] px-2 pt-2">
                  {item.totalQty}
                </h1>
                <h1  className="p-1 border w-[16.5%] px-2 pt-2">
                  {item.orderDetails[0].status}
                </h1>
                <h1  className="p-1 border w-[16.5%] px-2 py-2">
                  <button onClick={()=>handleModalClicked(item)} className="bg-[#FEC013] px-3 py-2 rounded-sm my-2">View Details</button>
                </h1>
              </div>
          ))
        )}
      {isModal && (<OrderDetailModal setIsModal={setIsModal} setOrder={setOrder} order={order}  oneItem={oneItem}/>)}
    </div>
  );
};

export default GetOrder;


// Table
{/* <table className="w-full border-collapse border">
<thead>
  <tr className="bg-[#FEC013]">
    <th className="p-2 border">Order No</th>
    <th className="p-2 border">Customer Name</th>
    <th className="p-2 border">Total Ammount</th>
    <th className="p-2 border">Total Qunatity</th>
    <th className="p-2 border">Status</th>
    <th className="p-2 border">See Details</th>
  </tr>
</thead>

{/* // this is update code of there is any error occur then you can match code with your github account */}
// {loading ? (
//   <tr>
//     <td className="text-center text-lg py-20" colSpan="5">
//       <Skeleton paragraph={{ rows: 8 }} />
//     </td>
//   </tr>
// ) : order.length === 0 ? (
//   <tr>
//     <td colSpan={5}>
//     <span  className="m-auto">
//     <MdOutlineAddShoppingCart className="m-auto mt-16" size={48} />
//     <h1 className="mt-2 text-lg text-center">
//       There is no food added in restauarnt
//     </h1>
//   </span>
//     </td>
//   </tr>
 
// ) : (
//   order.map((item, index) => (
//     <React.Fragment key={index} className="flex flex-row">
//       <tr key={index}>
//         <td rowSpan={2} className="p-1 border">
//           {item.orderNo}
//         </td>
//         <td rowSpan={2} className="p-1 border">
//           {item.userName}
//         </td>
//         <td rowSpan={2} className="p-1 border">
//           {item.totalAmount}
//         </td>
//         <td rowSpan={2} className="p-1 border">
//           {item.totalQty}
//         </td>
//         <td rowSpan={2} className="p-1 border">
//           {item.orderDetails[0].status}
//         </td>
//         <td rowSpan={2} className="p-1 border">
//           <button onClick={()=>setIsModal(!isModal)} className="bg-[#FEC013] px-3 py-2 rounded-sm my-3">View Details</button>
//         </td>
//       </tr>
//     </React.Fragment>
//   ))
// )}
// }
