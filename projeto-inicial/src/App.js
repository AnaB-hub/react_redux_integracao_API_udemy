import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "Aninha"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState() {
    this.setState({
      name: "Ana B."
    })
  }

  resetState() {
    this.setState({
      name: "Aninha"
    })
  }


  render() {
    return (
      <div className="App">
        <div>
          {this.state.name}
        </div>
        <div>
          <button onClick={this.changeState}>Mudar nome</button>
          <button onClick={this.resetState}>Resetar nome</button>
        </div>
      </div>
    );
  }
}

export default App;
