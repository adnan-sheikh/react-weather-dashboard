import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatCityLocation } from "../utils";

// import { WeatherDataSchema } from "../types";

type Params = {
  lat: number;
  lon: number;
};
const fetchWeatherData = async ({ lat, lon }: Params) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );
  return response.data;
};

export const useWeather = ({ lat, lon }: Params) => {
  return useQuery({
    queryKey: ["weather", formatCityLocation({ lat, lon })],
    queryFn: () => fetchWeatherData({ lat, lon }),
  });
};
