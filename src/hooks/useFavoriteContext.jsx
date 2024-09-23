
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

export function useFavoriteContext() { 
  return useContext(FavoriteContext);
}
