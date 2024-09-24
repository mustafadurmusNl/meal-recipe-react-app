

import RecipeCard from '../components/RecipeCard'; 
import '../css/FavoritePage.css';  
import recipeBackground from '../images/recipe-background.jpg';  
import { useFavoriteContext } from '../hooks/useFavoriteContext';
function FavoritePage() {
  const { favorites } = useFavoriteContext();  

  return (
    <div className='favorite-page'>
      <img src={recipeBackground} alt='recipe-background' className='recipe-background' />
      <h1>Favorite Recipes</h1>
      {favorites && favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
