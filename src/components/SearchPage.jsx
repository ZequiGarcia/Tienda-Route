import React from "react";
import { Link } from "react-router-dom";
import { BtnLink } from "../estilos-componentes/styles-comp";


const SearchPage = () => {
    const celulares = ["Samsung", "LG", "Xiaomi", "iPhone"];
  
    return (
      
      <div className="features">
        <h2 className="busqueda">Pagina de Busqueda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <Link to={`/celulares/${celular}`}>
                <BtnLink>{celular}</BtnLink>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default SearchPage;