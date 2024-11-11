import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function FormUser() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => { console.log(data) };
  //console.log(errors);

  return (
    <>
      <h2>{id ? `Edit user id:${id}` : "New user"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName",
            {
              required: { value: true, message: "Name - required" },
              maxLength: { value: 80, message: "Max Name - 80 chars" }
            }
          )
          }
        />
        {/* {errors["firstName"] && <mark className="">{errors["firstName"].message}</mark>} */}
        {errors["firstName"] && <mark className="">Error</mark>}

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        {errors["lastName"] && <mark className="">Error</mark>}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}

        />
        {errors["Email"] && <mark className="">Error</mark>}
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

        <input type="submit" />
      </form>
    </>
  );
}
