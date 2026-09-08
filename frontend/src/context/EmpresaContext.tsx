import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { empresaService } from '../services/empresaService';

type EmpresaContextType = {
  nombreEmpresa: string;
};

const EmpresaContext = createContext<EmpresaContextType>({
  nombreEmpresa: 'Siempre Bonitas',
});

export function EmpresaProvider({ children }: { children: ReactNode }) {
  const [nombreEmpresa, setNombreEmpresa] = useState('Siempre Bonitas');

  useEffect(() => {
    empresaService
      .getNombre()
      .then((data) => {
        if (data.nombre) setNombreEmpresa(data.nombre);
      })
      .catch((err) => console.error('Error al obtener nombre de la empresa:', err));
  }, []);

  return (
    <EmpresaContext.Provider value={{ nombreEmpresa }}>
      {children}
    </EmpresaContext.Provider>
  );
}

export function useEmpresa() {
  return useContext(EmpresaContext);
}
