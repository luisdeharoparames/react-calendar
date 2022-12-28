import { Month } from "../Month";
import "../../data/LOCALE";
import { MonthDays } from "../MonthDays/MonthDays";
import { MonthWeekDays } from "../MonthWeekDays/MonthWeekDays";
import "../../styles/App.css";
export const Year = ({ year, month, locale , days}) => {
  // const months = month ? [month] : [...new Array(12)].map((_, i) => i + 1);
  const months = [...new Array(12)].map((_, i) => i);
  return (
    <>
      <div className="">
        <h1 className="h1Year">Year {year}</h1>
      </div>
      {months.map((month) => {
        <Month key={month} month={month} year={year}/>
      })}
      {/* <div className="divMonth">
        <Month key={month} month={month} year={year} />
      </div> */}
      <div className="divWeekDays">
        {[...Array(7).keys()].map((day) => {
          console.log(day);
          <MonthWeekDays locale={locale} key={day} day={day}/>;
        })}
      </div>
      <div className="divDays">
        <MonthDays month={month} year={year} />
      </div>
    </>
  );
};
