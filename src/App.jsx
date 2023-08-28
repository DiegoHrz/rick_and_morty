import {useState} from "react";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {Routes, Route} from 'react-router-dom';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import ErrorPage from "./views/ErrorPage.jsx";

import "./App.css";

// const example = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     gender: "Male",
//     origin: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   },
// ];

function App() {
  const [characters, setCharacters] = useState([]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  function searchHandler(id) {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-hx-gcamey`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      <div>
      <Nav onSearch={searchHandler} randomize={randomHandler} />
        <Routes>
          <Route path='/home' 
            element={
            <Cards characters={characters} onClose={closeHandler} />
            } 
          />
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:id'element={<Detail/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
