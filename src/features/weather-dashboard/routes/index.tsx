import * as React from "react";
import { useWeather } from "../api";
import WeatherDisplay from "../components/WeatherDisplay";
import { WeatherForm } from "../components/WeatherForm";
import { Loader } from "../../../components/Loader";
import { ErrorFallback } from "../../../components/ErrorFallback";

export const WeatherDashboard = () => {
  const [city, setCity] = React.useState<string>();
  const { data, error, status, isLoading } = useWeather({ city });

  const handleSubmit = (city: string) => {
    setCity(city);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Weather Dashboard</h1>
      <WeatherForm onSubmit={handleSubmit} />
      {isLoading || status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <ErrorFallback message={error.message} />
      ) : (
        <WeatherDisplay weatherData={data} />
      )}
    </div>
  );
};
