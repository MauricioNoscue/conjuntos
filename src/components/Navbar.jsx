import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem('smartcondo-role') || 'Residente';

  return (
    <header className="topbar">
      <div>
        <div className="brand-title">SmartCondo</div>
        <div className="brand-subtitle">Prototipo de gestión residencial</div>
      </div>
      <div className="topbar-actions">
        <span className="role-pill">{role}</span>
        <button className="text-button" onClick={() => navigate('/')}>Cerrar sesión</button>
      </div>
    </header>
  );
}
