import "./App.css";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from './Pages/Login';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RestaurantSignUp from './Pages/RestaurantSignUp';
import CreateRestaurant from "./Pages/CreateRestaurant";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './PrivateRoute'
import AddProduct from "./Pages/AddProduct";

function App() {
  return (

  <>
  <Router>
  <AuthProvider>
        <Navbar />
        <Routes>
        <Route
            path="/"
            element={<Navigate to="/login" />}
          />
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
