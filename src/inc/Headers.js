import React from "react";
import foto from "../assets/img/testefoto.jpg";
import logo from "../assets/img/Nike-Logo.png";
import Busca from "../Components/Busca";
import Menu from "../Components/Menu";


class Headers extends React.Component {
    render() {
        return (
            <header>
                <div className="Box-Perfil">
                    <img className="Foto-Perfil" src={foto} alt="foto-perfil" />
                    <img className="Logo" src={logo} alt="logo" />

                </div>
                <Busca />
                <Menu/>
            </header>
        )
    }
}

export default Headers;