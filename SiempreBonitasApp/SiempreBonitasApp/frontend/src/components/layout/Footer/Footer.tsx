import { useEffect, useState } from 'react';
import { useEmpresa } from '../../../context/EmpresaContext';
import { empresaService } from '../../../services/empresaService';
import type { RedSocial } from '../../../types/empresa';
import './Footer.css';

export default function Footer() {
  const { nombreEmpresa } = useEmpresa();
  const [logo, setLogo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [redes, setRedes] = useState<RedSocial[]>([]);

  useEffect(() => {
    Promise.all([
      empresaService.getLogo(),
      empresaService.getDireccion(),
      empresaService.getTelefono(),
      empresaService.getRedesSociales(),
    ])
      .then(([logoData, dirData, telData, redesData]) => {
        setLogo(logoData.url || '');
        setDireccion(dirData.direccion || '');
        setTelefono(telData.telefono || '');
        setRedes(Array.isArray(redesData.redes) ? redesData.redes : []);
      })
      .catch((err) => console.error('Error al cargar datos del footer:', err));
  }, []);

  return (
    <footer className="bg-dark text-white mt-14 py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 d-flex align-items-center lobster-regular">
              {nombreEmpresa}
              {logo && <img className="Logo" src={logo} alt="Logo" />}
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong className="text-secondary">Dirección:</strong> {direccion}
              </li>
              <li className="mb-2">
                <strong className="text-secondary">Teléfono:</strong> {telefono}
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-uppercase mb-3">Nuestras Redes Sociales</h5>
            <ul className="list-unstyled d-inline-block text-start">
              {redes.map((red) => (
                <li key={red.nombre} className="mb-2 text-center">
                  <a
                    href={red.url}
                    className="text-white text-decoration-none border-bottom border-secondary pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {red.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4" />
        </div>

        <div className="border-top border-secondary mt-4 pt-3 text-center text-muted">
          <small className="text-secondary">
            © 2026 {nombreEmpresa}. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}
