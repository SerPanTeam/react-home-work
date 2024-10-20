import "@picocss/pico/css/pico.min.css";
import { LanguageProvider } from "./LanguageContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <LanguageProvider>
      <div className="container">
        
        <article>
          <Header></Header>
          <Main></Main>
        </article>
        <Footer></Footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
