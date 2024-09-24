import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { getRecipes } from "../services/recipeService";
import "../css/Home.css";
import recipeBackground from "../images/recipe-background.jpg";
import { useRecipeContext } from "../hooks/useRecipeContext";

function Home() {
  const { recipes, setRecipes } = useRecipeContext();

  const [error, setError] = useState(null); // State for handling errors
  const [loading, setLoading] = useState(true); // State for loading
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const recipesPerPage = 8; // Number of recipes per page
  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes. Please try again.");
        setLoading(false);
      });
  }, []);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Calculate total number of pages
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="home-page">
      <img
        src={recipeBackground}
        alt="recipe-background"
        className="recipe-background"
      />
      <SearchBar />

      <div className="recipe-list">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
