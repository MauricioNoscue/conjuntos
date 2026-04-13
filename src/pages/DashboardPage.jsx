import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const quickLinks = [
  { title: 'Seguridad', to: '/security', icon: '🔒' },
  { title: 'Comunicación', to: '/communication', icon: '📢' },
  { title: 'Áreas comunes', to: '/common-areas', icon: '🏊' },
  { title: 'Solicitudes', to: '/requests', icon: '🎫' },
  { title: 'Correo', to: '/mail', icon: '📦' },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="page-stack">
      <div>
        <h1>Panel</h1>
        <p className="muted">Resumen de los módulos principales de SmartCondo.</p>
      </div>

      <div className="grid grid-3">
        <Card title="Visitantes hoy" value="12" icon="👥" />
        <Card title="Solicitudes pendientes" value="5" icon="🎫" />
        <Card title="Reservas activas" value="3" icon="🏊" />
      </div>

      <section>
        <h2>Acceso rápido</h2>
        <div className="grid grid-2">
          {quickLinks.map((item) => (
            <button key={item.to} className="shortcut-card" onClick={() => navigate(item.to)}>
              <span className="shortcut-icon">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
