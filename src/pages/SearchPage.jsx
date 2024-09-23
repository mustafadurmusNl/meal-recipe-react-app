
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard'; 
import { useRecipeContext } from '../hooks/useRecipeContext';
import '../css/SearchPage.css'; 
const SearchPage = () => {
  const { recipes } = useRecipeContext(); 
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';

  
  const filteredRecipes = recipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(query) ||
    recipe.strInstructions.toLowerCase().includes(query)
  );

  return (
    <div className="search-page">
     <h1>{`Search Results for "${query}"`}</h1>

      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
            <p>{`No recipes found for ${query}`}</p>

        )}
      </div>
    </div>
  );
};

export default SearchPage; 
