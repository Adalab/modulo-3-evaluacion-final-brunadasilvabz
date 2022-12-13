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
  return (
    <div className="App">
      <header></header>
      <main>
        <Filters handleFilterName={handleFilterName}></Filters>
        <CharacterList characters={dataCharacter}></CharacterList>
      </main>
    </div>
  );
}

export default App;
