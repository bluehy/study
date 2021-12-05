import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      <h1>High Score Movie</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies
            ? movies.map((movie) => (
                <Movie
                  key={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  url={movie.url}
                  title_long={movie.title_long}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default App;
