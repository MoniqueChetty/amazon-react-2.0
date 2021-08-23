import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";

function ProductSingle({ id, title, price, description, category, image }) {
  console.log(id, title, price, description, category, image);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-1 text-xs italic text-gray-400">
        {category}
      </p>
      {/* <Image src={image} width={200} height={200} objectFit="contain" /> */}
      <h4 className="my-3 font-bold cursor-pointer">{title}</h4>
      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div> */}

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat
          //   value={price.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£ "}
        />
      </div>

      {/* {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      {!hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 opacity-0">
          <div className="h-12 text-white">F</div>
        </div>
      )} */}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default ProductSingle;
