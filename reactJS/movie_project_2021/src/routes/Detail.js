import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  // console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
    console.log(movie);
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <p>Detail Page about movie no.{id}</p>
          <h1>{movie.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
