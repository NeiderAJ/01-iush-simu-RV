// src/pages/CertificatePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CertificatePage.css';

const CertificatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="cert-background">


      
      <button onClick={() => navigate('/')} className="btn-regresar">
        ← Regresar al inicio
      </button>

      <div className="cert-content-wrapper">
        <div className="cert-text-column">
          <h1>¡Felicidades Pepito!</h1>
          <p>Aquí tienes tu certificado en la Blockchain de Polygon</p>

          <div className="explanation-box-cert">
            <span className="explanation-close">×</span>
            <h4>Esto es todo!</h4>
            <p>
                "¡Tu certificado ya está acuñado (creado) en la red de Polygon! Ahora es un activo digital único y verificable. Puedes descargarlo como PDF, compartir tu logro o verificar su autenticidad directamente en la blockchain."
            </p>
          </div>
        </div>

        <div className="cert-image-column">
          <div className="certificate-container">
            <img src={`${import.meta.env.BASE_URL}images/certificado-digital.png`} alt="Certificado Digital" />
          </div>
          <div className="cert-buttons">
            <button onClick={() => alert('Abriendo LinkedIn...')}> Compartir en LinkedIn</button>
            <button onClick={() => navigate('/verificar-polygon')}>Verificar en Blockchain</button>
            <a href="/certificado.pdf" download="Certificado_Fundamentos_Blockchain.pdf">
              <button>Descargar PDF</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;