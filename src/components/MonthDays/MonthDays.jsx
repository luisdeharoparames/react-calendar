export const MonthDays = ({ month, year }) => {
  const dayMonth = new Date(year, month, 0).getDate();
  const startOn = new Date(year, month, 1).getDay();
  return(
    <>
        {dayMonth}
    </>
  );
};
