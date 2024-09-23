import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export function useRecipeContext() { 
  return useContext(RecipeContext); 
}
