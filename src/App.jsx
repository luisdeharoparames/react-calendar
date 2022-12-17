import { useState } from "react";
import "./App.css";
import { useReactTable } from "@tanstack/react-table";
import React, { useState } from "react";

function App() {
  //const table = useReactTable(options);
  const [month, setMonth ] = useState();

  return (
    <form id="myForm">
      <div id="divFormMonth">
        <label for="month"> Introduce el mes: </label>
        <input type="text" id="month" name="month" placeholder="enero..." />
      </div>

      <div id="divFormYear">
        <label for="year"> Introduce el año: </label>
        <input type="text" id="year" name="year" placeholder="2000" />
      </div>
      <div id="divExplicacion">
        <label for="">
          *Si Introduces mes y año solo mostrara por pantalla el mes del año
          seleccionado
        </label>
        <label for="">
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
  );
}

export default App;
