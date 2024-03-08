import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WeatherFormData, WeatherFormSchema } from "..";
import { useSearchParams } from "react-router-dom";

export const LocationForm = () => {
  const [, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<WeatherFormData>({
    resolver: zodResolver(WeatherFormSchema),
  });

  const handleFormSubmit = ({ city }: WeatherFormData) => {
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
          <div className="grid gap-1">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter a city" {...register("city")} />
          </div>
          <Button size="lg" type="submit">
            Get Weather
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
