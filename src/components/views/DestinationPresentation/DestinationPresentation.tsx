import styles from "./DestinationPresentation.module.scss";
import type { CuratedDestination } from "../../../models/curatedDestinations"
import { useEffect, useState } from "react";
import type { WikipediaData } from "../../../models/WikipediaData";
import { getWikipediaData } from "../../../services/wikipediaService";
import { Link } from "react-router";
import { Heart, MapPin } from "lucide-react";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { getWeatherIconUrl } from "../../../utils/getWeatherIconUrl";
import { getExperienceLabels } from "../../../utils/getExperienceLabels";
import { useFavorites } from "../../../hooks/useFavorites";

type DestinationPresentationProps = {
  destination: CuratedDestination;
}

export const DestinationPresentation = ({ destination }: DestinationPresentationProps) => {
  const [wikiText, setWikiText] = useState<WikipediaData>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { weather, isLoading } = useCurrentWeather(destination.lat, destination.lon);
  const experienceLabels = getExperienceLabels(destination.experiences);
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(destination.id)

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
            <span className={styles.countrySpan}><MapPin />{destination.country}</span>
            {isLoading && <span>Laddar väder...</span>}
            {weather && (
              <span className={styles.tempSpan}>
                Aktuell temperatur:<img src={getWeatherIconUrl(weather.icon)} alt="Väderikon" className={styles.weatherIcon} />{Math.round(weather.temp)}°C
              </span>
            )}
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.pOne}>{destination.description}</p>
            {firstParagraph && (
              <p className={styles.pTwo}>{firstParagraph}</p>
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
            <img src={destination.imageUrl} alt={destination.altText} />
            <div className={styles.experienceTags}>
              {experienceLabels.map((exp) => (
                <span key={exp.value} className={styles.tag}>
                  {exp.label}
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