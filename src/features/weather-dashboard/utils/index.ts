import dayjs from "dayjs";

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

export const getDay = (unixTime: number) => {
  const now = dayjs();
  const futureDate = dayjs.unix(unixTime).utc();
  if (futureDate.isSame(now, "day")) {
    return "Today";
  } else if (futureDate.isSame(now.add(1, "day"), "day")) {
    return "Tomorrow";
  } else {
    return futureDate.format("dddd");
  }
};
