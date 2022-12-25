import { MonthDays } from "../MonthDays/MonthDays";
export const Month = ({ year, month }) => {
  const intl = new Intl.DateTimeFormat("es", { month: "long" });
  const monthName = intl.format(new Date(year, month));
  return (
    <>
      <>{monthName}</>
    </>
  );
};
