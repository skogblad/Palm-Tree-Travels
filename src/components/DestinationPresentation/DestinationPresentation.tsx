import styles from "./DestinationPresentation.module.scss";
import type { CuratedDestination } from "../../models/curatedDestinations"

type DestinationPresentationProps = {
  destination: CuratedDestination;
}

export const DestinationPresentation = ({ destination }: DestinationPresentationProps) => {
  return (
    <article key={destination.id} className={styles.destinationContainer}>
      <div className={styles.contentWrapper}>
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
        <p>Lång description från Wiki</p> {/** TODO: importera API från Wikipedia för mera info! */}
        <button>Tillbaka till sökresultat</button>
      </div>
      
      <div className={styles.imgWrapper}>
        <img src={destination.imageUrl} alt={destination.name} />
        <div className={styles.tempContainer}>
          <span className={styles.monthlyTempTitle}>Genomsnittlig temperatur under året:</span>
          {Object.entries(destination.avgTempByMonth).map(([month, temp]) => (
            <div key={month} className={styles.tempMonthly}>
              <span className={styles.month}>{month}: </span>
              <span className={styles.temp}>{temp}°C</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}