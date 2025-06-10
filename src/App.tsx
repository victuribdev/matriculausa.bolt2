import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import Scholarships from './pages/Scholarships';
import Universities from './pages/Universities';
import UniversityDetail from './pages/UniversityDetail';
import HowItWorks from './pages/HowItWorks';
import TermsAndConditions from './pages/TermsAndConditions';
import SchoolProfileSetup from './pages/SchoolProfileSetup';
import SchoolDashboard from './pages/SchoolDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/schools" element={<Universities />} />
            <Route path="/schools/:id" element={<UniversityDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            
            {/* School Routes */}
            <Route path="/school/terms" element={<TermsAndConditions />} />
            <Route path="/school/setup-profile" element={<SchoolProfileSetup />} />
            <Route path="/school/dashboard" element={<SchoolDashboard />} />
            
            {/* Placeholder routes for other pages */}
            <Route path="/services" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl text-gray-600">Services page coming soon...</div></div>} />
            <Route path="/contact" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl text-gray-600">Contact page coming soon...</div></div>} />
            <Route path="/student/dashboard" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl text-gray-600">Student Dashboard coming soon...</div></div>} />
            <Route path="/admin/dashboard" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl text-gray-600">Admin Dashboard coming soon...</div></div>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;