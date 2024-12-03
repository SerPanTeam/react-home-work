// import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux"; // Импортируем хук для dispatch и state
import { RootState } from "./store";


interface USER {
  id: number;
  name: string;
  email: string;
}

function App() {
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch(); // Инициализируем dispatch
  const users = useSelector((state: RootState) => state.users.users); // Получаем пользователей из state
  console.log(users);

  return (
    <>
      <h1>HW 20</h1>
      <ul>
        {users.map((val: USER) => {
          return (
            <li key={val.id}>
              {val.name} - {val.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
