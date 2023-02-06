import { MONTHS } from "../data/MONTHS";

export const monthValidate = (value) => {
  // validate month
  if (!value) {
    return true;
  }
  const month = MONTHS[value.toLowerCase()];
  return month !== undefined && month >= 0 && month <= 11;
};

