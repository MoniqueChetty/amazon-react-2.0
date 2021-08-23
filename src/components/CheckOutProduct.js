import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckOutProduct({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    // Sending product as an action to Redux Store... Basket slice
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <CurrencyFormat
            value={price.toFixed(2)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£ "}
          />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right  Button area */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="mt-auto button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
