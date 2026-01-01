import React, { useState } from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieDoodles from '../components/MovieDoodles';
import TypeFilter from '../components/TypeFilter';
import Pagination from '../components/Pagination';
import { searchMovies } from '../services/movieApi';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Performs movie search with current query, type filter, and page
   * @param {string} query - Search query
   * @param {string} type - Type filter (movie, series, episode, or 'all')
   * @param {number} page - Page number
   */
  const performSearch = async (query, type, page) => {
    if (!query.trim()) {
      setMovies([]);
      setHasSearched(false);
      setTotalResults(0);
      setTotalPages(1);
      setCurrentPage(1);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await searchMovies(query, type, page);
      setMovies(result.movies);
      setTotalResults(result.totalResults);
      setTotalPages(result.totalPages);
      setCurrentPage(result.currentPage);
      setHasSearched(true);
    } catch (err) {
      setError(err.message || 'Failed to fetch movies. Please try again.');
      setMovies([]);
      setTotalResults(0);
      setTotalPages(1);
      setCurrentPage(1);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles search bar submission
   * @param {string} query - Search query from search bar
   */
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
    performSearch(query, selectedType, 1);
  };

  /**
   * Handles type filter change
   * @param {string} type - Selected type filter
   */
  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1); // Reset to first page when filter changes
    if (searchQuery.trim()) {
      performSearch(searchQuery, type, 1);
    }
  };

  /**
   * Handles page change in pagination
   * @param {number} page - New page number
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (searchQuery.trim()) {
      performSearch(searchQuery, selectedType, page);
      // Scroll to top of results when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="doodles-container">
        <MovieDoodles />
      </div>
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">🎬</span>
          Movie Search
        </h1>
        <p className="app-subtitle">Discover your next favorite film</p>
      </header>
      
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        
        {hasSearched && !loading && (
          <TypeFilter selectedType={selectedType} onTypeChange={handleTypeChange} />
        )}
        
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Searching movies...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {!hasSearched && !loading && (
          <div className="welcome-message">
            <div className="welcome-icon">🎭</div>
            <h2>Start Your Movie Journey</h2>
            <p>Search for any movie and explore detailed information</p>
          </div>
        )}

        {hasSearched && !loading && movies.length > 0 && (
          <div className="results-info">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''}
          </div>
        )}

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

        {hasSearched && !loading && movies.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for movie lovers</p>
      </footer>
    </div>
  );
}

export default HomePage;
