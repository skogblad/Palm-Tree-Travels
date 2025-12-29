import { Link } from "react-router";
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <>
      <section className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <img src="./logoLong.png" alt="Palm Tree Travels logotyp" />
          <p>Upptäck varma, inspirerande destinationer baserade på upplevelser, inte bara platser.</p>
        </div>
        
        <nav aria-label="Fotlänkar" className={styles.navContainer}>
          <h2>Länkar</h2>
          <Link to="/search-destination">Upptäck</Link>
          <Link to="/favorites">Favoriter</Link>
          <Link to="/">Vanliga frågor</Link>
        </nav>
      </section>
    </>
  );
}