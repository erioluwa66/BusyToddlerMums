// components/RecipeList.js
import "./RecipeList.scss"; // Import CSS file for styling
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

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

  //Function to handle click event on recipe card
  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`); // Navigate to the recipe details
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
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