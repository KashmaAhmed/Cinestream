import { useState } from "react";
import { searchMovies } from "../api/tmdb";

const SearchBar = ({ setMovies }) => {

  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {

    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setMovies([]);
      return;
    }

    const res = await searchMovies(value);

    const filtered = res.data.results.filter(
      item => item.media_type === "movie" || item.media_type === "tv"
    );

    setMovies(filtered);

  };

  return (
    <div className="search-container">

      <input
        className="search-input"
        type="text"
        placeholder="Search Movies or Series..."
        value={query}
        onChange={handleSearch}
      />

    </div>
  );

};

export default SearchBar;