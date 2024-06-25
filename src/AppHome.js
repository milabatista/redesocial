import './App.css';
import React from "react";
import Headers from './Inc/Headers';
import Main from './Inc/Main';
import Footers from './Inc/Footers';

class App extends React.Component {
  render() {
    return (
      <>
        <div id="Topo"></div>
        <Headers />
        <Main />
        <Footers />
      </>
    )
  }
}

export default App;
