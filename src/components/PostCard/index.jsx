import './styles.css';

export const PostCard = (props) => {
    const { post } = props;

    return (
        <div className='post'>
            <div className='post-content'>
              <img src={post.cover} alt={post.title} />
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        </div>
    );
}