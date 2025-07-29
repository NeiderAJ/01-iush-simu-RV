// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa todas tus páginas
import HomePage from './pages/HomePage';
import StudentPortalPage from './pages/StudentPortalPage';
import PaymentPage from './pages/PaymentPage';
import WalletCreationPage from './pages/WalletCreationPage';
import CertificatePage from './pages/CertificatePage';
import PolygonScanPage from './pages/PolygonScanPage';
// Aún no las creamos, pero las importaremos para tener las rutas listas
// import LinkedInLoginPage from './pages/LinkedInLoginPage';
// import LinkedInProfilePage from './pages/LinkedInProfilePage';

function App() {
  return (
    <Router basename="/01-iush-simu-RV">
      <div className="main-container">
        <Routes>
          {/* Vistas existentes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portal-estudiante" element={<StudentPortalPage />} />

          {/* Nuevas Vistas */}
          <Route path="/pago" element={<PaymentPage />} />
          <Route path="/creando-billetera" element={<WalletCreationPage />} />
          <Route path="/certificado" element={<CertificatePage />} />
          <Route path="/verificar-polygon" element={<PolygonScanPage />} />
          
          {/* Rutas para la simulación de LinkedIn (las construiremos después) */}
          {/* <Route path="/linkedin-login" element={<LinkedInLoginPage />} /> */}
          {/* <Route path="/linkedin-perfil" element={<LinkedInProfilePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;