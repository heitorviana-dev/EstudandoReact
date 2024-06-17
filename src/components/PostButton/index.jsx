import './styles.css';

export const PostButton = (props) => {
    const { loadMorePosts } = props;
    return (
        <button className="button" onClick={loadMorePosts}>LoadMorePosts</button>
    )
}