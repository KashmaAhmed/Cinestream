const TMDBImage = ({ path }) => {
  const url = `https://image.tmdb.org/t/p/w500${path}`;

  return <img src={url} alt="poster" />;
};

export default TMDBImage;