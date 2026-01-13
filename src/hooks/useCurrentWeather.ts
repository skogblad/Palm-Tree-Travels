import { useEffect, useState } from "react"
import type { Weather } from "../models/Weather";
import { getWeather } from "../services/weatherService";

export const useCurrentWeather = (lat: number, lon: number) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        const data = await getWeather(lat, lon);
        setWeather(data);
      } catch {
        setError("Failed to fetch weather");
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  return { weather, isLoading, error }
}