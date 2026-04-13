import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('Residente');

  const handleSignIn = (event) => {
    event.preventDefault();
    localStorage.setItem('smartcondo-role', role);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">SmartCondo</div>
        <p className="login-copy">Gestiona visitantes, solicitudes, correo y reservas en un solo lugar.</p>
        <p className="login-role">Vista previa como <strong>{role}</strong></p>
        <form className="stack" onSubmit={handleSignIn}>
          <FormInput label="Usuario" type="text" placeholder="Ingresa el usuario" />
          <FormInput label="Contraseña" type="password" placeholder="Ingresa la contraseña" />
          <FormInput label="Rol" as="select" value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Residente</option>
            <option>Administración</option>
            <option>Seguridad / Recepción</option>
          </FormInput>
          <Button type="submit">Ingresar</Button>
        </form>
      </div>
    </div>
  );
}
