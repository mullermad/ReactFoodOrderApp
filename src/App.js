import {Fragment} from 'react';
import Header from './components/layout/Header';
import './App.css';
import Meals from './components/meals/Meals';


function App() {
  return (
    <Fragment className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
