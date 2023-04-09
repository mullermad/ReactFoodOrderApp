import {useRef} from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css';

const MealItemForm = (props) => {
  const amountInputRef=useRef(0);
  // useEffect(()=>{
  //  const myvalue=amountInputRef.current.value;
  // },[]);

  const SubmitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current +1;
    //focus here muller

  
    const enteredAmountNumber=+enteredAmount;
    console.log(enteredAmountNumber);
    if(enteredAmountNumber <1|| enteredAmountNumber>5){
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className='mealItemForm' onSubmit={SubmitHandler}>
      <Input className="form-input" label='Amount' input={{
        ref:{amountInputRef},
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