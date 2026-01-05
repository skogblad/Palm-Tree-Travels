import type { Destination } from "../models/Destination";
import { getUrl } from "./serviceBase"

const BASE_URL = import.meta.env.VITE_OPENTRIPMAP_BASE_URL;
const API_KEY = import.meta.env.VITE_OPENTRIPMAP_API_KEY;

export const getDestinations = async (lat: number, lon: number, kinds?: string) => {
  const data = await getUrl<Destination[]>(
    `${BASE_URL}/radius?radius=100000&lat=${lat}&lon=${lon}&limit=20${kinds ? `&kinds=${kinds}` : ""}&apikey=${API_KEY}`
  );
  return data;
}

export const getDestinationById = async (xid: string) => {
  const data = await getUrl<Destination>(
    `${BASE_URL}/xid/${xid}?apikey=${API_KEY}`
  );
  return data;
}