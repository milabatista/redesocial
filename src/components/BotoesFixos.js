import React from "react";
import totop from "../assets/img/totop-icon.png";
import chat from "../assets/img/chat-icon.png";
import explorar from "../assets/img/explorar-icon.png";
import addfeed from "../assets/img/addfeed-icon.png";

class BotoesFixos extends React.Component {
    render() {
        return (
            <div className="Botoes-Fixos">
                <button type="button" className="Btn-Botoes-Fixos"><img className="Botao-Item" src={addfeed} alt="addfeed"/> </button>
                <button type="button" className="Btn-Botoes-Fixos"><img className="Botao-Item" src={explorar} alt="explorar"/></button>
                <button type="button" className="Btn-Botoes-Fixos"><img className="Botao-Item" src={chat} alt="chat"/></button>
                <button type="button" className="Btn-Botoes-Fixos"><img className="Botao-Item" src={totop} alt="totop"/></button>
            </div>
        )
    }
}
export default BotoesFixos;