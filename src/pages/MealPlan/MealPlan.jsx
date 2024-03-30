import { useEffect, useState } from "react";
import axios from "axios";
import "./MealPlan.scss"; // Ensure this is the correct path

const MealPlan = () => {
  const [mealPlans, setMealPlans] = useState([]);

  const handleGenerateMealPlan = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/meal-plan"); // Use the actual endpoint
      // Transform the object into an array of objects for each day of the week
      const plans = Object.keys(response.data).map((day) => ({
        day: day,
        ...response.data[day],
      }));
      setMealPlans(plans);
    } catch (error) {
      console.error(error);
    }
  };

  // Assume this effect is used to fetch the meal plan on component mount
  useEffect(() => {
    handleGenerateMealPlan();
  }, []);

  return (
    <div className="meal-plan-container">
      {mealPlans.map((plan, index) => (
        <div key={index} className={`meal-plan-card ${plan.day.toLowerCase()}`}>
          <h2>{plan.day}</h2>
          <p>
            <strong>Breakfast:</strong> {plan.breakfast}
          </p>
          <p>
            <strong>Lunch:</strong> {plan.lunch}
          </p>
          <p>
            <strong>Dinner:</strong> {plan.dinner}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;
