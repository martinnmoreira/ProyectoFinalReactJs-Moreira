import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ListGroup, Badge, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

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
                        <button className='btn btn-info' onClick={()=> removeFromCart()}>BOTON PARA REMOVER ITEM</button>
                        </div>
                        <Badge bg="primary" pill>
                        Cantidad: {element.quantity}
                        </Badge>                        
                    </ListGroup.Item> 
                </ListGroup>  
                </>       
            )
        }
    )

    if (total !== 0) {
        return (
            <>
            <div className="col-lg-12 col-md-12 col-sm-12">
            {listItems}
            <Card body className="display-4">Total: {total}</Card>
            <div>
                <button className='btn btn-info' onClick={()=> deleteAll()}>Vaciar carrito</button>
            </div> 
            </div>
            <div>        
            <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
            </div>
            </>
        )
    }else {
        return (
        <>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <Card body className="display-4">No hay productos en el carrito</Card>
        </div> 
        <div>  
            <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
        </div>
        </>
        )
        
    }

}