import React from 'react';
import './WeatherDisplay.css';

const weatherIcons = {
  Clear: 'clear.png',
  Clouds: 'cloudy.png',
  Rain: 'rain.png',
  Snow: 'snow.png',
  Thunderstorm: 'thunderstorm.png',
};

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <div className="weather-display">No data available</div>;

  const { name, main, weather, wind } = weatherData;
  const weatherDescription = weather[0].main;
  const weatherIcon = weatherIcons[weatherDescription];

  // Get current date in a readable format
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p className="weather-date">{formatDate()}</p>
      {weatherIcon && <img src={require(`../assets/${weatherIcon}`)} alt={weatherDescription} className="weather-icon" />}
      <div className="weather-info">
        <p>{weatherDescription}</p>
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;