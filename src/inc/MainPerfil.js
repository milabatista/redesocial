import React from "react";
import SobreMim from "../Components/SobreMim";
import Publicacoes from "../Components/Publicacoes";
import BotoesFixos from "../Components/BotoesFixos";
import PostsAmigos from "../Components/PostsAmigos";


class Main extends React.Component {
    render() {
        return (
            <main>
                <BotoesFixos />
                <PostsAmigos />
                <SobreMim />
                <Publicacoes />
                <Publicacoes />
                <Publicacoes />
            </main>
        )
    }
}

export default Main;