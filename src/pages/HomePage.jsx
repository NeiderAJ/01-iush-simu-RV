// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  const secondaryNavLinks = [
    'INSTITUCIONAL', 'PROGRAMAS', 'PLANTA DOCENTE', 'ADMISIONES', 
    'BIENESTAR', 'CENTROS', 'BIBLIOTECA', 'IDIOMAS', 
    'CONSULTORIO JURIDICO', 'PASTORAL', 'CARTERA'
  ];

  // ▼▼▼ CONSTRUIMOS LAS RUTAS DE LAS IMÁGENES AQUÍ ▼▼▼
  const bannerBgUrl = `${import.meta.env.BASE_URL}images/banner-home.png`;
  const studentsImgUrl = `${import.meta.env.BASE_URL}images/students-couple.png`;

  return (
    <div className="homepage-container">
      <Header />
      <nav className="secondary-nav">
        <ul>
          {secondaryNavLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}
        </ul>
      </nav>
      {/* ▼▼▼ Aplicamos el fondo como estilo en línea ▼▼▼ */}
      <main className="banner-main" style={{ backgroundImage: `url(${bannerBgUrl})` }}>
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
             {/* ▼▼▼ RUTA CORREGIDA ▼▼▼ */}
            <img src={studentsImgUrl} alt="Estudiantes sonriendo" />
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
      <footer className="homepage-footer">
        <span>Vigilada Mineducación</span>
      </footer>
    </div>
  );
};

export default HomePage;