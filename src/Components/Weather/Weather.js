import React, { useEffect } from "react";

const Weather = () => {
  //   const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=60.17&lon=24.94&appid=7499e9f0cfd6cb862a73f272fd17492b
`
    )
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных
        console.log(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив вторым аргументом означает, что useEffect будет выполняться только после первого рендера

  return <div>Компонент Weather</div>;
};

export default Weather;
