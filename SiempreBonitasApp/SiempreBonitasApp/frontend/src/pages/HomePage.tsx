import HeroSection from '../components/home/HeroSection';
import InfoMain from '../components/home/InfoMain';
import PromocionesGrid from '../components/home/PromocionesGrid';

export default function HomePage() {
  return (
    <main className="container-fluid p-0 mb-5">
      <div className="row g-0">
        <div className="col-md-12">
          <HeroSection />
        </div>
      </div>
      <InfoMain />
      <div className="container mt-5">
        <PromocionesGrid />
      </div>
    </main>
  );
}
