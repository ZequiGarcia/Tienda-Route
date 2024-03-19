import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, CenterInfo, invertTheme, theme } from "../estilos-componentes/theme";


const Home = () => {
    return (
      <ThemeProvider theme={theme}>
      <div className="features">
        <h1 className="bien">Bienvenidos</h1>
        <p className="bienP">Somos una tienda online de celulares.</p>
        <CenterInfo>
        <ThemeProvider theme={invertTheme}>
        <Link to={"/search-page"}><Button><p className="vermas">Ver mas</p></Button></Link>
        </ThemeProvider>
        </CenterInfo>
      </div>
      </ThemeProvider>
    );
  };

  export default Home;