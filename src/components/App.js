import { useEffect, useState } from "react";
import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import "../styles/App.scss";
import Filters from "./Filters";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      //console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    //para modificar la variable de estado
    setFilterByName(value);
  };

  const filteredCharacters = () => {
    return dataCharacter.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
    );
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

  // const { pathname } = useLocation();
  // //console.log(pathname);

  // const dataUrl = matchPath("/character/:characterId", pathname);
  // console.log(dataUrl);

  // const characterId = dataUrl != null ? dataUrl.params.characterId : null;

  // const characterFound = dataCharacter.find(
  //   (character) => character.id === parseInt(characterId)
  // );
  // //console.log(characterId);

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
                  filterByName={filterByName}
                  handleFilterName={handleFilterName}
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
