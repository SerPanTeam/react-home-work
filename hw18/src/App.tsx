import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="w-full h-min-[calc(100vh-457px)] bg-white py-7">
        <main className="max-w-[1024px] h-full mx-auto">
          <img src="/img/banner.jpg" alt="" />
          <h2 className="text-[36px] font-black leading-none">Товары</h2>
          <hr className="bg-gray-600 mx-4"></hr>
          <div>
            <div className="w-[30%] rounded-[42px] border border-black/15">
              Мужские Кроссовки Nike Air Zoom Pegasus
            </div>
            <div className="w-[30%] rounded-[42px] border border-black/15">
              Мужские Кроссовки Nike Air Zoom Pegasus
            </div>
            <div className="w-[30%] rounded-[42px] border border-black/15">
              Мужские Кроссовки Nike Air Zoom Pegasus
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
