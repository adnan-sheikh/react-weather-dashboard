import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
      <input
        type="text"
        placeholder="Enter city name"
        {...register("city")}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get Weather
      </button>
    </form>
  );
};
