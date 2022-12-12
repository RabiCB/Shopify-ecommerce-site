import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import "./Form.css";
import { UserAuth } from "./AuthContext";

const Signup = () => {
  const { signup ,googlehandler} = UserAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [showpsw, setShowpsw] = useState(false);
  const [error, setError] = useState("");
  const [autherr, setAutherr] = useState("");
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
   
    try {
      setError(validate(form))
      await signup(form.email, form.password);
      navigate("/");
     
    } catch (e) {
      console.log(e.message);
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

  return (
    <>
      <div className="h-16 relative bg-black text-white flex- flex pr-8 pl-8 items-center justify-between">
        <Link style={{ textDecoration: "none" }} to="/">
          <h4 className="text-xl font-bold">Shopify</h4>
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="w-10 cursor-pointer hover:color-slate-300" />
        </Link>
      </div>
      <div className="login-form">
        <div>
          <p className="text-red-600 text-xs mb-3 ">{autherr}</p>
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

            <button type="submit" className="btn">
              Signup
            </button>
            <div className="flex gap-10 mt-4 items-center">
              <Link style={{ textDecoration: "none" }} to="/Login">
                {" "}
                <button className=" text-sm text-white  p-1 bg-green-400 rounded-md h-10 max-sm:text-xs">
                  Already have an account
                </button>
              </Link>
              <button onClick={googlehandler} className=" max-sm:text-xs text-sm h-10 text-white  p-1 bg-green-400 rounded-md">
                signup with google
              </button>
            </div>
          </form>
        </div>
        <span className="icon mb-2">
          <BiShowAlt onClick={() => setShowpsw(!showpsw)} />
        </span>
      </div>
    </>
  );
};

export default Signup;
