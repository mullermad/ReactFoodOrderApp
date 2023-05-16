import {useContext,useState} from 'react'
import Models from '../UI/Models';
import '../cart/Cart.css';
import CartContext from '../../store/cart-context';
import CheckOut from "./CheckOut";
const Cart = (props) => {
  const Cartctx = useContext(CartContext);
  const [isCheckout,setCheckout]=useState(false);
  const totalAmount = `$${Cartctx.totalAmount.toFixed(2)}`;

   const CartItem = Cartctx.items.map(item=>{
    return <h4>{item.name}</h4>
  })


  const HandleOrder = () => {
  setCheckout(true);
  };
const modelAction = (
  <div className="cart-button">
    <button className="close-button" onClick={props.onNotShow}>
      Close
    </button>
    <button className="order-button" onClick={HandleOrder}>
      order
    </button>
  </div>
);
  return (
    <Models>
      <div className="cart">
        <div>
          <h1>Itemsc List</h1>
        </div>
        <div className="cart-name">{CartItem}</div>
        <div className="amount-cart-div">
          <span className="cart-amount">Total Amount</span>
          <span className="amount"> {totalAmount}</span>
        </div>
        {isCheckout && <CheckOut onCancel={props.onNotShow} />}
        {!isCheckout && modelAction}
      </div>
    </Models>
  );
}

export default Cart;