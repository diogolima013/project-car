import React from "react";
import {Link} from 'react-router-dom'

export default function Form() {
  return(
    <div className="form">
      <h1 className="formu"> Carros Disponiveis</h1>
      <div>
        <Link to="/modelos" className="models">Consulte aqui!</Link>
      </div>
    </div>
  )
}