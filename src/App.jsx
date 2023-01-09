import "./styles/App.css";
import { useForm } from "react-hook-form";
import { Year } from "./components/Year/Year";
import { monthValidate, yearValidate } from "./utils/validate-form";
import { useState } from "react";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.year, data.month);
    <Year year={data.year} month={data.month} />
  };


  return (
    <div className="App">
      <form>
        {/* // id="myForm"
        // onSubmit={handleSubmit(onSubmit)}> */}
        <div id="divFormMonth">
          <label> Introduce el mes: </label>
          <input
            type="text"
            {...register("month", {
              validate: monthValidate,
            })}
            id="month"
            name="month"
            placeholder="enero..."
          />
        </div>
        {errors.month && <p>Esto no es un Mes del Año</p>}
        <div id="divFormYear">
          <label> Introduce el año: </label>
          <input
            type="text"
            {...register("year", {
               validate: yearValidate,
               required: "Obligatorio poner el Año",
            })}
            id="year"
            name="year"
            placeholder="2000"
          />
        </div>
        {errors.year && <p>Esto no es un Año</p>}
        <p>{errors.year?.message}</p>
        <div id="divExplicacion">
          <label>
            *Si Introduces mes y año solo mostrara por pantalla el mes del año
            seleccionado
          </label>
          <label>
            *Si Introduces el año solo mostrara por pantalla los meses del año
            seleccionado
          </label>
        </div>
        <div id="divButton">
          <button type="button" onClick={(data) => {
            handleSubmit(onSubmit)(data);
          }}>
            Enviar
          </button>
        </div>
      </form>
      {/*Month: Enero es 1 , etc... , null,0,undefined pinta todo el año*/}
    </div>
  );
};

export default App;
