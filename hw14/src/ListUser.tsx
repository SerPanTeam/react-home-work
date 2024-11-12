// import { useNavigate } from "react-router-dom";
import { User } from "./Redux/interfaces";
import { delUser, modUser } from "./Redux/actions";
import { connect } from "react-redux";

export function ListUser({ users }: { users: User[] }) {
  // const navigate = useNavigate();
  return (
    <>
      <h2>List user</h2>
      {/* <button onClick={() => navigate("/user")}>Create new user</button> */}
      {users.map((val) => {
        return (
          <article style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              {val.firstName} {val.lastName} tel:{val.mobileNumber} email:{val.email}
            </p>
            <div role="group1" style={{ display: "flex", gap: "10px" }}>
              <button className="secondary">Edit</button>
              <button className="contrast">Delete</button>
            </div>
          </article>
        );
      })}
    </>
  );
}

// Функция для получения данных из состояния
const mapStateToProps = (state) => ({
  users: state.users,
});

// Функция для отправки действия
const mapDispatchToProps = {
  delUser,
  modUser,
};

// Подключение компонента к Redux с помощью connect
export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
