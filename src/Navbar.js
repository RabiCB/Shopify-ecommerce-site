import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import ShoppingCard from "./ShoppingCard";
import { Link, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import {UserAuth} from './AuthContext'


const Navbar = ({ themetoggler, theme }) => {
  const [nav, setNav] = useState(false);
  const { totalUniqueItems } = useCart();
  const [search, setSearch] = useState("");
  const [logoutbtn, setlogout] = useState(false);
  const {logout,currentUser}=UserAuth();
  return (
    <>
      <div className="navbar  relative">
        <div>
          <h4 className="text-xl font-bold">Shopify</h4>
        </div>
        <input
          className=" searchbar border-none h-7  rounded-sm outline-none pl-2 text-black max-sm:hidden"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className={nav ? "itemsExpanded" : "items"}>
          <li>
            <ReactSwitch onChange={themetoggler} checked={theme === "dark"} />
          </li>
          <div onClick={() => setlogout(!logoutbtn)} className="relative">
            {currentUser ? (
              <p className="cursor-pointer">{currentUser.email}</p>
            ) : (
              "no user"
            )}
            {logoutbtn ? (
              <button
                onClick={logout}
                className="border-2 absolute top-10 left-6 rounded-md bg-blue-600 text-md hover:bg-blue-400 w-20 flex items-center justify-center h-9 "
              >
                logout
              </button>
            ) : (
              ""
            )}
          </div>
          <Link style={{ textDecoration: "none" }} to="/login">
            <li className="border-2 rounded-md bg-blue-600 text-md hover:bg-blue-400 w-20 flex items-center justify-center h-9">
              SignIn
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <AiOutlineShoppingCart className="w-10 cursor-pointer hover:color-slate-300" />
          </Link>
          <span className="absolute  right-1 mb-7 max-md:hidden">
            {totalUniqueItems}
          </span>
          <GiCancel onClick={() => setNav(false)} className="cancel" />
        </ul>

        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setNav(!nav)} />
        </div>
      </div>
      <ShoppingCard search={search} />
    </>
  );
};

export default Navbar;
