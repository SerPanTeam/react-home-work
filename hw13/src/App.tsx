import style from "./styles/App.module.css"
import UserList from "./components/UserList";

function App() {

  return (
    <div className={style.container}>
      <h1>User List</h1>
      <UserList></UserList>
    </div >
  )
}

export default App
