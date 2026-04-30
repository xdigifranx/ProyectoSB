import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type EmpresaContextType = {
    nombreEmpresa: string;
};

const EmpresaContext = createContext<EmpresaContextType>({
    nombreEmpresa: "Siempre Bonitas",
});

export function EmpresaProvider({ children }: { children: ReactNode }) {
    const [nombreEmpresa, setNombreEmpresa] = useState("Siempre Bonitas");

    useEffect(() => {
        fetch("http://localhost:3003/api/empresa/nombre")
            .then((res) => res.json())
            .then((data) => {
                if (data.nombre) setNombreEmpresa(data.nombre);
            })
            .catch((err) => console.error("Error fetching nombre de la empresa:", err));
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
