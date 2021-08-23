import { useSession } from "next-auth/client";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className=" bg-gray-100 min-h-screen">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 mb-0 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1500}
            height={250}
            objectFit="contain"
            className="bg-[#BDE5F5] px-auto"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-3xl border-b-1 pb-4">
              {items.length === 0
                ? "Your Amazon basket is Empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                rating={item.rating}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="min-h-screen">
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-10 shadow-md h-full">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">
                  <CurrencyFormat
                    value={total.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£ "}
                  />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`mt-2 button ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
