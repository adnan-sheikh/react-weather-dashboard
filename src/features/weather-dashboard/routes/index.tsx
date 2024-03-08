import { useSearchParams } from "react-router-dom";
import { LocationForm } from "../components/LocationForm";
import WeatherDisplay from "../components/WeatherDisplay";

export const WeatherDashboard = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  if (!city) {
    return <LocationForm />;
  }
  return <WeatherDisplay />;
};
