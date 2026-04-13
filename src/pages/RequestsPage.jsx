import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Table from '../components/Table';
import { requests } from '../data/requests';

const tones = { Pendiente: 'warning', 'En progreso': 'info', Resuelto: 'success' };

export default function RequestsPage() {
  const [category, setCategory] = useState('Mantenimiento');

  return (
    <div className="page-stack">
      <div>
        <h1>Solicitudes</h1>
        <p className="muted">Envía y da seguimiento a tickets de mantenimiento o servicio.</p>
      </div>

      <Card title="Lista de tickets" icon="🎫">
        <Table
          columns={[
            { key: 'id', label: '#' },
            { key: 'description', label: 'Descripción' },
            { key: 'date', label: 'Fecha' },
            { key: 'status', label: 'Estado' },
          ]}
          rows={requests}
          renderCell={(key, row) => (key === 'status' ? <Badge tone={tones[row.status]}>{row.status}</Badge> : row[key])}
        />
      </Card>

      <Card title="Crear solicitud" icon="📝">
        <div className="stack">
          <FormInput label="Asunto" type="text" placeholder="Título breve de la solicitud" />
          <FormInput label="Descripción" as="textarea" rows="4" placeholder="Describe el problema" />
          <FormInput label="Categoría" as="select" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>Mantenimiento</option>
            <option>Plomería</option>
            <option>Electricidad</option>
            <option>Otro</option>
          </FormInput>
          <Button type="button">Enviar</Button>
        </div>
      </Card>
    </div>
  );
}
