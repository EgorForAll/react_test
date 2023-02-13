import React from "react";
import style from "./style";

let clicks = 0;
const delay = 1000;

class Clickbutton extends React.Component {
  onClickCounter = (evt) => {
    evt.preventDefault();
    setTimeout(function() {
    const clientOutput = document.querySelector('#clientOutput');
    clientOutput.innerHTML = ++clicks;
    }, delay)
    
  }
  render() {
    return (
      <div style={style.wrapper}>
        <button style={style.clickButton} onClick={this.onClickCounter}>КЛИКНУТЬ</button>
        <div style={style.clientCounter}>Кликнули<span style={style.span} id="clientOutput">0</span>раз</div>
        <div style={style.serverCounter}>По версии сервера: раз</div>
      </div>
      
    );
  }
}

const App = () => (
  <div>
    <Clickbutton />
  </div>
);

export default App;
