import * as React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { App } from "./App.tsx";
import "./index.css";
import "./tailwind-output.css";
import { queryClient } from "./lib/react-query.ts";
import { WeatherDashboard } from "./features/dashboard";
import { LocationSelector } from "./features/location-selector";

dayjs.extend(utc);
dayjs.extend(timezone);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LocationSelector />,
      },
      {
        path: "/dashboard",
        element: <WeatherDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
