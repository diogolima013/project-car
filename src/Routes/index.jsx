import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Modelos from "../Pages/modelos";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/modelos" element={<Modelos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;