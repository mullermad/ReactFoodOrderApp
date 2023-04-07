import  {Fragment} from 'react';
import meal from '../assets/meal.jpg';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        
        <HeaderCartButton />
      </header>
      <div>
        <img className="header-images" src={meal} alt="mealphoto" />
      </div>
    </Fragment>
  );
}

export default Header;