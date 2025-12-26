import styles from "./DestinationCard.module.scss"

type destinationCardProps = {
  img: string
  alt: string
  title: string
  description: string
}

export const DestinationCard = ({ img, alt, title, description }: destinationCardProps) => {
  return (
    <article className={styles.articleContainer}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}