import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatCityLocation } from "../utils";

type Params = {
  lat: number;
  lon: number;
};
const fetchWeatherForecast = async ({ lat, lon }: Params) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );
  return response.data;
};

export const useWeatherForecast = ({ lat, lon }: Params) => {
  return useQuery({
    queryKey: ["forecast", formatCityLocation({ lat, lon })],
    queryFn: () => fetchWeatherForecast({ lat, lon }),
  });
};
