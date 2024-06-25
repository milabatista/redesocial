import React from "react";

class Busca extends React.Component {
    render() {
        return (
            <div className="Busca">
                <form method="get" action="#" className="Busca">
                    <input  type="text" placeholder="Pesquise pessoas e publicações"/>
                    <button id="Btn-Busca" type="submit"><i className="fa fa-search"></i></button>

                </form>
             </div>
        )
    }
}
export default Busca;