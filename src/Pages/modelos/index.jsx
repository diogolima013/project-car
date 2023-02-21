import React from "react";
import { useState, useEffect } from "react";
import connection from "../../Components/Api/connection";

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
  <div className="form">

    <h1>Lista de Carros</h1>
    <table className="table">
      <thead className="lista">
        <tr>
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
              <th scope="row">{modelo.id}</th>
              <td>{modelo.name}</td>
              <td>{modelo.description}</td>
              <td>{modelo.year}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);
}


export default Car;
