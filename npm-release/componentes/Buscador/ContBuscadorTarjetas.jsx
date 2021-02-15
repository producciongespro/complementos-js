import React, { useState } from "react";
import Tarjetas from '../Tarjetas/Tarjetas';
import Buscador from "./Buscador";
import array from "./ej_tabla.json";


const handleObtenerDetalleTarjeta=(i)=> {
  
  console.log("Pos",id);  
  console.log(item[i] );
}


const conf= {
  "img": false, //Si contienes imagenes  img=true
  "col": "sm-4", //Columna boostrap
  "hx": 5, //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
  "titulo": "nombre", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  "descripcion": "tags" //nombre del campo de la descripción
}



export default function ContBusador() {
  const [filtrados, setFiltrados] = useState(array);
  
  const obtenerFiltrados = (f) => {
    setFiltrados(f);
  };



  return (
<div className="container">
<div className="row">
      <div className="col-sm-12">
        <Buscador obtenerFiltrados={obtenerFiltrados} array={array} />
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        {
          filtrados &&
          <Tarjetas handleObtenerDetalleTarjeta={handleObtenerDetalleTarjeta}  conf={conf} array={filtrados} />
        }
      </div>
    </div>
</div>
  );
}