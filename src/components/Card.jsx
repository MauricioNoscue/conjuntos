import React from 'react';

export default function Card({ title, value, icon, children, className = '' }) {
  return (
    <section className={`card ${className}`.trim()}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <span className="card-title">{title}</span>
      </div>
      {value !== undefined && <div className="card-value">{value}</div>}
      {children}
    </section>
  );
}
