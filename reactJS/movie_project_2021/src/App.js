import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies);

  return (
    <div>
      <h1>High Score Movie</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {movies
            ? movies.map((movie) => (
                <li key={movie.id}>
                  {movie.title} 🌟{movie.rating}
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}

export default App;
