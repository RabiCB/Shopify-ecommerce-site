import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import "./Form.css";
import { UserAuth } from "./AuthContext";
import Loader from "./Loader";
import { async } from "@firebase/util";



const Login = () => {
  const navigate = useNavigate();
  const [showpsw, setShowpsw] = useState(false);
  const [error, setError] = useState("");
  const [autherr,setAutherr]=useState("")
  const {login}=UserAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const initialform = {
    email: "",
    password: "",
  };
  const [loading,setLoading]=useState(false);
  const handleInput = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
  
    try{
      setError(validate(form))
      await login(form.email,form.password)
      navigate("/")


    }
    catch(e){
      console.log(e.message)
    }
 
    
   
  };

  const validate = (values) => {
    const formerror = {};
  

    if (!values.email) {
      formerror.email = "email is required";
    }
    if (!values.password) {
      formerror.password = "password is required";
    } else if (values.password.length < 6) {
      formerror.password = "password must be more than six characters";
    }
    return formerror;
  };
  const handleClick=()=>{
    navigate("/signup")
  }

  return (
    <>
      
      <div className="h-16 relative bg-black text-white flex- flex pr-8 pl-8 items-center justify-between">
        
          <h4 className="text-xl font-bold">Shopify</h4>
          <AiOutlineShoppingCart className="w-10 cursor-pointer hover:color-slate-300" />
        
      </div>
    
      {loading?(<div className="flex justify-center items-center mt-3"><Loader/></div>):null}

      <div className="login-form flex flex-col gap-5">
      <div className="  ">
          <p className="text-red-600 text-xs ">{autherr}</p>
        </div>
        <div className="login-input-form ">
          <form onSubmit={handleSubmit} className="form">
    
            <input
              type="text"
              onChange={handleInput}
              name="email"
              value={form.email}
              placeholder="enter your email"
            />
            <p className="error">{error.email}</p>
            <input
              name="password"
              value={form.password}
              onChange={handleInput}
              type={showpsw ? "text" : "password"}
              placeholder="enter your password"
            />
            <p className="error">{error.password}</p>

            <button  type="submit" className="btn">
              Login
            </button>
            <div className="flex gap-10 mt-4 items-center">
             <Link style={{textDecoration:'none'}} to="/signup"><button  onClick={handleClick}className=" text-sm text-white text-center p-1 bg-green-400 rounded-md">
                Create account
              </button>
              </Link>
             <Link style={{textDecoration:'none'}} to="/passwordreset" ><button className=" text-sm text-white text-center p-1 bg-green-400 rounded-md">
                forget password
              </button>
              </Link>
            </div>
          </form>
        </div>
        <span className="icon ">
        <BiShowAlt  onClick={() => setShowpsw(!showpsw)} />
        </span>
       
      </div>
    </>
  );
};

export default Login;
