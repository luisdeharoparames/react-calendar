import { AllMonths } from "../Month/AllMonth";
import { eventosCalendar } from "../Events/index";
import { LOCALE } from "../../data/LOCALE";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";
export const Year = ({ year, month }) => {
  const [eventos, setEventos] = useState([]);
  const months = month ? [month - 1] : [...new Array(12).keys()].map((i) => i);
  useEffect(() => {
    if (year && months) {
      const url = `http://localhost:3001/api/events?year=${year}${
        months.length === 1 ? "&month=" + months[0] : ""
      }`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((e) => {
          setEventos(e);
        });
    }
  }, [year, month]);

  return (
    <>
      {months.length > 1 && <h1>Year {year}</h1>}
      <div className="calendar">
        {/* {events.map((a) => (
          // <h1>{a.day}</h1>
        ))} */}
        <AllMonths year={year} month={month} locale={LOCALE} />
      </div>
      <eventosCalendar eventos={eventos} />
    </>
  );
};
