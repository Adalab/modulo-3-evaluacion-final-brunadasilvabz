import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  //console.log(characters);
  const characterElement = characters.map((character) => {
    return (
      <CharacterCard character={character} key={character.id}></CharacterCard>
    );
  });

  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
