import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Resume Microservice</p>
        <p>
          Built with <span role="img" aria-label="love">❤️</span> using React, Express, and DevOps practices
        </p>
      </div>
    </footer>
  );
};

export default Footer;