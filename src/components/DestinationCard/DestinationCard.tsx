import { MapPin } from "lucide-react"
import { availableExperiences } from "../../constants/curatedDestinations"
import styles from "./DestinationCard.module.scss"

type destinationCardProps = {
  img: string
  alt: string
  title: string
  country: string
  description: string
  experience: string[]
}

export const DestinationCard = ({ img, alt, title, country, description, experience }: destinationCardProps) => {
  const experienceLabels = experience.map((exp) => ({
    value: exp,
    label: availableExperiences.find((e) => e.value === exp)?.label ?? exp
  }));

  return (
    <article className={styles.articleContainer}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <span className={styles.countrySpan}><MapPin aria-hidden="true"/> {country}</span>
      <p>{description}</p>
      <div className={styles.experienceTags}>
        {experienceLabels.map((exp) => (
          <span key={exp.value} className={styles.tag}>{exp.label}</span>
        ))}
      </div>
    </article>
  )
}