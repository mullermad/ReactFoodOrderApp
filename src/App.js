import {Fragment} from 'react';
import Header from './components/layout/Header';
import './App.css';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Fragment className="App">
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
