import "./App.css";
import { useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import './MONTHS';

const App = () => {
  // console.log(MONTHS);
  const handleSubmitMonth = (eMonth) => {
    if(eMonth){

    }
  };

  const handleSubmitYear = (eYear) => {
    console.log("Year: " + eYear.target.value);
  };


  return (
    <div className="App">
      <form id="myForm">
        <div id="divFormMonth">
          <label> Introduce el mes: </label>
          <input
            type="text"
            id="month"
            name="month"
            placeholder="enero..."
            onChange={handleSubmitMonth}
          ></input>
        </div>
        <div id="divFormYear">
          <label> Introduce el año: </label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="2000"
            onChange={handleSubmitYear}
          />
        </div>
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
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
