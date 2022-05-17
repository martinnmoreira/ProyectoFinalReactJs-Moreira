import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(false)
    const [lapiceras, setLapiceras] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=lapiceras')
        .then((res) => (res.json()))
        .then((data) => setLapiceras(data.results))
        //.then((data) => console.log(data.results))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])
    
    return (
            <div>
                {loading} ? <h3>Loading...</h3>:<ItemDetail lapiceras={lapiceras}/>
            </div>
        );
  }