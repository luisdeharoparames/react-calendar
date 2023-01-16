import "./App.css";
import { MONTHS } from "../../components/Calendar/data/MONTHS";
import { useForm } from "react-hook-form";
import { monthValidate } from "../../components/Calendar/utils/validate-form";
import { useState } from "react";
import { Calendar } from "../../components/Calendar";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [data, setData] = useState({ month: null, year: null });

  const onSubmit = ({ month, year }, condition) => {
    const m = month ? MONTHS[month.toLowerCase()] + 1 : null;
    setData({ month: m, year });
  };

  return (
    <div className="App">
      <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div id="" className="box-input-form">
            <label> Introduce el mes: </label>
            <input
              type="text"
              {...register("month", {
                validate: monthValidate,
              })}
              // className={codition ? "una-clase-true" : "otra-clase-false"}
              id="month"
              name="month"
              placeholder="enero..."
            />
            <div className="float-errors">
              {errors.month && <p>Esto no es un Mes del Año</p>}
            </div>
          </div>
          <div id="" className="box-input-form">
            <label> Introduce el año: </label>
            <input
              type="text"
              {...register("year", {
                validate: (value) =>
                  (!isNaN(Number(value)) && Number(value) >= 1970) ||
                  "Esto no es un año",
                required: "must be characters at least",
                minLength: {
                  value: 4,
                  message: "must be 4 characters at least",
                },
              })}
              id="year"
              name="year"
              placeholder="2000"
              // className={codition ? "una-clase-true" : "otra-clase-false"}
            />
            <div className="float-errors">
              {/* {errors.year && (
                <>
                  <p>Esto no es un Año</p>
                 <p>{errors.year?.message}</p>
                </>
              )} */}
              <p>{errors.year?.message}</p>
            </div>
          </div>
          <div className="divButtons">
            <button type="submit" className="btn">
              Enviar
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="divExplicacion">
          <ul>
            <li>*Si Introduces mes y año solo mostrara por pantalla el mes del año
            seleccionado</li>
            <li> *Si Introduces el año solo mostrara por pantalla los meses del año
            seleccionado</li>
          </ul>
        </div>
      </form>
      {/*Month: Enero es 1 , etc... , null,0,undefined pinta todo el año*/}
      {data.year && <Calendar year={data.year} month={data.month} />}
    </div>
  );
};

export default App;
