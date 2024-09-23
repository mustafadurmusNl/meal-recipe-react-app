import  {useState, useEffect } from "react";
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
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} /> 
        ))}
      </div>
    </div>
  );
}

export default Home;
