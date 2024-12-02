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
