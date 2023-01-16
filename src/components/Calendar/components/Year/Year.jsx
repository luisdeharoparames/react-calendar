import { AllMonths } from "../Month/AllMonth";
import { LOCALE } from "../../data/LOCALE";
import "../../../../pages/App/App.css";
export const Year = ({ year, month }) => {
  const months = month ? [month - 1] : [...new Array(12).keys()].map((i) => i);
  return (
    <>
      {months.length > 1 && (
        <div className="">
          <h1 className="h1Year">Year {year}</h1>
        </div>
      )}
      <div className="calendar">
        <AllMonths year={year} months={months} locale={LOCALE} />
      </div>
    </>
  );
};
