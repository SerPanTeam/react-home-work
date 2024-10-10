import { useState } from "react";
//import './App.css'
import styles from "./App.module.css";
import imgSpotify from './assets/spotify.png';


function App() {
  return (
    <div className={styles.container}>
      <header>
        <img src={imgSpotify} alt="" />
      </header>
      <main>
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <p>Sign in</p>
        <p>with</p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </main>
    </div>
  );
}

export default App;
