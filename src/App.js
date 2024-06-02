import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Heitor',
      lastname: 'Viana',
      age: 19,
      count: 0,
    };
  }

  render(){
    const {name, lastname, age, count} = this.state;

    return(
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Meu nome é {name} {lastname}.
              <br></br>
              Tenho {age} anos.
            </p>
            <button onClick={this.handlePClick}>{count}</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }

  handlePClick = () => {
    this.setState({count: this.state.count + 1});
  }
}

export default App;
