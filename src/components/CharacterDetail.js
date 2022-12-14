import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <article id={props.character.id}>
        <img
          className=""
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <p>{`Status:${props.character.status}`}</p>
        <p>{`Species:${props.character.species}`}</p>
        <p>{`Origin:${props.character.origin}`}</p>
        <p>{`Episodes:${props.character.episodes}`}</p>
      </article>
      <Link to={"/"}>Volver atrás</Link>
    </>
  );
};

export default CharacterDetail;
