export type MonthlyTemperatures = {
  Januari: number;
  Februari: number;
  Mars: number;
  April: number;
  Maj: number;
  Juni: number;
  Juli: number;
  Augusti: number;
  September: number;
  Oktober: number;
  November: number;
  December: number;
};

export type CuratedDestination = {
  id: number;
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
