import { Heart, MapPin, Thermometer } from "lucide-react"
import styles from "./DestinationCard.module.scss"
import { getWeatherIconUrl } from "../../../utils/getWeatherIconUrl"
import { useFavorites } from "../../../hooks/useFavorites"
import type { CuratedDestination } from "../../../models/curatedDestinations"
import { getExperienceLabels } from "../../../utils/getExperienceLabels"

type destinationCardProps = {
  img: string
  alt: string
  title: string
  country: string
  description: string
  experience?: string[]
  showExperiences?: boolean
  temperature?: number
  weatherIcon?: string
  avgTempByMonth?: number
  selectedMonth?: string | null
  totalScore?: number
  destination: CuratedDestination
}

export const DestinationCard = ({ img, alt, title, country, description, experience, showExperiences, temperature, weatherIcon, avgTempByMonth, selectedMonth, totalScore, destination }: destinationCardProps) => {

  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(destination.id);
  const experienceTags = experience ? getExperienceLabels(experience) : [];

  return (
    <article className={styles.articleContainer}>
      <div className={styles.imageContainer}>
        <img src={img} alt={alt} />
        <button
          className={`${styles.favoriteBtn} ${isFav ? styles.isFavorite : ''}`}
          aria-label={isFav ? "Ta bort från favoriter" : "Lägg till i favoriter"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(destination);
          }}
        >
          <Heart aria-hidden="true" />

        </button>
      </div>

      <h3>{title}</h3>

      <div className={styles.countryWeatherContainer}>
        <span className={styles.countrySpan}><MapPin aria-hidden="true" /> {country}</span>
        {avgTempByMonth && selectedMonth && (
          <span className={styles.avgTempSpan}><Thermometer aria-hidden="true" />{selectedMonth}: {avgTempByMonth}°C</span>
        )}
      </div>
      <p>{description}</p>
      <div className={styles.scoreWrapper}>
        {totalScore !== undefined && (
          <span className={styles.scoreSpan}>Match: {(totalScore * 100).toFixed(0)}%</span>
        )}
      </div>
      {temperature !== undefined && (
        <span className={styles.tempSpan}>
          Aktuell temperatur:<img src={getWeatherIconUrl(weatherIcon!)} alt="Väderikon" className={styles.weatherIcon} />{Math.round(temperature)}°C
        </span>
      )}
      {showExperiences && experienceTags.length > 0 && (
        <div className={styles.experienceTags}>
          {experienceTags.slice(0, 3).map((exp) => (
            <span key={exp.value} className={styles.tagSpan}>{exp.label}</span>
          ))}
        </div>
      )}
    </article>
  )
}