import { useEffect, useRef, useState } from "react";
import { DestinationSearchPresentation } from "../components/views/DestinationSearchPresentation/DestinationSearchPresentation"
import { filterDestinations } from "../utils/filterDestinations";
import type { DateRange } from "react-day-picker";
import type { CuratedDestination, MonthlyTemperatures } from "../models/curatedDestinations";
import type { Weather } from "../models/Weather";
import { getWeather } from "../services/weatherService";

// Read sessionStorage one time when the component initiates
const loadSavedState = () => {
  if (typeof window === "undefined") return {};
  const saved = sessionStorage.getItem('destinationSearchState');
  return saved ? JSON.parse(saved) : {};
};

export const DestinationSearch = () => {
  const savedState = loadSavedState();
  const resultsRef = useRef<HTMLElement>(null);

  const [tempRange, setTempRange] = useState<[number, number]>(savedState.tempRange || [20, 30]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>(savedState.selectedVibes || []);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>(savedState.selectedExperiences || []);
  const [destinations, setDestinations] = useState<CuratedDestination[]>(savedState.destinations || []);
  const [destinationScores, setDestinationScores] = useState<Record<number, number>>(savedState.destinationScores || {});
  const [dateRange, setDateRange] = useState<DateRange | undefined>(savedState.dateRange || undefined);
  const [selectedMonth, setSelectedMonth] = useState<keyof MonthlyTemperatures | null>(savedState.selectedMonth || null);
  const [viewMode, setViewMode] = useState<"list" | "map">(savedState.viewMode || "list");
  const [currentWeather, setCurrentWeather] = useState<Record<string, Weather>>(savedState.currentWeather || {});
  const [hasSearched, setHasSearched] = useState(!!savedState.destinations?.length);


  // Live-save state in sessionStorage on changes
  useEffect(() => {
    sessionStorage.setItem("destinationSearchState", JSON.stringify({
      tempRange,
      selectedVibes,
      selectedExperiences,
      destinations,
      destinationScores,
      dateRange,
      selectedMonth,
      viewMode,
      currentWeather
    }));
  }, [tempRange, selectedVibes, selectedExperiences, destinations, destinationScores, dateRange, selectedMonth, viewMode, currentWeather]);

  useEffect(() => {
    if (hasSearched && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hasSearched]);

  // Converts the slider's array of numbers to a pair of two numbers
  const handleTempRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setTempRange([value[0], value[1]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { destinations: results, scores } = filterDestinations(selectedVibes, selectedExperiences);

    // If no date is selected, show results filtered only by vibes/experiences 
    // without applying temperature filtering/fetching weather data (prevent crash & unneccessary API call)
    if (!dateRange?.from) {
      setDestinations(results);
      setDestinationScores(scores)
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
    setDestinationScores(scores);
    setHasSearched(true);
    setCurrentWeather(weatherMap);
  }

  const handleReset = () => {
    setTempRange([20, 30]);
    setSelectedVibes([]);
    setSelectedExperiences([]);
    setDateRange(undefined);
    setHasSearched(false);
    setSelectedMonth(null);
    setDestinations([]);
    setDestinationScores({});
    setCurrentWeather({});
    sessionStorage.removeItem('destinationSearchState');
  }

  // Toggles the selection state of a tag (removes if selected, adds if not selected)
  const toggleVibeTags = (value: string) => {
    setSelectedVibes(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  }

  const toggleExperienceTags = (value: string) => {
    setSelectedExperiences(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
  }

  const sortSearchedDestinations = (key: "name" | "country") => {
    const sorted = [...destinations].sort((a, b) =>
      a[key].localeCompare(b[key])
    );

    setDestinations(sorted);
  }

  const handleSortByName = () => sortSearchedDestinations('name');
  const handleSortByCountry = () => sortSearchedDestinations('country');

  const handleSortByScore = () => {
    const sorted = [...destinations].sort((a, b) => {
      const scoreA = destinationScores[a.id] ?? 0;
      const scoreB = destinationScores[b.id] ?? 0;
      return scoreB - scoreA;
    });

    setDestinations(sorted)
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === "list" ? "map" : "list");
  }

  return (
    <DestinationSearchPresentation
      tempRange={tempRange}
      selectedVibes={selectedVibes}
      selectedExperiences={selectedExperiences}
      destinations={destinations}
      destinationScores={destinationScores}
      hasSearched={hasSearched}
      dateRange={dateRange}
      currentWeather={currentWeather}
      selectedMonth={selectedMonth}
      viewMode={viewMode}
      resultsRef={resultsRef}
      handlers={{
        onTempRangeChange: handleTempRangeChange,
        onDateRangeChange: setDateRange,
        onToggleVibeTags: toggleVibeTags,
        onToggleExperienceTags: toggleExperienceTags,
        onSubmit: handleSubmit,
        onReset: handleReset,
        onSortByAlpha: handleSortByName,
        onSortByCountry: handleSortByCountry,
        onSortByScore: handleSortByScore,
        onToggleViewMode: toggleViewMode,
      }}
    />
  )
}