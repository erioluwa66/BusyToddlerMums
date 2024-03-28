import './Recipes.scss';
import RecipeList from "../../components/RecipeList/RecipeList";
import { Link } from 'react-router-dom';

function Recipes() {
  return (
    <div>
      <h1>Recipes</h1>
      <Link to="/recipes/:id">
        <RecipeList />
      </Link>
    </div>
  );
}

export default Recipes;
