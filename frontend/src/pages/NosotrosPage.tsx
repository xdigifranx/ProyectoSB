import { useEmpresa } from '../context/EmpresaContext';

export default function NosotrosPage() {
  const { nombreEmpresa } = useEmpresa();

  return (
    <main className="container py-5">
      <h1 className="mb-4">Sobre {nombreEmpresa}</h1>
      <p className="lead">
        Somos un salón de belleza dedicado a realzar tu estilo con servicios premium de uñas,
        pestañas y tratamientos de belleza.
      </p>
      <p>
        Nuestro equipo combina técnicas innovadoras con atención personalizada para que cada
        visita sea una experiencia única.
      </p>
    </main>
  );
}
