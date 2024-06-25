import React from "react";
import foto from "../assets/img/testefoto.jpg";
import logo from "../assets/img/Nike-Logo.png";
import Menu from "../Components/Menu";


class HeaderPerfil extends React.Component {
    render() {
        return (
            <header className="Header-Perfil">
                <div className="Box-Perfil">
                    <img className="Foto-Perfil" src={foto} alt="foto-perfil" />
                    <img className="Logo" src={logo} alt="logo" />

                </div>
                <div className="Username-Perfil">
                    <h1 className="">@helena</h1>
                </div>
                <Menu/>
            </header>
        )
    }
}

export default HeaderPerfil;