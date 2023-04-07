import React from 'react';
import './CartButton.css';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className="header-button">
      <span className="cart-icon">
        <CartIcon />
      </span>
      <span className='cart-name'>Cart</span>
      <span className='cart-number'>3</span>
    </button>
  );
}

export default HeaderCartButton;