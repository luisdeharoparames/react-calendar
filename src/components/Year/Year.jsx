import { Month } from "../Month";
import { MonthDays } from "../MonthDays/MonthDays";
export const Year = ({ year, month }) => {
  // const months = month ? [month] : [...new Array(12)].map((_, i) => i + 1);
  const months = [...new Array(12)].map((_,i) => i);
  const dayMonth = new Date(year, month, 0).getDate();
  const startOn = new Date(year, month, 1).getDay();
  for(let i = 0; i < dayMonth; i++){
    console.log(i);
  }
  return (
    <>
      <h1>Year {year}</h1>
      {months.map((month) => (
        <Month key={month} month={month} year={year} />
      ))}
    </>
  );
};
