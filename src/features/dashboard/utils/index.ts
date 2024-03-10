import dayjs from "dayjs";

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
