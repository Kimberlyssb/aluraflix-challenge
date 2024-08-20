/* eslint-disable react/prop-types */
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { titulo, linkVideo, urlImg, id } = props.dataCards;
  const { colorPrimario, deleteVideo } = props;

  const colorBorde = {
    borderColor: colorPrimario,
    boxShadow: `inset 0em 0em 10px 1px ${colorPrimario}`,
  };

  return (
    <>
      <section className="cards" style={colorBorde}>
        <div className="img-container">
          <a href={linkVideo} target="_blank">
            <img className="img" src={urlImg} style={colorBorde}></img>
          </a>
        </div>
        <h2 className="titulo-card">{titulo.toUpperCase()}</h2>
        <div className="button-cards">
          <button className="button" onClick={() => deleteVideo(id)}>
            <img
              className="delete-icon"
              src="/img/deleteIcon.png"
              alt="delete"
            />
            BORRAR
          </button>
          <button className="button">
            <Link to={`/editar_video/${id}`} className="button">
              <img
                className="edit-icon"
                src="/img/editIcon.png"
                alt="edit"
              />
              EDITAR
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Cards;
