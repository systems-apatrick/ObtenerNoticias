import { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [categoria, guardarCategoria] = useState("");

  const selectNoticias = () => (
    <>
      <h6>Categoria</h6>
      <select
        className="browser-default"
        value={categoria}
        onChange={(e) => guardarCategoria(e.target.value)}
      >
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
    </>
  );

  return [categoria, selectNoticias];
};

export default useSelect;
