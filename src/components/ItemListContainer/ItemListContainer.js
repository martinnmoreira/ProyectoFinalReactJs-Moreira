import { promesa } from "../../data/Products/Products";
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";

export default function ItemListContainer() {
    const [productos, setProductos]= useState([])

    useEffect(()=>{
        promesa.then((res) => setProductos(res))
        .catch((error) => console.log(error))
    }, [])
    
    console.log(productos)
    return (
            <div>
                <ItemList productos={productos}/>
            </div>
        );
  }
