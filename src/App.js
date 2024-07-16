import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const API_KEY = '751c00532f706b6cbfa67d574b2500a2';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;