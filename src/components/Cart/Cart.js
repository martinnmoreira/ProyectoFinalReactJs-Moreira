import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ListGroup, Badge, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { FiTrash2 } from "react-icons/fi";

export default function Cart() {
    const { cart, deleteAll, removeFromCart } = useContext(CartContext)
    const volver = useNavigate()


    const getTotalPrice = (items) => items
    .map((item) => item.price*item.quantity)
    .reduce((acc, value) => acc + value, 0)  
    const total = getTotalPrice(cart);  

    const listItems = cart.map((element) => {
            const subtotal = element.price * element.quantity
            return (
                <>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{element.title}</div>
                        Precio {element.price}<br />
                        <h6>Subtotal: {subtotal}</h6>
                        {/* <button className='btn btn-danger'>BOTON PARA REMOVER ITEM</button>  */}
                        
                        </div>
                        <Badge bg="primary" pill>
                            Cantidad: {element.quantity}
                        </Badge>
                        <FiTrash2 className="trashIcon" onClick={()=> removeFromCart(element.id)}/>                      
                    </ListGroup.Item> 
                </ListGroup>  
                </>       
            )
        }
    )
    
        return (
            <>
            {total !== 0 ? (
                <div className="col-lg-12 col-md-12 col-sm-12">
                    {listItems}
                    <Card body className="display-4">Total: {total}
                    <button className='btn btn-info' onClick={deleteAll}>Vaciar carrito</button>
                    <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
                    </Card>
                </div>
            ) : (
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h2>No hay productos en el carrito.</h2>
                    <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
                </div>
            )}
            </>
        )
}