import React from 'react'
import ItemLapicera from "../ItemLapicera/ItemLapicera"

export default function ItemDetail({lapiceras}) {
    
  return (
    <>
      <h3>Listado de lapiceras</h3>
      <div className='tarjetasLapiceras'>
          {lapiceras.map((lapicera) => <ItemLapicera lapicera={lapicera} key={lapicera.id}/> )}
      </div>
    </>
    )
  } 