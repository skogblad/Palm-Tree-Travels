/**
  Generates the OpenWeatherMap icon URL for a given weather icon code.
 */
export const getWeatherIconUrl = (icon: string): string => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};