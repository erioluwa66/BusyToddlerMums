
// MealPlan.js
import { useState } from "react";
import axios from "axios";
import "./MealPlan.scss"; // Your CSS file for styling

const MealPlan = () => {
  const [ingredients, setIngredients] = useState("");
  const [mealPlans, setMealPlans] = useState([]);

  const handleGenerateMealPlan = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/meal-plan",
        { ingredients: ingredients.split(",").map((item) => item.trim()) } // Split the string into an array
      );
      setMealPlans([...mealPlans, response.data]);
      setIngredients("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="meal-plan-container">
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients separated by commas"
      />
      <button onClick={handleGenerateMealPlan}>Generate Meal Plan</button>
      <div className="meal-plans">
        {mealPlans.map((plan, index) => (
          <div key={index} className="meal-plan">
            <p>{plan.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
