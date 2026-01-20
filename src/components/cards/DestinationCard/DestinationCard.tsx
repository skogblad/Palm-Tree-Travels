import { MapPin, Thermometer } from "lucide-react"
import styles from "./DestinationCard.module.scss"
import { getWeatherIconUrl } from "../../../utils/getWeatherIconUrl"

type destinationCardProps = {
  img: string
  alt: string
  title: string
  country: string
  description: string
  experience: string[]
  temperature?: number
  weatherIcon?: string
  avgTempByMonth?: number
  selectedMonth?: string | null
  totalScore?: number
}

export const DestinationCard = ({ img, alt, title, country, description, temperature, weatherIcon, avgTempByMonth, selectedMonth, totalScore }: destinationCardProps) => {

  return (
    <article className={styles.articleContainer}>
      <img src={img} alt={alt} />
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
    </article>
  )
}