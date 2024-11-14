import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User, AppState } from "./redux/interfaces";
import { connect } from "react-redux";
import { addUser, modUser } from "./redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function FormUser({
  users,
  addUser,
  modUser,
}: {
  users: User[];
  modUser: (user: User) => void;
  addUser: (user: User) => void;
}) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    if (id) {
      const newUser = { ...data, id: Number(id) };
      modUser(newUser);
    } else {
      const newUser = { ...data, id: Date.now() };
      addUser(newUser);
    }
    navigate("/");
  };
  //console.log(errors);

  useEffect(() => {
    // console.log(object);
    if (id) {
      reset(users.find((val: User) => val.id == Number(id)));
    }
  }, [id, users, reset]);

  return (
    <>
      <h2>{id ? `Edit user id:${id}` : "New user"}</h2>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: { value: true, message: "Name - required" },
            maxLength: { value: 80, message: "Max Name - 80 chars" },
          })}
        />
        {/* {errors["firstName"] && <mark className="">{errors["firstName"].message}</mark>} */}
        {errors["firstName"] && <mark className="">Error!</mark>}

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        {errors["lastName"] && <mark className="">Error!</mark>}

        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors["email"] && <mark className="">Error!</mark>}
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        {errors["mobileNumber"] && <mark className="">Error</mark>}

        <input type="submit" value={id ? `Save user` : "Create user"} />
      </form>
    </>
  );
}

// Функция для получения данных из состояния
const mapStateToProps = (state: AppState) => ({
  users: state.users,
});

// Функция для отправки действия
const mapDispatchToProps = {
  addUser,
  modUser,
};

// Подключение компонента к Redux с помощью connect
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
