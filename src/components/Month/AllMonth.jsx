import "../../styles/App.css";
import "../MonthWeekDays/MonthWeekDays";
import { MonthWeekDays } from "../MonthWeekDays/MonthWeekDays";
export const AllMonths = ({year,month}) => {
  const intl = new Intl.DateTimeFormat("es", { month: "long" });
  const months = [...new Array(month).keys()].map((month) => month);
  console.log(months)
  return (
    <>
      {months.map((n) => (
        <div key={n} className="containerMonth">
          <h1 className="h1Title">{intl.format(new Date(year, n))}</h1>
          <div className="boxMonth">
            <MonthWeekDays year={year} month={month} />
          </div>
        </div>
      ))}
    </>
  );
};
