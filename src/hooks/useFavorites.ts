import { useEffect, useState } from "react"
import type { CuratedDestination } from "../models/curatedDestinations"

export const getFavoritesFromStorage = (): CuratedDestination[] => {
  try {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to parse favorites from storage:", error);
  }
  return [];
};

export const useFavorites = () => {
  const [destinations, setDestinations] = useState<CuratedDestination[]>(
    () => getFavoritesFromStorage()
  );

  // Save to localStorage when favorites changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(destinations));
    window.dispatchEvent(new CustomEvent("favoritesUpdated"));
  }, [destinations]);

  const removeFavorite = (id: number) => {
    const currentFavorites = getFavoritesFromStorage();
    const updated = currentFavorites.filter(destination => destination.id !== id);
    setDestinations(updated);
  }

  const toggleFavorites = (d: CuratedDestination) => {
    const currentFavorites = getFavoritesFromStorage();

    if (currentFavorites.some(destination => destination.id === d.id)) {
      removeFavorite(d.id);
    } else {
      setDestinations([...currentFavorites, d]);
    }
  }

  return {
    favorites: destinations,
    toggleFavorite: toggleFavorites,
    isFavorite: (id: number) => destinations.some(d => d.id === id)
  }
}