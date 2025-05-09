import React from 'react';
import './Home.css';

const Home = ({ resumeData }) => {
  if (!resumeData) return null;

  return (
    <div className="home-container">
      <section className="summary-section">
        <h2>Professional Summary</h2>
        <p>{resumeData.basics.summary}</p>
      </section>

      <section className="highlights-section">
        <h2>Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>Experience</h3>
            <p>{resumeData.experience.length} positions</p>
          </div>
          <div className="highlight-card">
            <h3>Education</h3>
            <p>{resumeData.education.length} institutions</p>
          </div>
          <div className="highlight-card">
            <h3>Skills</h3>
            <p>{resumeData.skills.technical.programming.length} programming languages</p>
          </div>
          <div className="highlight-card">
            <h3>Honors</h3>
            <p>{resumeData.honors.length} achievements</p>
          </div>
        </div>
      </section>

      <section className="latest-section">
        <h2>Latest Experience</h2>
        {resumeData.experience.slice(0, 1).map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p className="date-range">{exp.startDate} - {exp.endDate}</p>
            <ul>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;