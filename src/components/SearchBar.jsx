import { useMovieContext } from "../context/useMovieContext";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, handleSearch } = useMovieContext();
  return (
    <div className="search-bar">
      <form className="search-form container" onSubmit={handleSearch}>
        <button type="submit" className="search-form__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
        <input
          className="search-form__input"
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
