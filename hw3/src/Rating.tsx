import { useState } from "react";
import r1 from "./assets/1.png";
import r2 from "./assets/2.png";
import r3 from "./assets/3.png";
import r4 from "./assets/4.png";
import r5 from "./assets/5.png";
const starImgArray = [r1, r2, r3, r4, r5];

export default function Rating() {
  const [raiting, setRaiting] = useState(1);

  return (
    <>
      <div>
        <img height="50px" src={starImgArray[raiting - 1]} alt="" />
      </div>
      <div>
        Оцените:
        <button onClick={() => setRaiting(1)}>1</button>
        <button onClick={() => setRaiting(2)}>2</button>
        <button onClick={() => setRaiting(3)}>3</button>
        <button onClick={() => setRaiting(4)}>4</button>
        <button onClick={() => setRaiting(5)}>5</button>
      </div>
    </>
  );
}
