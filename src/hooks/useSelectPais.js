import { useState } from "react";

const useSelectPais = (stateInicial, opciones) => {
  const [pais, guardarPais] = useState(stateInicial);

  const SelectPais = () => (
    <>
      <h6>País</h6>
      <select
        className="browser-default"
        value={pais}
        onChange={(e) => guardarPais(e.target.value)}
      >
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
    </>
  );

  return [pais, SelectPais];
};

export default useSelectPais;
