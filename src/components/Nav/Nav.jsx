import SearchBar from "./SearchBar/SearchBar";
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav({onSearch, randomize}) {
  return (
    <div className="nav">
      <Link to='./about'><button>About</button></Link>
      <Link to='./home'><button>Home</button></Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
      
    </div>
  );
}

export default Nav;
