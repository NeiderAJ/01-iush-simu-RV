// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  // Datos para la barra de navegación secundaria
  const secondaryNavLinks = [
    'INSTITUCIONAL', 'PROGRAMAS', 'PLANTA DOCENTE', 'ADMISIONES', 
    'BIENESTAR', 'CENTROS', 'BIBLIOTECA', 'IDIOMAS', 
    'CONSULTORIO JURIDICO', 'PASTORAL', 'CARTERA'
  ];

  return (
    <div className="homepage-container">
      {/* Cabecera Principal */}
      <Header />

      {/* Barra de Navegación Secundaria */}
      <nav className="secondary-nav">
        <ul>
          {secondaryNavLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}
        </ul>
      </nav>

      {/* Banner Principal */}
      <main className="banner-main">
        <div className="banner-content">
          <div className="banner-text">
            <h1>Inscripciones <br /> Abiertas 2025-2</h1>
            <h2>Pregrados <br /> y Posgrados</h2>
            <div className="banner-stats">
              <span>5 Tecnologías</span>
              <span>14 profesionales</span>
              <span>2 especializaciones</span>
            </div>
          </div>
          <div className="banner-image-container">
            <img src="/images/students-couple.png" alt="Estudiantes sonriendo" />
          </div>
        </div>
        <div className="cta-container">
            <h3>Que estudiar <br /><span>sea tu primera opción</span></h3>
            <div className="cta-buttons">
              <button>Regístrate aquí</button>
              <button className="light">Inscríbete aquí</button>
            </div>
        </div>
      </main>

      {/* Pie de página simple */}
      <footer className="homepage-footer">
        <span>Vigilada Mineducación</span>
      </footer>
    </div>
  );
};

export default HomePage;