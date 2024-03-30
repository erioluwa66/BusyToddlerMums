import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipeList.scss";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]); // Store all recipes for resetting filters
  const [cuisines, setCuisines] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:5050";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/recipes`);
        setAllRecipes(response.data); // Store all recipes
        setRecipes(response.data);

        const uniqueCuisines = [
          ...new Set(response.data.map((recipe) => recipe.cuisine)),
        ];
        const uniqueCourses = [
          ...new Set(response.data.map((recipe) => recipe.course)),
        ];
        setCuisines(uniqueCuisines);
        setCourses(uniqueCourses);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes based on selected cuisine and course
    const filteredRecipes = allRecipes.filter((recipe) => {
      return (
        (selectedCuisine ? recipe.cuisine === selectedCuisine : true) &&
        (selectedCourse ? recipe.course === selectedCourse : true)
      );
    });
    setRecipes(filteredRecipes);
  }, [selectedCuisine, selectedCourse, allRecipes]);

  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`);
  };
  // Handler for course checkbox change
  const handleCuisineChange = (e, cuisine) => {
    setSelectedCuisine(cuisine === selectedCuisine ? "" : cuisine);
  };

  const handleCourseChange = (e, course) => {
    setSelectedCourse(course === selectedCourse ? "" : course);
  };
  
  return (
    <div className="content-container">
      <div className="filters">
        {/* Courses */}
        <h2>Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCourse === course}
                  onChange={(e) => handleCourseChange(e, course)}
                />
                <span>{course}</span>
              </label>
            </li>
          ))}
        </ul>
        {/* Cuisines */}
        <h2>Cuisines</h2>
        <ul>
          {cuisines.map((cuisine, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCuisine === cuisine}
                  onChange={(e) => handleCuisineChange(e, cuisine)}
                />
                <span>{cuisine}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            onClick={() => handleRecipeClick(recipe.id)}
          >
            <img src={recipe.image} alt={recipe.recipe_name} />
            <h3>{recipe.recipe_name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
