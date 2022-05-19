import React from "react";
import { Card } from "react-bootstrap";

const ItemLapicera = ({lapicera}) => {
    return(
        <div>
            <Card className="cardLapiceras" style={{ width: '18rem' }}>
            <Card.Img className="card-imgs" variant="top" src={lapicera.thumbnail} />
            <Card.Body>
                <Card.Title>{lapicera.title}<hr></hr></Card.Title>  
                <Card.Text>
                Precio: ${lapicera.price}
                </Card.Text>
            
            </Card.Body> 
            </Card>
        </div>
    );
}

export default ItemLapicera