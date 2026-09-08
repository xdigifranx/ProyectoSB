const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  border: 'none',
  transition: 'transform 0.3s ease',
};

const features = [
  {
    icon: 'fa-gem',
    title: 'Calidad Premium',
    description:
      'Utilizamos solo productos de la más alta calidad para garantizar resultados excepcionales en cada servicio.',
  },
  {
    icon: 'fa-magic',
    title: 'Técnicas Innovadoras',
    description:
      'Nos mantenemos actualizados con las últimas tendencias para ofrecerte lo mejor en uñas esculpidas y tratamientos de belleza.',
  },
  {
    icon: 'fa-heart',
    title: 'Atención Personalizada',
    description:
      'Cada cliente es único. Ofrecemos un servicio que entiende tus necesidades y realza tu belleza natural.',
  },
];

export default function InfoMain() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        padding: '5rem 1rem',
        color: '#333',
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feature) => (
            <div key={feature.title} className="col-md-4">
              <div className="text-center p-4 h-100 shadow-sm transition-hover" style={cardStyle}>
                <div className="mb-3">
                  <i className={`fa ${feature.icon} fa-2x`} style={{ color: '#8040FF' }} />
                </div>
                <h5 className="fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                  {feature.title}
                </h5>
                <hr
                  style={{
                    width: '40px',
                    margin: '1rem auto',
                    borderTop: '2px solid #8040FF',
                    opacity: 1,
                  }}
                />
                <p className="text-muted small">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
