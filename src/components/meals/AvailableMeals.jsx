import React from 'react';
import './Availablemeals.css'

const DummyMeals = [
  {
    id: "m1",
    name: "salad",
    disription: "american delicious food",
    price: 29.99,
  },
  {
    id: "m2",
    name: "salad",
    disription: "american delicious food",
    price: 29.99,
  },
  {
    id: "m3",
    name: "salad",
    disription: "american delicious food",
    price: 29.99,
  },
  {
    id: "m4",
    name: "salad",
    disription: "american delicious food",
    price: 29.99,
  },
];

const AvailableMeals = () => {
    const MealList = DummyMeals.map(meal=>{
        return <li>{meal.name}</li>
    })
  return (
    <section className='Availablemeals'>
        <ul>
            {MealList}
        </ul>
    </section>  )
}

export default AvailableMeals;