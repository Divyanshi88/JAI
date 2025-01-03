// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DistrictCourt from './components/DistrictCourt';
import HighCourt from './components/HighCourt';
import SupremeCourt from './components/SupremeCourt';
import StateSelection from './components/StateSelection';
import CourtOptions from './components/CourtOptions';  // Add the new component
import ViewJudgment from './components/ViewJudgment';  // View Judgment page
import UploadJudgment from './components/UploadJudgment';  // Upload Judgment page
import Navbar from './components/Navbar';  // Navbar component
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/district" element={<DistrictCourt />} />
        <Route path="/high" element={<StateSelection />} />
        <Route path="/supreme" element={<SupremeCourt />} />
        <Route path="/court-options/:state" element={<CourtOptions />} /> {/* New route */}
        <Route path="/view-judgment/:state" element={<ViewJudgment />} /> {/* View Judgment */}
        <Route path="/upload-judgment/:state" element={<UploadJudgment />} /> {/* Upload Judgment */}
        <Route path="/high/:state" element={<HighCourt />} />
      </Routes>
    </Router>
  );
}

export default App;
