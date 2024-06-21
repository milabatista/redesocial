import React from "react";
import logo from "../assets/img/Nike-Logo.png";
import termoprivacidadeicon from "../assets/img/termoprivacidade-icon.png"


class Footers extends React.Component {
    render() {
        return (
            <footer>
                <div className="Divisor"></div>
                <img className="Logo-Rodape" src={logo} alt="logo" />
                <div className="Termo-Privacidade">
                    <img className="Logo-Privacidade" src={termoprivacidadeicon} alt="termoprivacidadeicon" />
                    <a href="#">Termo de Privacidade</a>
                </div>
            </footer>
        )
    }
}

export default Footers;