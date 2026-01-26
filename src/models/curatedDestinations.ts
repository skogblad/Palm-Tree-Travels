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
  wikiName?: string;  // Optional: Used for Wikipedia API when name differs from article title
  country: string;
  lat: number;
  lon: number;
  vibes: string[];
  experiences: string[];
  description: string;
  imageUrl: string;
  altText: string;
  avgTempByMonth: MonthlyTemperatures;
  flightTime?: string;
  bestTravelTime?: string;
  currency?: string;
};
