import { z } from "zod";

export const WeatherDataSchema = z.object({
  temperature: z.number(),
  humidity: z.number(),
  condition: z.string(),
  description: z.string(),
});

export type WeatherData = z.infer<typeof WeatherDataSchema>;

export const WeatherFormSchema = z.object({
  city: z.string(),
});

export type WeatherFormData = z.infer<typeof WeatherFormSchema>;

export const CitiesResponseSchema = z.array(
  z.object({
    name: z.string(),
    local_names: z.record(z.string()).optional(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string().optional(),
  })
);

export type SelectedCity = {
  lat: number;
  lon: number;
  name: string;
};
