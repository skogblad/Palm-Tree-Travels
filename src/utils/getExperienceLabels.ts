import { availableExperiences } from "../constants/curatedDestinations";

/**
 * Translates experience tag values to Swedish labels.
 * Returns an array of objects with both value and label for each experience.
 */
export const getExperienceLabels = (experiences: string[]): Array<{ value: string; label: string }> => {
  return experiences.map((exp) => ({
    value: exp,
    label: availableExperiences.find((e) => e.value === exp)?.label ?? exp
  }));
}