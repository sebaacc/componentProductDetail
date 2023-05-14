
import data from "../data.json"

const ProductDetails = () => {

  return (
    
    <div>
       {data.map((p)=>(

       <>
       <h3>{p.name}</h3>
       <p>Tipo de Deporte:{p.kindofsport}</p>
       <p>Ubicación: {p.location}</p>
       <p>Horarios del club: {p.schedule}</p>
       <p>Servicios: {p.services}</p>
       <p>Teléfono: {p.contact}</p>
       <p>Precio: ${p.price}</p>
       <img src={p.image} alt={p.name}/>
       </>  
       
       ))}
     </div>)
   
}

export default ProductDetails