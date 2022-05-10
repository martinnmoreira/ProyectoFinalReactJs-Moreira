import React from "react";
import { Card, button } from "react-bootstrap";
import { products } from "../../data/Products/Products";

export default function ItemCount ({product}){
    const [textAdd, setText] = React.useState("Agregar")
    const [count, setCount] = React.useState(0)
    const handleRest = ()=>{
        if(count > 0 ){
            setCount(count -1)
            setText("Agregar")
        }
    }

    const stock = ({stock});
    const handleAdd = ()=>{
        if(count < stock){
            setCount(count + 1)
            setText("Agregar")
        }
    }
/* 
    const LapizCastell = 18;
    const handleAdd = ()=>{
        if(count < LapizCastell){
            setCount(count + 1)
            setText("Agregar")
        }
    }

    const LapiceraParker = 10;
    const handleAdd = ()=>{
        if(count < LapiceraParker){
            setCount(count + 1)
            setText("Agregar")
        }
    }

    const LapiceraParkerInox = 8;
    const handleAdd = ()=>{
        if(count < LapiceraParkerInox){
            setCount(count + 1)
            setText("Agregar")
        }
    } */

    return(
        <div>
            <div class="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img class="card-imgs" variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}<hr></hr></Card.Title>
                    
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <div class="row justify-content-center">
                        <input type="Button" class="btn btn-secondary" value="-" onClick={handleRest} />            
                        <span class="badge bg-light text-dark fs-5">{count}</span>
                        <input type="Button" class="btn btn-secondary" value="+" onClick={handleAdd} />            
                    <input type="Button" class="btn btn-outline-primary" value={textAdd} onClick={()=>setText("Agregado")}/>
                    </div>
                </Card.Body> 
                </Card>
            </div>
        </div>
    );
}