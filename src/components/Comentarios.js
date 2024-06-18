import React from "react";
import foto from "../assets/img/testefoto.jpg";

class Comentarios extends React.Component {
    render() {
        return (
            <div className="box-comentarios">
                <div className="comentario">
                    <img className="usuario-foto-comentario" src={foto} alt="foto-perfil" />
                    <p className="texto-comentario">TESTANDO</p>

                </div>
                <div className="comentario">
                    <img className="usuario-foto-replica" src={foto} alt="foto-perfil" />
                    <p className="texto-replica"></p>
                </div>
            </div>
        )
    }
}
export default Comentarios;