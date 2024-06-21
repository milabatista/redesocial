import React from "react";
import Stories from "../Components/Stories";
import Publicacoes from "../Components/Publicacoes";
import BotoesFixos from "../Components/BotoesFixos";


class Main extends React.Component {
    render() {
        return (
            <main>
                <BotoesFixos />
                <Stories />
                <Publicacoes />
                <Publicacoes />
                <Publicacoes />
            </main>
        )
    }
}

export default Main;