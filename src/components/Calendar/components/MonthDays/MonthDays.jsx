import "../../../../pages/App/App.css";
export const DaysMonth = ({ year, month }) => {
  const dayMonth = new Date(year, month + 1, 0).getDate();
  const days = [...new Array(dayMonth).keys()].map((i) => i + 1);
  console.log(days);
  const startOn = new Date(year, month, 1).getDay();

  const style = {
    gridColumnStart: startOn === 0 ? 7 : startOn,
  };

  const d = new Date();
  const actualDay = d.getDate();

  return (
    <>
      {days.map((d, i) =>
        i === 0 ? (
          actualDay == 
          <div style={style} key={d} className="divDays">
            {d}
          </div>
        ) : (
          <div key={d} className="divDays">
            {d}
          </div>
        )

      )}
    </>
  );
};
