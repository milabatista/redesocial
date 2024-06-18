import React from "react";
import Stories from "../components/Stories";
import Publicacoes from "../components/Publicacoes";


class Main extends React.Component {
    render() {
        return (
            <main>
                <Stories />
                <Publicacoes />
            </main>
        )
    }
}

export default Main;