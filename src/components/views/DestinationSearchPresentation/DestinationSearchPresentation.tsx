import * as Slider from "@radix-ui/react-slider";
import styles from "./DestinationSearchPresentation.module.scss"
import React from "react";
import { DestinationCard } from "../../cards/DestinationCard/DestinationCard";
import { availableExperiences, availableVibes } from "../../../constants/curatedDestinations";
import type { CuratedDestination, MonthlyTemperatures } from "../../../models/curatedDestinations";
import { DayPicker, type DateRange } from "react-day-picker";
import { sv } from "date-fns/locale";
import "react-day-picker/style.css";
import "./DayPickerStyles.scss";
import type { Weather } from "../../../models/Weather";
import { Link } from "react-router";
import { TagSelector } from "../../controls/TagSelector/TagSelector";
import { ArrowDownAZ, Globe, List, Map } from "lucide-react";
import { MapView } from "../../MapView/MapView";

type DestinationSearchPresentationProps = {
  tempRange: [number, number];
  selectedVibes: string[];
  selectedExperiences: string[];
  dateRange: DateRange | undefined;
  selectedMonth: keyof MonthlyTemperatures | null;
  destinations: CuratedDestination[];
  currentWeather: Record<string, Weather>;
  hasSearched: boolean;
  viewMode: "list" | "map";
  handlers: {
    onTempRangeChange: (value: number[]) => void;
    onDateRangeChange: (range: DateRange | undefined) => void;
    onToggleVibeTags: (value: string) => void;
    onToggleExperienceTags: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onReset: () => void;
    onSortByAlpha: () => void;
    onSortByCountry: () => void;
    onToggleViewMode: () => void;
  };
}

export const DestinationSearchPresentation = ({ tempRange, selectedVibes, selectedExperiences,dateRange, selectedMonth, destinations, currentWeather, hasSearched, viewMode, handlers }: DestinationSearchPresentationProps) => {
  
  const {
    onTempRangeChange,
    onDateRangeChange,
    onToggleVibeTags,
    onToggleExperienceTags,
    onSubmit,
    onReset,
    onSortByAlpha,
    onSortByCountry,
    onToggleViewMode,
  } = handlers;
  
  return (
    <>
      <section className={styles.searchPage}>
        <form onSubmit={onSubmit} onReset={onReset} className={styles.formContainer}>
        <h2 className={styles.titleH2}>Hitta din drömdestination</h2>  
          <div className={styles.leftColumn}>
            <div className={styles.tempWrapper}>
              <span>Temperatur: {tempRange[0]}° - {tempRange[1]}°</span>
              <Slider.Root 
                className={styles.root} 
                value={tempRange}
                onValueChange={onTempRangeChange}
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
                onSelect={onDateRangeChange}
              />
            </div>
          </div>
          
          <div className={styles.filterSection}>
            <TagSelector 
              title="Vibes"
              options={availableVibes}
              selectedValues={selectedVibes}
              onToggle={onToggleVibeTags}
            />

            <TagSelector 
              title="Upplevelser"
              options={availableExperiences}
              selectedValues={selectedExperiences}
              onToggle={onToggleExperienceTags}
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
                onClick={onSortByAlpha}
              >
                <ArrowDownAZ aria-hidden="true"/>
              </button>

              <button 
                className={styles.sortIcon} 
                aria-label="Sortera alfabetiskt" 
                onClick={onSortByCountry}
              >
                <Globe aria-hidden="true"/>
              </button>

              <button 
                className={styles.viewToggleIcon}  
                aria-label={viewMode === "list" ? "Visa karta" : "Visa lista"} 
                onClick={onToggleViewMode}
              >
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