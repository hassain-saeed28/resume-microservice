import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Leadership from './pages/Leadership';
import ApiService from './services/ApiService';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getFullResume();
        setResumeData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching resume data:', err);
        setError('Failed to load resume data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading resume data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header basics={resumeData?.basics} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home resumeData={resumeData} />} />
            <Route path="/education" element={<Education education={resumeData?.education} />} />
            <Route path="/experience" element={<Experience experience={resumeData?.experience} />} />
            <Route path="/skills" element={<Skills skills={resumeData?.skills} />} />
            <Route path="/leadership" element={<Leadership leadership={resumeData?.leadership} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;