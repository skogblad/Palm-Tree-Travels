import { Palmtree, Sparkles, ThermometerSun } from "lucide-react"
import { InfoCard } from "../../cards/InfoCard/InfoCard"
import styles from "./HomePresentation.module.scss"
import iconStyles from "../../cards/InfoCard/InfoCard.module.scss"
import { DestinationCard } from "../../cards/DestinationCard/DestinationCard"
import { CardCarousel } from "../../cards/CardCarousel/CardCarousel"
import { curatedDestinations } from "../../../constants/curatedDestinations"
import { Link, NavLink } from "react-router"

export const HomePresentation = () => {
  return (
    <>
      <section className={styles.howItWorksContainer}>
        <h2>Hitta enkelt din drömresa</h2>
        <p className={styles.subText}>Palm Tree Travels hjälper dig att upptäcka destinationer baserat på önskade upplevelser, med hjälp av väderdata och utvalda preferenser.</p>

        <CardCarousel className={styles.cardsCarousel}>
          <InfoCard
            Icon={ThermometerSun}
            iconWrapper={iconStyles.thermometerWrapper}
            iconClassName={iconStyles.thermometerIcon} 
            title="Temperatur"  
            infoText="Upptäck platser med den värme du längtar efter, uppdaterade med väderdata i realtid" 
          />

          <InfoCard 
            Icon={Palmtree}
            iconWrapper={iconStyles.palmTreeWrapper}
            iconClassName={iconStyles.palmTreeIcon} 
            title="Tropiska vibbar" 
            infoText="Utforska destinationer med palmer, stränder och den perfekta stämningen för just dig" 
          />

          <InfoCard
            Icon={Sparkles}
            iconWrapper={iconStyles.sparklesWrapper}
            iconClassName={iconStyles.sparklesIcon} 
            title="Upplevelser" 
            infoText="Få personliga rekommendationer baserat på upplevelsen du söker, inte bara en plats" 
          />
        </CardCarousel>

        <article className={styles.finalPunchArticle}>
          <h4>Följ solen, inte kartan</h4>
          <p>Oavsett om du jagar evig sommar eller söker ett tropiskt paradis – Palm Tree Travels hittar destinationer som matchar din känsla.</p>
          <NavLink to={"/search-destination"}>Upptäck nu</NavLink>
        </article>
      </section>

      <section className={styles.featuredDestinationContainer}>
        <h2>Utvalda destinationer</h2>
        <p className={styles.subText2}>Populära tropiska resmål som resenärer upptäcker just nu</p>

        <CardCarousel className={styles.cardsCarousel}>
          {curatedDestinations.slice(0, window.innerWidth <= 768 && window.innerWidth > 425 ? 2 : 3).map((d) => (
            <Link key={d.id} to={`/destination/${d.id}`}>
              <DestinationCard 
                key={d.name}
                img={d.imageUrl}
                alt={d.name}
                title={d.name}
                country={d.country}
                description={d.description}
                experience={d.experiences}
              />
            </Link>
            
          ))}
        </CardCarousel>
      </section>
    </>
  )
}