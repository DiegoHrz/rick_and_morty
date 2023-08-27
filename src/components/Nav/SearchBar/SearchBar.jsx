import {useState} from "react";
import './SearchBar.css';


export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
