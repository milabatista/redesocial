import React from "react";
import foto from "../assets/img/testefoto.jpg";
import logo from "../assets/img/Nike-Logo.png";
import menu from "../assets/img/menu.png";
import Busca from "../Components/Busca";


class Headers extends React.Component {
    render() {
        return (
            <header>
                <div className="Box-Perfil">
                    <img className="Foto-Perfil" src={foto} alt="foto-perfil" />
                    <img className="Logo" src={logo} alt="logo" />

                </div>
                <Busca />
                <img className="Menu" src={menu} alt="menu" />
            </header>
        )
    }
}

export default Headers;