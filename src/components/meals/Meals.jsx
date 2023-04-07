import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummery from './MealsSummery'
import './Meals.css'

const Meals = () => {
  return (
    <section className="meals">
      <MealsSummery />
      <AvailableMeals />
    </section>
  );
}

export default Meals;