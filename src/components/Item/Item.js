import React from 'react'
import { Card } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({product}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img className="card-imgs" variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}<hr></hr></Card.Title>
            
            <Card.Text>
            {product.description}
            </Card.Text>
            <ItemCount stock={product.stock}/>
        </Card.Body> 
        </Card>
    </div>
  )
}

export default Item