type Params = {
  city: string;
  state?: string;
  country: string;
};

export const formatCityName = ({ city, state, country }: Params) => {
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
