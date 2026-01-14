import styles from "./DestinationPresentation.module.scss";
import type { CuratedDestination } from "../../models/curatedDestinations"
import { useEffect, useState } from "react";
import type { WikipediaData } from "../../models/WikipediaData";
import { getWikipediaData } from "../../services/wikipediaService";
import { Link } from "react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";

type DestinationPresentationProps = {
  destination: CuratedDestination;
}

export const DestinationPresentation = ({ destination }: DestinationPresentationProps) => {
  const [wikiText, setWikiText] = useState<WikipediaData>();
  const { weather, isLoading } = useCurrentWeather(destination.lat, destination.lon);

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
        <Link to={"/search-destination"} className={styles.goBackTextTop}><ArrowLeft/>Tillbaka</Link>

        <article key={destination.id} className={styles.destinationContainer}>
          <h2>{destination.name}</h2>

          <div className={styles.countryTempWrapper}>
            <span className={styles.countrySpan}><MapPin />{destination.country}</span>
            {isLoading && <span>Laddar väder...</span>}
            {weather && (
              <span className={styles.tempSpan}>
                Aktuell temperatur:<img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Väderikon" className={styles.weatherIcon} />{Math.round(weather.temp)}°C
              </span>
            )}
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.pOne}>{destination.description}</p>
            {wikiText?.description.split('\n').map((paragraph, index) => (
              <p key={index} className={styles.pTwo}>{paragraph}</p>
            ))}
            <p className={styles.readMoreTag}>
              <a href={wikiText?.wikiUrl ?? undefined} target="_blank" rel="noopener noreferrer">Läs mer (länk)</a>
            </p>

            <div className={styles.tempContainer}>
              <span className={styles.monthlyTempTitle}>Genomsnittlig temperatur under året:</span>
              {Object.entries(destination.avgTempByMonth).map(([month, temp]) => (
                <div key={month} className={styles.tempMonthly}>
                  <span className={styles.month}>{month}: </span>
                  <span className={styles.temp}>{temp}°C</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightWrapper}>
            <img src={destination.imageUrl} alt={destination.name} />
            <div className={styles.experienceTags}>
              {destination.experiences.map((experience, index) => (
                <span key={index} className={styles.tag}>
                  {experience}
                </span>
              ))}
            </div>
          </div>
        </article>

        <Link to={"/search-destination"} className={styles.backBtn}>Tillbaka till sökresultat</Link>
      </main>
    </>
  )
}