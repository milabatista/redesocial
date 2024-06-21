import React from "react";
import foto from "../assets/img/testefoto.jpg";

class Comentarios extends React.Component {
    render() {
        return (
            <div className="Box-Comentarios">
                <div className="Comentario">
                    <img className="Usuario-Foto-Comentario" src={foto} alt="foto-perfil" />
                    <div className="Texto-Comentario">
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
                <div className="Replica">
                    <img className="Usuario-Foto-Comentario" src={foto} alt="foto-perfil" />
                    <div className="Texto-Comentario">
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Comentarios;