import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; /*npm i react-router-dom --save */

import Home from "../Pages/Home";
import Perfil from "../Pages/Perfil";
import Privacidade from "../Pages/Privacidade";
import Configuracoes from "../Pages/Configuracoes";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="" exact />
                <Route Component={Perfil} path="/Perfil" />
                <Route Component={Privacidade} path="/Privacidade" />
                <Route Component={Configuracoes} path="/Configuracoes" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;