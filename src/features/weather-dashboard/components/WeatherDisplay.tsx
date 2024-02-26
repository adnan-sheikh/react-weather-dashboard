import { WeatherData } from "../types";

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const { temperature, humidity, condition, description } = weatherData;

  return (
    <div className="weather-display">
      <h2>Weather Information</h2>
      <p>Temperature: {temperature} °C</p>
      <p>Humidity: {humidity}%</p>
      <p>
        Condition: {condition} ({description})
      </p>
    </div>
  );
};

export default WeatherDisplay;
