import React, { Component } from "react";
import cronometro from "./assets/cronometro.png";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      btnVai: "Vai",
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {

    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.btnVai = "Vai";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.btnVai = "Pausar"
    }
    this.setState(state);
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.btnVai = "Vai"
    this.setState(state); 
  }

  render() {
    return (
      <div className="container">
        <img src={cronometro} />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.vai}>
            {this.state.btnVai}
          </a>
          <a className="btn" onClick={this.limpar}>
            Limpar
          </a>
        </div>
      </div>
    );
  }
}

export default App;
