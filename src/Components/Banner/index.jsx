import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="contenedor-banner">
        <img
          className="banner"
          src="public\img\banner-aluraflix.jpg"
          alt="banner-principal"
        />
        <div className="video-banner">
          <div className="contenerdor-bescripcion">
            <h1 className="genero-destacado">SUPERHEROES</h1>
            <h2 className="titulo-destacado">PELICULA DESTACADA DEL MES</h2>
            <h3 className="pelicula-destacada">DEADPOOL & WOLVERINE</h3>
            <p className="descripcion-destacado">
              Una dupla destinada a salvarnos. Deadpool&Wolverine, estreno 25 de
              julio, solo en cines.
            </p>
          </div>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/BRGBYU7iW1g?si=OKBREa6AomaB-NCP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Banner;
