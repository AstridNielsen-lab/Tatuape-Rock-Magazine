import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MonthlyHighlightsPage from './pages/MonthlyHighlightsPage';
import InterviewsPage from './pages/InterviewsPage';
import CulturePage from './pages/CulturePage';
import TechPage from './pages/TechPage';
import InteractivePage from './pages/InteractivePage';
import ExclusivePage from './pages/ExclusivePage';
import PartnershipsPage from './pages/PartnershipsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/monthly-highlights" element={<MonthlyHighlightsPage />} />
        <Route path="/interviews" element={<InterviewsPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/interactive" element={<InteractivePage />} />
        <Route path="/exclusive" element={<ExclusivePage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;