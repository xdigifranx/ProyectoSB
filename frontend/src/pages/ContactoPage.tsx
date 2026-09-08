import { useEffect, useState } from 'react';
import { useEmpresa } from '../context/EmpresaContext';
import { empresaService } from '../services/empresaService';

export default function ContactoPage() {
  const { nombreEmpresa } = useEmpresa();
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(() => {
    Promise.all([empresaService.getDireccion(), empresaService.getTelefono()])
      .then(([dir, tel]) => {
        setDireccion(dir.direccion || '');
        setTelefono(tel.telefono || '');
      })
      .catch((err) => console.error('Error al cargar contacto:', err));
  }, []);

  return (
    <main className="container py-5">
      <h1 className="mb-4">Contacto</h1>
      <p className="lead">Comunicate con {nombreEmpresa}</p>
      <ul className="list-unstyled fs-5">
        <li className="mb-2">
          <strong>Dirección:</strong> {direccion || '—'}
        </li>
        <li className="mb-2">
          <strong>Teléfono:</strong> {telefono || '—'}
        </li>
      </ul>
    </main>
  );
}
