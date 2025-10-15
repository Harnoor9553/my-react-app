import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    color: "black"
  });

  function changeColor() {
    setCar(prevCar => ({
      ...prevCar,
      color: "red"
    }));
  }

  return (
    <div>
      <h2>{car.brand} {car.model}</h2>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>
      <button onClick={changeColor}>Repaint Car 🎨</button>
    </div>
  );
}

export default Car;
