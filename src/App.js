import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import MealPlan from "./pages/MealPlan/MealPlan.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
