import React, { useState } from 'react';
import App from '../App';
import ModalUpdate from './ModalUpdate';
const ViewProduct = () => {
  const [modelOpen , setModalOpen] = useState(false)
  return (
    <div className='container max-w-5xl bg-white'>
      <h2 className='text-4xl mt-2 mb-4'>View Food</h2>
      <hr className='mb-6'></hr>
      <div className=''>
        <div className='h-[30rem] overflow-auto custom-scrollbar'>
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
        </div>
      </div>

      {modelOpen && <ModalUpdate setModalOpen={setModalOpen} />}
    </div>
  );
};

export default ViewProduct;
