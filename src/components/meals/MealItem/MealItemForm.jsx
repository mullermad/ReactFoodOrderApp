import React from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css';

const MealItemForm = () => {
  return (
    <form className='mealItemForm'>
      <Input className="form-input" label='Amount' input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        defaultValue:'1'

      }} />
      <button className='form-button'>+ Add</button>
    </form>
  );
}

export default MealItemForm;