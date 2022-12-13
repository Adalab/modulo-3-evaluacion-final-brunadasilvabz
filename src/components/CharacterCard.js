import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log(props);
  return (
    <li className="listElement">
      {/* // <li key={props.character.id}> */}
      <Link to={`/CharacterDetail/${props.character.id}`}>
        <img
          className="listElement--img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className="listElement--div">
          <h4 className="listElement__div--name">{props.character.name}</h4>
          <p className="listElement__div--text">{props.character.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
