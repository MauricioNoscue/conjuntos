import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Table from '../components/Table';
import Badge from '../components/Badge';
import { visitors } from '../data/visitors';

export default function SecurityPage() {
  const [generated, setGenerated] = useState(false);

  return (
    <div className="page-stack">
      <div>
        <h1>Seguridad</h1>
        <p className="muted">Registro y seguimiento de visitantes.</p>
      </div>

      <div className="grid grid-2">
        <Card title="Registrar visitante" icon="🔒">
          <div className="stack">
            <FormInput label="Nombre completo" type="text" placeholder="Nombre del visitante" />
            <FormInput label="Documento / ID" type="text" placeholder="Número de documento" />
            <Button type="button" onClick={() => setGenerated(true)}>Generar QR</Button>
            {generated && <div className="qr-placeholder">QR</div>}
          </div>
        </Card>

        <Card title="Registro de visitantes" icon="📋">
          <Table
            columns={[
              { key: 'name', label: 'Nombre' },
              { key: 'document', label: 'Documento' },
              { key: 'time', label: 'Hora' },
              { key: 'qr', label: 'QR' },
            ]}
            rows={visitors}
            renderCell={(key, row) => (key === 'qr' ? <Badge tone="neutral">QR</Badge> : row[key])}
          />
        </Card>
      </div>
    </div>
  );
}
