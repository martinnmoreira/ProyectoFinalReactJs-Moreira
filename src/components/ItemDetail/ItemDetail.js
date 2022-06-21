import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../Context/CartContext";

export default function ItemDetail({productDetail}) {
  const {id, title, description, image, stock, price} = productDetail
  const volver = useNavigate()
  // Definimos variables del context
  const { addToCart, isInCart } = React.useContext(CartContext);
  // Separamos el estado del count
  const [count, setCount] = React.useState(1)
  return (
    <>

      <div className="container">
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-6">
                        <div className="white-box text-center"><img src={image} className="card-img" alt={title} /></div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-6">
                        <h4 className="box-title mt-5">Descripción</h4>
                        <p>{description}</p>
                        <h2 className="mt-5">
                        Precio: ${price}
                        </h2>
                        <h5>
                        <small>Stock disponible: {stock} unidades</small>
                        </h5>
                        <hr />
                        {
                          isInCart(id) ? (
                              <Link to='/Cart'><button className="btn btnVerde">Ir al carrito</button></Link>
                          ) : (stock === 0) ? (
                              <h3 className="mt-3">
                                  Lamentablemente no hay stock disponible. Disculpe las molestias ocasionadas.
                              </h3>
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
                        <hr />
                        <button className='btn btn-dark' onClick={() =>volver('/productos')}>Volver a Productos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>















    //   <h3 className='tituloCentrado'>Detalle de producto: {title}</h3> 
    //   <div className='cardProductoDetalle'>
    //     <img className='imageDetail' src={image} alt={title}/>
    //     <p>{description}</p>
    //     <p>Stock: {stock}</p>
    //     <p>Precio: ${price}</p>
    //     {isInCart(id) ? (
    //                     <Link to='/Cart'><button className="btn btn-warning">Ir al carrito</button></Link>
    //                 ) : (
    //                 <div>
    //                     <ItemCount 
    //                         onSubmit={()=> addToCart(productDetail, count)}
    //                         count={count}
    //                         setCount={setCount}
    //                         stock={stock}
    //                     />
    //                 </div>
    //                 )
    //     }
    //     <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
    //   </div>
    // </>
    )
  } 