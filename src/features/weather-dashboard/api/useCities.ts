import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CitiesResponseSchema } from "../types";

const CITIES_LIMIT = 5;

const fetchCities = async ({
  city,
  signal,
}: {
  city: string;
  signal: AbortSignal;
}) => {
  const response = await axios.get(
    `${import.meta.env.VITE_GEO_URL}?q=${city}&limit=${CITIES_LIMIT}&appid=${
      import.meta.env.VITE_API_KEY
    }`,
    { signal }
  );
  return CitiesResponseSchema.parse(response.data);
};

export const useCities = ({ city }: { city: string }) => {
  return useQuery({
    queryKey: ["cities", { city }],
    queryFn: ({ signal }) => fetchCities({ city, signal }),
    enabled: !!city,
  });
};
