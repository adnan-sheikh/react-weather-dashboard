// import { Header } from "@/components/Header";
import { useSearchParams } from "react-router-dom";
import { SunriseIcon, SunsetIcon, WindIcon } from "lucide-react";
import dayjs from "dayjs";

import { useWeather } from "../api";
import { WeatherDisplaySkeleton } from "./WeatherDisplaySkeleton";
import { ErrorFallback } from "@/components/ErrorFallback";
import { WeatherForecast } from "./WeatherForecast";

export const WeatherDisplay = () => {
  const [searchParams] = useSearchParams();

  const lat = parseFloat(searchParams.get("lat")!); // lat and lon will never be null when this route is rendered, hence using !, see logic in weather-dashboard/routes/index.tsx
  const lon = parseFloat(searchParams.get("lon")!);
  const nameFromURL = searchParams.get("name");
  const { data, status, error } = useWeather({ lat, lon });

  if (status === "pending") {
    return <WeatherDisplaySkeleton />;
  }

  if (status === "error") {
    if (error.response?.status === 404) {
      return (
        <ErrorFallback message={`Weather data not found for ${nameFromURL}`} />
      );
    }
    const backendError = error.response
      ? typeof error.response.data === "object" &&
        error.response.data &&
        "message" in error.response.data
        ? error.response.data.message
        : error.message
      : error.message;
    return (
      <ErrorFallback
        className="max-w-[800px]"
        message={`Failed to fetch the weather data for ${nameFromURL}. Please try again in a while.`}
        reason={backendError as string}
      />
    );
  }

  const sunriseTime = dayjs
    .unix(data.sys.sunrise)
    .utcOffset(data.timezone / 60)
    .format("hh:mm A");
  const sunsetTime = dayjs
    .unix(data.sys.sunset)
    .utcOffset(data.timezone / 60)
    .format("hh:mm A");

  return (
    <>
      {/* <Header /> */}
      <div className="w-full flex-1 overflow-auto">
        <div className="grid gap-4 pt-4 p-6">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-semibold">{nameFromURL}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {data.weather[0].main} ({data.weather[0].description})
            </p>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex flex-row items-center gap-4">
              <img
                alt="Weather icon"
                className="bg-gray-200 rounded-full w-20 h-20 overflow-hidden dark:bg-gray-800"
                height="100"
                src={`${import.meta.env.VITE_ICON_URL}/${
                  data.weather[0].icon
                }.png`}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="grid gap-1.5">
                <p className="text-4xl font-semibold">{data.main.temp}°C</p>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-sm font-medium">
                    Feels like {data.main.feels_like}°C
                  </p>
                  <p className="text-sm">Humidity: {data.main.humidity}%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>{sunriseTime}</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <SunsetIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>{sunsetTime}</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <WindIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>Wind: {data.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast />
      </div>
    </>
  );
};
