import { useEffect, useState } from "react";
import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import "../styles/App.scss";
import Filters from "./Filters";

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

  return (
    <div className="App">
      <header></header>
      <main>
        <Filters
          filterByName={filterByName}
          handleFilterName={handleFilterName}
        ></Filters>
        <CharacterList
          characters={filteredCharacters(dataCharacter)}
        ></CharacterList>
      </main>
    </div>
  );
}

export default App;
