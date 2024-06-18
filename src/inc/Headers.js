import React from "react";
import foto from "../assets/img/testefoto.jpg";
import logo from "../assets/img/Nike-Logo.png";
import menu from "../assets/img/menu.png";
import Stories from "../components/Stories";


class Headers extends React.Component {
    render() {
        return (
            <header>
                <img className="logo" src={logo} alt="logo"/>
                <img className="foto-perfil" src={foto} alt="foto-perfil"/>

                <input id="busca" type="search" />
                <img className="menu" src={menu} alt="menu"/>

            </header>
        )
    }
}

export default Headers;