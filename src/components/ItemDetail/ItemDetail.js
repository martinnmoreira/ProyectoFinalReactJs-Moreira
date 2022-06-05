import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../Context/CartContext";


export default function ItemDetail({productDetail}) {
  const {id, title, description, image, stock, price} = productDetail
  const volver = useNavigate()
  // console.table(productDetail)
  // Definimos variables del context
  const { addToCart, isInCart } = React.useContext(CartContext);
  // Separamos el estado del count
  const [count, setCount] = React.useState(1)
  return (
    <>
      <h3 className='tituloCentrado'>Detalle de producto: {title}</h3> 
      <div className='cardProductoDetalle'>
        <img className='imageDetail' src={image} alt={title}/>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>Precio: ${price}</p>
        {isInCart(id) ? (
                        <Link to='/Cart'><button className="btn btn-warning">Ir al carrito</button></Link>
                    ) : (
                    <div>
                        <ItemCount 
                            onSubmit={()=> addToCart(productDetail, count)}
                            count={count}
                            setCount={setCount}
                            stock={stock}
                        />
                    </div>
                    )
        }
        <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
      </div>
    </>
    )
  } 