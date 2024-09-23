# Meal Recipe App

Welcome to the **Meal Recipe App**! This web application helps users search, view, and favorite meal recipes from a large database of recipes, sourced from [TheMealDB](https://www.themealdb.com). The app is built using React, leverages the Context API for state management, and provides a smooth, user-friendly experience for discovering new meals.

You can view the deployed application [here](https://durmus-meal-recipe.netlify.app/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Core Logic Overview](#core-logic-overview)
- [API Integration](#api-integration)
- [File Structure](#file-structure)
- [Future Improvements](#future-improvements)

## Features

### 1. **Browse Recipes**
   - The app displays a wide selection of meal recipes on the home page, fetched from [TheMealDB](https://www.themealdb.com).
   - Recipes are presented in a grid layout with images and basic details.
   
### 2. **Search Functionality**
   - The app includes a search bar that allows users to find recipes by name or ingredients.
   - Search results are dynamically filtered and displayed.

### 3. **Recipe Details**
   - Clicking on any recipe card will take users to the detailed recipe page.
   - Recipe details include the meal name, category, instructions, ingredients, and an image.

### 4. **Favorites**
   - Users can mark their favorite recipes by clicking on the heart icon on the recipe card.
   - A separate **Favorites Page** allows users to view and manage all their favorited recipes.
   - The favorite status is handled globally using the React Context API.

### 5. **Debounced Search**
   - The search bar features a debounce mechanism, which waits for the user to finish typing before executing the search query. This improves performance by reducing unnecessary API calls.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For client-side routing to navigate between pages.
- **Context API**: For global state management of recipes and favorites.
- **Axios**: For making HTTP requests to the recipe API.
- **Netlify**: Deployment of the app for public use.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/meal-recipe-app.git
