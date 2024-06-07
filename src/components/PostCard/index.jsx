export const PostCard = (props) => {
    const { post, index, listPhotos } = props;

    return (
        <div className='post'>
            <div className='post-content'>
              {listPhotos[index]}
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        </div>
    );
}