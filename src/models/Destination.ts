import type { Weather } from "./Weather";

export type Destination = {
  name: string
  xid: string;
  lat: number;
  lon: number;
  kinds: string;
  preview?: {
    source: string;
  }
  weather: Weather;
}