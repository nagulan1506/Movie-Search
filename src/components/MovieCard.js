import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster-wrapper">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
            alt={movie.Title}
            className="movie-poster"
            onError={handleImageError}
          />
          <div className="movie-year-badge">{movie.Year}</div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <p className="movie-type">{movie.Type ? movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1) : 'Movie'}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
