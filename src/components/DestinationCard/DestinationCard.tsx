import { MapPin, Thermometer } from "lucide-react"
import { availableExperiences } from "../../constants/curatedDestinations"
import styles from "./DestinationCard.module.scss"

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
  selectedMonth: string | null
}

export const DestinationCard = ({ img, alt, title, country, description, experience, temperature, weatherIcon, avgTempByMonth, selectedMonth }: destinationCardProps) => {
  const experienceLabels = experience.map((exp) => ({
    value: exp,
    label: availableExperiences.find((e) => e.value === exp)?.label ?? exp
  }));

  return (
    <article className={styles.articleContainer}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <div className={styles.countryWeatherContainer}>
        <span className={styles.countrySpan}><MapPin aria-hidden="true"/> {country}</span>
        {avgTempByMonth && selectedMonth && (
          <span className={styles.avgTempSpan}><Thermometer aria-hidden="true"/>{selectedMonth}: {avgTempByMonth}°C</span>
        )} 
      </div>
      <p>{description}</p>
      <div className={styles.experienceTags}>
        {experienceLabels.map((exp) => (
          <span key={exp.value} className={styles.tag}>{exp.label}</span>
        ))}
      </div>
      {temperature !== undefined && (
        <span className={styles.tempSpan}>
          Aktuell temperatur:<img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Väderikon" className={styles.weatherIcon}/>{Math.round(temperature)}°C 
        </span>
      )}
    </article>
  )
}