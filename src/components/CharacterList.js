import CharacterCard from "./CharacterCard";

const CharacterList = (characters) => {
  const characterElement = characters.map((character) => {
    return <CharacterCard characters={characters}></CharacterCard>;
  });

  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
