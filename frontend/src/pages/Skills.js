import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  if (!skills) {
    return <div className="no-data">No skills data available</div>;
  }

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      
      <section className="soft-skills">
        <h3>Soft Skills</h3>
        <div className="skill-tags">
          {skills.soft.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>
      
      <section className="technical-skills">
        <h3>Technical Skills</h3>
        
        <div className="skill-category">
          <h4>ML/AI</h4>
          <div className="skill-tags">
            {skills.technical.ml_ai.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h4>Data</h4>
          <div className="skill-tags">
            {skills.technical.data.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h4>Programming</h4>
          <div className="skill-tags">
            {skills.technical.programming.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h4>DevOps</h4>
          <div className="skill-tags">
            {skills.technical.devops.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h4>Project Management</h4>
          <div className="skill-tags">
            {skills.technical.project_management.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;