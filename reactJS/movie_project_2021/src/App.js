import { useState, useEffect } from "react";

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
                <div key={movie.id} style={{ listStyle: "none" }}>
                  <img alt={movie.title} src={`${movie.medium_cover_image}`} />
                  <h3>
                    <a href={movie.url}>{movie.title_long}</a>
                  </h3>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default App;
