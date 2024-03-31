import heroIllustration from "../../assets/icons/Hero_Illustration.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:5050";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/recipes`);
        setPopularRecipes(response.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching popular recipes: ${error}`);
        setLoading(false);
      }
    };
    fetchPopularRecipes();
  }, []);

  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="hero">
      <div className="hero__top">
        <div className="hero__top--left">
          <h1 className="hero__main-text">
            <span className="hero__main-text--one">Busy</span> <br />
            <span className="hero__main-text--two">Toddler Mum</span>
          </h1>
          <p className="hero__main-text--sub">
            "Discover the joy of stress-free meal planning with BusyToddlerMum.
            Our app offers quick, nutritious recipes tailored for busy parents
            like you. With our 'Fridge to Table' feature, you'll whip up
            delicious meals using what you already have. Say goodbye to mealtime
            struggles and hello to more family moments, all while keeping your
            little ones happy and healthy. Embrace easier mealtimes with
            BusyToddlerMum."
          </p>
          <Link to="/recipes">
            <button className="hero__btn">Get a Recipe</button>
          </Link>
        </div>
        <img
          className="hero__logo"
          src={heroIllustration}
          alt="Hero Illustration"
        />
      </div>
      <div className="hero__bottom">
        <p className="text">Popular Recipes</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="popular-recipes-container">
            {popularRecipes.map((recipe, index) => (
              <div
                key={index}
                className="popular-recipe-item"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.recipe_name}
                  className="popular-recipe-avatar"
                />
                <div className="popular-recipe-info">
                  <p className="popular-recipe-name">{recipe.recipe_name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Home;
