import { useEffect, useState } from "react";
import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import "../styles/App.scss";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      //console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);

  return (
    <div className="App">
      <header></header>
      <main>
        <CharacterList characters={dataCharacter}></CharacterList>
      </main>
    </div>
  );
}

export default App;
