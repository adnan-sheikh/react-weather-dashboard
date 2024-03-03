import { SunriseIcon, SunsetIcon, UmbrellaIcon, WindIcon } from "lucide-react";

export const WeatherDashboard = () => {
  return (
    <div className="w-full flex-1 overflow-auto">
      <div className="grid gap-4 pt-4 p-6">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl font-semibold">New York</h2>
          <p className="text-gray-500 dark:text-gray-400">Partly cloudy</p>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex flex-row items-center gap-4">
            <img
              alt="Weather icon"
              className="bg-gray-200 rounded-full w-20 h-20 overflow-hidden dark:bg-gray-800"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="grid gap-1.5">
              <p className="text-4xl font-semibold">23°C</p>
              <div className="flex flex-row items-center gap-4">
                <p className="text-sm font-medium">Feels like 25°C</p>
                <p className="text-sm">Humidity: 72%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4">
              <SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>6:30 AM</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <SunsetIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>8:30 PM</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <UmbrellaIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>3% chance of rain</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <WindIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>Wind: 5 m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
