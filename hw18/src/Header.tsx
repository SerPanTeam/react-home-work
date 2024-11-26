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
              <a href="/">Главная</a>
            </li>
            <li className="hover:text-white">
              <a href="/">Корзина</a>
            </li>
            <li className="hover:text-white">
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
