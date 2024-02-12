import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
 


function App() {
 const [foods, setFoods] = useState(foodsJson)

//  useState declares a "state variable" called foods in this case.
// The only argument we pass to the useState() hook is the initial state
// the useState returns the current state and a function for updating it

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => (
      <FoodBox key={index} food={food} />
    ))}
    </div>
  );
}

export default App;

// foods - the array of food items
// (<FoodBox key={index} food={food} /> - The callback function creates a new FoodBox component for each food item in the array, passing the food object as prop
