import React, { useEffect, useState } from "react";

const Weather = () => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=60.17&lon=24.94&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data); // Устанавливаем полученные данные в состояние
        console.log("API Response:", data);
      } catch (error) {
        // Обработка ошибок
        console.error("API Request Error:", error);
      }
    };

    fetchData();
  }, [apiKey]); // Передаем apiKey в массив зависимостей, чтобы запрос выполнился при его изменении

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather Details</h2>
          <p>City: {weatherData.name}</p>
          {/* Другие данные о погоде можно отобразить аналогичным образом */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
