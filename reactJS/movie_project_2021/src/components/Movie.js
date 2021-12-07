import PropTypes from "prop-types";

const Movie = ({ key, coverImg, title, url, title_long, summary, genres }) => {
  return (
    <div key={key} style={{ listStyle: "none" }}>
      <img alt={title} src={`${coverImg}`} />
      <h3>
        <a href={url}>{title_long}</a>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;