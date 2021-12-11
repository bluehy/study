import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({
  key,
  id,
  coverImg,
  title,
  url,
  title_long,
  summary,
  genres,
}) => {
  return (
    <div key={key} style={{ listStyle: "none" }}>
      <img alt={title} src={`${coverImg}`} />
      <h3>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
