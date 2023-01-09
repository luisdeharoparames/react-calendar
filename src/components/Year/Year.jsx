import { AllMonths } from "../Month/AllMonth";
import { LOCALE } from "../../data/LOCALE";
import "../../styles/App.css";
export const Year = ({ year, month}) => {
  console.log(year,month);
  const months = month ? [month - 1] : [...new Array(12)].map((_, i) => i);
  return (
    <>
      {months.length > 1 && (
        <div className="">
          <h1 className="h1Year">Year {year}</h1>
        </div>
      )}
      <AllMonths year={year} months={months} locale={LOCALE}/>
    </>
  );
};
