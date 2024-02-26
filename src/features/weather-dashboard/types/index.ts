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
