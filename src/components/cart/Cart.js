import {useContext} from 'react'
import Models from '../UI/Models';
import '../cart/Cart.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const Cartctx = useContext(CartContext);
  const totalAmount = `$${Cartctx.totalAmount.toFixed(2)}`;

   const CartItem = Cartctx.items.map(item=>{
    return <h4>{item.name}</h4>
  })


  const HandleOrder = () => {
    console.log("please wait ,Ordering...");
  };

  return (
    <Models>
      <div className="cart">
        <div><h1>ItemsList</h1></div>
        <div className='cart-name'>{CartItem}</div>

        <div className="amount-cart-div">
          <span className="cart-amount">Total Amount</span>
          <span className="amount"> {totalAmount}</span>
        </div>
        <div className="cart-button">
          <button className="close-button" onClick={props.onNotShow}>
            Close
          </button>
          <button className="order-button" onClick={HandleOrder}>
            order
          </button>
        </div>
      </div>
    </Models>
  );
}

export default Cart;