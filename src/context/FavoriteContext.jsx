
import { createContext, useState } from 'react';


export const FavoriteContext = createContext();



export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {  
    if (favorites.some(fav => fav.idMeal === recipe.idMeal)) {
    
      setFavorites(favorites.filter(fav => fav.idMeal !== recipe.idMeal));
    } else {

      setFavorites([...favorites, recipe]);
    }
  };

  const isFavorite = (idMeal) => {  
    return favorites.some(fav => fav.idMeal === idMeal);
  };  

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
