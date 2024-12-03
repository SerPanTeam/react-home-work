import { useDispatch, useSelector } from "react-redux"; // Импортируем хук для dispatch и state
import { setAnswer, setResult } from "./questionsSlice"; // Импортируем action
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();

  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  const result = useSelector((state: RootState) => state.questions.result);

  return (
    <div className="container mx-auto border border-grey-500 p-5 m-5 rounded-xl">
      <h1 className="text-3xl font-bold underline">Home work #21</h1>

      <h2 className="text-2xl font-bold mt-5">Вопросы по Реакту:</h2>
      {questions.map((question, questionID) => {
        return (
          <div
            key={"d" + questionID}
            className="m-2 p-2 rounded-xl border border-green-400"
          >
            <label key={"l" + questionID}>
              <p>{question.question}</p>
              {question.answer.map((answer, answerID) => {
                return (
                  <div key={"l" + questionID + "-" + answerID}>
                    <input
                      key={answerID}
                      type="radio"
                      name={"l" + questionID}
                      onChange={() => {
                        dispatch(setAnswer({ questionID, answerID }));
                        //console.log(questionID, answerID);
                      }}
                    />
                    {answer}
                  </div>
                );
              })}
            </label>
          </div>
        );
      })}
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(setResult());
          }}
          className="bg-slate-400 p-5 m-5 rounded-xl"
        >
          Закончить тест!
        </button>
      </div>
      {result && (
        <>
          <h2 className="text-2xl font-bold mt-5">Ваш результат: {result}</h2>
        </>
      )}
    </div>
  );
}

export default App;
