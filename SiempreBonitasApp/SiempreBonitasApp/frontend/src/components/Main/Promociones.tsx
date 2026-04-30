
import { useEffect, useState } from "react";

const Promociones = () => {

const [Promocion, setPromocion] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3003/api/empresa/promociones')
    .then(res => res.json())
    .then(data => { 
        setPromocion(data.promociones || []);
    })
    .catch(err => console.error('Error fetching promociones:', err));
},[])

if(Promocion.length === 0) {
    return <p>No hay promociones disponibles.</p>;
}
return (
    <div className="container my-5">
        <h2 className="mb-4">Promociones</h2>   
{Promocion.map((promo: any) => (
    <div key={promo.id} className="card mb-4">
        <img src={promo.Imagen} className="card-img-top" alt={promo.Titulo} />
        <div className="card-body">
            <h5 className="card-title">{promo.Titulo}</h5>
            <p className="card-text">{promo.Descripcion}</p>
        </div>
    </div>
))}
</div>
        )

    }
    export default Promociones;
