import type { CuratedDestination } from "../models/curatedDestinations";

export const calculateVibeScore = (destVibes: string[], selectedVibes: string[]): number => {
  if (selectedVibes.length === 0) return 1.0;
  const matches = selectedVibes.filter(v => destVibes.includes(v)).length;
  return matches / selectedVibes.length;
};

export const calculateExperienceScore = (destExperiences: string[], selectedExperiences: string[]): number => {
  if (selectedExperiences.length === 0) return 1.0;
  const matches = selectedExperiences.filter(e => destExperiences.includes(e)).length;
  return matches / selectedExperiences.length;
};

export const calculateTotalScore = (dest: CuratedDestination, selectedVibes: string[], selectedExperiences: string[]): number => {
  const vibeScore = calculateVibeScore(dest.vibes, selectedVibes);
  const experienceScore = calculateExperienceScore(dest.experiences, selectedExperiences);
  return 0.5 * vibeScore + 0.5 * experienceScore;
};
