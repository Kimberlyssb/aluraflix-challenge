/* eslint-disable react/prop-types */
import Banner from "../Components/Banner";
import Generos from "../Components/Generos";

function Home({ dataCard, deleteVideo }) {
  const generos = [
    {
      id: 1,
      tituloGenero: "ACCIÓN",
      colorPrimario: "#1111e4",
    },
    {
      id: 7,
      tituloGenero: "CIENCIA FICCIÓN",
      colorPrimario: "#2ed30d",
    },
    {
      id: 2,
      tituloGenero: "COMEDIA",
      colorPrimario: "#db5209",
    },
    {
      id: 6,
      tituloGenero: "MUSICALES",
      colorPrimario: "#4813e7",
    },
    {
      id: 4,
      tituloGenero: "ROMANTICA",
      colorPrimario: "#e81b47",
    },
    {
      id: 3,
      tituloGenero: "SUPÉRHEROES",
      colorPrimario: "#cea307",
    },
    {
      id: 5,
      tituloGenero: "TERROR",
      colorPrimario: "#06c8de",
    },
  ];

  return (
    <>
      <Banner />
      {generos.map((genero) => {
        return (
          <Generos
            deleteVideo={deleteVideo}
            datos={genero}
            key={genero.tituloGenero}
            dataCards={dataCard.filter(
              (card) => card.generoPelicula === genero.tituloGenero
            )}
          />
        );
      })}
    </>
  );
}

export default Home;
