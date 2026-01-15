import type React from "react";
import styles from "./TagSelector.module.scss";

interface TagOption {
  value: string;
  label: string;
}

interface TagSelectorProps {
  title: string;
  options: TagOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}

export const TagSelector = ({ title, options, selectedValues, onToggle }: TagSelectorProps) => {
  const handleKeyDown = (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(value);
    }
  }

  return (
    <div className={styles.filterGroup}>
      <label className={styles.filterLabel}>{title} ({selectedValues.length} valda)</label>
      <div className={styles.tagContainer}>
        {options.map((opt) => {
          const isSelected = selectedValues.includes(opt.value);
          return (
            <span
              key={opt.value}
              className={`${styles.tag} ${isSelected ? styles.tagSelected : ''}`}
              onClick={() => onToggle(opt.value)}
              onKeyDown={(e) => handleKeyDown(e, opt.value)}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
            >
              {opt.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
