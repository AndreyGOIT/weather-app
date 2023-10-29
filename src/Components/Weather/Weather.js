import React, { useEffect } from "react";

const Weather = () => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    console.log("API Key:", apiKey); // Убедитесь, что apiKey считывается правильно
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=60.17&lon=24.94&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Проверьте ответ от API
      })
      .catch((error) => {
        console.error("API Error:", error); // Проверьте ошибки при сетевом запросе
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Компонент Weather</div>;
};

export default Weather;
