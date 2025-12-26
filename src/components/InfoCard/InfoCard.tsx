import type { LucideIcon } from "lucide-react"
import styles from "./InfoCard.module.scss"

type InfoCardProps = {
  title: string
  infoText: string
  Icon: LucideIcon
  iconWrapper: string
  iconClassName: string
}

export const InfoCard = ({ title, infoText, Icon, iconWrapper, iconClassName }: InfoCardProps) => {
  
  return (
    <article className={styles.articleContainer}>
      <span className={iconWrapper}>
        <Icon className={iconClassName} />
      </span>
      <h3>{title}</h3>
      <p>{infoText}</p>
    </article>
  )
}