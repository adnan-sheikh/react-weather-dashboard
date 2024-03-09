/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import { useWeatherForecast } from "../api";
import { ForecastCard } from "./ForecastCard";
import dayjs from "dayjs";

export const WeatherForecast = () => {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat")!);
  const lon = parseFloat(searchParams.get("lon")!);

  const { data } = useWeatherForecast({ lat, lon });

  return (
    <div className="flex flex-col gap-4">
      {data?.list.map((item: any) => {
        const { dt, main, weather } = item;
        const day = formatUnixTime(dt);
        return (
          <ForecastCard
            day={day}
            maxTemp={main.temp_max}
            minTemp={main.temp_min}
            weather={weather[0].main}
            weatherDescription={weather[0].description}
          />
        );
      })}
    </div>
  );
};

function formatUnixTime(unixTime: number) {
  const now = dayjs();
  const futureDate = dayjs.unix(unixTime);

  if (futureDate.isSame(now, "day")) {
    return "Today";
  } else if (futureDate.isSame(now.add(1, "day"), "day")) {
    return "Tomorrow";
  } else {
    return futureDate.format("dddd"); // Returns the day of the week
  }
}
