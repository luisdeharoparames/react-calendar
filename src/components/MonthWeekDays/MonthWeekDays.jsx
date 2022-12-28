import "../../data/LOCALE";
export const MonthWeekDays = (locale, day) => {
  const intl = new Intl.DateTimeFormat(locale, { weekday: "long" });
  const weekDay = intl.format(new Date(1973, 0, day + 1));
  return <>{weekDay}</>;
};
