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
