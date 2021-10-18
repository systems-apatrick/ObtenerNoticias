import { useEffect, useState } from "react";
import dotenv from "dotenv";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";
dotenv.config();

function App() {
  const [categoria, guardarCategoria] = useState("general");
  const [pais, guardarPais] = useState("mx");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;
      const resultado = await axios.get(url);
      guardarNoticias(resultado.data.articles);
    };
    consultarAPI();
  }, [categoria, pais]);
  return (
    <>
      <Header title="Bucador de Noticias" />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
          guardarPais={guardarPais}
        />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
