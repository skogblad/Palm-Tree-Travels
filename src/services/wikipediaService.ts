import type { WikipediaData } from "../models/WikipediaData";
import type { WikipediaPage } from "../models/WikipediaPage";

const fetchWikipediaPage = async (lang: "sv" | "en", placeName: string): Promise<WikipediaData | null> => {
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(placeName)}&prop=extracts&exintro=true&explaintext=true&format=json&origin=*`;

  const response = await fetch(url);
  if (!response.ok) return null;

  const data = await response.json();
  const pages = data.query?.pages;
  const page = pages ? (Object.values(pages)[0] as WikipediaPage) : null;

  if (!page || page.pageid === -1 || !page.extract) {
    return null;
  }

  return {
    title: page.title ?? placeName,
    description: page.extract,
    wikiUrl: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(placeName)}`
  }
}

export const getWikipediaData = async (placeName: string): Promise<WikipediaData> => {
  try {
    return (
      (await fetchWikipediaPage("sv", placeName)) ||
      (await fetchWikipediaPage("en", placeName)) || {
        title: placeName,
        description: "Ingen beskrivning tillgänglig",
        wikiUrl: null
      }
    );

  } catch (error) {
    console.error("Wikipedia API error:", error);

    return {
      title: placeName,
      description: "Ingen beskrivning tillgänglig",
      wikiUrl: null,
    }
  }
}