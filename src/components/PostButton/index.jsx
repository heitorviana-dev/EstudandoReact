import './styles.css';

export const PostButton = (props) => {
    const { loadMorePosts, disabled } = props;
    return (
        <button disabled={disabled} className="button" onClick={loadMorePosts}>LoadMorePosts</button>
    )
}