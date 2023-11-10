import React, { useState, useEffect } from "react";
import styles from "./MySidebar.module.css";

const MySidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    let debounceTimeout;

    const fetchData = async () => {
      try {
        // Отправляем запрос к OpenWeather API с использованием полученных координат
        console.log(city);
        console.log(apiKey);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setWeatherInfo(data);

        console.log("newAPI Response:", data);
        console.log("WeatherInfo:", weatherInfo);
      } catch (error) {
        // Обработка ошибок
        console.error("API Request Error:", error);
      }
    };

    // Используем debounce для задержки выполнения fetchData на 500 миллисекунд после завершения ввода
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchData();
    }, 500);

    // Очистка таймаута при каждом изменении ввода
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [city, apiKey]);

  const handleWeatherInfoClick = () => {
    // Обработчик нажатия на окошко с информацией о погоде
    // Здесь можно добавить логику для отображения подробных данных о погоде на главной странице сайта
  };

  return (
    <div
      className={
        isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar
      }
    >
      <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
        ☰
      </div>

      <div className={styles.menu}>
        <input
          type="text"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <button onClick={searchWeather}>Поиск</button> */}
        {weatherInfo && (
          <div className={styles.weatherInfo} onClick={handleWeatherInfoClick}>
            Город: {weatherInfo.name}
            <br />
            Температура: {weatherInfo.main.temp}°C
            <br />
            Погодные условия: {weatherInfo.weather[0].description}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySidebar;
