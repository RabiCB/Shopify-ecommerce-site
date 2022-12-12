import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Items } from "./Data";
import { useCart } from "react-use-cart";
import { useState } from "react";
import {Link} from 'react-router-dom';

const ShoppingCard = ({ search }) => {
  const [shopitem, setShopitem] = useState(Items);
  const { addItem } = useCart();
  const [info, setInfo] = useState(false);

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-12  m-4 grid-rows-4 gap-5 max-md:grid-cols-2 max-md:grid-rows-6">
      {shopitem
        .filter((x) => {
          if (search === "") {
            return x;
          } else if (
            x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return x;
          }
        })
        .map((x) => {
          return (
            <div key={x.id} className="relative">
              <div className="bg-cyan hover:border-green-400  max-md:h-30 max-md:w-30 h-45 w-45 rounded-md border-2 flex gap-2  flex-col"
               >
                <div className=" flex justify-center items-center">
                  <img
                    className="w-96 h-96 object-contain rounded p-3  "
                    src={x.img}
                    alt="bag"
                  />
                </div>
                <div className="text-black flex items-center justify-center">
                  <p>${x.price}</p>
                </div>
                <h6 className=" ml-2 ">{x.name}</h6>
                <div
                 onMouseOver={(x) => setInfo(true)}
                 onMouseOut={() => setInfo(false)}
                  className="cursor-pointer text-black ml-2 w-20 h-8 items-center flex justify-center rounded-md bg-green-600"
                >
                  {x.rating}
                  <AiOutlineStar  className="ml-2 text-white" />
                </div>
                <div className="ml-2">Onstock {x.quantity}</div>
                <div className="p-2 max-md:text-sm flex items-center justify-center max-md:p-1  gap-6 max-md:gap-4">
                  <button
                    className="border-2  w-20 flex items-center justify-center h-10 text-center pb-1 pt-1 pr-2 pl-2 rounded-md"
                    onClick={() => addItem(x)}
                  >
                    Addtocart
                  </button>
                  <Link to="/signin"><button className="border-2 max-sm:gap-8 max-md:p-0 m w-20 flex items-center justify-center h-10 text-center pb-1 pt-1 pr-2 pl-2 rounded-md">
                    Order
                  </button>
                  </Link>
                </div>
              </div>
              {info && (
                <div className="absolute bottom-7 ml-4 mr-4 bg-green-200 rounded-md m-auto h-15 w-30 flex items-center justify-center ">
                  <p className="p-2 font-5">{x.about}</p>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ShoppingCard;
