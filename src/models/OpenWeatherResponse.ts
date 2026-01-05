export type OpenWeatherResponse = {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  }
}