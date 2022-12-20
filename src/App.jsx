import "./App.css";
import { useState } from "react";
import { MONTHS } from "./MONTHS";
import { useForm } from "react-hook-form";
import { monthValidate } from "./monthValidate";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [ data, setData ] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    

  }

  return (
    <div className="App">
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div id="divFormMonth">
          <label> Introduce el mes: </label>
          <input
            type="text"
            // onChange={onChange}
            {...register('month', {
              validate: monthValidate
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
            {...register("year", {validate: yearValidator ,required: "Obligatorio poner el Año" })}
            id="year"
            name="year"
            placeholder="2000"
          />
        </div>
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
          <button type="submit" id="buttonStyle">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
