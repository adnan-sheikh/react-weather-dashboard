import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { WeatherFormData, WeatherFormSchema } from "../types";

type Props = {
  onSubmit: (city: string) => void;
};

export const WeatherForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<WeatherFormData>({
    resolver: zodResolver(WeatherFormSchema),
  });

  const handleFormSubmit = (data: { city: string }) => {
    onSubmit(data.city);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center space-x-2"
    >
      <Input type="text" placeholder="Enter city name" {...register("city")} />
      <Button>Get Weather</Button>
    </form>
  );
};
