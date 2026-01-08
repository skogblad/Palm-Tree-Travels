import * as Slider from "@radix-ui/react-slider";
import styles from "./DestinationSearchPresentation.module.scss"
import React, { useState } from "react";
import { DestinationCard } from "../DestinationCard/DestinationCard";
import { availableExperiences, availableVibes, filterDestinations } from "../../constants/curatedDestinations";
import type { CuratedDestination } from "../../models/curatedDestinations";
import { DayPicker, type DateRange } from "react-day-picker";
import { sv } from "date-fns/locale";
import "react-day-picker/style.css";
import "./DayPickerStyles.scss";
import { getWeather } from "../../services/weatherService";
import type { Weather } from "../../models/Weather";

export const DestinationSearchPresentation = () => {
  const [tempRange, setTempRange] = useState([20, 30]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<CuratedDestination[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [currentWeather, setCurrentWeather] = useState<Record<string, Weather>>({});

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

    const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"] as const;
    const month = dateRange.from.getMonth();
    const selectedMonthKey = monthKeys[month];

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
  }

  return (
    <>
      <section>
        <h2>Starta din sökning</h2>

        <form onSubmit={handleSubmit} onReset={handleReset} className={styles.formContainer}>
          <div className="calendarWrapper">
            <span>Resedatum:</span>
            <DayPicker
              locale={sv} 
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
            />
          </div>

          <div>
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
          
          <label className={styles.vibesInput}>
            Vibes:
            <select 
              name="valda vibes" 
              multiple={true}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, opt => opt.value);
                setSelectedVibes(selected);
              }}
            >
              {availableVibes.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>

          <label className={styles.experienceInput}>
            Upplevelser:
            <select 
              name="valda upplevelser" 
              multiple={true}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, opt => opt.value);
                setSelectedExperiences(selected);
              }}
            >
              {availableExperiences.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>

          <button type="reset">Återställ</button>
          <button type="submit" >Sök</button>
        </form>
      </section>

      {hasSearched && (
        <section className={styles.resultContainer}>
          <h3>Resultat ({destinations.length} destinationer)</h3>
          {destinations.length > 0 ? (
            destinations.map((d) => (
              <DestinationCard 
                key={d.name} 
                img={d.imageUrl}
                alt={d.name}
                weatherIcon={currentWeather[d.name]?.icon}
                temperature={currentWeather[d.name]?.temp} 
                title={d.name} 
                country={d.country}
                description={d.description}
                experience={d.experiences}
              />
            ))
          ) : (
            <p>Inga resultat hittades</p>
          )}
        </section>
      )}
    </>
  )
}