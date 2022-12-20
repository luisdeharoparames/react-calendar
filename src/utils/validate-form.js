import { MONTHS } from "../data/MONTHS";

const monthValidate = (value) => {
    value = MONTHS[value.toLowerCase()];
    return value !== undefined && value !== "" && value >= 0 
    && value <= 11;
}

const yearValidate = (value) => {
    // validate year
}


export { monthValidate, yearValidate };