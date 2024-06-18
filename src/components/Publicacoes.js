import React from "react";
import foto from "../assets/img/testefoto.jpg";
import fotopublicacao from "../assets/img/publicacao1.jpg";
import Reacoes from "./Reacoes";
import Comentarios from "./Comentarios";

class Publicacoes extends React.Component {
    render() {
        return(
        <div className="publicacao">
            <img className="usuario-foto-publicacao" src={foto} alt="foto-perfil" />
            <h2 className="usuario-publicacao">@helena</h2>
            <p className="texto-publicacao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img className="foto-publicacao" src={fotopublicacao} alt="foto-publicacao"></img>
            <Reacoes />
            <Comentarios />
        </div>
        )
        
    }
}

export default Publicacoes;