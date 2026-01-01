import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/movieApi';
import '../App.css';
import './MovieDetail.css';
import MovieDoodles from '../components/MovieDoodles';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getMovieDetails(id);
        if (data) {
          setMovie(data);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError(err.message || 'Failed to load movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="App">
        <div className="doodles-container">
          <MovieDoodles />
        </div>
        <div className="loading-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="spinner"></div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="App">
        <div className="doodles-container">
          <MovieDoodles />
        </div>
        <div className="error-message" style={{ margin: '3rem auto', maxWidth: '600px' }}>
          <span className="error-icon">⚠️</span>
          {error || 'Movie not found'}
        </div>
        <button onClick={handleBack} className="back-button">
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="doodles-container">
        <MovieDoodles />
      </div>
      <div className="movie-detail-container">
        <button onClick={handleBack} className="back-button">
          ← Back to Search
        </button>

        <div className="movie-detail-content">
          <div className="movie-detail-poster">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
              alt={movie.Title}
              className="detail-poster-img"
            />
          </div>

          <div className="movie-detail-info">
            <h1 className="detail-title">{movie.Title}</h1>
            
            <div className="detail-meta">
              <span className="detail-year">{movie.Year}</span>
              {movie.Rated && movie.Rated !== 'N/A' && (
                <span className="detail-rated">{movie.Rated}</span>
              )}
              {movie.Runtime && movie.Runtime !== 'N/A' && (
                <span className="detail-runtime">{movie.Runtime}</span>
              )}
            </div>

            {movie.Genre && movie.Genre !== 'N/A' && (
              <div className="detail-genre">
                {movie.Genre.split(',').map((genre, index) => (
                  <span key={index} className="genre-tag">{genre.trim()}</span>
                ))}
              </div>
            )}

            {movie.imdbRating && movie.imdbRating !== 'N/A' && (
              <div className="detail-rating">
                <span className="rating-label">IMDb Rating:</span>
                <span className="rating-value">⭐ {movie.imdbRating}</span>
                {movie.imdbVotes && movie.imdbVotes !== 'N/A' && (
                  <span className="rating-votes">({movie.imdbVotes} votes)</span>
                )}
              </div>
            )}

            {movie.Plot && movie.Plot !== 'N/A' && (
              <div className="detail-plot">
                <h3>Plot</h3>
                <p>{movie.Plot}</p>
              </div>
            )}

            {movie.Director && movie.Director !== 'N/A' && (
              <div className="detail-crew">
                <div className="crew-item">
                  <strong>Director:</strong> {movie.Director}
                </div>
              </div>
            )}

            {movie.Writer && movie.Writer !== 'N/A' && (
              <div className="detail-crew">
                <div className="crew-item">
                  <strong>Writer:</strong> {movie.Writer}
                </div>
              </div>
            )}

            {movie.Actors && movie.Actors !== 'N/A' && (
              <div className="detail-crew">
                <div className="crew-item">
                  <strong>Cast:</strong> {movie.Actors}
                </div>
              </div>
            )}

            {movie.Awards && movie.Awards !== 'N/A' && (
              <div className="detail-awards">
                <strong>🏆 Awards:</strong> {movie.Awards}
              </div>
            )}

            <div className="detail-footer-info">
              {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
                <div className="footer-item">
                  <strong>Box Office:</strong> {movie.BoxOffice}
                </div>
              )}
              {movie.Production && movie.Production !== 'N/A' && (
                <div className="footer-item">
                  <strong>Production:</strong> {movie.Production}
                </div>
              )}
              {movie.Released && movie.Released !== 'N/A' && (
                <div className="footer-item">
                  <strong>Released:</strong> {movie.Released}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
