/* eslint-disable react/prop-types */
import Cards from "../Cards";
import "./Generos.css";

const Generos = (props) => {
  const { colorPrimario, tituloGenero } = props.datos;
  const { dataCards, deleteVideo } = props;

  const fondo = {
    backgroundColor: colorPrimario,
  };

  return (
    <section className="section-container">
      <h1 style={fondo} className="titulo-genero">
        {tituloGenero.toUpperCase()}
      </h1>
      <div className="generos-container">
        {dataCards.map((card) => {
          return (
            <Cards
              dataCards={card}
              key={card.titulo}
              colorPrimario={colorPrimario}
              deleteVideo={deleteVideo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Generos;
