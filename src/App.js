import './App.css';
import React from "react";
import HeaderPerfil from './Inc/HeaderPerfil';
import Headers from './Inc/Headers';
import MainPerfil from './Inc/MainPerfil';
import Footers from './Inc/Footers';
import Main from './Inc/Main';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div id="Topo"></div>
        <Headers /> 
        <HeaderPerfil />
        <MainPerfil />*/}
        <div id="Topo"></div>
        <Headers />
        <Main />
        <Footers />
      </>
    )
  }
}

export default App;
