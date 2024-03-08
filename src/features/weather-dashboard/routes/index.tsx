import { useSearchParams } from "react-router-dom";
import { LocationForm } from "../components/LocationForm";
import WeatherDisplay from "../components/WeatherDisplay";

export const WeatherDashboard = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const cityName = searchParams.get("name");
  if (!lat || !lon || !cityName) {
    return <LocationForm />;
  }
  return <WeatherDisplay />;
};
