//--------------IMPORTS--------------
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

import "../styles/App.scss";

function App() {
  //--------------VARIABLES ESTADO--------------
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterBySpecies, setFilterBySpecies] = useState("all");
  //--------------USE EFFECT--------------

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      //console.log(cleanData);
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
          : eachCharacter.species === filterBySpecies;
      });
  };

  //primer paso
  // const url = useLocation();
  // console.log(url); //hasta aquí bien

  //segundo paso
  const { pathname } = useLocation();
  //console.log(pathname); //al aplicar el destructuring también sigue funcionando

  //tercer paso - sacar la parte variable usando matchpath
  const dataUrl = matchPath("/CharacterDetail/:characterId", pathname);
  //console.log(dataUrl); //NULL -- mentira ahora funciona!!! tenía la ruta distinta a como la tenía en characterdetails!!!!

  const characterId = dataUrl != null ? dataUrl.params.characterId : null;

  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );
  //console.log(characterId);

  //FILTRO DE ESPECIE

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };

  //--------------HTML--------------

  return (
    <div className="App">
      <header></header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterSpecies={handleFilterSpecies}
                  handleSubmit={handleSubmit}
                  filterByName={filterByName}
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
