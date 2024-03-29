import heroIllustration from "../../assets/icons/Hero_Illustration.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import bluecupcake from "../../assets/icons/Frame_blue.svg";
// import pinkcupcake from "../../assets/icons/Frame_pink.svg";
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
      {/* <img className="hero_icon pink" src={pinkcupcake} alt="Pink Cupcake" /> */}
      <div className="hero__top">
        <div className="hero__top--left">
          <h1 className="hero__main-text">
            <span className="hero__main-text--one">Busy</span> <br />
            <span className="hero__main-text--two">Toddler Mum</span>
          </h1>
          <p className="hero__main-text--sub">
            Mia, a whirlwind mom juggling work and rambunctious twins, dreaded
            mealtimes. BusyToddlerMum, a web app became her hero. This app
            offered delicious, toddler-approved recipes, a magic filter to find
            meals based on what's already in the fridge, and personalized meal
            plans for stress-free prep. With BusyToddlerMum, Mia saved time,
            enjoyed cooking again, and created happy mealtime memories with her
            family. Let BusyToddlerMum be your hero too!
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
      {/* <img className="hero_icon blue" src={bluecupcake} alt="Blue Cupcake" /> */}
    </div>
  );
}

export default Home;
