import { Link } from "react-router-dom";
import "../styles/components/CharacterCard.scss";
const CharacterCard = (props) => {
  return (
    <li className="listElement">
      <Link to={`/CharacterDetail/${props.character.id}`}>
        <img
          className="listElement__img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className="listElement__div">
          <h4 className="listElement__div--name">{props.character.name}</h4>
          <p className="listElement__div--text">{props.character.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
