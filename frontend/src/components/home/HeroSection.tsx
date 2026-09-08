import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmpresa } from '../../context/EmpresaContext';
import { empresaService } from '../../services/empresaService';

export default function HeroSection() {
  const { nombreEmpresa } = useEmpresa();
  const [headerImage, setHeaderImage] = useState('');
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    empresaService
      .getHeaderImage()
      .then((data) => setHeaderImage(data.url || ''))
      .catch((err) => console.error('Error al cargar imagen del header:', err))
      .finally(() => setLoadingImage(false));
  }, []);

  return (
    <div className="position-relative w-100" style={{ height: '500px', overflow: 'hidden' }}>
      {headerImage ? (
        <>
          <img
            src={headerImage}
            alt="Header"
            className="w-100 h-100"
            style={{ objectFit: 'cover', position: 'absolute' }}
          />
          <div
            className="position-absolute w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
          />
          <div
            className="position-absolute w-100 h-100 d-flex align-items-center"
            style={{ zIndex: 2 }}
          >
            <div className="container">
              <div className="col-lg-6 text-white px-4">
                <h1 className="display-3 fw-bold mb-3 text-uppercase">
                  Tu belleza es nuestra pasión
                </h1>
                <p className="fs-5 mb-4">
                  Especialistas en uñas esculpidas, extensiones de pestañas y
                  tratamientos de belleza premium en {nombreEmpresa}.
                </p>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-primary btn-lg px-4"
                    style={{ backgroundColor: '#712cf9', border: 'none' }}
                  >
                    Reservar Ahora
                  </button>
                  <Link to="/servicios" className="btn btn-outline-light btn-lg px-4">
                    Ver Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100 bg-light">
          <p>{loadingImage ? 'Cargando imagen...' : 'No se encontró la imagen'}</p>
        </div>
      )}
    </div>
  );
}
