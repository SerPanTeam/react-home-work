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
