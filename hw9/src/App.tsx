import { useForm } from "react-hook-form";
// import { useState } from 'react'
import Select from "./Select";
import "./App.css";

interface IdataForm {
  type: string;
  vid: string;
  typeDom: string;
  roomMin: number;
  roomMax: number;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<IdataForm>();
  const vidValue = watch("vid");

  function onSubmit(data: IdataForm) {
    console.log(data);
  }

  return (
    <main className="container main">
      <article>
        <h1>Поиск</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            defaultValue="Аренда или продажа"
            optionsArray={["Аренда", "Продажа"]}
            register={register("type")}
          />
          <Select
            defaultValue="Вид недвижимости"
            optionsArray={["Квартира", "Дом", "Участок"]}
            register={register("vid")}
          />
          {vidValue === "Дом" && (
            <Select
              defaultValue="Тип дома"
              optionsArray={["Дом", "Часть дома", "Дача"]}
              register={register("typeDom")}
            />
          )}
          {(vidValue === "Дом" || vidValue === "Квартира") && (
            <div className="row">
              <label htmlFor="">Комнат от: </label>
              <input
                type="number"
                {...register("roomMin", {
                  min: { value: 1, message: "Минимум 1 комната" },
                })}
                {...(errors.roomMin
                  ? { "aria-invalid": true }
                  : dirtyFields.roomMin
                  ? { "aria-invalid": false }
                  : {})}
              />
              <label htmlFor="">до:</label>
              <input
                type="number"
                {...register("roomMax", {
                  min: { value: 1, message: "Минимум 1 комната" },
                })}
              />
            </div>
          )}
          {(vidValue === "Дом" || vidValue === "Участок") && (
            <div className="row">
              <label htmlFor="">Участок от(сот.): </label>
              <input type="number" />
              <label htmlFor="">до:</label>
              <input type="number" />
            </div>
          )}
          <button type="submit" onClick={console.log(errors)}>
            Поиск
          </button>
          <button type="reset" onClick={reset}>
            Очистить
          </button>
          <div className="errors">
            {(Object.keys(errors) as (keyof IdataForm)[]).map((errorKey) => (
              <p key={errorKey} style={{ color: "red" }}>
                {errors[errorKey]?.message}
              </p>
            ))}
          </div>
        </form>
      </article>
    </main>
  );
}

export default App;
