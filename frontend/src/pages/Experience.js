import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) {
    return <div className="no-data">No experience data available</div>;
  }

  return (
    <div className="experience-container">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p className="date-range">{exp.startDate} - {exp.endDate}</p>
            <ul className="highlights">
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;