import "../../data/LOCALE";
import { MonthDays } from "../MonthDays/MonthDays";
export const MonthWeekDays = (locale, {year, month}) => {
  console.log("dias de la semana" + year,month);
  const intl = new Intl.DateTimeFormat(locale, { weekday: "long" });
  const weekDays = [...new Array(7).keys()].map((weekDay) => weekDay);
  const daysMonth = [...new Array(12).keys()].map((days) => days);
  return (
    <>
      {weekDays.map((n) => (
        <div key={n} className="day-name">
          {intl.format(new Date(1973, 0, n + 1))}
        </div>
      ))}
      {daysMonth.map((numMonth) => (
        <div key={numMonth} className="">
          <MonthDays year={year} month={numMonth} />
        </div>
      ))}
    </>
  );
};
