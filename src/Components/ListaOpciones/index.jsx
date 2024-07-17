/* eslint-disable react/prop-types */
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const generos = [
    "ACCIÓN",
    "CIENCIA FICCIÓN",
    "COMEDIA",
    "MUSICALES",
    "ROMANTICA",
    "SUPÉRHEROES",
    "TERROR",
  ];

  const manejarCambio = (e) => {
    props.setGenero(e.target.value)
  
  }

  return (
    <div className="lista-container">
      <label className="titulo-lista" >Genero de la película*</label>
      <select className="lista-opciones" value={props.valor} onChange={manejarCambio} required={props.required} >
      <option value="" disabled defaultValue="" hidden>Seleccionar genero de pelicula</option>
        { generos.map((genero, index) =>{
            return (<option key={index} value={genero}>{genero}</option>)
        })}
          );
      </select>
    </div>
  );
};

export default ListaOpciones;

