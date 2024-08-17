import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";


// eslint-disable-next-line react/prop-types
const EditarVideo = ({ videos, updateVideo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const videoToEdit = videos.find((video) => video.id === parseInt(id));

  const [titulo, setTitulo] = useState(videoToEdit.titulo);
  const [linkVideo, setLinkVideo] = useState(videoToEdit.linkVideo);
  const [urlImg, setUrlImg] = useState(videoToEdit.urlImg);
  const [generoPelicula, setGeneroPelicula] = useState(videoToEdit.generoPelicula);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!titulo) {
      errors.titulo = "El título es obligatorio";
    }
    if (!linkVideo) {
      errors.linkVideo = "El URL del video es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(linkVideo)) {
      errors.linkVideo = "El URL del video no es válido";
    }
    if (!urlImg) {
      errors.urlImg = "El URL de la imagen es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(urlImg)) {
      errors.urlImg = "El URL de la imagen no es válido";
    }
    if (!generoPelicula) {
      errors.generoPelicula = "El género es obligatorio";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const updatedVideo = {
      id: videoToEdit.id,
      titulo,
      linkVideo,
      urlImg,
      generoPelicula,
    };

    updateVideo(updatedVideo);
    navigate("/");
  };

  return (
    <>
      <section className="form-section">
        <h1 className="titulo-form">EDITAR VIDEO</h1>
        <h2 className="subtitulo-form">
          COMPLETA EL FORMULARIO PARA EDITAR LA TARJETA DE VIDEO
        </h2>
      </section>
      <div>
        <h1 className="titulo-crear">EDITAR TARJETA</h1>
      </div>
      <form onSubmit={manejarEnvio}>
        <div className="campo-section">
          <Campo
            titulo="Título"
            placeholder="Ingrese el título de la película"
            required
            valor={titulo}
            setValor={setTitulo}
            error={errors.titulo}
          />
          <ListaOpciones
            required
            valor={generoPelicula}
            setGenero={setGeneroPelicula}
            error={errors.generoPelicula}
          />
          <Campo
            titulo="URL del video"
            placeholder="Ingrese el URL del video/trailer de la película"
            required
            valor={linkVideo}
            setValor={setLinkVideo}
            error={errors.linkVideo}
          />
          <Campo
            titulo="Imagen"
            placeholder="Ingrese el URL de la imagen"
            required
            valor={urlImg}
            setValor={setUrlImg}
            error={errors.urlImg}
          />
        </div>
        <button className="button-form-save">GUARDAR</button>
      </form>
    </>
  );
};

export default EditarVideo;
