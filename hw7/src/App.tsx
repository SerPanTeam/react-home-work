import "@picocss/pico/css/pico.min.css";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <header>
          <select
            name="favorite-cuisine"
            aria-label="Select your language"
            required
          >
            <option selected value="en">
              English
            </option>
            <option value="de">Deutsch</option>
          </select>
        </header>
      </div>
    </LanguageProvider>
  );
}

export default App;
