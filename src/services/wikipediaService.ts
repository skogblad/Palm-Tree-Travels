import type { WikipediaData } from "../models/WikipediaData";

export const getWikipediaData = async (placeName: string): Promise<WikipediaData> => {
  const url = `https://sv.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(placeName)}&prop=extracts&exintro=true&explaintext=true&format=json&origin=*`;
  
  try {
    const response = await fetch(url);

    if(response.status === 404) {
      throw new Error("Wikipedia article not found");
    }

    if(!response.ok) {
      throw new Error(`Wikipedia API error: ${response.status}`);
    }

    const data = await response.json();
    const pages = data.query?.pages;
    const page = pages? (Object.values(pages)[0] as { title?: string; extract?: string }) : null;

    return {
      title: page?.title || placeName,
      description: page?.extract || "Ingen beskrivning tillgänglig",
      wikiUrl: `https://sv.wikipedia.org/wiki/${encodeURIComponent(placeName)}`,
    }
  } catch (error) {
    console.error("Wikipedia API error:", error);

    return {
      title: placeName,
      description: "Ingen beskrivning tillgänglig",
      wikiUrl: null,
    }
  }
}