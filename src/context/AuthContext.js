import {createContext , useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext("");

export const AuthProvider = ({children})=>{

    const [userToken,  setUserToken] = useState(null)
    const navigation =  useNavigate()
    const signup = async (name, email, phone, password) => {
        const userData = { name: name, email: email, phone: phone, password: password };
        console.log("userData", userData);
        try {
          const response = await fetch('http://localhost:3000/api/auth/resturantsignup', {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(userData), 
          });
      
          const data = await response.json(); 
          if (data.success && data.authToken) {
            setUserToken(data.authToken);
            localStorage.setItem('authToken', data.authToken);
            navigation('/createRestaurant')
          } else {
            // Todo: You can show a toast or handle the error message in a way that suits your application
            alert(data.message);
          }
        } catch (error) {
          console.log(error);
        }
      };

    const login =  async(name  , password)=>{
        const userData = {name:name, password:password}
        console.log(userData);
        try {
            const res = await fetch('http://localhost:3000/api/auth/resturantsignin',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify(userData)
            });
            const data = await res.json(); 
            if (data.success && data.authToken) {
              setUserToken(data.authToken);
              localStorage.setItem('authToken', data.authToken);
              navigation('/dashboard')
            } else {
              // Todo: You can show a toast or handle the error message in a way that suits your application
              alert(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const logout = () =>{
        setUserToken(null)
        localStorage.removeItem("authToken")
    }
 
    const isLoggedIn = () => {
      try {
        let userTokenValue = localStorage.getItem("authToken");
        setUserToken(userTokenValue);
      } catch (e) {
        console.log(`some error occurred ${e}`);
      }
    };
    useEffect(() => {
        isLoggedIn();
      }, [userToken]);
return(
    <AuthContext.Provider value={{signup ,login, userToken , logout , isLoggedIn}}>
        {children}
    </AuthContext.Provider>

)}
