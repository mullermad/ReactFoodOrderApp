import React from 'react'
import Models from '../UI/Models';
import '../cart/Cart.css';

const Cart = () => {
  // const Data = [{ id: "m1", name: "susui", amount: 2, price: 12.99 }];
  //   const CartItem=Data.map(data=>{
  //       return <ul>
  //           <li>{data.name}</li>
  //       </ul>
  //   })
  return (
    <Models>
      <div className="cart">
        {/* <CartItem /> */}
        <div className="cart-name">susui</div>
        <div className='amount-cart-div'>
          <span className='cart-amount'>Total Amount</span>
          <span className='amount'> 34.5</span>
        </div>
        <div className='cart-button'>
          <button className='close-button'>Close</button>
          <button className='order-button'>order</button>
        </div>
      </div>
    </Models>
  );
}

export default Cart;