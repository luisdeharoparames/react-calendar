import "./styles.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";
const getDay = (year, month, day) => {
  return new Date(year, month, day).getDay();
};
const getClassName = (year, month, day) => {
  const d = getDay(year, month, day);
  return d === 0 ? "sunday" : d === 6 ? "saturday" : "";
};

export const DaysMonth = ({ year, month }) => {
  //HandleSubmit react-hook-form
  const { handleSubmit, register, reset } = useForm();

  const dayMonth = new Date(year, month + 1, 0).getDate();
  const days = [...new Array(dayMonth).keys()].map((i) => i + 1);

  const [open, setOpen] = useState(false);
  const [daySelected, setDaySelected] = useState(false);
  const [resApi, setResApi] = useState(null);

  const startOn = getDay(year, month, 1);
  const style = {
    gridColumnStart: startOn === 0 ? 7 : startOn,
  };

  //Mes Actual
  const m = new Date();
  const actualMonth = m.getMonth();

  //Año Actual
  const y = new Date();
  const actualYear = y.getFullYear();

  //Dia Actual
  const d = new Date();
  const actualDay = d.getDate();

  const openForm = (daySelected) => {
    setResApi(null)
    setOpen(true);
    setDaySelected(daySelected);
  };

  const closeModal = () => {
    setResApi(null)
    reset()
    setOpen(false)
  }

  // useEffect(() => {}, [month, year, days, textArea]);

  const onSubmit = (d) => {
    console.log(d);
    setResApi(null)
    const { event: title, comment } = d;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        comment,
        month: 24,
        year,
        day: daySelected,
      }),
    };
    fetch("http://localhost:3001/api/events", requestOptions)
      // "{\"message\":\"ok\",\"status\":200}"
      .then((response) => response.json())
      // {"message":"ok","status":200}
      .then((data) => {
        if (data.status >= 300) {
          console.error("ha habido un error", data.message);
          setResApi(data.message)
        }else {
          closeModal()
        }
      })
      .catch((error) => {
        console.log(error);
        setResApi(error.message)
      });
  };
  return (
    <>
      {days.map((d, i) => (
        <div
          style={i === 0 ? style : null}
          key={d}
          className={
            i === actualDay - 1 && actualMonth == month && year == actualYear
              ? "divDays actual-day"
              : "divDays"
          }
        >
          <button
            type="submit"
            className="button-event"
            onClick={() => openForm(d)}
          >
            <p className={getClassName(year, month, d)}>{d}</p>
          </button>
        </div>
      ))}

      <section
        className="modal-back"
        style={{ display: open ? "flex" : "none" }}
      >
        <article className="modal-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <header className="modal-header">
              <div className="modal-title">Add event day({daySelected})</div>
              <div className="modal-action">
                <button onClick={closeModal}>
                  <span>X</span>
                </button>
              </div>
            </header>
            <div className="modal-body myForm">
              <div className="content-input">
                <label htmlFor="nameEvent">
                  Introduce el nombre de el Evento:
                </label>
                <input
                  type="text"
                  {...register("event")}
                  placeholder="Ir al medico"
                />
              </div>
              <div className="content-input">
                <label>Introduce un comentario: </label>
                <textarea
                  {...register("comment")}
                  className="textArea"
                ></textarea>
              </div>
              <div className="error-message">
                <span>{resApi}</span>
              </div>
            </div>
            <footer className="modal-footer myForm">
              <button onClick={closeModal}>
                <span>Cancel</span>
              </button>
              <button type="submit">Save</button>
            </footer>
          </form>
        </article>
      </section>
    </>
  );
};
