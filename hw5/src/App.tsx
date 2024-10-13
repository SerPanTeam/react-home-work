import styles from "./App.module.css";
import imgSpotify from "./assets/spotify.png";

import AppleLogo from "./Logos";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={imgSpotify} alt="" />
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <h1>LIFE IS WASTED ON THE LIVING</h1>
          <p>Sign in</p>
          <p>with</p>
          <div className={styles.buttons}>
            <AppleLogo
              logoName="apple"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
            <AppleLogo
              logoName="google"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
            <AppleLogo
              logoName="x"
              className={styles.icon}
              fillColor="#1ED760" // Цвет заливки SVG
              backgroundColor="#0C0417" // Цвет фона контейнера
              width="110"
              height="110"
              viewBox="0 0 110 110"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
