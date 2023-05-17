import React from 'react';
import  {useContext,useState} from 'react'
import Models from '../UI/Models';
import '../cart/Cart.css';
import CartContext from '../../store/cart-context';
import CheckOut from "./CheckOut";
const Cart = (props) => {
  const Cartctx = useContext(CartContext);
  const [isCheckout, setCheckout] = useState(false);
  const [submitted,setSubmitted]=useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const totalAmount = `$${Cartctx.totalAmount.toFixed(2)}`;

  //handling submmit for checkout as props we send it
  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    await fetch("https://muller-notes-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: Cartctx.items,
      }),
    });
    setSubmitting(false);
    setSubmitted(true);
    Cartctx.clearCart();
  };

  const CartItem = Cartctx.items.map((item) => {
    return <h4>{item.name}</h4>;
  });

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

  const modelContent = (
    <div className="cart">
      <div>
        <h1>Items List</h1>
      </div>
      <div className="cart-name">{CartItem}</div>
      <div className="amount-cart-div">
        <span className="cart-amount">Total Amount</span>
        <span className="amount"> {totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOut onConfirm={submitOrderHandler} onCancel={props.onNotShow} />
      )}
      {!isCheckout && modelAction}
    </div>
  );

const isSubmmitedModelContent = (
  <React.Fragment>
    <p className="sucess">successfully sent orders!</p>
    <button className="sucess-btn" onClick={props.onNotShow}>
      Close
    </button>
  </React.Fragment>
);
const isSubmmittingModelContent = <p className='sendingData'> sending orders...</p>;
 
  return (
    <Models>
      {!isSubmitting && !submitted && modelContent}
      {isSubmitting && isSubmmittingModelContent}
      {!isSubmitting && submitted && isSubmmitedModelContent}
    </Models>
  );
}

export default Cart;