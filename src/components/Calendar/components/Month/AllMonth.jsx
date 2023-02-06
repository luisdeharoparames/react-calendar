import "./styles.css";
import "../MonthWeekDays/MonthWeekDays";
import { MonthWeekDays } from "../MonthWeekDays/MonthWeekDays";
export const AllMonths = ({ year, months, locale }) => {
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });
  return (
    <>
      {months && months.map((n) => (
        <div key={n} className="containerMonth">
          <h1>{`${intl.format(new Date(year, n))} ${year}`}</h1>
          <div className="boxMonth">
            <MonthWeekDays year={year} month={n} locale={locale} />
          </div>
        </div>
      ))}
    </>
  );
};
