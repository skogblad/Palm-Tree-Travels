export type MonthlyTemperatures = {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
};

export type CuratedDestination = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  vibes: string[];
  experiences: string[];
  description: string;
  imageUrl: string;
  avgTempByMonth: MonthlyTemperatures;
};