import React, { useEffect, useState } from 'react';


const GetOrder = () => {

  return (
    <div className='container  min-h-screen max-h-full'>
      <h2 className='text-4xl mt-2 mb-4'>Get Order</h2>
      <hr className='mb-6'></hr>
      <table className="w-full border-collapse border">
  <thead>
    <tr className="bg-yellow-300">
      <th className="p-2 border">Order No</th>
      <th className="p-2 border">Food Title</th>
      <th className="p-2 border">Food Quantity</th>
      <th className="p-2 border">Food Price</th>
      <th className="p-2 border">Status</th>
      <th className="p-2 border">Change Status</th>
      <th className="p-2 border">Received Time</th>
      <th className="p-2 border"></th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-50">
      <td className="p-2 border">1</td>
      <td className="p-2 border">Burger</td>
      <td className="p-2 border">2</td>
      <td className="p-2 border">$10.00</td>
      <td className="p-2 border">Pending</td>
      <td className="p-2 border">
        <select className="p-2">
          <option>Completed</option>
          <option>Rejected</option>
        </select>
      </td>
      <td className="p-4 border"></td>
    </tr>
    {/* Add more rows as needed */}
  </tbody>
</table>

    </div>
  )
}

export default GetOrder