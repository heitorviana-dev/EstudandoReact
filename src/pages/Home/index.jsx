import './styles.css';
import { Component } from 'react';
import { PostsDiv } from '../../components/PostsDiv';
import { loadPosts } from '../../utils/load-posts';
import { PostButton } from '../../components/PostButton';
import { TextInput } from '../../components/TextInput';
import { loadMorePosts } from '../../utils/load-more-posts';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
      searchValue: ""
    };
  }

  async componentDidMount(){ // É um método usado principalmente na realização de operações assíncronas, como requisição de dados de uma API.
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {posts, nextPage} = loadMorePosts(this.state);
    this.setState({posts, page: nextPage});
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});

    const { allPosts, postsPerPage, page } = this.state;
    const nextPosts = allPosts.slice(0, page + postsPerPage); //Certo
    if(!e.target.value){
      this.setState({ posts: nextPosts });
    }
    else{
      const filterPosts = nextPosts.filter(post => post.title.includes(e.target.value.toLowerCase())); //Certo
      this.setState({ posts: filterPosts });
    }
  }

  render(){
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
      <section className='container'>
        <div className='search-container'>
          <h1>Search Value:</h1>
          <TextInput type="search" value={searchValue} onChange={this.handleChange}/>
        </div>

        {posts.length > 0 ? (
        <>
          <PostsDiv posts={posts}/>
          <div className="button-container">
            <PostButton loadMorePosts={this.loadMorePosts} disabled={noMorePosts}/>
          </div>
        </>
        ) : (
          <h1>Não elementos com esse título.</h1>
        )}
      </section>
    );
  }
}

export default Home;