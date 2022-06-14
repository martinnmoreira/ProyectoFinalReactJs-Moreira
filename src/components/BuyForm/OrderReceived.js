import Order from "./Order.css"
import React from 'react'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

export const OrderReceived = ({orderId}, {data}) => {
    const { cart, deleteAll } = useContext(CartContext)
    const getTotal = (items) => items
    .map((item) => item.price*item.quantity)
    .reduce((acc, value) => acc + value, 0)  

    const navegar = useNavigate();
    
    const total = getTotal(cart); 

    const Continuar = () =>{
        deleteAll()
        navegar(`/`)
    }

    return (
    
    <div className='body-order'>
                <div className="card-order">
                <div className="title-order">Tu pedido fue realizado con éxito.</div>
                <div className="info-order">
                    <div className="row">
                        <div className="col-5 pull-right">
                            <span id="heading">Número de orden:</span><br /> 
                            <span id="details"><b>{orderId}</b></span>
                        </div>
                    </div>      
                </div>      
                <div className="pricing-order">
                    <div className="row">
                        <div className="col-9">
                            <span id="name">Envío</span>
                        </div>
                        <div className="col-3">
                            <span id="price">Gratis</span>
                        </div>
                    </div>
                </div>
                <div className="total-order">
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3"><big>Total de tu compra: ${total}</big></div>
                    </div>
                </div>
                <div class="progress-track-order">
                    <div class="title">Estado del pedido</div>
                </div>
                <div className="progress-track-order">
                    <ul id="progressbar">
                        <li className="step0 active " id="step1">Aceptado</li>
                        <li className="step0 text-center" id="step2">Enviado</li>
                        <li className="step0 text-right" id="step3">En camino</li>
                        <li className="step0 text-right" id="step4">Recibido</li>
                    </ul>
                </div>

                <div class="total-order">
                    <div class="row">
                    <Container>
                    <Row>
                        <Col>
                            <div className="d-grid gap-2">
                            <button className='btn card-shadow btnVerde' onClick={Continuar}>Continuar</button>
                            </div> 
                        </Col>
                    </Row>
                    </Container>
                    </div>
                </div>

                <div className="footer-order">
                    <div className="row">
                        <div className="col-10">
                            Necesitás ayuda? Contactános
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}