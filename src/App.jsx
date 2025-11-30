// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingSlides from './components/OnboardingSlides';
import RoleSelection from './components/RoleSelection';
import Authorization from './components/Authorization';
import Learnernav from './components/Learnernav';
import Earnernav from './components/Earnernav';
import LearnerHome from './pages/LearnerHome';
import EarnerHome from './pages/EarnerHome';

function App() {
  const [talentMode, setTalentMode] = useState(localStorage.getItem('talentMode'));

  useEffect(() => {
    const handleStorageChange = () => {
      setTalentMode(localStorage.getItem('talentMode'));
    };
    window.addEventListener('storage', handleStorageChange);

    const interval = setInterval(() => {
      const mode = localStorage.getItem('talentMode');
      if (mode !== talentMode) setTalentMode(mode);
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [talentMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingSlides />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/authorization" element={<Authorization />} />

        {/* HOME = CONTENT + NAVBAR */}
        <Route
          path="/home"
          element={
            talentMode === 'learning' ? (
              <>
                <LearnerHome />
                <Learnernav />
              </>
            ) : talentMode === 'sharing' ? (
              <>
                <EarnerHome />
                <Earnernav />
              </>
            ) : (
              <Navigate to="/role" replace />
            )
          }
        />

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;