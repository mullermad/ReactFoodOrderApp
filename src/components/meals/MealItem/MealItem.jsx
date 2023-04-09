import React from 'react'
import { useContext} from 'react';
import Card from "../../UI/Card";
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import './MealItem.css';

const MealItem = (props) => {


const cartctx=useContext(CartContext);


const HandleAddToCart=(amount)=>{
cartctx.addItem({
  id:props.id,
  amount:amount,
  price:props.price,
  name:props.name,
})
}

    const price=`$${props.price.toFixed(2)}`;
  return (
    <Card>
      <li className="mealItem">
        <div>
          <h1 className="mealItem-name">{props.name}</h1>
          <div className="mealItem-discription">
            <p>{props.discription}</p>
          </div>
          <div className="mealItem-price">{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart ={HandleAddToCart}/>
        </div>
      </li>
    </Card>
  );
}

export default MealItem;