import { curatedDestinations } from "../constants/curatedDestinations";
import type { CuratedDestination } from "../models/curatedDestinations";
import { calculateTotalScore } from "./destinationScores";

export type FilterResults = {
  destinations: CuratedDestination[];
  scores: Record<number, number>;
}

/**
 * Filters destinations based on selected vibes and experiences.
 * Returns destinations sorted by totalScore (highest first)
 */
export const filterDestinations = (selectedVibes: string[], selectedExperiences: string[]): FilterResults => {
  // Filters destinations that match at least one vibe AND at least one experience
  const filtered = curatedDestinations.filter((dest) => {
    const matchesVibes = selectedVibes.length === 0 ||
      selectedVibes.some((vibe) => dest.vibes.includes(vibe));

    const matchesExperiences = selectedExperiences.length === 0 ||
      selectedExperiences.some((exp) => dest.experiences.includes(exp));

    return matchesVibes && matchesExperiences;
  });

  const destinationsWithScores = filtered.map(dest => ({
    destination: dest,
    totalScore: calculateTotalScore(dest, selectedVibes, selectedExperiences)
  }));

  destinationsWithScores.sort((a, b) => b.totalScore - a.totalScore);

  const scores: Record<number, number> = {};
  destinationsWithScores.forEach(item => scores[item.destination.id] = item.totalScore);

  return {
    destinations: destinationsWithScores.map((item) => item.destination),
    scores
  };
};