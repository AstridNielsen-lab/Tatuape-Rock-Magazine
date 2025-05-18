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
import IronMaiden50Years from './pages/articles/IronMaiden50Years';
import BandasBrasileiras from './pages/articles/BandasBrasileiras';
import GunsNRoses from './pages/articles/GunsNRoses';
import Metallica from './pages/articles/Metallica';
import BonJovi from './pages/articles/BonJovi';
import MotleyCrue from './pages/articles/MotleyCrue';

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
        <Route path="/articles/iron-maiden-50-years" element={<IronMaiden50Years />} />
        <Route path="/articles/bandas-brasileiras" element={<BandasBrasileiras />} />
        <Route path="/articles/guns-n-roses" element={<GunsNRoses />} />
        <Route path="/articles/metallica" element={<Metallica />} />
        <Route path="/articles/bon-jovi" element={<BonJovi />} />
        <Route path="/articles/motley-crue" element={<MotleyCrue />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;