import { MONTHS } from "../data/MONTHS";

export const monthValidate = (value) => {
  // validate month
  if (!value) {
    return true;
  }
  const month = MONTHS[value.toLowerCase()];
  return month !== undefined && month >= 0 && month <= 11;
};




//No se ejecuta
export function yearValidate(value) {
  const res = !isNaN(Number(value)) && Number(value) >= 1970;
  console.log({ value, res });
  return res;
}
