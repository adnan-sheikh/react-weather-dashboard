export const formatCityName = ({
  city,
  state,
  country,
}: {
  city: string;
  state?: string;
  country: string;
}) => {
  return `${city}, ${state ? `${state},` : ""} ${country}`;
};

export const formatCityLocation = ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  return `${lat}:${lon}` as const;
};
