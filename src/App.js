import { UserContext } from "./Context";
import "./App.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Signup from "./Signup";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import { CartProvider } from "react-use-cart";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ProtectedRoutes from "./ProtectedRoutes";
import Passwordreset from "./Passwordreset";
function App() {
  const [theme,setTheme]=useState(localStorage.getItem("theme") || "light")
 
  const themetoggler=()=>{
    if(theme==="light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }
  useEffect(()=>{
    document.body.className=theme;
    localStorage.setItem("theme",theme)

  },[theme])
 



  return (
  <div className={`app${theme}`}>
  <BrowserRouter>
  <CartProvider>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<ProtectedRoutes><Navbar theme={theme} themetoggler={themetoggler}/></ProtectedRoutes>}></Route>
      <Route path="/cart" element={ <ProtectedRoutes><Cart/></ProtectedRoutes>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/passwordreset" element={<Passwordreset/>}></Route>

    </Routes>
    </AuthProvider>
    </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
