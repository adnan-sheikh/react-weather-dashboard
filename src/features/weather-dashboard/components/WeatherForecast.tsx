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

  const dataAt3PM =
    data?.list.filter((item: any) => {
      const timestamp = item.dt;
      const date = dayjs.unix(timestamp).utc();
      const hour = date.format("HH:mm");
      return hour === "15:00";
    }) ?? [];

  console.log(dataAt3PM);

  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      {dataAt3PM.map((item: any) => {
        const { dt, main, weather } = item;
        const day = formatUnixTime(dt);
        const date = dayjs.unix(dt).utc();
        const time = date.format("HH:mm A");
        return (
          <ForecastCard
            day={day}
            time={time}
            maxTemp={main.temp_max}
            minTemp={main.temp_min}
            weather={weather[0].main}
            weatherDescription={weather[0].description}
            icon={weather[0].icon}
          />
        );
      })}
    </div>
  );
};

function formatUnixTime(unixTime: number) {
  const now = dayjs();
  const futureDate = dayjs.unix(unixTime).utc();
  if (futureDate.isSame(now, "day")) {
    return "Today";
  } else if (futureDate.isSame(now.add(1, "day"), "day")) {
    return "Tomorrow";
  } else {
    return futureDate.format("dddd");
  }
}
