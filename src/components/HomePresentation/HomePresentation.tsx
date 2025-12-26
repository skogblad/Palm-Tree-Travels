import { Palmtree, Sparkles, Thermometer } from "lucide-react"
import { InfoCard } from "../InfoCard/InfoCard"
import styles from "./HomePresentation.module.scss"
import { DestinationCard } from "../DestinationCard/DestinationCard"

export const HomePresentation = () => {
  return (
    <>
      <section className={styles.howItWorksContainer}>
        <h2>Hur det fungerar</h2>
        <p>Palm Tree Travels hjälper dig att upptäcka destinationer baserat på önskade upplevelser, med hjälp av väderdata och utvalda preferenser.</p>

        <InfoCard
          Icon={Thermometer}
          iconWrapper={styles.thermometerWrapper}
          iconClassName={styles.thermometerIcon} 
          title="Artikel 1" 
          infoText="Hej här är ett test" 
        />

        <InfoCard 
          Icon={Palmtree}
          iconWrapper={styles.palmTreeWrapper}
          iconClassName={styles.palmTreeIcon} 
          title="Artikel 2" 
          infoText="Tjoooohej en till!" 
        />

        <InfoCard
          Icon={Sparkles}
          iconWrapper={styles.sparklesWrapper}
          iconClassName={styles.sparklesIcon} 
          title="Artikel 3" 
          infoText="Sista testet" 
        />

        <article className={styles.finalPunchArticle}>
          <h4>Test</h4>
          <p>Hola hola</p>
        </article>
      </section>

      <section className={styles.featuredDestinationContainer}>
        <h2>Utvalda destinationer</h2>
        <p>Popular warm destinations that travelers are discovering right now</p>

        <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 1" description="Hola hola"/>

        <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 2" description="TJOO"/>

        <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 3" description="TESSST"/>
      </section>
    </>
  )
}