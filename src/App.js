import './App.css';
import React from "react";
import Headers  from './inc/Headers';
import Main from './inc/Main';

class App extends React.Component{
  render(){
    return(
      <>
        <Headers />
        <Main />
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
