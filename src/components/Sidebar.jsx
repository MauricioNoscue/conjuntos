import React from 'react';
import { NavLink } from 'react-router-dom';

const itemsByRole = {
  Residente: [
    { to: '/dashboard', label: 'Panel' },
    { to: '/communication', label: 'Comunicación' },
    { to: '/common-areas', label: 'Áreas comunes' },
    { to: '/requests', label: 'Solicitudes' },
    { to: '/mail', label: 'Correo' },
  ],
  Administración: [
    { to: '/dashboard', label: 'Panel' },
    { to: '/security', label: 'Seguridad' },
    { to: '/communication', label: 'Comunicación' },
    { to: '/common-areas', label: 'Áreas comunes' },
    { to: '/requests', label: 'Solicitudes' },
    { to: '/mail', label: 'Correo' },
  ],
  'Seguridad / Recepción': [
    { to: '/dashboard', label: 'Panel' },
    { to: '/security', label: 'Seguridad' },
    { to: '/mail', label: 'Correo' },
    { to: '/communication', label: 'Comunicación' },
  ],
};

export default function Sidebar() {
  const role = localStorage.getItem('smartcondo-role') || 'Residente';
  const items = itemsByRole[role] || itemsByRole.Residente;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Módulos</div>
      <nav className="sidebar-nav">
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
