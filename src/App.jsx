import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from 'react';
 


function App() {
 const [items, setItems] = useState(foodsJson)

//  useState declares a "state variable" called item in this case.
// The only argument we pass to the useState() hook is the initial state
// the useState returns the current state and a function for updating it

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
