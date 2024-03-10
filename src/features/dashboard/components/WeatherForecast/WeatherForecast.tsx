/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";

import { getDay } from "../../utils";
import { ForecastCard } from "./ForecastCard";

export const WeatherForecast = ({ dataAt9AM }: { dataAt9AM: any[] }) => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      {dataAt9AM.map((item: any) => {
        const { dt, main, weather } = item;
        const day = getDay(dt);
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
