import React from "react";

class Busca extends React.Component {
    render() {
        return (
            <div className="Busca">
                <form method="get" action="#">
                    <input  type="text" placeholder="Pesquise pessoas e publicações"/>
                    <button id="Btn-Busca" type="submit"><i class="fa fa-search"></i></button>

                </form>
                {/* <input id="Busca" type="search" placeholder="Pesquise pessoas e publicações" /> */}
            </div>
        )
    }
}
export default Busca;