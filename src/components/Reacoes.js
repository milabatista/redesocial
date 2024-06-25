import React from "react";
import amei from "../assets/img/amei.png";
import comentario from "../assets/img/comentario.png";
import compartilhar from "../assets/img/compartilhar.png";

class Reacoes extends React.Component {
    render(){
        return(
            <div className="Reacao">
                <button type="button" className="Btn-Reacao"><img className="Icone-Reacao" src={amei} alt="amei" /></button>
                <button type="button" className="Btn-Reacao"><img className="Icone-Reacao" src={comentario} alt="comentario" /></button>
                <button type="button" className="Btn-Reacao"><img className="Icone-Reacao" src={compartilhar} alt="compartilhar" /></button>
            </div>
        )
    }
}
export default Reacoes;