import { useSearchParams } from "react-router-dom";
import { SunriseIcon, SunsetIcon, UmbrellaIcon, WindIcon } from "lucide-react";
import { useWeather } from "../api";
import { WeatherDisplaySkeleton } from "./WeatherDisplaySkeleton";
import { ErrorFallback } from "@/components/ErrorFallback";

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
    const backendError = error.response?.data
      ? "message" in error.response.data
        ? error.response.data.message
        : error.message
      : error.message;
    return (
      <ErrorFallback
        message={`Failed to fetch the weather data for ${nameFromURL}. Please try again in a while.`}
        reason={backendError}
      />
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="w-full flex-1 overflow-auto">
        <div className="grid gap-4 pt-4 p-6">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-semibold">{nameFromURL}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {data.current.weather[0].main} (
              {data.current.weather[0].description})
            </p>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex flex-row items-center gap-4">
              <img
                alt="Weather icon"
                className="bg-gray-200 rounded-full w-20 h-20 overflow-hidden dark:bg-gray-800"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="grid gap-1.5">
                <p className="text-4xl font-semibold">23°C</p>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-sm font-medium">Feels like 25°C</p>
                  <p className="text-sm">Humidity: 72%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>6:30 AM</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <SunsetIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>8:30 PM</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <UmbrellaIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>3% chance of rain</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <WindIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>Wind: 5 m/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
