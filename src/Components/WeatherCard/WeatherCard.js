// WeatherCard.js
import React from "react";

const WeatherCard = ({ city }) => {
  if (!city) {
    return <div>Выберите город для отображения погоды</div>;
  }

  // Выводите подробную информацию о погоде для выбранного города
  return (
    <div>
      <h2>{city.name}</h2>
      {/* Дополнительные погодные данные */}
    </div>
  );
};

export default WeatherCard;
