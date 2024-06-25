import React from "react";
import foto from "../assets/img/testefoto.jpg";
import dog from "../assets/img/foto-perfil-dog.webp";
import foto2 from "../assets/img/foto-perfil-2.png";
import foto3 from "../assets/img/foto-perfil-3.png";
import foto4 from "../assets/img/foto-perfil-4.jpg";

class Stories extends React.Component {
    render() {
        return (
            <div className="Stories-Container">
                <button class="Arrow-Left Control" aria-label="Previous image">◀</button>
                <button class="Arrow-Right Control" aria-label="Next Image">▶</button>
                <div className="Gallery-Wrapper">
                    <div className="Gallery">
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={dog} alt="foto-perfil" />
                        <img className="Storie" src={foto3} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto2} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto4} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto3} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto4} alt="foto-perfil" />
                        <img className="Storie" src={foto2} alt="foto-perfil" />

                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={dog} alt="foto-perfil" />
                        <img className="Storie" src={foto3} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto4} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto2} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                        <img className="Storie" src={foto} alt="foto-perfil" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Stories;