import React from 'react';
import './MovieDoodles.css';

function MovieDoodles() {
  return (
    <div className="movie-doodles">
      {/* Film Strip */}
      <svg className="doodle doodle-film" viewBox="0 0 100 200" aria-hidden="true">
        <rect x="10" y="20" width="80" height="160" fill="none" stroke="currentColor" strokeWidth="2" rx="5"/>
        <circle cx="25" cy="40" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="25" cy="70" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="25" cy="100" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="25" cy="130" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="25" cy="160" r="8" fill="currentColor" opacity="0.3"/>
        <rect x="30" y="50" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="30" y="95" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="30" y="140" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="75" cy="40" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="70" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="100" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="130" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="160" r="8" fill="currentColor" opacity="0.3"/>
      </svg>

      {/* Clapperboard */}
      <svg className="doodle doodle-clapper" viewBox="0 0 120 100" aria-hidden="true">
        <path d="M10 20 L110 10 L110 60 L10 70 Z" fill="currentColor" opacity="0.15"/>
        <rect x="10" y="20" width="100" height="50" fill="none" stroke="currentColor" strokeWidth="2" rx="2"/>
        <line x1="30" y1="20" x2="30" y2="70" stroke="currentColor" strokeWidth="2"/>
        <line x1="50" y1="20" x2="50" y2="70" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="20" x2="70" y2="70" stroke="currentColor" strokeWidth="2"/>
      </svg>

      {/* Camera */}
      <svg className="doodle doodle-camera" viewBox="0 0 100 80" aria-hidden="true">
        <rect x="20" y="15" width="60" height="45" fill="none" stroke="currentColor" strokeWidth="2" rx="5"/>
        <circle cx="50" cy="37.5" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="37.5" r="8" fill="currentColor" opacity="0.3"/>
        <rect x="25" y="60" width="50" height="8" fill="currentColor" opacity="0.2" rx="2"/>
        <rect x="40" y="5" width="20" height="15" fill="currentColor" opacity="0.2" rx="2"/>
      </svg>

      {/* Popcorn */}
      <svg className="doodle doodle-popcorn" viewBox="0 0 80 100" aria-hidden="true">
        <ellipse cx="40" cy="80" rx="35" ry="15" fill="currentColor" opacity="0.15"/>
        <path d="M35 45 Q30 30 25 45 Q30 50 35 45" fill="currentColor" opacity="0.2"/>
        <path d="M45 45 Q40 25 35 45 Q40 50 45 45" fill="currentColor" opacity="0.2"/>
        <path d="M55 45 Q50 30 45 45 Q50 50 55 45" fill="currentColor" opacity="0.2"/>
        <path d="M40 40 Q38 20 36 40 Q38 42 40 40" fill="currentColor" opacity="0.2"/>
      </svg>

      {/* Star */}
      <svg className="doodle doodle-star" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M30 5 L35 20 L50 20 L38 30 L43 45 L30 35 L17 45 L22 30 L10 20 L25 20 Z" 
              fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>

      {/* Ticket */}
      <svg className="doodle doodle-ticket" viewBox="0 0 120 70" aria-hidden="true">
        <path d="M10 10 L110 10 Q115 10 115 15 L115 30 Q115 35 110 35 L110 40 Q115 40 115 45 L115 55 Q115 60 110 60 L10 60 Q5 60 5 55 L5 45 Q5 40 10 40 L10 35 Q5 35 5 30 L5 15 Q5 10 10 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="110" cy="37.5" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    </div>
  );
}

export default MovieDoodles;


