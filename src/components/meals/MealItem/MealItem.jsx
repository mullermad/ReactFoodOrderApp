import React from 'react'
import Card from "../../UI/Card";
import MealItemForm from './MealItemForm';
import './MealItem.css';

const MealItem = (props) => {
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
            <MealItemForm />
        </div>
      </li>
    </Card>
  );
}

export default MealItem;