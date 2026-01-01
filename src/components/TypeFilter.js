import React from 'react';
import './TypeFilter.css';

/**
 * TypeFilter Component
 * Dropdown filter to filter movies by type (movie, series, episode, or all)
 * @param {string} selectedType - Currently selected type filter
 * @param {function} onTypeChange - Callback function when type changes
 */
function TypeFilter({ selectedType, onTypeChange }) {
  const types = [
    { value: 'all', label: 'All' },
    { value: 'movie', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'episode', label: 'Episodes' },
  ];

  return (
    <div className="type-filter-container">
      <label htmlFor="type-filter" className="type-filter-label">
        Filter by Type:
      </label>
      <select
        id="type-filter"
        className="type-filter-select"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        aria-label="Filter movies by type"
      >
        {types.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;
