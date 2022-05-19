import React from 'react'
import {useNavigate} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({productDetail}) {
  const {title, description, image, stock, price} = productDetail
  const volver = useNavigate()
  console.table(productDetail)
  return (
    <>
      <h3 className='tituloCentrado'>Detalle de producto: {title}</h3> 
      <div className='cardProductoDetalle'>
        <img src={image} alt={title}/>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>Precio: ${price}</p>
        <div className='card-stock'><ItemCount stock={stock}/></div>
        <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
      </div>
    </>
    )
  } 