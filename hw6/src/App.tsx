import "@picocss/pico/css/pico.min.css";
import UserProfile from "./UserProfile";
import styles from "./App.module.css";

function App() {


  return (
    <main className="container">
      <article
        className={styles.container}
      >
        <UserProfile></UserProfile>
      </article>
    </main>
  );
}

export default App;
