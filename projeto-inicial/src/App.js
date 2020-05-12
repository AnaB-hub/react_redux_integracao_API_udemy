import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "Aninha",
      email: "ana@gmail.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
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

  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]: target.value 
    })
  }


  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome</label>
            <input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeInput} />
            <label>Email</label>
            <input 
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.changeInput} />
          </form>
          Nome: {this.state.name}
          <br/>
          Email: {this.state.email} 
        </div>
        <div>
          <button onClick={this.changeState}>Mudar nome</button>
          <button onClick={this.resetState}>Resetar nome</button>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
