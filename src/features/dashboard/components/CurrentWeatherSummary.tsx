/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "@/config";
import dayjs from "dayjs";
import { Cross, SunriseIcon, SunsetIcon, WindIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Props = { data: any; cityName: string };

export const CurrentWeatherSummary = ({ data, cityName }: Props) => {
  const sunriseTime = dayjs
    .unix(data.sys.sunrise)
    .utcOffset(data.timezone / 60)
    .format("hh:mm A");
  const sunsetTime = dayjs
    .unix(data.sys.sunset)
    .utcOffset(data.timezone / 60)
    .format("hh:mm A");

  return (
    <div className="grid gap-4 pt-4 p-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">{cityName}</h2>
          <Link to="/" title="Back to city search">
            <Cross fill="black" className="rotate-45" />
          </Link>
        </div>
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
            src={`${config.iconUrl}/${data.weather[0].icon}.png`}
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
  );
};
