import { MONTHS } from "./MONTHS";

const monthValidate = (value) => {
    value = MONTHS[value.toLowerCase()];
    return value !== undefined && value !== "" && value >= 0 
    && value <= 11;
}


export { monthValidate };