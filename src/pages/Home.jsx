import React, { Fragment } from 'react'
import Carrousel from "../components/Carrousel/Carrousel"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
  return (
    <Fragment>
      <Carrousel />
      <hr></hr>
      <ItemListContainer />
    </Fragment>
  )
}

export default Home