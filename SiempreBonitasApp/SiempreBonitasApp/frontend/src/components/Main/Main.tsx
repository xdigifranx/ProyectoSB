import { useEffect, useState } from "react";
import Promociones from "./Promociones";
import { useEmpresa } from "../../context/EmpresaContext";

export default function Main() {
  const { nombreEmpresa } = useEmpresa()
  const [headerImage, setHeaderImage] = useState('');
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3003/api/empresa/url')
      .then(res => res.json())
      .then(data => {
        setHeaderImage(data.url || '');
      })
      .catch(err => console.error('Error fetching header image:', err))
      .finally(() => setLoadingImage(false));
  }, []);

  return (
    <main className="container-fluid p-0 mb-5">
      <div className="row g-0">
        <div className="col-md-12">
          
          {/* Contenedor Principal con Altura Definida */}
          <div className="position-relative w-100" style={{ height: '500px', overflow: 'hidden' }}>
            
            {headerImage ? (
              <>
                {/* 1. La Imagen de fondo */}
                <img 
                  src={headerImage} 
                  alt="Header" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover', position: 'absolute' }} 
                />

                {/* 2. El Overlay Oscuro (Capa que oscurece) */}
                <div 
                  className="position-absolute w-100 h-100" 
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece al 50%
                    zIndex: 1 
                  }} 
                ></div>

                {/* 3. El Contenido (Texto a la izquierda) */}
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
                        <button className="btn btn-primary btn-lg px-4" style={{ backgroundColor: '#712cf9', border: 'none' }}>
                          Reservar Ahora
                        </button>
                        <button className="btn btn-outline-light btn-lg px-4">
                          Ver Servicios
                        </button>
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

        </div>
      </div>
      
      <div className="container mt-5">
        <Promociones />
      </div>
    </main>
  ) 
}
