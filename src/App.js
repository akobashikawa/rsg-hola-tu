import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      name: this.nameInput.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hola Tu</h2>
        </div>
        <div className="App-intro">
          <input type="text" placeholder="Tu nombre"
            ref={input => this.nameInput = input}
            
          />
          <button onClick={this.clickHandler}>Hola</button>

          {this.state.name && (
            <h1>Hola {this.state.name}!</h1>
          )}

        </div>
      </div>
    );
  }
}

export default App;
