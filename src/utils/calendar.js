const locale = "es";
const createOneMonth = (month,year) => {

}


const createAllMonths = (month,year,locale) => {
    // const h1 = document.createElement("h1");
    // h1.innerText = `Meses del Año ${year}`;
    const divRoot = document.getElementById("root");
    const calendar = document.createElement("div");
    calendar.classList.add("calendarContainer");
    const intl = new Intl.DateTimeFormat(locale, {month: "long"});
    const monthName = intl.format(new Date(year,month));
    
    calendar.append(monthName);
    divRoot.append(calendar);
    
    createWeekDays(month,year);

}

const createWeekDays = (month,year) => {
    
}


export {createAllMonths, createOneMonth};