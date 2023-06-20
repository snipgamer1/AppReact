import React, { useState, useEffect } from "react";

const Clock = () => {
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const [nombre, setNombre] = useState("Snip");
  const [apellidos, setApellidos] = useState("fr");

  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setFecha(new Date());
    setEdad(prevEdad => prevEdad + 1);
  };

  return (
    <div>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>{nombre} {apellidos}</h3>
      <h1>Edad: {edad}</h1>
    </div>
  );

};

export default Clock;
