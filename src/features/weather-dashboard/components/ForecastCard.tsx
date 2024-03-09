import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SunIcon } from "lucide-react";

type Props = {
  day: string;
  weather: string;
  weatherDescription: string;
  minTemp: number;
  maxTemp: number;
};

export const ForecastCard = ({
  day,
  maxTemp,
  minTemp,
  weather,
  weatherDescription,
}: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{day}</CardTitle>
        <SunIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <SunIcon className="w-8 h-8" />
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
