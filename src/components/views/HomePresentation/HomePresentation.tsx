import type React from "react"
import { Palmtree, Sparkles, ThermometerSun } from "lucide-react"
import { InfoCard } from "../../cards/InfoCard/InfoCard"
import styles from "./HomePresentation.module.scss"
import iconStyles from "../../cards/InfoCard/InfoCard.module.scss"
import { DestinationCard } from "../../cards/DestinationCard/DestinationCard"
import { CardCarousel } from "../../cards/CardCarousel/CardCarousel"
import { curatedDestinations } from "../../../constants/curatedDestinations"
import { NavLink } from "react-router"

export const HomePresentation = () => {
  const goToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.getElementById("how-it-works")
    if (!section) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
    const moveFocus = () => section.focus({ preventScroll: true })
    if (reducedMotion) {
      moveFocus()
    } else {
      window.setTimeout(moveFocus, 450)
    }
  }

  return (
    <>
      <section className={styles.hero} aria-label="Välkommen">
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Palm Tree Travels</h1>
          <p className={styles.heroTagline}>
            Upptäck varma, inspirerande destinationer baserade på upplevelser och känsla
          </p>
          <div className={styles.heroActions}>
            <NavLink to="/search-destination" className={styles.heroPrimary}>
              Sök destination
            </NavLink>
            <a href="#how-it-works" className={styles.heroSecondary} onClick={goToHowItWorks}>
              Mer info
            </a>
          </div>
        </div>
      </section>

      <section
        className={styles.howItWorksContainer}
        id="how-it-works"
        tabIndex={-1}
        aria-labelledby="how-it-works-heading"
      >
        <h2 id="how-it-works-heading">Hitta enkelt din drömresa</h2>
        <p className={styles.subText}>Oavsett om du jagar evig sommar eller söker ett tropiskt paradis hittar Palm Tree Travels strandnära destinationer som matchar din känsla och utvalda preferenser.</p>

        <CardCarousel className={styles.cardsCarousel}>
          <InfoCard
            Icon={ThermometerSun}
            iconWrapper={iconStyles.thermometerWrapper}
            iconClassName={iconStyles.thermometerIcon}
            title="Temperatur"
            infoText="Upptäck platser med den värme du längtar efter, baserat på nuvarande väder och historiska genomsnitt"
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

        <NavLink to="/search-destination" className={styles.howItWorksCta}>
          Upptäck nu
        </NavLink>
      </section>

      <section className={styles.featuredDestinationContainer}>
        <h2>Utvalda destinationer</h2>
        <p className={styles.subText2}>Populära tropiska resmål som resenärer upptäcker just nu</p>

        <CardCarousel className={styles.cardsCarousel}>
          {curatedDestinations.slice(0, window.innerWidth <= 768 && window.innerWidth > 425 ? 2 : 3).map((d) => (
            <DestinationCard
              key={d.id}
              destination={d}
              img={d.imageUrl}
              alt={d.altText}
              title={d.name}
              country={d.country}
              description={d.description}
              experience={d.experiences}
            />
          ))}
        </CardCarousel>
      </section>
    </>
  )
}