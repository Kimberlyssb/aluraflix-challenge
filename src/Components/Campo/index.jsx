/* eslint-disable react/prop-types */
import "./Campo.css";

const Campo = ({ titulo, placeholder, required, valor, setValor, error }) => {
  return (
    <div className="campo">
      <label>
        {titulo}
        {required && <span>*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required={required}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Campo;

