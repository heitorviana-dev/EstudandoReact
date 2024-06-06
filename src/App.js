import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Titulo 1',
          body: 'Corpo 1'
        },
        {
          id: 2,
          title: 'Titulo 2',
          body: 'Corpo 2'
        },
        {
          id: 3,
          title: 'Titulo 3',
          body: 'Corpo 3'
        }
      ],
      counter: 0
    };
    this.timeoutUpdate = null;
  }

  componentDidMount(){ // É um método usado principalmente na realização de operações assíncronas, como requisição de dados de uma API.
    this.handleTimeout();
  };

  componentDidUpdate(prevProps, prevState){
    this.handleTimeout();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
      posts[0].title = "Novo Título";

      this.timeoutUpdate = setTimeout(() => {
        this.setState({ posts, counter: counter + 1 });
      }, 1000);
  };

  render(){
    const { posts, counter } = this.state;

    const listItems = posts.map((value) => {
      return(
        <ul key={value.id}>
          <li>{value.title}</li>
          <li>{value.body}</li>
        </ul>
      );
    });

    return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
      <div className="App">
          <header className="App-header">
            <h1>{ counter }</h1>
            <img src={logo} className="App-logo" alt="logo" />
            
            <ul>{listItems}</ul>

            <button onClick={this.handlePClick}>{}</button>
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
