import { useEffect, useState } from "react";
import { fetchRandomRecipe } from "../services/recipeService"; // Adjust the path based on your project structure
import RecipeCard from "../components/RecipeCard"; // Assuming you have a RecipeCard component
import "../css/TodaysSpecial.css";
function TodaysSpecial() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRandomRecipe = async () => {
      try {
        const randomRecipe = await fetchRandomRecipe();
        setRecipe(randomRecipe);
      } catch (error) {
        console.error("Failed to fetch random recipe:", error);
        // You could also set an error state and show an error message here.
      }
    };

    getRandomRecipe();
  }, []);

  return (
    <div className="todays-special">
      <h1>{`Today's Special`}</h1>

      {recipe ? (
        <RecipeCard recipe={recipe} /> // Display the recipe card
      ) : (
        <p>Loading...</p> // Loading state
      )}
    </div>
  );
}

export default TodaysSpecial;
