//--------------IMPORTS--------------
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

import "../styles/App.scss";
import Header from "./Header";
import logo from "../images/Rick-And-Morty-Logo1.png";

function App() {
  //--------------VARIABLES ESTADO--------------
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterBySpecies, setFilterBySpecies] = useState("all");

  //--------------USE EFFECT--------------

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  //--------------FUNCIONES HANDLER--------------

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFilterName = (value) => {
    //para modificar la variable de estado
    setFilterByName(value);
  };

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };

  //--------------FUNCIÓN DE FILTRADO Y ORGANIZACIÓN--------------

  const filteredCharacters = () => {
    return dataCharacter
      .sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      .filter((eachCharacter) =>
        eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
      )

      .filter((eachCharacter) => {
        return filterBySpecies === "all"
          ? true
          : eachCharacter.species.toLowerCase() === filterBySpecies;
      });
  };

  //--------------MENSAJE DE ERROR--------------

  const errorMsg =
    filteredCharacters().length === 0 ? <p>Character not found</p> : null;

  //--------------FUNCIONES PARA EL PATH--------------

  const { pathname } = useLocation();
  const dataUrl = matchPath("/CharacterDetail/:characterId", pathname);
  const characterId = dataUrl != null ? dataUrl.params.characterId : null;

  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );

  //--------------HTML--------------

  return (
    <div className="App">
      <Header logo={logo}></Header>

      <main className="main">
        <h1 className="title">Find your favorite character</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  errorMsg={errorMsg}
                  characters={filteredCharacters(dataCharacter)}
                  handleFilterSpecies={handleFilterSpecies}
                  handleSubmit={handleSubmit}
                  FilterByName={filterByName}
                  handleFilterName={handleFilterName}
                  characterFound={characterFound}
                ></Filters>
                <CharacterList
                  characters={filteredCharacters(dataCharacter)}
                ></CharacterList>
              </>
            }
          ></Route>
          <Route
            path="/CharacterDetail/:characterId"
            element={
              <CharacterDetail character={characterFound}></CharacterDetail>
            }
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
