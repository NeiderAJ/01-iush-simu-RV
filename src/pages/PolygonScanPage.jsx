// src/pages/PolygonScanPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './PolygonScanPage.css';

const PolygonScanPage = () => {
  const navigate = useNavigate(); // Lo inicializamos

  return (
    <div className="polygon-background">
      {/* ▼▼▼ PUNTO 3: BOTÓN AÑADIDO ▼▼▼ */}
      <button onClick={() => navigate(-1)} className="btn-regresar">
        ← Regresar
      </button>

      <div className="polygon-container">
        <header className="polygon-header">
          <img src="/images/polygonscan-logo.png" alt="PolygonScan Logo" />
        </header>
        <main className="polygon-main">
          <h1>Detalles de la Transacción</h1>
          <div className="polygon-card">
            <dl className="transaction-details">
              <div className="detail-row">
                <dt>Estado:</dt>
                <dd><span className="status-success">✓ Éxito</span></dd>
              </div>
              <div className="detail-row">
                <dt>Hash de Transacción:</dt>
                <dd>0x123abc...def789</dd>
              </div>
              <div className="detail-row">
                <dt>De:</dt>
                <dd>0x000...000 (Dirección Cero)</dd>
              </div>
              <div className="detail-row">
                <dt>A:</dt>
                <dd>
                  Contrato: <span className="contract-name">CryptoCYAN_Certificates</span>
                </dd>
              </div>
              <div className="detail-row">
                <dt>Tokens Transferidos:</dt>
                <dd>
                  Del Contrato CryptoCYAN_Certificates
                  a la Billetera de Pepito Pérez (0x456...gh1),
                  1 token NFT con ID #0
                </dd>
              </div>
            </dl>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PolygonScanPage;