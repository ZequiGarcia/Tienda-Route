import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Button, CenterInfo, theme } from "../estilos-componentes/theme";
import { ThemeProvider } from "styled-components";


//Componente para llamar el nombre del celular seleccionado
const Celulares = () => {
    const { nameCelular } = useParams(); //obtenemos las leyes del segmento dinamico del path
  
    return (
      <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features">
        <h3 className="celular">{nameCelular}</h3>
        <Link to={"details"}>
          <Button><p className="detalles">Ver detalles</p></Button>
        </Link>
        <Outlet />
      </div>
      </ThemeProvider>
      </CenterInfo>
    );
  };

  export default Celulares;
  