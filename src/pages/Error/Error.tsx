import styles from "./Error.module.scss";
import { Link } from "react-router"

export const Error = () => {
  return (
    <>
      <section className={styles.errorSection}>
        <h2>Oops, något gick fel.</h2>
        <p>Vi hittar tyvärr inte sidan du letar efter, testa att gå tillbaka till startsidan.</p>
        <Link to={`/`} className={styles.backLink}>Till startsidan</Link>
      </section>
    </>
  )
}