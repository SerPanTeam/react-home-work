import { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

import { Product } from "../interfaces";

const PRODUCT_URL = "https://674d748d635bad45618b60ec.mockapi.io/productData";

export default function Home() {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    const fetchProds = async () => {
      const response = await axios.get(PRODUCT_URL);
      console.log(response.data);
      setProds(response.data);
    };

    fetchProds();
  }, []);

  const dispatch = useDispatch();
  const handleOnClickButton = (product: Product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <>
      <img src="/img/banner.jpg" alt="" />
      <h2 className="text-[36px] font-black leading-none mt-[72px]">Товары</h2>
      <hr className="bg-gray-600 mx-4 mt-9 mb-11"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {prods.map((val: Product) => {
          return (
            <div
              key={val.id}
              className="rounded-[42px] border border-black/15 p-8"
            >
              <img src={val.image}></img>
              <p className="text-[24px]">{val.name}</p>
              <p className="text-[#666] text-[14px] font-medium uppercase leading-normal mt-10">
                Цена
              </p>
              <div className="flex justify-between">
                <p className="text-black font-inter text-[24px] font-bold leading-normal">
                  ${val.price}
                </p>
                <button
                  onClick={() => handleOnClickButton(val)}
                  className="w-10 h-10 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center bg-white hover:invert transition duration-300"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
