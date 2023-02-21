import { useForm } from "react-hook-form";
import "../../pages/App/App.css";
import "./styles.css";
import { monthValidate } from "../Calendar/utils/validate-form";

export const FormCalendar = ({ onSubmit, clear, showEvents }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="div-inputs myForm">
        <div className="box-input-form">
          <label> Introduce el mes: </label>
          <input
            type="text"
            {...register("month", {
              validate: monthValidate,
            })}
            placeholder="enero..."
          />
          <div className="float-errors">
            {errors.month && <p>Esto no es un Mes</p>}
          </div>
        </div>
        <div className="box-input-form">
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
            name="year"
            placeholder="2000"
          />
          <div className="float-errors">
            <p>{errors.year?.message}</p>
          </div>
        </div>
        <div className="divButtons">
          <button type="submit" className="btn" onClick={showEvents}>
            Enviar
          </button>
          <button type="reset" className="btn" onClick={clear}>
            Reset
          </button>
        </div>
      </div>
      <div className="divExplicacion">
        <ul>
          <li>
            *Si Introduces mes y año solo mostrara por pantalla el mes del año
            seleccionado
          </li>
          <li>
            {" "}
            *Si Introduces el año solo mostrara por pantalla los meses del año
            seleccionado
          </li>
        </ul>
      </div>
    </form>
  );
};
