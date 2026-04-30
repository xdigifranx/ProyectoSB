import { useEffect, useState } from "react"
import { useEmpresa } from "../../context/EmpresaContext"
import "./Footer.css"


export default function Footer() {
  const [Logo, setLogo] = useState('');
  const { nombreEmpresa } = useEmpresa()
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [Redes, setRedes] = useState<Array<{url: string, nombre: string}>>([]);
  
  useEffect(() => {
    fetch('http://localhost:3003/api/empresa/logo')
    .then(res => res.json())
    .then(data => {
      setLogo(data.url || '');
    })
    .catch(err => console.error('Error fetching logo:', err));
    fetch('http://localhost:3003/api/empresa/direccion')
      .then(res => res.json())
      .then(data => {
        setDireccion(data.direccion);
      })
      .catch(err => console.error('Error fetching dirección:', err));
    fetch('http://localhost:3003/api/empresa/telefono')
      .then(res => res.json())
      .then(data => {
        setTelefono(data.telefono);
      })
      .catch(err => console.error('Error fetching dirección:', err));
    fetch('http://localhost:3003/api/empresa/telefono')
      .then(res => res.json())
      .then(data => {
        setTelefono(data.telefono);
      })
      .catch(err => console.error('Error fetching teléfono:', err));
    fetch('http://localhost:3003/api/empresa/redes')
      .then(res => res.json())
      .then(data => {
        setRedes(data.redes);
      })
      .catch(err => console.error('Error fetching redes sociales:', err));
  }, []);
  
  return (
    <footer className="bg-dark text-white mt-14 py-5">
  <div className="container">
    <div className="row align-items-start">
      
      {/* Columna Izquierda: Info de la Empresa */}
      <div className="col-md-4 mb-4 mb-md-0">
<h5 className="text-uppercase mb-3 d-flex align-items-center lobster-regular">
  {nombreEmpresa} 
  <img 
    className="Logo" 
    src={Logo} 
    alt="Logo" 
  />
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

      {/* Columna Central: Redes Sociales (CENTRADAS) */}
      <div className="col-md-4 text-center"> 
        <h5 className="text-uppercase mb-3">Nuestras Redes Sociales</h5>
        <ul className="list-unstyled d-inline-block text-start">
          {Redes.map((red, index) => (
            <li key={index} className="mb-2 text-center">
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

      {/* Columna Derecha: Vacía para equilibrar el centro */}
      <div className="col-md-4">
        {/* Podés dejarlo vacío o poner un logo pequeño */}
      </div>

    </div>

    <div className="border-top border-secondary mt-4 pt-3 text-center text-muted ">
      <small className="text-secondary">© 2026 {nombreEmpresa}. Todos los derechos reservados.</small>
    </div>
  </div>
</footer>
  )
}

