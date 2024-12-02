import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/cartSlice";
import { Product } from "../interfaces";
import { RootState } from '../redux/store';


export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleOnClickButton = (id: number) => {
    dispatch(delItem(id));
  };

  return (
    <>
      <h1 className="text-black text-[36px] font-bold leading-normal">
        Корзина
      </h1>
      <div className="flex gap-10">
        <div className="w-[70%] flex flex-col gap-4">
          {cartItems.map((val: Product) => {
            return (
              <div className="bg-gray-100 rounded-[10px] p-5 flex gap-5 justify-between">
                <img width="90px" src={val.image} alt="" />
                <p>{val.name}</p>
                <p>$ {val.price}</p>
                <button
                  onClick={() => handleOnClickButton(val.id)}
                  className="w-10 h-10 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center bg-white hover:invert transition duration-300"
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-[30%]">
          <p className="text-black text-[36px]  font-bold leading-normal text-center">
            Итого
          </p>
          {cartItems.map((val: Product) => {
            return (
              <p>
                {val.name} - {val.price}
              </p>
            );
          })}
          <hr />
          <p>
            Сумма:{" "}
            {cartItems.reduce(
              (acc: number, cur: Product) => acc + +cur.price,
              0
            )}
          </p>
        </div>
      </div>
    </>
  );
}
