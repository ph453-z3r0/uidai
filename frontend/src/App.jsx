import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import MBURisk from './pages/MBURisk';
import FraudRadar from './pages/FraudRadar';
import MigrationPlanner from './pages/MigrationPlanner';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/mbu-risk" element={<MBURisk />} />
                    <Route path="/fraud-radar" element={<FraudRadar />} />
                    <Route path="/migration-planner" element={<MigrationPlanner />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
