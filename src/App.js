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

// function App() {
//   return (
//     <html></html>
//     <header>
//       HEADER
//     </header>
//     <main>
//       MAIN
//     </main>
//     <footer>
//       Footer
//     </footer>
//     
//   );
// }

export default App;
