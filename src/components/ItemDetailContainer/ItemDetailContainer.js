import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    const {productId} = useParams()
    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productRef = doc(db, "productos", productId)
        getDoc(productRef).then((snapshot) => {
            if(snapshot.exists){
                setProductDetail({id: snapshot.id, ...snapshot.data()})
                setLoading(false)
            }
        }
        )
        // eslint-disable-next-line
    },[productId])   

    return (
            <div>
                {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
        );
  }