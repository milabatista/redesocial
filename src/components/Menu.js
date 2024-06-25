import React from "react";
import menu from "../assets/img/menu.png";

class Menu extends React.Component {
    render() {
        return (
            <div class="Menu">
                <button id="Btn-Menu"><img className="Menu-icon" src={menu} alt="menu" /></button>
                <div class="Menu-Content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        )
    }
}

export default Menu;