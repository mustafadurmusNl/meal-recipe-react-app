
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import { FavoriteProvider } from './context/FavoriteContext'; 
import Home from './pages/Home';
import RecipeDetail from './components/RecipeDetail';
import FavoritePage from './pages/FavoritePage'; 
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage'; 
import TodaysSpecial from './components/TodaysSpecial';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <RecipeProvider>
        <FavoriteProvider> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/todays-special" element={<TodaysSpecial />} /> 
          </Routes>
          <Footer />
        </FavoriteProvider>
      </RecipeProvider>
    </Router>
  );
}

export default App;
