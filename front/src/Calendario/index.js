import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
// import MockDisponibilidad from "./mock.json";
import { parse } from "date-fns";

const Calendario = () => {
  const [mockData, setMockData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const startDate = new Date(2023, 8, 1);
    const endDate = new Date(2023, 10, 30);
    let currentDate = startDate;
    const mock = [];

    while (currentDate <= endDate) {
      const disponibilidad = Math.floor(Math.random() * 101);
      const precio = Math.floor(Math.random() * (200 - 60 + 1) + 60);

      mock.push({
        fecha: `${currentDate.getDate()}/${
          currentDate.getMonth() + 1
        }/${currentDate.getFullYear()}`,
        disponibilidad,
        precio,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    setMockData(mock);
  }, []);

  const getPriceAndDisponibilidad = (date) => {
    const selectedDateData = mockData.find((item) => {
      const itemDate = parse(item.fecha, "dd/M/yyyy", new Date());
      return itemDate.getTime() === date.getTime();
    });

    return {
      precio: selectedDateData?.precio
        ? selectedDateData.precio.toLocaleString("en-US", {
            currency: "USD",
          })
        : Number(0).toLocaleString("en-US", {
            currency: "USD",
          }),
      disponibilidad: selectedDateData?.disponibilidad,
    };
  };

  const renderCustomDayContents = (day, date) => {
    const { precio, disponibilidad } = getPriceAndDisponibilidad(date);
    const disponibilidadClass =
      disponibilidad < 30
        ? "custom-disponibilidad-red"
        : disponibilidad < 50
        ? "custom-disponibilidad-orange"
        : "custom-disponibilidad-green";

    return (
      <div className={`custom-datepick ${disponibilidadClass}`}>
        <div className="custom-day">{day}</div>
        <div className="custom-price">${precio}</div>
      </div>
    );
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        renderDayContents={renderCustomDayContents}
        peekNextMonth={false}
      />
    </div>
  );
};

export default Calendario;
