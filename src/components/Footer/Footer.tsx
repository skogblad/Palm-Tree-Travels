import { Link } from "react-router";
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <>
      <section className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <img src="./logoLong.png" alt="logo" />
          <p>Upptäck varma, inspirerande destinationer baserade på upplevelser, inte bara platser.</p>
        </div>
        
        <div>
          <h5>Länkar</h5>
          <Link to="/search-destination">Upptäck</Link>
          <Link to="/favorites">Favoriter</Link>
          <Link to="/">Vanliga frågor</Link>
        </div>
      </section>
    </>
  );
}