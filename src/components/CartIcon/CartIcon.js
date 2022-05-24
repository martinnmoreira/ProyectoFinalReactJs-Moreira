import { FiShoppingCart } from "react-icons/fi";
import React from 'react';
import { Link } from "react-router-dom";

// Importo context para acceder al carrito
import { CartContext } from "../../context/CartContext";

const CartIcon = () => {
  const { cart } = React.useContext(CartContext)
  return (
    <div className="CartIcon">
      <div><FiShoppingCart /></div>
      <span className="badge badge-pill badge-danger">
        {cart.length}
      </span>

    </div>
  )
}

export default CartIcon