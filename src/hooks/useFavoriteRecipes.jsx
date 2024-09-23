
import { useFavoriteContext } from './useFavoriteContext';

export function useFavoriteRecipes() {
  const { favorites, toggleFavorite, isFavorite } = useFavoriteContext();

  return { favorites, isFavorite, toggleFavorite };
}
