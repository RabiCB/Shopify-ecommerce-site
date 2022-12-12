import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Form.css";
import { UserAuth } from "./AuthContext";




const Passwordreset = () => {
  const navigate = useNavigate();
  const [showpsw, setShowpsw] = useState(false);
  const [error, setError] = useState("");
  const [autherr,setAutherr]=useState("")
  const {passwordreset}=UserAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const initialform = {
    email: "",
    password: "",
  };
  
  const handleInput = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setError(validate(form))
      await passwordreset(form.email)
      setAutherr("please check your email/spam thank you")
      setForm(initialform)
      
      
    }
    catch(e){
      console.log(e.message)
    }
 
    
   
  };

  const validate = (values) => {
    const formerror = {};
  

    if (!values.email) {
      formerror.email = "please enter your email";
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
      

            <button  type="submit" className="btn">
              reset password
            </button>
            <div className="flex gap-10 mt-4 items-center">
             <Link style={{textDecoration:'none'}} to="/signup"><button  onClick={handleClick}className=" w-30 h-10 text-sm text-white text-center p-1 bg-green-400 rounded-md">
                Create account
              </button>
              </Link>
             <Link style={{textDecoration:'none'}} to="/login" ><button className=" text-sm text-white text-center h-10 p-1 bg-green-400 w-20 rounded-md">
                login
              </button>
              </Link>
            </div>
          </form>
        </div>
        <span className="icon ">
       
        </span>
       
      </div>
    </>
  );
};

export default Passwordreset;
