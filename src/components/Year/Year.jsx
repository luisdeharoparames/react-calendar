import { Month } from "../Month";
export const Year = ({ year, month }) => {
  const months = month ? [month] : [...new Array(12)].map((_, i) => i + 1);
  return (
    <>
      <h1>Year {year}</h1>
      {months.map((month) => (
        <Month key={month} month={month} />
      ))}
    </>
  );
};
