import { useState } from "react";
import { DestinationSearchPresentation } from "../components/views/DestinationSearchPresentation/DestinationSearchPresentation"
import { filterDestinations } from "../utils/destinationFilters";
import type { DateRange } from "react-day-picker";
import type { CuratedDestination, MonthlyTemperatures } from "../models/curatedDestinations";
import type { Weather } from "../models/Weather";
import { getWeather } from "../services/weatherService";

export const DestinationSearch = () => {
  const [tempRange, setTempRange] = useState<[number, number]>([20, 30]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<CuratedDestination[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [currentWeather, setCurrentWeather] = useState<Record<string, Weather>>({});
  const [selectedMonth, setSelectedMonth] = useState<keyof MonthlyTemperatures | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // Converts the slider's array of numbers to a pair of two numbers
  const handleTempRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setTempRange([value[0], value[1]]);
    }
  };
  
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

  const sortSearchedDestinations = (key: "name" | "country") => {
    const sorted =  [...destinations].sort((a, b) =>
      a[key].localeCompare(b[key])
    );

    setDestinations(sorted);
  }

  const handleSortByName = () => sortSearchedDestinations('name');
  const handleSortByCountry = () => sortSearchedDestinations('country');


  const toggleViewMode = () => {
    setViewMode(viewMode === "list" ? "map" : "list");
  }

  return (
    <DestinationSearchPresentation 
      tempRange={tempRange}
      selectedVibes={selectedVibes}
      selectedExperiences={selectedExperiences}
      destinations={destinations}
      hasSearched={hasSearched}
      dateRange={dateRange}
      currentWeather={currentWeather}
      selectedMonth={selectedMonth}
      viewMode={viewMode}
      handlers={{
        onTempRangeChange: handleTempRangeChange,
        onDateRangeChange: setDateRange,
        onToggleVibeTags: toggleVibeTags,
        onToggleExperienceTags: toggleExperienceTags,
        onSubmit: handleSubmit,
        onReset: handleReset,
        onSortByAlpha: handleSortByName,
        onSortByCountry: handleSortByCountry,
        onToggleViewMode: toggleViewMode,
      }}
    />
  )
}