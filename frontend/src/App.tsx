import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EmpresaProvider } from './context/EmpresaContext';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import PromocionesPage from './pages/PromocionesPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import './App.css';

function App() {
  return (
    <EmpresaProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="servicios" element={<ServiciosPage />} />
            <Route path="promociones" element={<PromocionesPage />} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="contacto" element={<ContactoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmpresaProvider>
  );
}

export default App;
