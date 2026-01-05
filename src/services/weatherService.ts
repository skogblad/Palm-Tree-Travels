import type { OpenWeatherResponse } from "../models/OpenWeatherResponse";
import type { Weather } from "../models/Weather";
import { getUrl } from "./serviceBase";

const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeather = async (lat: number, lon: number) => {
  const data = await getUrl<OpenWeatherResponse>(
    `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`
  );

  // Validation & reshape of API data + protects the rest of the app (tlike a translater between API's code & mine)
  const weather: Weather = {
    temp: data.current.temp,
    description: data.current.weather[0].description,
    icon: data.current.weather[0].icon,
  }

  return weather;
}