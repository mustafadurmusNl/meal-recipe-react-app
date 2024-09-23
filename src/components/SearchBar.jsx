import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SearchBar.css';
function SearchBar() {

  
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  
  const timeoutRef = useRef(null);  
  


  useEffect(() => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); 
    }


    timeoutRef.current = setTimeout(() => {
      if (query.trim()) {
        navigate(`/search?query=${query.trim()}`);
      }
    }, 2000);

    return () => clearTimeout(timeoutRef.current);
  }, [query, navigate]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (query.trim()) {
        navigate(`/search?query=${query.trim()}`);
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="search-input"
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="search-button" onClick={() => {
        if (query.trim()) {
          navigate(`/search?query=${query.trim()}`);
        }
      }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
