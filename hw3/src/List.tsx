import { useState } from "react";
import styles from "./List.module.css";
export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);
  return (
    <ul className={styles.list}>
      {people.map((val) => {
        return (
          <li className={styles.listItem} key={val.id}>
            {val.name}{" "}
            <button
              className={styles.removeButton}
              onClick={() => {
                setPeople(people.filter((item) => item.id != val.id));
              }}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}
