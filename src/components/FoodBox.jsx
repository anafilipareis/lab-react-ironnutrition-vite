// Your code here


function FoodBox({food}){
    return (
        <div>
            <p>{food.name}</p>

            <img src={food.image} style={{ maxWidth: '300px', maxHeight: '300px' }}/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
            <b>Total Calories: {food.servings} * {food.calories} </b> kcal
            </p>
            {/* Call onDelete function when the button is clicked */}
            <button onClick={() => onDelete(food.id)}>Delete</button>
            {/* needs to modify the button element to call a function passed as a prop from the parent component (App.js) */}
        </div>
    );
}

export default FoodBox;