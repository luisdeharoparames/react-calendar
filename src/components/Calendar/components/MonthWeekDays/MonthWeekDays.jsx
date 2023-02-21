import { DaysMonth } from "../MonthDays/MonthDays";
import "./styles.css";
export const MonthWeekDays = ({ year, month, locale }) => {
  const intl = new Intl.DateTimeFormat(locale, { weekday: "long" });
  const weekDays = [...new Array(7).keys()].map((weekDay) => weekDay);
  console.log('month', month)
  return (
    <>
      {weekDays.map((n) => (
        <div key={n} className="day-name">
          {intl.format(new Date(1973, 0, n + 1))}
        </div>
      ))}
      <DaysMonth year={year} month={month} />
    </>
  );
};
