// components/RecipeDetails.js
import "./RecipeDetails.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetails = ({ match }) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/recipes/${id}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{recipe.recipe_name}</h2>
      <p>Description: {recipe.description}</p>
      <p>Author: {recipe.author}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Servings: {recipe.servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <h3>Notes:</h3>
      <p>{recipe.notes}</p>
      <h3>Nutrition:</h3>
      <p>{recipe.nutrition}</p>
    </div>
  );
};

export default RecipeDetails;
