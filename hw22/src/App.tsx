import { useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchRandomQuote } from "./quoteSlice";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { useRef } from "react";

function App() {
  const quote = useSelector((state: RootState) => state.quote);
  const dispatch = useAppDispatch();
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  useEffect(() => {
    if (quote.status === "loading") {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [quote.status]);

  return (
    <>
      <LoadingBar color="#bfdbfe" height={5} shadow={true} ref={loadingBarRef} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg w-2/3 min-h-[400px]">
          <h1 className="text-2xl">Random Quote Generator</h1>
          {quote.status === "loading" && <p className="text-blue-200">Loading...</p>}
          {quote.status === "failed" && (
            <p className="text-red-500">Error: {quote.error}</p>
          )}{" "}
          {quote.status === "succeeded" && (
            <div>
              <p className="italic mt-10">{quote.quoteText}</p>
              <p className="text-xl font-bold mt-10 text-right">
                {quote.quoteAutor}
              </p>
              <button
                onClick={() => {
                  dispatch(fetchRandomQuote());
                }}
                className="bg-blue-200 w-full p-5 mt-5 rounded-lg shadow-lg"
              >
                Get new Quote!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
