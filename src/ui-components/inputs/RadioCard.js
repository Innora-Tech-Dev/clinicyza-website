"use client";

import { useId, useState } from "react";
import styles from "./inputs.module.css";

/**
 * Card-style radio group (e.g. "Myself — Giulia Rossi" / "A family member").
 * options = [{ value, title, description }]
 * Works controlled (value + onChange) or uncontrolled (defaultValue).
 */
export default function RadioCard({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = "vertical",
  ariaLabel,
}) {
  const autoName = useId();
  const [internal, setInternal] = useState(defaultValue);
  const selected = value !== undefined ? value : internal;

  const handleChange = (next) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={`${styles.radioGroup} ${direction === "horizontal" ? styles.horizontal : ""}`}
    >
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <label
            key={option.value}
            className={`${styles.radioCard} ${isSelected ? styles.selected : ""}`}
          >
            <input
              type="radio"
              name={name || autoName}
              value={option.value}
              checked={isSelected}
              onChange={() => handleChange(option.value)}
            />
            <span className={styles.radioDot} aria-hidden="true" />
            <span className={styles.radioText}>
              <span className={styles.radioTitle}>{option.title}</span>
              {option.description && (
                <span className={styles.radioDescription}>{option.description}</span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}
