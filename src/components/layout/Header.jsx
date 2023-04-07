import  {Fragment} from 'react';
import meal from '../assets/meal.jpg';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="header-button">Cart</button>
      </header>
      <div>
        <img className="header-images" src={meal} alt="mealphoto" />
      </div>
    </Fragment>
  );
}

export default Header;