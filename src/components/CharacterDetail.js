import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <>
      <section className="detailsSection">
        <div className="linkContainer">
          <Link className="linkContainer__link" to={"/"}>
            Go back
          </Link>
        </div>
        <article className="detailsArticle" id={props.character.id}>
          <img
            className="detailsArticle__img"
            src={props.character.image}
            alt={props.character.name}
            title={props.character.name}
          />
          <div>
            <h4 className="detailsArticle__div--name">
              {props.character.name}
            </h4>
            <p className="detailsArticle__div--text">{`Status: ${props.character.status}`}</p>
            <p className="detailsArticle__div--text">{`Species: ${props.character.species}`}</p>
            <p className="detailsArticle__div--text">{`Origin: ${props.character.origin}`}</p>
            <p className="detailsArticle__div--text">{`Episodes: ${props.character.episodes}`}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default CharacterDetail;
