import React from 'react'

import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

  const navegar = useNavigate();

  return (
    <div className='card' style={{ width: '340px', height: 'auto' }}>
        <img className="card-img" variant="top" src={product.image} alt={product.title}/>
        <div className='card-title'>{product.title}<hr></hr></div>
        <div className='card-body'>
          <h3 className='todoCentrado'>Precio: ${product.price}</h3>
        </div>
        <div className='card-verMas'>
          <button className='btn btn-success btn-space bgBlack textWhite' style={{ width: '98%', margin: '10px'}} onClick={()=>navegar(`/detalle/${product.id}`)}>Ver Más</button></div>
        </div>
    
  )
}

export default Item