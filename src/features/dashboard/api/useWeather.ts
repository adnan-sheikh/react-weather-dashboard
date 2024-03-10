import { config } from "@/config";
import { formatCityLocation } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Params = {
  lat: number;
  lon: number;
};
const fetchWeatherData = async ({ lat, lon }: Params) => {
  const response = await axios.get(
    `${config.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${config.apiKey}&units=metric`
  );
  return response.data;
};

export const useWeather = ({ lat, lon }: Params) => {
  return useQuery({
    queryKey: ["weather", formatCityLocation({ lat, lon })],
    queryFn: () => fetchWeatherData({ lat, lon }),
  });
};
