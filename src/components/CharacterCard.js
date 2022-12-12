const CharacterCard = (props) => {
  console.log(props);
  return (
    <li>
      <a href={props.character.id}>
        <img
          className=""
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </a>
    </li>
  );
};

export default CharacterCard;
