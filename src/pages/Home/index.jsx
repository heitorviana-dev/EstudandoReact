import { useState, useEffect } from 'react';

import './styles.css';

import { PostsDiv } from '../../components/PostsDiv';
import { loadPosts } from '../../utils/load-posts';
import { PostButton } from '../../components/PostButton';
import { TextInput } from '../../components/TextInput';
import { loadMorePosts } from '../../utils/load-more-posts';

export const Home = () => {
  const [ posts, setPosts ] = useState([]);
  const [ allPosts, setAllPosts ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ postsPerPage ] = useState(2);
  const [ searchValue, setSearchValue ] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue)

    const nextPosts = allPosts.slice(0, page + postsPerPage); //Certo
    if(!e.target.value){
      setPosts(nextPosts);
    }
    else{
      const filterPosts = nextPosts.filter(post => post.title.includes(e.target.value.toLowerCase())); //Certo
      setPosts(filterPosts);
    }
  }

  const handleLoadMorePosts = () => {
    const {morePosts, nextPage} = loadMorePosts(posts, allPosts, page, postsPerPage);
    setPosts(morePosts);
    setPage(nextPage);
  }

  useEffect(() => {
    const fetchData = async() => {
      const postsAndPhotos = await loadPosts();
      setPosts(postsAndPhotos.slice(0, postsPerPage));
      setAllPosts(postsAndPhotos);
    };

    fetchData();
  }, [postsPerPage]);

  return( // O que está dentro do return é jsx, caso você queira usar alguma lógica do js, é necessário usar as {}
    <section className='container'>
      <div className='search-container'>
        <h1>Search Value:</h1>
        <TextInput type="search" value={searchValue} onChange={handleChange}/>
      </div>

      {/* {posts.length > 0 ? (
      <>
        <PostsDiv posts={posts}/>
        <div className="button-container">
          <PostButton loadMorePosts={handleLoadMorePosts}/>
        </div>
      </>
      ) : (
        <h1>Não elementos com esse título.</h1>
      )} */}
      <PostsDiv posts={posts}/>
        <div className="button-container">
          <PostButton loadMorePosts={handleLoadMorePosts}/>
        </div>

    </section>
  );
}