import { useRef,useState } from 'react';
import './Checkout.css';



const isEmpty=value=>value.trim()==='';
const isFiveChars=value=>value.trim().length===5;

const CheckOut = (props) => {
const [formValidity,setFormValidity]=useState({
  name:true,
  street:true,
  city:true,
  postalCode:true
  
});

const nameInputRef=useRef();
const streetInputRef = useRef();
const postalCodeInputRef = useRef();
const cityInputRef = useRef();
    //submmit handler function
const HandleSubmit=(event)=>{
  event.preventDefault();
  const enteredName = nameInputRef.current.value;
  const enteredStreet = streetInputRef.current.value;
  const enteredPosalCode = postalCodeInputRef.current.value;
  const enteredCity = cityInputRef.current.value;

  const enteredNameIsValid = !isEmpty(enteredName);
  const enteredStreetIsValid = !isEmpty(enteredStreet);
  const enteredCityIsValid = !isEmpty(enteredCity);
  const enteredPostalCodeIsValid = isFiveChars(enteredPosalCode);

setFormValidity({
  name: enteredNameIsValid,
  street: enteredStreetIsValid,
  city: enteredCityIsValid,
  postalCode: enteredPostalCodeIsValid,
});


  const formIsValid =
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid;

    if(!formIsValid){
      return ;
    }
   props.onConfirm({
    name:enteredName,
    street:enteredStreet,
    city:enteredCity,
    postalCode:enteredPosalCode
   });
}

  return (
    <form onSubmit={HandleSubmit}>
      <div className="checkoutforms">
        <div className="control">
          <label htmlFor="name">your name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formValidity.name && <p>Please enter valid name</p>}
        </div>
        <div className="control">
          <label htmlFor="street">street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formValidity.street && <p>Please enter valid street</p>}
        </div>
        <div className="control">
          <label htmlFor="postal">Postal code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
          {!formValidity.postalCode && (
            <p>Please enter valid postal code(5 characters long)</p>
          )}
        </div>
        <div className="control">
          <label htmlFor="city">city </label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formValidity.city && <p>Please enter valid city</p>}
        </div>
        <div className="buttons">
          <button className="cancel-btn" type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </form>
  );
}

export default CheckOut;



