import {useContext} from 'react';
import './CartButton.css';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
 const Cartctx=useContext(CartContext);
 const numberOfCartItem=Cartctx.items.reduce((curNumber, item)=>{
  return curNumber + item.amount;
 }, 0);
  return (
    <button className="header-button" onClick={props.onShow}>
      <span className="cart-icon">
        <CartIcon />
      </span>
      <span className="cart-name">Cart</span>
      <span className="cart-number">{numberOfCartItem}</span>
    </button>
  );
}

export default HeaderCartButton;