import * as Slider from "@radix-ui/react-slider";
import styles from "./DestinationSearchPresentation.module.scss"
import React, { useState } from "react";
import { DestinationCard } from "../DestinationCard/DestinationCard";
import { availableExperiences, availableVibes, filterDestinations } from "../../constants/curatedDestinations";

export const DestinationSearchPresentation = () => {
  const [tempRange, setTempRange] = useState([25, 35]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<ReturnType<typeof filterDestinations>>([]);
  const [hasSearched, setHasSearched] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const results = filterDestinations(selectedVibes, selectedExperiences);
    
    setDestinations(results);
    setHasSearched(true);
  }

  return (
    <>
      <section>
        <h2>Start din sökning</h2>

        <form onSubmit={handleSubmit} className={styles.formContainer}>

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
                title={`${d.name}, ${d.country}`} 
                description={d.description}
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