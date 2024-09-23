import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavoriteRecipes } from "../hooks/useFavoriteRecipes"; 
import "../css/Navbar.css";
import logo from "../images/logo.png"; 
import recipeBackground from "../images/recipe-background.jpg"; 
import { useNavigate } from "react-router-dom"; 

function Navbar() {

  const navigate = useNavigate(); 
  const { favorites } = useFavoriteRecipes();

  return (
    <nav className="menu-bar">
      <img
        src={recipeBackground}
        alt="recipe-background"
        className="recipe-background"
      />
    
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} className="home-logo" alt="Home Logo" />
      </div>
   
      <div className="navbar-center">
        <h1 className="welcome-message">
          Welcome to Discover Delicious Recipes!
        </h1>
      </div>

   
      <div className="navbar-right">
        <Link to="/favorites" className="favorites-link">
          <div className="favorite-icon-wrapper">
            Favorites
            <FaHeart className="heart-icon" /> 
           
            {favorites.length > 0 && (
              <div className="favorite-count-circle">{favorites.length}</div>
            )}
          </div>
        </Link>
        <Link to="/">todays special</Link>
     
      </div>
    </nav>
  );
}

export default Navbar;
