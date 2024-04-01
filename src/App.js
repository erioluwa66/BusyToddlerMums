import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import MealPlan from "./pages/MealPlan/MealPlan.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import Footer from "./components/Footer/Footer.jsx";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails.jsx";
import PasswordSignIn from "./components/PasswordSignIn/PasswordSignIn.jsx";
import SignOutForm from "./components/SignOutForm/SignOutForm.jsx";
import { AuthProvider } from "./contexts/AuthContext"; // Adjust the path as necessary

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/signin" element={<PasswordSignIn />} />
          <Route path="/signout" element={<SignOutForm />} />
          {/* Add more routes as necessary */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
