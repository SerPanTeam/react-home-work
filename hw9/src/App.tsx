import { useForm, useWatch } from "react-hook-form";
// import { useState } from 'react'
import Select from "./Select";
import "./App.css";

interface IdataForm {
  type: string;
  vid: string;
  typeDom: string;
  roomMin: number;
  roomMax: number;
  sotMin: number;
  sotMax: number;
  priceMin: number;
  priceMax: number;
}

function App() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isSubmitting },
    reset,
  } = useForm<IdataForm>({ mode: "onChange" });

  const vidValue = watch("vid");

  const allFields = useWatch({ control });



  async function onSubmit(data: IdataForm) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  function getAriaInvalid(inputName: keyof typeof dirtyFields) {

    if (errors[inputName]) return { "aria-invalid": true };
    if (dirtyFields[inputName]) return { "aria-invalid": false }
    else return {};
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
                  max: { value: 10, message: "Максимум 10 комнат" },
                  validate: val => (!allFields.roomMax) || (val <= allFields?.roomMax) || "Количество комнат 'от' должно быть меньше или равно 'до'"
                })}
                {...getAriaInvalid("roomMin")}
              />
              <label htmlFor="">до:</label>
              <input
                type="number"
                {...register("roomMax", {
                  min: { value: 1, message: "Минимум 1 комната" },
                  max: { value: 10, message: "Максимум 10 комнат" },
                  validate: val => (!allFields.roomMin) || (val >= allFields?.roomMin) || "Количество комнат 'до' должно быть меньше или равно 'от'"

                })}
                {...getAriaInvalid("roomMax")}
              />
            </div>
          )}
          {(vidValue === "Дом" || vidValue === "Участок") && (
            <div className="row">
              <label htmlFor="">Участок от(сот.): </label>
              <input type="number"
                {...register("sotMin", {
                  min: { value: 0, message: "Минимум 0 соток" },
                })}
                {...getAriaInvalid("sotMin")}
              />
              <label htmlFor="">до:</label>
              <input type="number"
                {...register("sotMax", {
                  min: { value: 0, message: "Минимум 0 соток" },
                })}
                {...getAriaInvalid("sotMax")}
              />
            </div>
          )}
          <div className="row">
            <label htmlFor="">Цена от($): </label>
            <input className="price" type="number"
              {...register("priceMin", {
                min: { value: 0, message: "Цена не ниже нуля" },
              })}
              {...getAriaInvalid("priceMin")}
            />
            <label htmlFor="">до:</label>
            <input className="price" type="number"
              {...register("priceMax", {
                min: { value: 0, message: "Цена не ниже нуля" },
              })}
              {...getAriaInvalid("priceMax")}
            />
          </div>
          <button aria-busy={isSubmitting} type="submit" onClick={handleSubmit(onSubmit)}>
            Поиск
          </button>
          <button type="reset" onClick={reset}>
            Очистить
          </button>
          <div className="errors">
            <p style={{ color: "red" }}>
              {(Object.keys(errors) as (keyof IdataForm)[]).map((errorKey, i) => (
                <>
                  {((i > 0) && (errors[errorKey]?.message) ? ", " : "") + errors[errorKey]?.message}
                </>
              ))
              }
            </p>
          </div>
        </form>
      </article>
    </main>
  );
}

export default App;
