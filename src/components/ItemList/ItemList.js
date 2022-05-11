import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
        {productos.map((product) => (
            <Item product={product} key={product.id}/>
            )
        )}
    </div>
  )
}

export default ItemList