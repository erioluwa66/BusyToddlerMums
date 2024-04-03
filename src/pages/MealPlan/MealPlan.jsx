import React, { useState } from "react";
import axios from "axios";
import "./MealPlan.scss";

const MealPlan = () => {
  const [ingredients, setIngredients] = useState("");
  const [mealPlans, setMealPlans] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateMealPlan = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5050/api/meal-plan", {
        ingredients: ingredients.split(",").map((item) => item.trim()),
      });
      const days = response.data.message.split("\n\n").filter(Boolean);
      const formattedPlans = days.map((dayPlan) => {
        const [day, ...meals] = dayPlan.split("\n");
        return { day: day.trim(), meals: meals };
      });
      setMealPlans(formattedPlans);
      setLoading(false);
    } catch (err) {
      setError("An error occurred while processing your request");
      console.error(err);
      setLoading(false);
    }
    setIngredients("");
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
          disabled={loading}
        />
        <button onClick={handleGenerateMealPlan} disabled={loading}>
          {loading ? "Loading..." : "Generate Meal Plan"}
        </button>
      </div>
      {loading && <div className="loader"></div>}
      {error && <div className="error-message">{error}</div>}
      <div className="meal-plans-display">
        {mealPlans.map((plan, index) => (
          <div
            key={index}
            className={`meal-plan-card ${plan.day.toLowerCase()}`}
          >
            <h2 className={`day-title ${plan.day.trim().toLowerCase()}-title`}>
              {plan.day}
            </h2>
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
