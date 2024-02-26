import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { WeatherDataSchema } from "../types";

const fetchWeatherData = async (city: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );
  const responseData = {
    temperature: response.data.temperature,
    humidity: response.data.humidity,
    condition: response.data.condition,
    description: response.data.description,
  };
  const data = WeatherDataSchema.parse(responseData);
  return data;
};

export const useWeather = ({ city }: { city?: string }) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city!),
    enabled: !!city,
  });
};
