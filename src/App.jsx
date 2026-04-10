import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ExploreEvents from './components/ExploreEvents/ExploreEvents';
import Login from './components/Auth/Login';
import VolunteerDashboard from './components/Dashboard/VolunteerDashboard';
import OrganizationDashboard from './components/Dashboard/OrganizationDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/volunteer" element={<VolunteerDashboard />} />
        <Route path="/dashboard/organization" element={<OrganizationDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
