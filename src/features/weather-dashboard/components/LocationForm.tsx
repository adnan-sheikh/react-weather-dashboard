import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WeatherFormData, WeatherFormSchema } from "..";
import { useSearchParams } from "react-router-dom";
import { CitySelect } from "./CitySelect";

export const LocationForm = () => {
  const [, setSearchParams] = useSearchParams();
  const {  handleSubmit } = useForm<WeatherFormData>({
    resolver: zodResolver(WeatherFormSchema),
  });

  const handleFormSubmit = ({ city }: WeatherFormData) => {
    console.log(city);
    setSearchParams({ city });
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
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4"
        >
          <CitySelect />
          <Button size="lg" type="submit">
            Get Weather
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
