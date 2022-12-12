import React from "react";
import { useCart } from "react-use-cart";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, removeItem } = useCart();
  /*if (isEmpty)
    return (
      <div className="items-center justify-center mt-12 flex">
        <div className="flex items-center justify-center rounded-md bg-black h-6 w-40 text-white">
          your cart is empty
        </div>
      </div>
    );
*/
  return (
    <>
    <div className="h-16 relative bg-black text-white flex pr-8 pl-8 items-center justify-between">
            <Link style={{ textDecoration: "none" }} to="/">
              <h4 className="text-xl font-bold">Shopify</h4>
            </Link>
            <AiOutlineShoppingCart className="w-10 cursor-pointer hover:color-slate-300" />
            <span className="absolute text-white  right-8 mb-7 ">
              {totalUniqueItems}
            </span>
          </div>
      {!isEmpty ? (
        <>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-12  m-4 grid-rows-4 gap-5 max-md:grid-cols-2 max-md:grid-rows-6">
            {items.map((y) => {
              return (
                <div key={y.id}>
                  <div className="bg-cyan max-md:h-30 max-md:w-30 h-45 w-45 rounded-md border-2 flex gap-2  flex-col">
                    <div className=" flex justify-center items-center">
                      <img
                        className="w-96 h-96 object-contain rounded p-3  "
                        src={y.img}
                        alt="bag"
                      />
                    </div>
                    <div className="text-black flex items-center justify-center">
                      <p> ${y.price}</p>
                    </div>
                    <h6 className=" ml-2 ">{y.name}</h6>
                    <span className="cursor-pointer text-white ml-2 w-20 h-8 items-center flex justify-center rounded-md bg-green-400">
                      {y.rating}
                      <AiOutlineStar className="ml-2 text-white" />
                    </span>
                    <div className="ml-2">Onstock {y.quantity}</div>
                    <div className="p-2 max-md:text-sm flex items-center justify-center max-md:p-1  gap-6 max-md:gap-4">
                      <button className="border-2 max-sm:gap-8 max-md:p-0 m w-20 flex items-center justify-center h-10 text-center pb-1 pt-1 pr-2 pl-2 rounded-md">
                        Order
                      </button>
                      <button
                        className="border-2 max-sm:gap-8 max-md:p-0 m w-20 flex items-center justify-center h-10 text-center pb-1 pt-1 pr-2 pl-2 rounded-md"
                        onClick={() => removeItem(y.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="items-center justify-center mt-12 flex">
            <div className="flex items-center justify-center rounded-md bg-black h-6 w-40 text-white">
              your cart is empty
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
