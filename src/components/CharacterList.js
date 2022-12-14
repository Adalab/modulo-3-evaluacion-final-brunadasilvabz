import CharacterCard from "./CharacterCard";
import "../styles/components/CharacterList.scss";

const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => {
    return (
      <CharacterCard character={character} key={character.id}></CharacterCard>
    );
  });

  return (
    <section className="list_section">
      <ul className="list_section--element">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
