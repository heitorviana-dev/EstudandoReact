import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      photos: []
    };
  }

  componentDidMount(){ // É um método usado principalmente na realização de operações assíncronas, como requisição de dados de uma API.
    this.loadPosts();
    this.loadPhotos();
  };

  loadPosts = async() => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    this.setState({posts: await posts.json()});
  }

  loadPhotos = async() => {
    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photosJson = await photosResponse.json();

    this.setState({photos: photosJson});
  }

  render(){
    const { posts, photos } = this.state;

    const listPhotos = photos.map((photo) => {
      return(
        <img key={photo.id} src={photo.url} alt={photo.title}></img>
      );
    });

    const listItems = posts.map((post, index) => {
      return(
          <div key={post.id} className='post'>
            <div className='post-content'>
              {listPhotos[index]}
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
      );
    });

    return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
      <section className='container'>
        <div className="posts">
          {listItems}
        </div>
      </section>
    );
  }
}

export default App;
