import { useState, useEffect } from "react";
import api from "../api/tmdb";

const MovieModal = ({ movie, close }) => {

  const [trailer, setTrailer] = useState(null);

  useEffect(() => {

    if (!movie) return;

    const fetchTrailer = async () => {

      const type = movie.media_type === "tv" ? "tv" : "movie";

      const res = await api.get(`/${type}/${movie.id}/videos`);

      const trailerVideo = res.data.results.find(
        vid => vid.type === "Trailer"
      );

      if (trailerVideo) {
        setTrailer(trailerVideo.key);
      }

    };

    fetchTrailer();

  }, [movie]);

  if (!movie) return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <button onClick={close}>X</button>

        <h2>{movie.title || movie.name}</h2>

        <p>{movie.overview}</p>

        {trailer && (

          <iframe
            width="100%"
            height="420"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="Trailer"
            allowFullScreen
          />

        )}

      </div>

    </div>
  );

};

export default MovieModal;