// MealPlan.js
import React, { useState } from "react";
import axios from "axios";
import "./MealPlan.scss"; // Ensure your SCSS file is updated accordingly

const MealPlan = () => {
  const [ingredients, setIngredients] = useState("");
  const [mealPlans, setMealPlans] = useState([]);
  const [error, setError] = useState("");

  const handleGenerateMealPlan = async () => {
    try {
      const response = await axios.post("http://localhost:5050/api/meal-plan", {
        ingredients: ingredients.split(",").map((item) => item.trim()),
      });

      // Split the meal plan text by each day
      const days = response.data.message.split("\n\n").filter(Boolean);
      const formattedPlans = days.map((dayPlan) => {
        const [day, ...meals] = dayPlan.split("\n");
        return { day: day.trim(), meals: meals };
      });

      setMealPlans(formattedPlans);
      setIngredients("");
      setError("");
    } catch (err) {
      setError("An error occurred while processing your request");
      console.error(err);
    }
  };

  return (
    <div className="meal-plan-container">
      <h1 className="title">Weekly Meal Planner</h1>
      <div className="input-group">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients separated by commas"
        />
        <button onClick={handleGenerateMealPlan}>Generate Meal Plan</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="meal-plans-display">
        {mealPlans.map((plan, index) => (
          <div key={index} className="meal-plan-card">
            <h2>{plan.day}</h2>
            {plan.meals.map((meal, mealIndex) => (
              <p key={mealIndex}>{meal}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;