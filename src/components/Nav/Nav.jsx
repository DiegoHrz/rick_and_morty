import SearchBar from "./SearchBar/SearchBar";
import './Nav.css';

function Nav({onSearch, randomize}) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;
