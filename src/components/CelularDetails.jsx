import React from "react";
import { DetailsCont } from "../estilos-componentes/styles-comp";
import { useParams } from "react-router-dom";
import dataCelu from "../data/dataCelu";


//Componente para los detalles del celular seleccionado
const CelularDetails = () => {
    const { nameCelular } = useParams();
    const detalles = dataCelu[nameCelular]; //Hacemos la referencia a la data
  
    return (
      <DetailsCont>
        <h3>Detalles del movil {nameCelular}</h3>
        <h4>Modelo: {detalles.modelo}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descripcion: {detalles.desc}</h4>
      </DetailsCont>
    );
  };
  
  export default CelularDetails;