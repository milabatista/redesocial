import React from "react";
import foto from "../assets/img/testefoto.jpg";
import logo from "../assets/img/Nike-Logo.png";
import dog from "../assets/img/foto-perfil-dog.webp";

class Stories extends React.Component {
    render() {
        return (
            <div className="stories">
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={dog} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
                <img className="storie" src={foto} alt="foto-perfil" />
            </div>
        )
    }
}

export default Stories;