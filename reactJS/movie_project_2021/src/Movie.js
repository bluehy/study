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

export default Movie;
