import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  day: string;
  time: string;
  weather: string;
  weatherDescription: string;
  minTemp: number;
  maxTemp: number;
  icon: string;
};

export const ForecastCard = ({
  day,
  time,
  maxTemp,
  minTemp,
  weather,
  weatherDescription,
  icon,
}: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">
          {day}, {time}
        </CardTitle>
        <span className="text-sm text-muted-foreground">
          Max/Min Temperature
        </span>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <img
            alt="Weather icon"
            className="bg-gray-200 rounded-full w-8 h-8 overflow-hidden dark:bg-gray-800"
            height="32"
            src={`${import.meta.env.VITE_ICON_URL}/${icon}.png`}
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
            width="32"
          />
          <div className="grid gap-0.5">
            <p className="text-sm font-medium">{weather}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {weatherDescription}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium">
          {maxTemp}/{minTemp}°C
        </p>
      </CardContent>
    </Card>
  );
};
