import "@picocss/pico/css/pico.min.css";

function App() {
  return (
    <div className="container">
      <header>
        <select
          name="favorite-cuisine"
          aria-label="Select your language"
          required
        >
          <option selected value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </header>
    </div>
  );
}

export default App;
