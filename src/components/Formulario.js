import useSelect from "../hooks/useSelect";
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";
import useSelectPais from "../hooks/useSelectPais";
const Formulario = ({ guardarCategoria, guardarPais }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const PAISES = [
    { value: "mx", label: "Mexico" },
    { value: "ae", label: "Emiratos Arabes" },
    { value: "ar", label: "Argentina" },
    { value: "at", label: "Austria" },
    { value: "au", label: "Australia" },
    { value: "be", label: "Bélgica" },
    { value: "co", label: "Colombia" },
    { value: "br", label: "Brasil" },
    { value: "fr", label: "Francia" },
    { value: "us", label: "Estados Unidos" },
    { value: "ma", label: "Marruecos" },
    { value: "ve", label: "Venezuela" },
    { value: "ru", label: "Rusia" },
    { value: "my", label: "Malasia" },
    { value: "hk", label: "Hong Kong" },
  ];

  // utilizar custom hooks
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);
  const [pais, SelectPais] = useSelectPais("mx", PAISES);

  // submit al form, pasara categoria a App.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    // pasar categoria hacia el padre
    guardarCategoria(categoria);
    guardarPais(pais);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2 ">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>
            Encuentra noticias por categorias de varios Paises
          </h2>
          <div className="row">
            <div className="col s6">
              <SelectPais />
            </div>
            <div className="col s6">
              <SelectNoticias />
            </div>
          </div>
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
