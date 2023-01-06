import "../../styles/App.css";
export const DaysMonth = ({ year, month }) => {
  const dayMonth = new Date(year, month + 1, 0).getDate();
  const days = [...new Array(dayMonth).keys()].map((i) => i + 1);
  const startOn = new Date(year, month, 1).getDay();
  console.log(startOn + 1)

  const style = {
    gridColumnStart:startOn + 1,
  }

  return (
    <>
      {days.map(
        (d, i) =>
         i === 0 ? <div style={style} key={d} className="divDays">{d}</div> : 
         <div key={d} className="divDays">{d}</div>
      )}
    </>
  );
};
