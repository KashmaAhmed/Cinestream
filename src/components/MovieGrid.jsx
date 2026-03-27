import MovieCard from "./MovieCard";
const MovieGrid = ({ movies = [], openModal }) => {

  return (

    <div className="movie-grid">

      {movies.map((movie) => (

        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={openModal}
        />

      ))}

    </div>

  );

};

export default MovieGrid;