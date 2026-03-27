import TMDBImage from "./TMDBImage";

const MovieCard = ({ movie, onClick }) => {

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>

      <TMDBImage path={movie.poster_path} />

      <div className="play-overlay">▶</div>

      <h4>{movie.title || movie.name}</h4>

    </div>
  );

};

export default MovieCard;