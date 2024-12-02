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
