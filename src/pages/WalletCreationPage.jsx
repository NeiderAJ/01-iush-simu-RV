// src/pages/WalletCreationPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalletCreationPage.css';

const WalletCreationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/certificado');
    }, 4000); // 4 segundos de espera

    // Limpieza al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-background">
      <div className="loading-spinner"></div>
      <h1 className="loading-title">Creando tu billetera segura...</h1>
      <p className="loading-text">
        CryptoCYAN está creando tu billetera en la red de Polygon o verificando una existencia precedente...
        <br />
        En breve tendrás tu certificado en la red de Blockchain Polygon.
      </p>
    </div>
  );
};

export default WalletCreationPage;