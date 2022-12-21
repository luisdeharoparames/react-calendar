import { MONTHS } from "../data/MONTHS";
// import { createCalendar } from "./calendar";
const monthValidate = (value) => {
    // validate month
    value = MONTHS[value.toLowerCase()];
    return value !== undefined && value !== "" && value >= 0 
    && value <= 11;
}

const yearValidate = (value) => {
    // validate year
    const n = Number(value);
    return year !== "" && !isNaN(n) && n >= 1970;

}

const createCalendar = (monthValidate,yearValidate) => {
    if(monthValidate && yearValidate){
        console.log("Hola");
    }
}

export { monthValidate, yearValidate };