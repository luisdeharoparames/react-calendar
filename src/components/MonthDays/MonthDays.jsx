import "../../styles/App.css";
export const MonthDays = ({ month, year }) => {
  year = 2022;
  const dayMonth = new Date(year, month + 1, 0).getDate();
  const startOn = new Date(year, month, 1).getDay();
  const arrayDays = [];
  for (let i = 0; i < dayMonth; i++) {
    arrayDays.push(i + 1);
  }
  return <>{arrayDays}</>;
};
