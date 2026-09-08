import { NavLink } from 'react-router-dom';
import { useEmpresa } from '../../../context/EmpresaContext';
import './NavBar.css';

const navLinks: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/servicios', label: 'Servicios' },
  { to: '/promociones', label: 'Promociones' },
  { to: '/nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function NavBar() {
  const { nombreEmpresa } = useEmpresa();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand nombreEmpresa" to="/">
          {nombreEmpresa}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map(({ to, label, end }) => (
              <li key={to} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  to={to}
                  end={end}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-content-end">
          <button className="btn btn-nav">Reservar Turno</button>
          <button className="btn btn-user">
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
