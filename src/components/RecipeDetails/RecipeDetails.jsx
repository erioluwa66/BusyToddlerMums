// components/RecipeDetails.js
import "./RecipeDetails.scss"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertToFraction, scaleQuantity } from '../../Utils/Utils' // Assume you have
import axios from "axios";

function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1); // The scale factor
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

  
  const scaleRecipe = (factor) => {
    setScale(factor);
  };

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
      <div className="scale-buttons">
        <button
          onClick={() => scaleRecipe(1)}
          className={scale === 1 ? "active" : ""}
        >
          1x
        </button>
        <button
          onClick={() => scaleRecipe(1.5)}
          className={scale === 1.5 ? "active" : ""}
        >
          2x
        </button>
        <button
          onClick={() => scaleRecipe(3)}
          className={scale === 3 ? "active" : ""}
        >
          3x
        </button>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {convertToFraction(scaleQuantity(ingredient.quantity, scale))}{" "}
            {ingredient.ingredient}
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