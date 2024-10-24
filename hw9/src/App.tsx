import { useForm } from 'react-hook-form';
// import { useState } from 'react'
import Select from "./Select"
import "./App.css";

interface IdataForm {
  type: string,
  vid: string,
  typeDom: string,
  roomMin: number,
  roomMax: number,
}

function App() {
  const { register, handleSubmit, watch } = useForm<IdataForm>();
  const vidValue = watch("vid");


  function onSubmit(data: IdataForm) {
    console.log(data);
  }

  return (
    <main className='container main'>
      <article>
        <h1>Поиск</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select defaultValue="Аренда или продажа" optionsArray={["Аренда", "Продажа"]} register={register("type")} />
          <Select defaultValue="Вид недвижимости" optionsArray={["Квартира", "Дом", "Участок"]} register={register("vid")} />
          {
            vidValue === "Дом" &&
            <Select defaultValue="Тип дома" optionsArray={["Дом", "Часть дома", "Дача"]} register={register("typeDom")} />
          }
          {
            (vidValue === "Дом" || vidValue === "Квартира") &&
            <div className='row'>
              <label htmlFor="">Комнат от: </label>
              <input type="number" {...register("roomMin", { min: { value: 1, message: "Минимум 1 комната" } })} />
              <label htmlFor="">до:</label>
              <input type="number" {...register("roomMax", { min: 0 })} />
            </div>
          }
          {
            (vidValue === "Дом" || vidValue === "Участок") &&
            <div className='row'>
              <label htmlFor="">Участок от(сот.): </label>
              <input type="number" />
              <label htmlFor="">до:</label>
              <input type="number" />
            </div>
          }
          <button type='submit'>Поиск</button>
          <button type='reset'>Очистить</button>
        </form>
      </article>
    </main>
  )
}

export default App
