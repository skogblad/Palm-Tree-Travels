import styles from "./DestinationPresentation.module.scss";
import type { CuratedDestination } from "../../../models/curatedDestinations"
import { useEffect, useState } from "react";
import type { WikipediaData } from "../../../models/WikipediaData";
import { getWikipediaData } from "../../../services/wikipediaService";
import { Link, useLocation } from "react-router";
import { CircleDollarSign, CloudSun, Heart, MapPin, MoveLeft, PlaneIcon } from "lucide-react";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { getWeatherIconUrl } from "../../../utils/getWeatherIconUrl";
import { useFavorites } from "../../../hooks/useFavorites";
import { getLabels } from "../../../utils/getLabels";
import { availableExperiences, availableVibes } from "../../../constants/curatedDestinations";

type DestinationPresentationProps = {
  destination: CuratedDestination;
}

export const DestinationPresentation = ({ destination }: DestinationPresentationProps) => {
  const [wikiText, setWikiText] = useState<WikipediaData>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { weather, isLoading, error } = useCurrentWeather(destination.lat, destination.lon);
  const experienceLabels = getLabels(destination.experiences, availableExperiences);
  const vibesLabels = getLabels(destination.vibes, availableVibes);
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(destination.id)
  const location = useLocation();
  const cameFromSearch = location.state?.from === "/search-destination";

  const paragraphs = wikiText?.description.split('\n') || [];
  const firstParagraph = paragraphs[0];
  const remainingParagraph = paragraphs.slice(1);

  useEffect(() => {
    const getData = async () => {
      const searchName = destination.wikiName || destination.name;
      const wikiText = await getWikipediaData(searchName);
      setWikiText(wikiText);
    }

    getData();
  }, [destination.wikiName, destination.name]);

  return (
    <>
      <main className={styles.pageWrapper}>
        {cameFromSearch && (
          <Link to={"/search-destination"} className={styles.backLink}><MoveLeft aria-hidden="true"/> Sökresultat</Link>
        )}

        <article key={destination.id} className={styles.destinationContainer}>
          <h2>{destination.name}</h2>

          <button
            className={`${styles.favoriteBtn} ${isFav ? styles.isFavorite : ''}`}
            aria-label={isFav ? "Ta bort från favoriter" : "Lägg till i favoriter"}
            onClick={() => toggleFavorite(destination)}
          >
            <Heart aria-hidden="true" />
          </button>

          <div className={styles.countryTempWrapper}>
            <span className={styles.countrySpan}><MapPin aria-hidden="true"/>{destination.country}</span>
            {isLoading && <span>Laddar väder...</span>}
            {error && <span>Kan ej ladda väderdata</span>}
            {weather && (
              <span className={styles.tempSpan}>
                Aktuell temperatur:<img src={getWeatherIconUrl(weather.icon)} alt="Väderikon" className={styles.weatherIcon} />{Math.round(weather.temp)}°C
              </span>
            )}
          </div>

          <div className={styles.textWrapper}>
            {firstParagraph && (
              <>
              <h3 className={styles.aboutDestinationTitle}>Om destinationen:</h3>
              <p className={styles.pOne}>{destination.description}</p>
              <p className={styles.pTwo}>{firstParagraph}</p>
              </>
            )}

            {isExpanded && remainingParagraph.map((paragraph, index) => (
              <p key={index} className={styles.pTwo}>{paragraph}</p>
            ))}

            {(isExpanded || paragraphs.length === 1) && (
              <span className={styles.readMoreTag}>
                <a href={wikiText?.wikiUrl ?? undefined} target="_blank" rel="noopener noreferrer">Läs mer (länk)</a>
              </span>
            )}

            {paragraphs.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles.expandButton}
              >
                {isExpanded ? "Visa mindre" : "Läs mer"}
              </button>
            )}

            <section className={styles.infoBox}>
              <h3>Snabbfakta</h3>
              <dl className={styles.infoList}>
                <div className={styles.pair}>
                  <dt><PlaneIcon aria-hidden="true" />Flygtid:</dt>
                  <dd className={styles.destinationInfo}>{destination.flightTime}</dd>
                </div>
                
                <div className={styles.pair}>
                  <dt><CloudSun aria-hidden="true" />Bästa restid:</dt>
                  <dd className={styles.destinationInfo}>{destination.bestTravelTime}</dd>
                </div>

                <div className={styles.pair}>
                  <dt><CircleDollarSign aria-hidden="true" />Valuta:</dt>
                  <dd className={styles.destinationInfo}>{destination.currency}</dd>
                </div>
              </dl>

              <hr />

              <div className={styles.tagWrapper}>
                <h4 className={styles.experienceTitle}>Upplevelser</h4>
                <ul className={styles.experienceTags}>
                  {experienceLabels.map((exp) => (
                    <li key={exp.value} className={styles.eTag}>
                      {exp.label}
                    </li>
                  ))}
                </ul>

                <h4 className={styles.vibeTitle}>Känsla</h4>
                <ul className={styles.vibeTags}>
                  {vibesLabels.map((vib) => (
                    <li key={vib.value} className={styles.vTag}>
                      {vib.label}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://www.flygresor.se/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.findFlight}
              >
                Hitta flygresa
              </a>
            </section>
          </div>

          <div className={styles.rightWrapper}>
            <img 
              src={destination.imageUrl} 
              alt={destination.altText}
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />

            <table className={styles.tempContainer}>
              <caption className={styles.monthlyTempTitle}>Genomsnittlig temperatur under året:</caption>
              <tbody>
                {Object.entries(destination.avgTempByMonth).map(([month, temp]) => (
                  <tr key={month} className={styles.tempMonthly}>
                    <th scope="row" className={styles.month}>{month}: </th>
                    <td className={styles.temp}>{temp}°C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </main>
    </>
  )
}