
import React,{useContext ,useState} from 'react'
import ProductContext from '../context/product/ProductContext'

const AddProduct = () => {
  return (
    <div className='container'>
      <h2 className='text-4xl mt-2 mb-4'>Add Product</h2>
    <form className=''>
      <div className="mb-3 flex flex-col">
       <label for="Food title" className="form-label">Food title</label>
        <input type="text" className="form-control border-2 border-slate-200 rounded mt-2" id="productname" name="p_name" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="Food Description" className="form-label">Food Description</label>
        <input type="text" className="form-control border-2 border-slate-200 rounded mt-2" id="productcategory" name="p_category" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="Food Quantity" className="form-label">Food Quantity</label>
        <input type="text" className="form-control border-2 border-slate-200 rounded mt-2" id="productcompany" name="p_company" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="price" className="form-label">price</label>
        <input type="Number" className="form-control border-2 border-slate-200 rounded mt-2" id="productquantity" name="p_quantity" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="price" className="form-label"> Price</label>
        <input type="Number" className="form-control border-2 border-slate-200 rounded mt-2" id="productprice" name="p_price" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="productdiscount" className="form-label">Product Discount</label>
        <input type="Number" className="form-control border-2 border-slate-200 rounded mt-2" id="productdiscount" name="P_sale" />
      </div>
      <div className="mb-3 flex flex-col">
       <label for="productExtradiscount" className="form-label">Product Extra Discount</label>
        <input type="Number" className="form-control border-2 border-slate-200 rounded mt-2" id="productextradiscount" name="p_exsale"  />
      </div>
      
      <button type="submit" className="btn addcolor p-2 text-white rounded mt-2">Add Product</button>
  </form>
  </div>
  )
}

export default AddProduct