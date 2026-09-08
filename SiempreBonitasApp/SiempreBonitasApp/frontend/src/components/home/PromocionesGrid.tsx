import { useEffect, useState } from 'react';
import { promocionService } from '../../services/promocionService';
import type { Promocion } from '../../types/promocion';

export default function PromocionesGrid() {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promocionService
      .getAll()
      .then((data) => setPromociones(data.promociones || []))
      .catch((err) => console.error('Error al cargar promociones:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Cargando promociones...</p>;
  if (promociones.length === 0) return <p className="text-center">No hay promociones disponibles.</p>;

  return (
    <div className="container">
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'roboto, sans-serif',
          fontSize: '4rem',
          paddingBottom: '2rem',
        }}
      >
        Promociones <span style={{ color: '#712bff' }}>Especiales</span>
      </h1>
      <div className="row">
        {promociones.map((promo) => (
          <div key={promo.id ?? promo.Id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              {promo.Imagen ? (
                <img src={promo.Imagen} className="card-img-top" alt={promo.Titulo} />
              ) : null}
              <div className="card-body">
                <h5 className="card-title">{promo.CampoCom}</h5>
                <p className="card-text">{promo.Descripcion}</p>
                <button className="btn" style={{ backgroundColor: '#8040FF', color: 'white' }}>
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
