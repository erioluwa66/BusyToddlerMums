// pages/MealPlan.jsx
// import React, { useState } from "react";

// MealPlan.js
import  { useState } from 'react';
import axios from 'axios';
import './MealPlan.scss'; // Your CSS file for styling

const MealPlan = () => {
  const [ingredients, setIngredients] = useState('');
  const [mealPlans, setMealPlans] = useState([]);

  const handleGenerateMealPlan = async () => {
    try {
      const response = await axios.post('/generate-meal-plan', { ingredients });
      setMealPlans([...mealPlans, response.data]);
      setIngredients('');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSavedMealPlans = async () => {
    try {
      const response = await axios.get('/saved-meal-plans');
      setMealPlans(response.data);
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
      <button onClick={fetchSavedMealPlans}>Show Saved Meal Plans</button>
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
