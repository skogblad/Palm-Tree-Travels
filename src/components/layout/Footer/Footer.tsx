import { Link } from "react-router"
import { Palmtree } from "lucide-react"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.brandColumn}>
        <div className={styles.brandRow}>
          <Palmtree className={styles.brandIcon} aria-hidden />
          <p className={styles.brandTitle}>Palm Tree Travels</p>
        </div>
        <p className={styles.tagline}>
          Din guide till varma tropiska destinationer baserade på känsla, väder och upplevelser.
        </p>
      </div>

      <nav aria-label="Fotlänkar" className={styles.navContainer}>
        <h2 className={styles.linksHeading}>Länkar</h2>
        <Link to="/search-destination">Upptäck</Link>
        <Link to="/favorites">Favoriter</Link>
        <Link to="/">Vanliga frågor</Link>
      </nav>
    </section>
  )
}
