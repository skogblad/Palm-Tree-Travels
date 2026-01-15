import { curatedDestinations } from "../constants/curatedDestinations";
import type { CuratedDestination } from "../models/curatedDestinations";

/**
 * Filters destinations based on selected vibes and experiences.
 * Returns destinations that match at least one selected vibe AND at least one selected experience.
 * If no vibes or experiences are selected, all destinations are returned.
 */
export const filterDestinations = (selectedVibes: string[], selectedExperiences: string[]): CuratedDestination[] => {
  return curatedDestinations.filter((dest) => {
    const matchesVibes = selectedVibes.length === 0 || 
      selectedVibes.some((vibe) => dest.vibes.includes(vibe));
    
    const matchesExperiences = selectedExperiences.length === 0 || 
      selectedExperiences.some((exp) => dest.experiences.includes(exp));
    
    return matchesVibes && matchesExperiences;
  });
};