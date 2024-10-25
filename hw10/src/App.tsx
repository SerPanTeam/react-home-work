import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [curImg, setCurImg] = useState("");
  const set = new Set<string>()
  const [curImgArr, setCurImgArr] = useState<Set<string>>(set);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getImage();
  }, []);

  async function getImage() {
    try {
      setIsSubmitting(true);
      const imgUrl = (await axios.get("https://api.thecatapi.com/v1/images/search")).data[0].url;
      setCurImg(imgUrl);
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  }

  function addImgToArr() {
    const newSet = new Set(curImgArr).add(curImg);
    setCurImgArr(newSet);
    console.log(curImgArr);
  }

  function onImgClick(val: string) {
    const newSet = new Set(curImgArr);
    newSet.delete(val);
    setCurImgArr(newSet);
  }

  return (
    <div className='container'>
      <article>
        <h1>Random Cat Image</h1>
        <img className='bigImg' src={curImg} alt="" />
        <div role="group">
          <button aria-busy={isSubmitting} onClick={getImage}>Load New Image</button>
          <button className="secondary" onClick={addImgToArr}>Add to Favorites</button>
        </div>
      </article>
      <h2>Favorite cats</h2>
      <article className='favorites'>
        {Array.from(curImgArr).map((val) => {
          return (<img key={val} className='miniImg' src={val} alt="" onClick={() => onImgClick(val)} />)
        })
        }
      </article>
    </div>
  )
}

export default App