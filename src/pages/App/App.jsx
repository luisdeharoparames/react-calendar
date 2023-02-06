import "./App.css";
import { MONTHS } from "../../components/Calendar/data/MONTHS";
import { useState, useEffect } from "react";
import { Calendar } from "../../components/Calendar";
import { FormCalendar } from "../../components/Form";

const App = () => {
  const [postId, setPostId] = useState(null);
  const [data, setData] = useState({ month: null, year: null });

  const onSubmit = ({ month, year }) => {
    const m = month ? MONTHS[month.toLowerCase()] + 1 : null;
    setData({ month: m, year });
  };

  const resetPage = () => {
    setData({ month: null, year: null });
  };


  return (
    <div className="App">
      <FormCalendar onSubmit={onSubmit} clear={resetPage} />
      {/*Month: Enero es 1 , etc... , null,0,undefined pinta todo el año*/}
      {data.year && <Calendar year={data.year} month={data.month} />}
    </div>
  );
};

export default App;
