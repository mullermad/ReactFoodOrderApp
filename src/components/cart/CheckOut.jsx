
import './Checkout.css';
const CheckOut = (props) => {
  return (
    <form>
      <div className="control">
        <label htmlFor="name">your name</label>
        <input type="text" id="name" />
      </div>
      <div className="control">
        <label htmlFor="street">street</label>
        <input type="text" id="street" />
      </div>
      <div className="control">
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div className="control">
        <label htmlFor="city">city </label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}

export default CheckOut;