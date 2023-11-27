import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from './Pages/Login';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RestaurantSignUp from './Pages/RestaurantSignUp';
import CreateRestaurant from "./Pages/CreateRestaurant";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    // <>
    //   <ProductState>
    //     <Router>
    //       {!localStorage.getItem("authtoken")?
    //        ( <Routes>
    //           <Route exact path="/" element={<Login/>}/>   
    //           {/* <Route exact path="/" element={<Login login={loginHandler} loggedIn={loggedIn}/>}/>    */}
    //         </Routes>):(
    //                   <Sidebar>
    //                   <Routes>
    //                     <Route exact path="/" element={<Dashboard />} />
    //                     <Route
    //                       exact
    //                       path="/product/addproduct"
    //                       element={<AddProduct />}
    //                     />
    //                     <Route
    //                       exact
    //                       path="/product/updateproduct"
    //                       element={<UpdateProduct />}
    //                     />
    //                     <Route
    //                       exact
    //                       path="/product/getproduct"
    //                       element={<ViewProduct />}
    //                     />
    //                     <Route
    //                       exact
    //                       path="/product/deleteproduct"
    //                       element={<DeleteProduct />}
    //                     />
    //                     <Route
    //                       exact
    //                       path="/createuser"
    //                       element={<CreateUser/>}
    //                     />
    //                     <Route
    //                       exact
    //                       path="/createinvoice"
    //                       element={
    //                         <CreateInvoice
    //                           saveCart={saveCart}
    //                           addToCart={addToCart}
    //                           cart={cart}
    //                           subtotal1={subtotal1}
    //                           totalQuantity1={totalQuantity1}
    //                           totalDiscount1={totalDiscount1}
    //                           totalExDiscount1={totalExDiscount1}
    //                           removeToCart={removeToCart}
    //                           editCart={editCart}
    //                         />
    //                       }
    //                     />
    //                   </Routes>
    //                </Sidebar>
    //         )
    //       }

            
    //     </Router>
    //   </ProductState>
    // </>
  <>
  <Router>
  <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RestaurantSignUp/>} />
          <Route element={<PrivateRoute/>}>
          <Route path="/createrestaurant" element={<CreateRestaurant />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
  </Router>
  </>
    );
}

export default App;
