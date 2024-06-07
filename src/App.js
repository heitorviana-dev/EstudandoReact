import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount(){ // É um método usado principalmente na realização de operações assíncronas, como requisição de dados de uma API.
    const postsAndPhotos = await loadPosts();
    this.setState({posts: postsAndPhotos});
  };


  render(){
    const { posts } = this.state;

    return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
      <section className='container'>
        <div className="posts">
          {
            posts.map((post) => {
              return(
                  <PostCard
                    key={post.id}
                    post={post}
                  />
              );
          })}
        </div>
      </section>
    );
  }
}

export default App;
