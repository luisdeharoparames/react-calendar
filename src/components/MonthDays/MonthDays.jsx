import "../../styles/App.css";
export const MonthDays = ({ month, year }) => {
  year = 2022;
  const dayMonth = new Date(year, month + 1, 0).getDate();
  const startOn = new Date(year, month, 1).getDay();

  const weekDays = [...new Array(12).keys()].map((days) => days);
  

  return <>{}</>;
};
