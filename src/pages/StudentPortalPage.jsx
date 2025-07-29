// src/pages/StudentPortalPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentPortalPage.css';

const StudentPortalPage = () => {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState('blockchain');

  const handleGetCertificate = () => {
    // ▼▼▼ CAMBIO IMPORTANTE AQUÍ ▼▼▼
    // Ya no muestra una alerta, ahora navega a la página de pago.
    navigate('/pago');
  };

  return (
    // ... el resto del código JSX no cambia ...
    <div className="portal-background">
      <button onClick={() => navigate(-1)} className="btn-regresar">
        ← Regresar
      </button>

      <div className="portal-card">
        <div className="portal-header">
          <span>CryptoCYAN Certificados le permite a la IUSH brindarte un certificado en Blockchain!</span>
           <img src={`${import.meta.env.BASE_URL}images/logo-iush.png`} alt="Logo IUSH" className="portal-logo-iush" />
        </div>

        <div className="portal-body">
          <h1>Bienvenido, Pepito Pérez</h1>
          <p>Tus logros académicos, ahora como activos digitales.</p>

          <div className="portal-main-content">
            <div className="explanation-box">
              <span className="explanation-close">×</span>
              <h4>Explicación</h4>
              <p>
                Aquí el estudiante accede a su portal. La lista de certificados aprobados se sincroniza automáticamente desde el sistema académico de la IUSH.
              </p>
            </div>
            <div className="certificate-form-wrapper">
              <div className="certificate-form">
                <select 
                  value={selectedCert} 
                  onChange={(e) => setSelectedCert(e.target.value)}
                  className="certificate-select"
                >
                  <option value="blockchain">Fundamentos de Blockchain</option>
                  <option value="react">Desarrollo con React</option>
                  <option value="ia">Inteligencia Artificial 101</option>
                  <option value="agile">Metodologías Ágiles</option>
                </select>
                <button onClick={handleGetCertificate} className="btn-obtener-certificado">
                  Obtener Certificado Digital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortalPage;