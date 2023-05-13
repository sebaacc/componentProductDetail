import React from 'react'

const ProductDetails = (props) => {

  return (
    
    <div>
        <h2>{props.name}</h2>
        <p>Ubicación: {props.location}</p>
        <p>Horarios del club: {props.schedule}</p>
        <p>Servicios: {props.services}</p>
        <p>Teléfono: {props.contact}</p>
        <p>Precio: ${props.price}</p>
        <img src={props.image} alt={props.name}/>
    </div>
  )
}

export default ProductDetails