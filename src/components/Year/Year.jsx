import { AllMonths } from "../Month/AllMonth";
import "../../data/LOCALE";
import "../../styles/App.css";
export const Year = () => {
  // const months = month ? [month] : [...new Array(12)].map((_, i) => i + 1);
  const year = 2022;
  const month = 12;
  return (
    <>
      <div className="">
        <h1 className="h1Year">Year {year}</h1>
      </div>
      <div className="">
        <AllMonths year={year} month={month} />
      </div>
    </>
  );
};
