import React from "react";
import { useState, useEffect } from "react";
import connection from "../../Components/Api/connection";
import {Link} from 'react-router-dom'

const Car = () => {
  const [ modelos, setModelos] = useState([])

  const getModelos = async () => {
    await connection.get("/modelos")
      .then(resp => {
        setModelos(resp.data)
        console.log(resp.data)
      })
      .catch(err => {
        console.err(err)
      })
  }

  useEffect(() => {
    getModelos()
    console.log(modelos)
 }, []);

  
 return (
  <div className="body">
     <Link to="/" className="models"><button className=" button Botao-voltar">Voltar</button> </Link>
  <div className="list">

    <h1>Lista de Carros</h1>

    <table className="table">
      <thead className="lista">
        <tr>
          <th scope="col" className="th-lista">
            id
          </th>
          <th scope="col" className="th-lista">
            name
          </th>
          <th scope="col" className="th-lista">
          description
          </th>
          <th scope="col" className="th-lista">
          year
          </th>
        </tr>
      </thead>
      <tbody className="lista">
        {
          modelos.map((modelo) => (
            <tr key={modelo.id}>
              <th  className="colum" scope="row">{modelo.id}</th>
              <td className="colum">{modelo.name}</td>
              <td className="colum">{modelo.description}</td>
              <td className="colum">{modelo.year}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  </div>
  </div>
);
}


export default Car;
