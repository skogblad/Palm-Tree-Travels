/**
 * Translates experience / vibes tag values to Swedish labels.
 * Returns an array of objects with both value and label for each tag.
 */
export const getLabels = (
  values: string[], 
  availableItems: { value: string; label: string }[] 
): Array<{ value: string; label: string }> => {
  return values.map((value) => ({
    value,
    label: availableItems.find((item) => item.value === value)?.label ?? value,
  }));
}