/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Header } from "@/components/Header";
import { ErrorFallback } from "@/components/ErrorFallback";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

import { useWeather, useWeatherForecast } from "../api";
import { WeatherDisplaySkeleton } from "./WeatherDisplaySkeleton";
import { WeatherForecast } from "./WeatherForecast";
import { CurrentWeatherSummary } from "./CurrentWeatherSummary";

export const WeatherDisplay = () => {
  const [searchParams] = useSearchParams();

  const lat = parseFloat(searchParams.get("lat")!); // lat and lon will never be null when this route is rendered, hence using !, see logic in weather-dashboard/routes/index.tsx
  const lon = parseFloat(searchParams.get("lon")!);
  const nameFromURL = searchParams.get("name")!;
  const currentWeather = useWeather({ lat, lon });
  const forecast = useWeatherForecast({ lat, lon });

  const dataAt9AM =
    forecast.data?.list.filter((item: any) => {
      const timestamp = item.dt;
      const date = dayjs.unix(timestamp).utc();
      const hour = date.format("HH:mm");
      return hour === "15:00";
    }) ?? [];

  if (currentWeather.status === "pending") {
    return <WeatherDisplaySkeleton />;
  }

  if (currentWeather.status === "error") {
    if (currentWeather.error.response?.status === 404) {
      return (
        <ErrorFallback message={`Weather data not found for ${nameFromURL}`} />
      );
    }
    const backendError = currentWeather.error.response
      ? typeof currentWeather.error.response.data === "object" &&
        currentWeather.error.response.data &&
        "message" in currentWeather.error.response.data
        ? currentWeather.error.response.data.message
        : currentWeather.error.message
      : currentWeather.error.message;
    return (
      <ErrorFallback
        className="max-w-[800px]"
        message={`Failed to fetch the weather data for ${nameFromURL}. Please try again in a while.`}
        reason={backendError as string}
      />
    );
  }

  return (
    <div className="w-full flex-1 overflow-y-scroll scroll-pr-6">
      {/* <Header /> */}
      <CurrentWeatherSummary
        cityName={nameFromURL}
        data={currentWeather.data}
      />
      <WeatherForecast dataAt9AM={dataAt9AM} />
    </div>
  );
};
