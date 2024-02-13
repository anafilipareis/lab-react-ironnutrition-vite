// Your code here

import { useState } from "react";
 
function AddFoodForm(props) {
  // declare variavle states
  const [name, setName] = useState(""); 
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // Add an onChange event to each input element and create a handler function for each input
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  // Prevent Page Reload. Whitout this: If you click on the submit button, you’ll notice the entire app reloading and starting from scratch. This means that all of the state kept in components is lost, wiped out!
  // To prevent this we have to add an onSubmit event and a handler function to handles the form submission. This way we’ll be able to prevent the default behavior and also access the data that the user entered
  // The function handleSubmit will be called every time the form is submitted. 
  const handleSubmit = (e) => {    
    e.preventDefault(); // we use e.preventDefault() to cancel the default behavior of the form, the page reloads. 
    const newFood = { name, image, calories, servings }; // After preventing the page from reloading, we access the input data stored in the state (state variables name, etc.).
 
    console.log("Submitted: ", newFood);
    // Add addFood --> from App.jsx
    props.addFood(newFood);

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }
 
  return (
    <div className="AddFood">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>  {/*   <== ADD EVENT */}
        <label>Name: </label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput}
        />
        
        <label>Image: </label>
        <input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput}
        />
  
        <label>Calories: </label>
        <input 
            type="number" 
            name="calories" 
            value={calories} 
            onChange={handleCaloriesInput}
        />
  
        <label>Servings: </label>
        <input 
            type="number" 
            name="servings" 
            checked={servings} 
            onChange={handleServingsInput}
        />
        
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
 
export default AddFoodForm;