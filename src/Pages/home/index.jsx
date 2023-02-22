import React from "react";
import {Link} from 'react-router-dom'
import "./style.scss"

export default function Form() {
  return(

    <div className="body">
    <div className="form">
      <h1 className="formu"> Carros Disponiveis</h1>
      <div>
        <Link to="/modelos" className="models"><button className=" button Botao-consultar">Consulte aqui</button></Link>
      </div>
    </div>
    </div>
  )
}