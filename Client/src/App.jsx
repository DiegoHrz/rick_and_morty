import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import './App.css';

function App() {

   const [ characters, setCharacters ] = useState([]); // [ estado, functión ]
   
   const navigate = useNavigate(); // path actual y redirige!!!
   // console.log(navigate);
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         const { data } = await axios(URL + `?email=${email}&password=${password}`); //* { access: true }
         setAccess(data.access);
         data.access && navigate('/home');
         if(!data.access) alert("No Access!!!")
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      !access && navigate('/'); //! Ingresar a /home
   }, [access]);

   const location = useLocation();
   // console.log(location.pathname);

   async function onSearch(id) {
      const charById = characters.filter(char => char.id === Number(id)); //* [] || [{...}]
      if(charById.length) return alert("The character alredy exists!!!");
      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         alert(error);
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   // characters = [ {id:1}, {id:3} ]
   // id = 2

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} />
            // "/"   false => X
            //  "/algoMas..." true => Evaluar la segunda parte
         }
         <Routes >
            <Route
               path="/"
               element={<Form login={login} />}
            />
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} />}
            />
            <Route
               path="*"
               element={<About />}
            />
         </Routes>
         
      </div>
   );
}

export default App;