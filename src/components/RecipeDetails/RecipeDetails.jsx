import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { scaleQuantity } from "../../Utils/Utils";
import "./RecipeDetails.scss";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1); // The scale factor
  const baseUrl = "http://localhost:5050";
  const currentId = Number(id);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/recipes/${currentId}`);
        document.title = `${response.data.recipe_name} | BusyToddlerMum`;
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setLoading(false);
      }
    };

    fetchRecipeById();
  }, [currentId, baseUrl]);

  // Navigate to the previous recipe
  const goToPrevRecipe = () => {
    if (currentId > 1) {
      navigate(`/recipes/${currentId - 1}`);
    }
  };

  // Navigate to the next recipe
  const goToNextRecipe = () => {
    navigate(`/recipes/${currentId + 1}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipe-details">
      <div className="navigation-buttons">
        <button onClick={goToPrevRecipe} disabled={currentId <= 1}>
          Previous Recipe
        </button>
        <button onClick={goToNextRecipe}>Next Recipe</button>
      </div>
      <img src={recipe.image} alt={recipe.recipe_name} />
      <h2>{recipe.recipe_name}</h2>
      <p>Description: {recipe.description}</p>
      <p>Author: {recipe.author}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Servings: {recipe.servings}</p>
      <div className="scale-buttons">
        Scale:
        <button onClick={() => setScale(1)}>1x</button>
        <button onClick={() => setScale(2)}>2x</button>
        <button onClick={() => setScale(3)}>3x</button>
      </div>

      <h3>Ingredients:</h3>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {scaleQuantity(ingredient.quantity, scale)} {ingredient.ingredient}
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
}

export default RecipeDetails;
