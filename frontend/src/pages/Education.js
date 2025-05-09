import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  if (!education || education.length === 0) {
    return <div className="no-data">No education data available</div>;
  }

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.institution}</h3>
            <h4>{edu.studyType} in {edu.area} {edu.score ? `(${edu.score})` : ''}</h4>
            <p className="date-range">{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;