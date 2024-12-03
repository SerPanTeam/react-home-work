import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { newQuote } from "./quoteSlice";

function App() {
  const dispach = useDispatch();
  const quote = useSelector((state: RootState) => state.quote);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl">Random Quote Generator</h1>
          <p className="italic mt-10">{quote.quoteText}</p>
          <p className="text-xl font-bold mt-10 text-right">
            {quote.quoteAutor}
          </p>
          <button
            onClick={() => {
              dispach(newQuote());
            }}
            className="bg-blue-200 w-full p-5 mt-5 rounded-lg shadow-lg"
          >
            Get new Quote!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
