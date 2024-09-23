import axios from 'axios';

export async function getRecipes() {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  
  // Check if the response contains meals
  if (!response.data.meals) {
    return []; 
  }
  
  return response.data.meals; 
}

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    
   
    if (!response.data || !response.data.meals || response.data.meals.length === 0) {
      return null; 
    }
    
    return response.data; 
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return null; 
  }
};
