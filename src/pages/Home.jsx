import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";

import { getTrending, getMovies, getSeries } from "../api/tmdb";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState("home");
  const [apiPage, setApiPage] = useState(1);

  const loadData = async () => {

    let res;

    if (page === "home" || page === "trending") {
      res = await getTrending(apiPage);
    }

    if (page === "movies") {
      res = await getMovies(apiPage);
    }

    if (page === "series") {
      res = await getSeries(apiPage);
    }

    if (res) {
      setMovies(prev => [...prev, ...res.data.results]);
    }

  };

  useEffect(() => {
    loadData();
  }, [apiPage, page]);


  useEffect(() => {
    setMovies([]);
    setApiPage(1);
  }, [page]);

  useInfiniteScroll(() => {
    setApiPage(prev => prev + 1);
  });

  return (
    <div>

      <Navbar setPage={setPage} />

      {page === "search" && (
        <SearchBar setMovies={setMovies} />
      )}

      {page !== "search" && <Hero />}

      <MovieGrid
        movies={movies}
        openModal={setSelectedMovie}
      />

      <MovieModal
        movie={selectedMovie}
        close={() => setSelectedMovie(null)}
      />

    </div>
  );

};

export default Home;