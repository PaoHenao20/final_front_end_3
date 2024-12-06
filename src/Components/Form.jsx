import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celNumber, setCelNumber] = useState("");
  const [error, setError] = useState("");

  const regexEspacioInicio = /^[^\s].*/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.length >= 3 &&
      regexEspacioInicio.test(nombre) &&
      apellido.length >= 6 &&
      celNumber.length >= 10
    ) {
      setError("");
    } else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="nombre"
          placeholder="Enter you first name"
          className="color-form-input"
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          id="apellido"
          placeholder="Enter you last name"
          className="color-form-input"
          onChange={(e) => setApellido(e.target.value)}
        />

        <input
          type="tel"
          id="celNumber"
          placeholder="Enter you cel number"
          className="color-form-input"
          onChange={(e) => setCelNumber(e.target.value)}
        />
        <input
          type="text"
          id="celNumber"
          placeholder="Ask your question"
          className="color-form-input"
          onChange={(e) => setCelNumber(e.target.value)}
        />
        <button type="submit" className="color-form-button">
          Submit!
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Form;
