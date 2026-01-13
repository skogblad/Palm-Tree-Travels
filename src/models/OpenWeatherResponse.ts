export type OpenWeatherResponse = {
  main: {
    temp: number;
  }
  weather: {
    description: string;
    icon: string;
  }[];
}