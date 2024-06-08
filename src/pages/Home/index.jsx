import './styles.css';
import { Component } from 'react';
import { PostsDiv } from '../../components/PostsDiv';
import { loadPosts } from '../../utils/load-posts';
import { PostButton } from '../../components/PostButton';
import { loadMorePosts } from '../../utils/load-more-posts';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2
    };
  }

  async componentDidMount(){ // É um método usado principalmente na realização de operações assíncronas, como requisição de dados de uma API.
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  };

  loadMorePosts = () => {
    const {posts, nextPage} = loadMorePosts(this.state);
    this.setState({posts, page: nextPage});
  }

  render(){
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
      <section className='container'>
        <PostsDiv posts={posts}/>
        <div className="button-container">
          <PostButton loadMorePosts={this.loadMorePosts} disabled={noMorePosts}/>
        </div>
      </section>
    );
  }
}

export default Home;