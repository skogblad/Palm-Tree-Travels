import { Palmtree, Sparkles, Thermometer } from "lucide-react"
import { InfoCard } from "../InfoCard/InfoCard"
import styles from "./HomePresentation.module.scss"
import { DestinationCard } from "../DestinationCard/DestinationCard"
import { CardCarousel } from "../CardCarousel/CardCarousel"

export const HomePresentation = () => {
  return (
    <>
      <section className={styles.howItWorksContainer}>
        <h2>Hur det fungerar</h2>
        <p className={styles.subText}>Palm Tree Travels hjälper dig att upptäcka destinationer baserat på önskade upplevelser, med hjälp av väderdata och utvalda preferenser.</p>

        <CardCarousel className={styles.cardsCarousel}>
          <InfoCard
            Icon={Thermometer}
            iconWrapper={styles.thermometerWrapper}
            iconClassName={styles.thermometerIcon} 
            title="Temperatur"  
            infoText="Upptäck platser med den värme du längtar efter, uppdaterade med väderdata i realtid" 
          />

          <InfoCard 
            Icon={Palmtree}
            iconWrapper={styles.palmTreeWrapper}
            iconClassName={styles.palmTreeIcon} 
            title="Tropiska vibbar" 
            infoText="Utforska destinationer med palmer, stränder och den perfekta stämningen för just dig" 
          />

          <InfoCard
            Icon={Sparkles}
            iconWrapper={styles.sparklesWrapper}
            iconClassName={styles.sparklesIcon} 
            title="Upplevelser" 
            infoText="Få personliga rekommendationer baserat på upplevelsen du söker, inte bara en plats" 
          />
        </CardCarousel>

        <article className={styles.finalPunchArticle}>
          <h4>Sök efter upplevelse, inte destination</h4>
          <p>Oavsett om du jagar evig sommar eller söker ett tropiskt paradis – Palm Tree Travels hittar destinationer som matchar din känsla.</p>
        </article>
      </section>

      <section className={styles.featuredDestinationContainer}>
        <h2>Utvalda destinationer</h2>
        <p className={styles.subText2}>Populära tropiska resmål som resenärer upptäcker just nu</p>

        <CardCarousel className={styles.cardsCarousel}>
          <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 1" description="Hola hola"/>

          <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 2" description="TJOO"/>

          <DestinationCard img="./topBackground2.jpg" alt="test" title="Destination 3" description="TESSST"/>
        </CardCarousel>
      </section>
    </>
  )
}