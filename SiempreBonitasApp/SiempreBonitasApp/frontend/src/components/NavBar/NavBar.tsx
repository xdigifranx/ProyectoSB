import { useEmpresa } from "../../context/EmpresaContext"
import "./NavBar.css"
export default function NavBar() {
  const { nombreEmpresa } = useEmpresa()

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand nombreEmpresa " href="/">{nombreEmpresa}</a>
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
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Promociones">Promociones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Nosotros">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
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
  )
}
