import React, { useEffect, useState } from 'react'
import {promesa} from '../../data/Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        promesa
        .then((res) => setProductDetail(res.find((product) => product.id === id)))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
        // eslint-disable-next-line
    },[])
    
    return (
            <div>
                {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
        );
  }