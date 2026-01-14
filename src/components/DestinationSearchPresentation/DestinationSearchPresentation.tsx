import * as Slider from "@radix-ui/react-slider";
import styles from "./DestinationSearchPresentation.module.scss"
import React, { useState } from "react";
import { DestinationCard } from "../DestinationCard/DestinationCard";
import { availableExperiences, availableVibes, filterDestinations } from "../../constants/curatedDestinations";
import type { CuratedDestination, MonthlyTemperatures } from "../../models/curatedDestinations";
import { DayPicker, type DateRange } from "react-day-picker";
import { sv } from "date-fns/locale";
import "react-day-picker/style.css";
import "./DayPickerStyles.scss";
import { getWeather } from "../../services/weatherService";
import type { Weather } from "../../models/Weather";
import { Link } from "react-router";
import { TagSelector } from "../TagSelector/TagSelector";
import { ArrowDownAZ, Globe, List, Map } from "lucide-react";
import { MapView } from "../MapView/MapView";

export const DestinationSearchPresentation = () => {
  const [tempRange, setTempRange] = useState([20, 30]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<CuratedDestination[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [currentWeather, setCurrentWeather] = useState<Record<string, Weather>>({});
  const [selectedMonth, setSelectedMonth] = useState<keyof MonthlyTemperatures | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const results = filterDestinations(selectedVibes, selectedExperiences);

    // If no date is selected, show results filtered only by vibes/experiences 
    // without applying temperature filtering/fetching weather data (prevent crash & unneccessary API call)
    if (!dateRange?.from) {
      setDestinations(results);
      setHasSearched(true);
      return;
    }

    const monthKeys = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"] as const;
    const month = dateRange.from.getMonth();
    const selectedMonthKey = monthKeys[month];
    setSelectedMonth(selectedMonthKey);

    const filteredByTemp = results.filter((dest) => {
      const destTemp = dest.avgTempByMonth[selectedMonthKey];
      return destTemp >= tempRange[0] && destTemp <= tempRange[1];
    });

    const getCoordinates = filteredByTemp.map((dest) => {
      return getWeather(dest.lat, dest.lon);
    });

    const weatherResults = await Promise.all(getCoordinates);

    const weatherMap: Record<string, Weather> = {};
    filteredByTemp.forEach((dest, index) => {
      weatherMap[dest.name] = weatherResults[index];
    });
    
    setDestinations(filteredByTemp);
    setHasSearched(true);
    setCurrentWeather(weatherMap);
  }

  const handleReset = () => {
    setTempRange([20, 30]);
    setSelectedVibes([]);
    setSelectedExperiences([]);
    setDateRange(undefined);
    setHasSearched(false);
    setSelectedMonth(null)
  }

  // Toggles the selection state of a tag (removes if selected, adds if not selected)
  const toggleVibeTags = (value: string) => {
    setSelectedVibes(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  }

  const toggleExperienceTags = (value: string) => {
    setSelectedExperiences(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
  }

  const sortByAlpha = () => {
    const sortedDestAlpha =  [...destinations].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setDestinations(sortedDestAlpha);
  }

  const sortByCountry = () => {
    const sortedDestCountry = [...destinations].sort((a, b) =>
      a.country.localeCompare(b.country)
    );

    setDestinations(sortedDestCountry);
  }

  return (
    <>
      <section className={styles.searchPage}>
        

        <form onSubmit={handleSubmit} onReset={handleReset} className={styles.formContainer}>
        <h2 className={styles.titleH2}>Hitta din drömdestination</h2>  
          <div className={styles.leftColumn}>
            <div className={styles.tempWrapper}>
              <span>Temperatur: {tempRange[0]}° - {tempRange[1]}°</span>
              <Slider.Root 
                className={styles.root} 
                value={tempRange}
                onValueChange={setTempRange}
                max={50} 
                minStepsBetweenThumbs={1}
              >
                <Slider.Track className={styles.track}>
                  <Slider.Range className={styles.range} />
                </Slider.Track>
                <Slider.Thumb className={styles.thumb} aria-label="Lägst" />
                <Slider.Thumb className={styles.thumb} aria-label="Högst" />
              </Slider.Root>
            </div>

            <div className="calendarWrapper">
              <span className="title">Resedatum:</span>
              <DayPicker
                locale={sv} 
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
              />
            </div>
          </div>
          
          <div className={styles.filterSection}>
            <TagSelector 
              title="Vibes"
              options={availableVibes}
              selectedValues={selectedVibes}
              onToggle={toggleVibeTags}
            />

            <TagSelector 
              title="Upplevelser"
              options={availableExperiences}
              selectedValues={selectedExperiences}
              onToggle={toggleExperienceTags}
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="reset" className={styles.resetBtn}>Återställ</button>
            <button type="submit" className={styles.submitBtn}>Sök</button>
          </div>
        </form>
      </section>

      {hasSearched && (
        <section className={styles.resultContainer}>
          <h3 className={styles.resultsTitle}>Resultat ({destinations.length} destinationer)</h3>
          
          {destinations.length > 0 && (
            <div className={styles.sortOptions}>
              <button 
                className={styles.sortIcon} 
                aria-label="Sortera alfabetiskt" 
                onClick={sortByAlpha}
              >
                <ArrowDownAZ aria-hidden="true"/>
              </button>

              <button 
                className={styles.sortIcon} 
                aria-label="Sortera alfabetiskt" 
                onClick={sortByCountry}
              >
                <Globe aria-hidden="true"/>
              </button>

              <button className={styles.viewToggleIcon}  aria-label={viewMode === "list" ? "Visa karta" : "Visa lista"} onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}>
                {viewMode === "list" ? <Map aria-hidden="true"/> : <List aria-hidden="true"/>}
              </button>
            </div>
          )}

          {destinations.length > 0 ? (  
            viewMode === "list" ? (
              destinations.map((d) => (
                <Link key={d.id} to={`/destination/${d.id}`}>
                  <DestinationCard 
                    img={d.imageUrl}
                    alt={d.name}
                    weatherIcon={currentWeather[d.name]?.icon}
                    temperature={currentWeather[d.name]?.temp} 
                    title={d.name} 
                    country={d.country}
                    selectedMonth={selectedMonth}
                    avgTempByMonth={selectedMonth ? d.avgTempByMonth[selectedMonth] : undefined}
                    description={d.description}
                    experience={d.experiences}
                  />
                </Link>  
              ))
            ) : (
              <MapView destinations={destinations} />
            )
          ) : (
            <p>Inga resultat hittades</p>
          )}
        </section>
      )}
    </>
  )
}