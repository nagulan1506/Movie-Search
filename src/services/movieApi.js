import axios from 'axios';

// OMDB API requires an API key
// Get a free API key from: http://www.omdbapi.com/apikey.aspx
// Create a .env file in the root directory and add: REACT_APP_OMDB_API_KEY=your_api_key_here

const OMDB_API_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY || '';

// Debug: Log API key status (remove in production)
if (process.env.NODE_ENV === 'development') {
  console.log('API Key loaded:', API_KEY ? 'Yes (hidden)' : 'No');
}

/**
 * Search for movies, series, or episodes
 * @param {string} query - Search query (movie title or keywords)
 * @param {string} type - Filter by type: 'movie', 'series', 'episode', or '' for all
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise<{movies: Array, totalResults: number, currentPage: number, totalPages: number}>}
 */
export const searchMovies = async (query, type = '', page = 1) => {
  try {
    if (!API_KEY) {
      throw new Error('API key not provided. Please add REACT_APP_OMDB_API_KEY to your .env file. Get a free API key from http://www.omdbapi.com/apikey.aspx');
    }

    const params = {
      apikey: API_KEY,
      s: query,
      page: page,
    };

    // Only add type parameter if a type is specified (not empty string)
    if (type && type !== 'all') {
      params.type = type;
    }

    const response = await axios.get(OMDB_API_URL, { params });

    if (response.data.Response === 'True' && response.data.Search) {
      const totalResults = parseInt(response.data.totalResults, 10) || 0;
      const totalPages = Math.ceil(totalResults / 10); // OMDB returns 10 results per page

      return {
        movies: response.data.Search,
        totalResults: totalResults,
        currentPage: page,
        totalPages: totalPages,
      };
    } else {
      // API returned an error or no results
      const errorMessage = response.data.Error || 'No results found';
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    
    // Handle axios errors (network issues, etc.)
    if (error.response) {
      // API returned an error status
      throw new Error(error.response.data?.Error || 'Failed to fetch movies. Please try again.');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error. Please check your internet connection.');
    } else if (error.message) {
      // Error message from API
      throw error;
    } else {
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

/**
 * Get detailed information about a specific movie
 * @param {string} imdbID - IMDb ID of the movie
 * @returns {Promise<Object>} Movie details object
 */
export const getMovieDetails = async (imdbID) => {
  try {
    if (!API_KEY) {
      throw new Error('API key not provided. Please add REACT_APP_OMDB_API_KEY to your .env file. Get a free API key from http://www.omdbapi.com/apikey.aspx');
    }

    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
        plot: 'full',
      },
    });

    if (response.data.Response === 'True') {
      return response.data;
    } else {
      const errorMessage = response.data.Error || 'Movie not found';
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    
    // Handle axios errors
    if (error.response) {
      throw new Error(error.response.data?.Error || 'Failed to fetch movie details. Please try again.');
    } else if (error.request) {
      throw new Error('Network error. Please check your internet connection.');
    } else if (error.message) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};
