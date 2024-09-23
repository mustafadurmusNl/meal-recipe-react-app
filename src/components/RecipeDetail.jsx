import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipeById } from '../services/recipeService';
import '../css/RecipeDetail.css';
import recipeBackground from '../images/recipe-background.jpg';
function RecipeDetail() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (id) {
      setLoading(true);
      getRecipeById(id)
        .then(data => {
          if (data && data.meals && data.meals.length > 0) {
            setRecipe(data.meals[0]);
          } else {
            setRecipe(null); 
          }
        })
        .catch(error => {
          console.error('Error fetching recipe:', error);
          setRecipe(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);
  if (loading) return <div>Loading...</div>;

  if (!recipe) return <div>Recipe not found</div>;


  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} (${measure})`);
    }
  }

  return (
    <div className='recipe-details'>
      <img src={recipeBackground} alt='recipe-background' className='recipe-background' />
      <h1>{recipe.strMeal}</h1>
      <div className="recipe-content">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        <p className="recipe-instructions">{recipe.strInstructions}</p>
        <ul>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetail;
