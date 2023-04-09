import { useState} from 'react';
import Header from './components/layout/Header';
import './App.css';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';



function App() {
 const [isCartClicked,setCartClicked]= useState(false);

 const ShowCart=()=>{
  setCartClicked(true);
 }
 const HideCart = () => {
   setCartClicked(false);
 };
  return (
    <CartProvider className="App">
      <Header onShow={ShowCart} />
      {isCartClicked && <Cart onNotShow={HideCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
