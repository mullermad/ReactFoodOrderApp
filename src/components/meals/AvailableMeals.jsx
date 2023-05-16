import {useEffect,useState} from 'react';

import './Availablemeals.css'
import MealItem from './MealItem/MealItem';




const AvailableMeals = () => {
const [meals, setMeals] = useState([]);
const [isLoading,setIsloading]=useState(true);
const [isError,setIserror]=useState();

useEffect( () => {
  const FetchMeals = async () => {
    const response = await fetch(
      "https://muller-notes-default-rtdb.firebaseio.com/meals.json"
    );
    if(!response.ok){
      throw new Error('somethign went wrong!');
    }
    
    const responseData = await response.json();

    //parse to array from objects

    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        discription: responseData[key].discription,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
    setIsloading(false);
  };
  
FetchMeals().catch((err)=>{
setIsloading(false);
 setIserror(err.message)
});
  
  
  
}, []);

if(isLoading){
  return <section className='isLoading'>
    Loading...
  </section>
}

if (isError) {
  return <section className="mealError">
    <p>{isError}</p>
  </section>;
}
// 
      const MealList = meals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            discription={meal.discription}
            price={meal.price}
          />
        );
      });
  return (
    <section className="Availablemeals">
     
        <ul>{MealList}</ul>
      
    </section>
  );
}

export default AvailableMeals;