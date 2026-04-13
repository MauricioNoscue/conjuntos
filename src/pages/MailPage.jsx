import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import Table from '../components/Table';
import { packages as initialPackages } from '../data/packages';

export default function MailPage() {
  const [packages, setPackages] = useState(initialPackages);

  const confirmDelivery = (index) => {
    setPackages((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, status: 'Entregado' } : item)));
  };

  return (
    <div className="page-stack">
      <div>
        <h1>Correo</h1>
        <p className="muted">Controla paquetes y correspondencia entrante.</p>
      </div>

      <Card title="Lista de paquetes" icon="📦">
        <Table
          columns={[
            { key: 'resident', label: 'Residente' },
            { key: 'apt', label: 'Apto' },
            { key: 'arrivalDate', label: 'Fecha de llegada' },
            { key: 'status', label: 'Estado' },
            { key: 'action', label: 'Acción' },
          ]}
          rows={packages}
          renderCell={(key, row, rowIndex) => {
            if (key === 'status') {
              return <Badge tone={row.status === 'Entregado' ? 'success' : 'warning'}>{row.status}</Badge>;
            }
            if (key === 'action') {
              return row.status === 'Pendiente' ? (
                <Button type="button" variant="secondary" onClick={() => confirmDelivery(rowIndex)}>Confirmar entrega</Button>
              ) : (
                '—'
              );
            }
            return row[key];
          }}
        />
      </Card>
    </div>
  );
}
