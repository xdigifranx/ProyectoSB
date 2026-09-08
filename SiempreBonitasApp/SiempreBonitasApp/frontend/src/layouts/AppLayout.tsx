import { Outlet } from 'react-router-dom';
import NavBar from '../components/layout/NavBar/NavBar';
import Footer from '../components/layout/Footer/Footer';

export default function AppLayout() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
