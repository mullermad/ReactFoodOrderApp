import React from 'react';

import './Availablemeals.css'
import MealItem from './MealItem/MealItem';


const DummyMeals = [
  {
    id: "m1",
    name: "Salad",
    discription: "Erupian food",
    price: 29.99,
  },
  {
    id: "m2",
    name: "Chicken",
    discription: "american food",
    price: 45.99,
  },
  {
    id: "m3",
    name: "Doro Wot",
    discription: "ethiopian food",
    price: 100.99,
  },
];

const AvailableMeals = () => {
      const MealList = DummyMeals.map(meal=>{
        return (
          <MealItem
            key={meal.id}
            name={meal.name}
            discription={meal.discription}
            price={meal.price}
          />
        );
    })
  return (
    <section className="Availablemeals">
     
        <ul>{MealList}</ul>
      
    </section>
  );
}

export default AvailableMeals;