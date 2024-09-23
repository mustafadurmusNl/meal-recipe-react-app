import { Link } from "react-router-dom";
import "../css/RecipeCard.css";
import { useFavoriteRecipes } from "../hooks/useFavoriteRecipes";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function RecipeCard({ recipe }) {
  const { isFavorite, toggleFavorite } = useFavoriteRecipes(); 

  return (
    <div className="recipe-card">
    
     
      <button
        className="favorite-button"
        onClick={() => toggleFavorite(recipe)}
      >
        {isFavorite(recipe.idMeal) ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
      <Link to={`/recipe/${recipe.idMeal}`} className="card-image">
      <img
        className="recipe-card-image"
        src={recipe.strMealThumb || "https://via.placeholder.com/150"}
        alt={recipe.strArea}
      />
        </Link>
      
      <div className="recipe-card-content">
        <h2 className="recipe-card-title">{recipe.strMeal}</h2>
        <p className="recipe-card-description">
          {recipe.strArea || "No description available"}
        </p>
        <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
