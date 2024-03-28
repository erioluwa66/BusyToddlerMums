// components/RecipeDetails.js
import "./RecipeDetails.scss"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:5050";

  useEffect(() => {
    const fetchRecipebyId = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/recipes/${Number(params.id)}`
        );
        document.title = `${response.data.recipe_name} | busytoddlermum`;
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(`error: ${error}`);
      }
    };

    fetchRecipebyId();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipe-details">
      <img src={recipe.image} alt={recipe.recipe_name} />
      <h2>{recipe.recipe_name}</h2>
      <p>Description: {recipe.description}</p>
      <p>Author: {recipe.author}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Servings: {recipe.servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.ingredient} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <h3>Notes:</h3>
      <p>{recipe.notes}</p>
      <h3>Nutrition:</h3>
      <p>
        Nutrition:{" "}
        {Object.entries(recipe.nutrition).map(([key, value]) => (
          <span key={key}>
            {key}: {value}&nbsp;
          </span>
        ))}
      </p>
    </div>
  );
};

export default RecipeDetails;