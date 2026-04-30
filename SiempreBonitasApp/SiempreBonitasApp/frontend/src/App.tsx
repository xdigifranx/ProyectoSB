import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { EmpresaProvider } from './context/EmpresaContext'

function App() {
  return (
    <EmpresaProvider>
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </EmpresaProvider>
  )
}

export default App
