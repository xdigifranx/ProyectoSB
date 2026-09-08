import { useEffect, useState } from 'react';
import { servicioService } from '../services/servicioService';
import type { Servicio } from '../types/servicio';

export default function ServiciosPage() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    servicioService
      .getAll()
      .then(setServicios)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container py-5">
      <h1 className="mb-4">Nuestros Servicios</h1>
      {loading && <p>Cargando servicios...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && servicios.length === 0 && (
        <p>No hay servicios disponibles por el momento.</p>
      )}
      <div className="row g-4">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{servicio.nombre}</h5>
                {servicio.descripcion && (
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                )}
                {servicio.precio != null && (
                  <p className="fw-bold text-primary">${servicio.precio}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
