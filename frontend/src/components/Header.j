import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ basics }) => {
  if (!basics) return null;

  return (
    <header className="header">
      <div className="profile-header">
        <div className="name-title">
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
        </div>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> {basics.email}
          </p>
          <p>
            <i className="fas fa-phone"></i> {basics.phone}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {basics.location.address}, {basics.location.city}
          </p>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/leadership">Leadership</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;