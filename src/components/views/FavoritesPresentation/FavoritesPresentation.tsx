import { NavLink } from "react-router";
import { DestinationCard } from "../../cards/DestinationCard/DestinationCard"
import styles from "./FavoritesPresentation.module.scss";
import type { CuratedDestination } from "../../../models/curatedDestinations";

type FavoritesPresentationProps = {
  favorites: CuratedDestination[];
}

export const FavoritesPresentation = ({ favorites }: FavoritesPresentationProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sparade favorioter</h2>

      {favorites.length > 0 ? (
        <div className={styles.favoritesWrapper}>
          {favorites.map((d) => (
            <DestinationCard
              key={d.id}
              destination={d}
              img={d.imageUrl}
              alt={d.altText}
              title={d.name}
              country={d.country}
              selectedMonth={null}
              avgTempByMonth={undefined}
              description={d.description}
              experience={d.experiences}
              showExperiences={true}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <p className={styles.emptyMessage}>Inga sparade favoriter än</p>
          <NavLink to={"/search-destination"}>Hitta destinationer</NavLink>
        </div>
      )}
    </div>
  );
}