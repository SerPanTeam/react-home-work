# Структура проекта

```plaintext
├── node_modules
├── public
│   ├── img
│   │   └── banner.jpg
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages
│   │   ├── Cart.tsx
│   │   ├── Contacts.tsx
│   │   └── Home.tsx
│   ├── redux
│   │   ├── cartSlice.tsx
│   │   └── store.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── interfaces.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# Файлы .ts, .tsx, .css

## src\App.tsx

```typescript
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";



function App() {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <Header />
        <div className="w-full h-min-[calc(100vh-457px)] bg-white py-7">
          <main className="max-w-[1024px] h-full mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contacts" element={<Contacts />} />{" "}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

```

## src\components\Footer.tsx

```typescript
import { Facebook, Twitter, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <div className="w-full h-[347px] bg-customGray ">
      <footer className="max-w-[1024px] h-full mx-auto flex flex-col justify-between text-white/50 text-[18px] px-4 py-16">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[24px]">Контакты</h3>
            <p>8 800 000 00 00</p>
            <p>emailexample@email.com</p>
          </div>
          <div className="flex justify-evenly gap-8">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>2024 Сникер-магазин. Все права защищены</div>
          <input
            type="email"
            placeholder="example@mail.com"
            className="w-80 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
          />
        </div>
      </footer>
    </div>
  );
}

```

## src\components\Header.tsx

```typescript
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-[110px] bg-customGray">
      <header className="max-w-[1024px] h-full mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-[20px] font-black leading-none">
          Сникер - магазин
        </h1>
        <nav>
          <ul className="text-white/50 flex gap-8 text-[15px] font-semibold">
            <li className="hover:text-white">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/cart"
              >
                Корзина
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/contacts"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

```

## src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## src\interfaces.ts

```typescript
export interface Product {
    id: number;
    price: number;
    name: string;
    image: string;
  }
```

## src\main.tsx

```typescript
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

## src\pages\Cart.tsx

```typescript
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

```

## src\pages\Contacts.tsx

```typescript
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Contacts() {
  return (
    <>
      <h1 className="text-black font-montserrat text-[36px] font-bold leading-normal">
        Контакты
      </h1>
      <hr className="mt-12" />

      <ul className="mt-[116px]">
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <div className="flex justify-between mt-16 gap-10">
        <div className="w-[70%]">
          <form>
            <div className="">
              <div className="flex justify-between gap-10">
                <input
                  className="p-6 bg-[#FAFAFA] w-full"
                  type="text"
                  placeholder="Ваш email"
                />
                <input
                  className="p-6 bg-[#FAFAFA] w-full"
                  type="text"
                  placeholder="Ваше имя"
                />
              </div>
              <textarea
                className="p-6 w-full bg-[#FAFAFA] mt-10"
                name=""
                id=""
                placeholder="Введите сообщение"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="p-5 bg-black text-white rounded-[10px]" type="submit">Отправить</button>
            </div>
          </form>
        </div>
        <div className="rounded-[10px] bg-[#FAFAFA] w-[30%]">
          <p className="text-center mt-5">Найдите нас</p>
          <div className="flex justify-evenly gap-8 mt-10">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </>
  );
}

```

## src\pages\Home.tsx

```typescript
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

```

## src\redux\cartSlice.tsx

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    delItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((val) => val.id != action.payload);
    },
  },
});

export const { addItem, delItem } = cartSlice.actions;

export default cartSlice.reducer;

```

## src\redux\store.tsx

```typescript
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

```

## src\vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-home-work/hw18/dist/",

})

```

# Дополнительные файлы

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

