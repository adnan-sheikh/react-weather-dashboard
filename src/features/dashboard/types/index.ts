import { z } from "zod";

export const WeatherDataSchema = z.object({
  temperature: z.number(),
  humidity: z.number(),
  condition: z.string(),
  description: z.string(),
});

export type WeatherData = z.infer<typeof WeatherDataSchema>;
