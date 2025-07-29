// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    if (link === 'Estudiantes') {
      navigate('/portal-estudiante');
    } else {
      alert('Esto es una simulación, por favor de clic en el botón Estudiantes para avanzar');
    }
  };

  const navLinks = [
    'Inscripciones', 'Estudiantes', 'Docentes', 'Egresados',
    'Campus Virtual', 'Pagos', 'Empleo', 'Contáctenos'
  ];

  return (
    <header className="main-header">
      <div className="header-content">
        {/* ▼▼▼ RUTA CORREGIDA ▼▼▼ */}
        <img src={`${import.meta.env.BASE_URL}images/logo-iush.png`} alt="Logo Salazar y Herrera" className="header-logo" />
        <nav className="header-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <button 
                  onClick={() => handleNavigation(link)} 
                  className={`nav-button ${link === 'Estudiantes' ? 'pulsing-button' : ''}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;