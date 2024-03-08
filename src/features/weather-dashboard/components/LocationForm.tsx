import { zodResolver } from "@hookform/resolvers/zod";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import { WeatherFormData, WeatherFormSchema } from "../types";
import { CitySelect } from "./CitySelect";

export const LocationForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const latFromURL = searchParams.get("lat");
  const lonFromURL = searchParams.get("lon");
  const nameFromURL = searchParams.get("name");

  let lat, lon, name;
  if (latFromURL && lonFromURL && nameFromURL) {
    lat = parseFloat(latFromURL);
    lon = parseFloat(lonFromURL);
    name = nameFromURL;
  }

  const form = useForm<WeatherFormData>({
    resolver: zodResolver(WeatherFormSchema),
    defaultValues: { city: { lat, lon, name } },
  });

  const handleFormSubmit = ({ city }: WeatherFormData) => {
    setSearchParams({
      lat: `${city.lat}`,
      lon: `${city.lon}`,
      name: `${city.name}`,
    });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center space-y-0">
        <div className="grid gap-1.5">
          <CardTitle>Weather Dashboard</CardTitle>
          <CardDescription>
            Enter a city to retrieve the weather information.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>City</FormLabel>
                  <CitySelect field={field} setValue={form.setValue} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="lg" type="submit">
              Get Weather
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
