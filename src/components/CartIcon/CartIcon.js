import { FiShoppingCart } from "react-icons/fi";
import React from 'react';
import { Link } from 'react-router-dom'

// Importo context para acceder al carrito
import { CartContext } from "../../Context/CartContext";

  const CartIcon = () => {
  const { cart } = React.useContext(CartContext)
  const getTotalQuantity = (items) => items
  .map((item) => item.quantity)
  .reduce((acc, value) => acc + value, 0)  
  const cantidad = getTotalQuantity(cart); 

  return (
    <div>{(cantidad === 0) ? <div style={{display: "none"}}></div> :
          <Link to='/Cart'>
            <div className="CartIcon">
              <div><FiShoppingCart /></div>
              <span className="badgeCountIcon">
                  {cantidad}
              </span>
            </div>
          </ Link>}
    </div>
  );
}


export default CartIcon