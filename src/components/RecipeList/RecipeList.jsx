// components/RecipeList.js
import "./RecipeList.scss"; // Import CSS file for styling
import { useEffect, useState } from "react";
import axios from "axios";


function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/recipes"); // Assuming your backend server is running on the same host
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.recipe_name} />
          <h3>{recipe.recipe_name}</h3>
          <p>{recipe.description}</p>
          {/* Add other recipe details as needed */}
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
