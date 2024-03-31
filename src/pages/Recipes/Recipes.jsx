import './Recipes.scss';
import RecipeList from "../../components/RecipeList/RecipeList";


function Recipes() {
 
  return (
    <div className="all-recipe">
      <h2>Recipes</h2>
        <RecipeList />
    </div>
  );
}

export default Recipes;
