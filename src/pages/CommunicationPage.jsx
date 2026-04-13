import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import { announcements, notifications } from '../data/announcements';

const tones = { Urgente: 'danger', General: 'neutral', Evento: 'success' };

export default function CommunicationPage() {
  const [category, setCategory] = useState('General');

  return (
    <div className="page-stack">
      <div>
        <h1>Comunicación</h1>
        <p className="muted">Anuncios y notificaciones para los residentes.</p>
      </div>

      <div className="grid grid-2">
        <section className="stack">
          <h2>Anuncios</h2>
          {announcements.map((item) => (
            <Card key={item.title} title={item.title} icon="📢">
              <div className="card-meta">
                <Badge tone={tones[item.category] || 'neutral'}>{item.category}</Badge>
                <span>{item.date}</span>
              </div>
              <p>{item.description}</p>
            </Card>
          ))}
        </section>

        <section className="stack">
          <Card title="Crear anuncio" icon="✍️">
            <div className="stack">
              <FormInput label="Título" type="text" placeholder="Título del anuncio" />
              <FormInput label="Mensaje" as="textarea" rows="5" placeholder="Escribe el mensaje" />
              <FormInput label="Categoría" as="select" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option>General</option>
                <option>Urgente</option>
                <option>Evento</option>
              </FormInput>
              <Button type="button">Publicar</Button>
            </div>
          </Card>

          <Card title="Notificaciones recientes" icon="🔔">
            <ul className="simple-list">
              {notifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
