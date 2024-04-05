import './Cart.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../../store/actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (productID) => {
    dispatch(removeItem(productID));
  };

  return (
    <div className="cart_component">
      <div className="cart_container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <button onClick={handleClearCart}>Clear Cart</button>
            <ul>
              {cartItems.map((item) => (
                <li key={item.productID}>
                  {item.productName} - Quantity: {item.quantity ? item.quantity : 0}
                  <button onClick={() => handleRemoveItem(item.productID)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="checkout-button-container">
              <button className="checkout-button">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;