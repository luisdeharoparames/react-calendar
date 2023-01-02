import "../../styles/App.css";
import "../MonthWeekDays/MonthWeekDays";
import { MonthWeekDays } from "../MonthWeekDays/MonthWeekDays";
export const AllMonths = ({ year, month }) => {
  year = 2022;
  month = 12;
  const intl = new Intl.DateTimeFormat("es", { month: "long" });
  const months = [...new Array(month).keys()].map((month) => month);
  return (
    <>
      {months.map((n) => (
        <div key={n} className="containerMonth">
          <h1 className="h1Title">{intl.format(new Date(year, n))}</h1>
          <div className="boxMonth">
            <MonthWeekDays year={year} month={month} />
            {console.log(hola)}
          </div>
        </div>
      ))}{" "}
      <MonthWeekDays year={year} month={month} />
    </>
  );
};
