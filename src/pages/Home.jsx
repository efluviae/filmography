import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { useMovieContext } from "../context/useMovieContext";
import "../styles/Home.css";

const Home = () => {
  const { movies, error, loading } = useMovieContext();

  return (
    <>
      <SearchBar />
      <div className="home">
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
