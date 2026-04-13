import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';
import Table from '../components/Table';
import { calendarSlots, reservations } from '../data/reservations';

export default function CommonAreasPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-stack">
      <div className="page-title-row">
        <div>
          <h1>Áreas comunes</h1>
          <p className="muted">Consulta y reserva espacios compartidos.</p>
        </div>
        <Button type="button" onClick={() => setOpen(true)}>Reservar</Button>
      </div>

      <Card title="Calendario de reservas" icon="🗓️">
        <div className="calendar-grid">
          {calendarSlots.map((slot) => (
            <div key={slot.day} className={`calendar-slot ${slot.status === 'Reservado' ? 'booked' : 'available'}`}>
              <strong>{slot.day}</strong>
              <span>{slot.status}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Lista de reservas" icon="🏊">
        <Table
          columns={[
            { key: 'area', label: 'Área' },
            { key: 'resident', label: 'Residente' },
            { key: 'date', label: 'Fecha' },
            { key: 'time', label: 'Hora' },
            { key: 'status', label: 'Estado' },
          ]}
          rows={reservations}
          renderCell={(key, row) => (key === 'status' ? <Badge tone={row.status === 'Confirmado' ? 'success' : 'warning'}>{row.status}</Badge> : row[key])}
        />
      </Card>

      <Modal open={open} title="Reservar área común" onClose={() => setOpen(false)}>
        <div className="stack">
          <FormInput label="Área" as="select">
            <option>Piscina</option>
            <option>Zona BBQ</option>
            <option>Sala de gimnasio</option>
          </FormInput>
          <FormInput label="Fecha" type="date" />
          <FormInput label="Hora" type="time" />
          <Button type="button" onClick={() => setOpen(false)}>Confirmar</Button>
        </div>
      </Modal>
    </div>
  );
}
