const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">CINESTREAM</h1>

      <ul className="menu">
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("movies")}>Movies</li>
        <li onClick={() => setPage("series")}>TV Series</li>
        <li onClick={() => setPage("trending")}>Trending</li>
        <li onClick={() => setPage("search")}>Search</li>
      </ul>
    </nav>
  );
};

export default Navbar;