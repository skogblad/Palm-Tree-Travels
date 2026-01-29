import { Link, useParams } from "react-router"
import { DestinationPresentation } from "../../components/views/DestinationPresentation/DestinationPresentation"
import { curatedDestinations } from "../../constants/curatedDestinations";
import styles from "./Destination.module.scss";

export const Destination = () => {
  const { id } = useParams();
  const destination = curatedDestinations.find(d => d.id === Number(id));

  if(!destination) {
    return (
      <section className={styles.errorSection}>
        <h2>Destinationen hittades inte</h2>
        <p>Den destination du letade efter finns tyvärr inte i vårt system. Testa att göra om din sökning eller gå tillbaka till startsidan.</p>
        <div className={styles.buttonWrapper}>
          <Link to={`/`} className={styles.backLink}>Till startsidan</Link>
          <Link to={`/search-destination`} className={styles.backLink}>Sök destination</Link>
        </div>
      </section>
    )
  } 

  return (
    <DestinationPresentation destination={destination}/>
  )
}