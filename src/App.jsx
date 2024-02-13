import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
 


function App() {
//  useState declares a "state variable" called foods in this case.
// The only argument we pass to the useState() hook is the initial state
// the useState returns the current state and a function for updating it
 const [foods, setFoods] = useState(foodsJson);
 
// Delete Food
  const deleteFood = foodId => {
  const filteredFoods = foods.filter(food => {
    return food.id !== foodId;
  });
  setFoods(filteredFoods);
 };

// Add New Food
const addNewFood = newFood => {
  const updateFood = [...foods, newFood];
  setFoods(updateFood);
};


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => (
      <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      // pass the deleteFood function as a prop to the FoodBox component
    ))}
      <AddFoodForm addFood={addNewFood} />

    </div>
  );
}

export default App;

// foods - the array of food items
// (<FoodBox key={index} food={food} /> - The callback function creates a new FoodBox component for each food item in the array, passing the food object as prop
