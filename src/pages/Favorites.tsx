import { useEffect, useState } from "react"
import { FavoritesPresentation } from "../components/views/FavoritesPresentation/FavoritesPresentation"
import { getFavoritesFromStorage } from "../hooks/useFavorites";


export const Favorites = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromStorage);

  // Listen for favorites updates from other components and sync local state
  useEffect(() => {
    const handleFavoritesUpdated = () => {
      const loaded = getFavoritesFromStorage();
      setFavorites(loaded);
    };

    window.addEventListener("favoritesUpdated", handleFavoritesUpdated);

    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdated);
    };
  }, []);

  return (
    <>
      <FavoritesPresentation favorites={favorites} />
    </>
  )
}