// src/pages/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-background">
      <button onClick={() => navigate(-1)} className="btn-regresar">
        ← Regresar
      </button>

      <div className="payment-card">
        <h1 className="payment-title">
          Pasarela de Pago
          <span>powered by CryptoCYAN</span>
        </h1>
        <p>Costo de Emisión del Certificado Digital</p>
        <p className="payment-cost">~$12,000 COP (3 USD)</p>
        <p className="payment-note">Este costo cubre la transacción en la red Polygon.</p>
        <button 
          className="btn-pagar"
          onClick={() => navigate('/creando-billetera')}
        >
          Pagar con PSE/Tarjeta (Simulación)
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;