import React from "react";
import amei from "../assets/img/amei.png";
import comentario from "../assets/img/comentario.png";
import compartilhar from "../assets/img/compartilhar.png";

class Reacoes extends React.Component {
    render(){
        return(
            <div className="reacao">
                <img className="icone-reacao" src={amei} alt="amei"></img>
                <img className="icone-reacao" src={comentario} alt="comentario"></img>
                <img className="icone-reacao" src={compartilhar} alt="compartilhar"></img>
            </div>
        )
    }
}
export default Reacoes;