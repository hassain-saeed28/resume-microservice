import React from 'react';
import './Leadership.css';

const Leadership = ({ leadership }) => {
  if (!leadership || leadership.length === 0) {
    return <div className="no-data">No leadership data available</div>;
  }

  return (
    <div className="leadership-container">
      <h2>Leadership & Volunteering</h2>
      <div className="leadership-list">
        {leadership.map((role, index) => (
          <div key={index} className="leadership-card">
            <h3>{role.position}</h3>
            <h4>{role.organization}</h4>
            <p className="date-range">{role.startDate} - {role.endDate}</p>
            <ul className="highlights">
              {role.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;