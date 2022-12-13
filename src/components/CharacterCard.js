import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log(props);
  return (
    <li>
      {/* // <li key={props.character.id}> */}
      <Link to={`/CharacterDetail/${props.character.id}`}>
        <img
          className=""
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
