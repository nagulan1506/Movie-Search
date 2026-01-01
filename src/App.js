import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
